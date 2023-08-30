<script>
	import { onDestroy, onMount } from 'svelte';
	import { Socket } from 'phoenix';
	import {
		Button,
		Listgroup,
		ListgroupItem,
		Avatar,
		TabItem,
		Input,
		Select,
		Tabs,
		Fileupload,
		Label
	} from 'flowbite-svelte';
	import { PHX_WS_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	/** @type {import('./$types').PageData} */
	export let data;
	let channel,
		value,
		width = 1020,
		height = 900,
		mediaStream = null,
		screenChannel,
		channelData = {},
		cameras = [],
		candidates = [],
		selected,
		localVideo,
		remoteVideo,
		peerConnection,
		endpoint,
		count = 0,
		isStopped = true;
	let animationId = 0;
	let imageUrl = 'http://' + PHX_ENDPOINT + '/images/uploads/test1.jpg';

	function refreshImage() {
		// Generate a unique identifier (timestamp) to force image reload
		const uniqueId = Date.now();
		imageUrl = `path/to/your/image.png`;
		imageUrl = 'http://' + PHX_ENDPOINT + `/images/uploads/test1.jpg?${uniqueId}`;
	}
	function updateChannelData(payload) {
		console.log(payload);
		candidates = payload.candidates;
		channelData = { channelData, ...payload };
	}
	function log() {
		console.log(...arguments);
	}

	let mediaSource,
		videoTrack,
		selectedVideo,
		isJoined = false;
	function setVideoStream(videoElement, stream) {
		videoElement.srcObject = stream;
	}

	function addCamera(val) {
		cameras = [...cameras, val];
	}

	function gotDevices(mediaDevices) {
		console.log(mediaDevices);
		let count = 1;
		mediaDevices.forEach((mediaDevice) => {
			if (mediaDevice.kind === 'videoinput') {
				// const option = document.createElement('option');
				// option.value = mediaDevice.deviceId;
				addCamera({ value: mediaDevice.deviceId, name: mediaDevice.label || `Camera ${count++}` });
				// const label = ;
				// const textNode = document.createTextNode(label);
				// option.appendChild(textNode);
				// select.appendChild(option);
			}
		});
	}

	async function connect() {
		console.log('issue to start plate');
		channel.push('start-plate', {});
		isStopped = false;
		localVideo = document.getElementById('local-stream');
		let facingMode = 'environment';
		let selectedCam = cameras.filter((v, i) => {
			return v.value == selected;
		});

		if (selectedCam) {
			selectedCam[0].name.includes('back') ? (facingMode = 'environment') : (facingMode = 'user');
		}

		console.log(facingMode);

		var localStream = await navigator.mediaDevices.getUserMedia({
			audio: true,

			video: {
				facingMode: facingMode,
				deviceId: selected,
				width: { ideal: 1000 },
				height: { ideal: 1000 }
			}
		});

		setVideoStream(localVideo, localStream);
		if (isJoined) {
			console.log('joined');
			// channel.on('frame', (frameData) => {
			// 	context.drawImage(localVideo, 0, 0, canvas.width, canvas.height);
			// 	const jpegData = canvas.toDataURL('image/jpeg');

			// 	channel.push('frame', { data: jpegData });
			// });

			let stream_settings = localStream.getVideoTracks()[0].getSettings();
			let stream_width = width;
			let stream_height = height;
			localVideo.width = stream_width;
			localVideo.height = stream_height;
			let canvas = document.createElement('canvas');
			canvas.width = stream_width; // Set the desired width
			canvas.height = stream_height;
			const context = canvas.getContext('2d');

			const sendFrame = () => {
				if (!isStopped) {
					setTimeout(() => {
						count = count + 1;
						console.log(count);
						context.drawImage(localVideo, 0, 0, canvas.width, canvas.height);
						const imageData = canvas.toDataURL('image/jpeg');
						if (isStopped == false) {
							channel.push('frame', { data: imageData });
						}
						console.log('animation id ');
						if (animationId) {
							cancelAnimationFrame(animationId);
						}

						animationId = requestAnimationFrame(sendFrame);
						console.log(animationId);
					}, 2000);
				}
			};
			sendFrame();
		} else {
			console.log('not join yet');
		}
	}
	const stopStream = () => {
		console.log('issue to stop plate');
		channel.push('stop-plate', {});
		cancelAnimationFrame(animationId);
		isStopped = true;
		// websocket.close();
		// Optionally, stop the video stream as well
		localVideo = document.getElementById('local-stream');
		const stream = localVideo.srcObject;

		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			localVideo.srcObject = null;
		}
	};

	onMount(async () => {
		navigator.mediaDevices.enumerateDevices().then(gotDevices);
		// localVideo = document.getElementById('local-stream');
		endpoint = data.endpoint;
		console.log('mounting');
		// how to know if its a production env?
		const socket = new Socket(PHX_WS_PROTOCOL + endpoint + '/socket');
		socket.connect();
		var topic = 'support:' + 'lobby';
		// Join the topic
		channel = socket.channel(topic, {});

		channel
			.join()
			.receive('ok', (data) => {
				isJoined = true;
				console.log('Joined topic', topic);
			})
			.receive('error', (resp) => {
				console.log('Unable to join topic', topic);
			});

		channel.on('plate_results', (payload) => {
			console.log(payload);
			// var results = JSON.parse(payload.body);
			updateChannelData(payload);
			// console.log(results)
		});
	});

	onDestroy(() => {
		if (channel) {
			channel
				.leave()
				.receive('ok', (resp) => {
					console.log('Left the channel', resp);
				})
				.receive('error', (resp) => {
					console.log('Error leaving the channel', resp);
				});
		}
	});
</script>

<div class="flex justify-between">
	<Label>
		Select an option
		<Select class="mt-2" items={cameras} bind:value={selected} />
	</Label>
	<Label>
		Height
		<Input class="mt-2" bind:value={height} />
	</Label>
	<Label>
		Width
		<Input class="mt-2" bind:value={width} />
	</Label>
</div>

<Tabs>
	<TabItem open title="Local">
		<video style="width: 100%;" id="local-stream" autoplay muted />
	</TabItem>
	<TabItem title="History">
		<img src={imageUrl} />
		<Button on:click={refreshImage}>Refresh Image</Button>
	</TabItem>
</Tabs>

<section>
	<Button
		on:click={() => {
			connect();
		}}>Connect</Button
	>
	<Button
		on:click={() => {
			stopStream();
		}}>Stop</Button
	>
</section>
<Listgroup active class="w-48">
	<h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">Plate list</h3>
	{#each candidates as candidate}
		<ListgroupItem class="text-base font-semibold gap-2">
			{candidate.plate} <small>({candidate.confidence})</small>
		</ListgroupItem>
	{/each}
</Listgroup>
