<script>
	import { onDestroy, onMount } from 'svelte';
	import { Socket } from 'phoenix';
	import { Button, TabItem, Select, Tabs, Fileupload, Label } from 'flowbite-svelte';
	import { PHX_WS_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	/** @type {import('./$types').PageData} */
	export let data;
	let channel,
		value,
		mediaStream = null,
		screenChannel,
		channelData = {},
		cameras = [],
		selected,
		localVideo,
		remoteVideo,
		peerConnection,
		endpoint,
		count = 0,
		isStopped = true,
		animationId;
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
				width: { ideal: 1280 },
				height: { ideal: 800 }
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
			let stream_width = stream_settings.width;
			let stream_height = stream_settings.height;

			let canvas = document.createElement('canvas');
			canvas.width = stream_width; // Set the desired width
			canvas.height = stream_height;
			const context = canvas.getContext('2d');

			const sendFrame = () => {
				setTimeout(() => {
					count = count + 1;
					console.log(count);
					context.drawImage(localVideo, 0, 0, canvas.width, canvas.height);
					const imageData = canvas.toDataURL('image/jpeg');
					if (isStopped == false) {
						channel.push('frame', { data: imageData });
					}

					animationId = requestAnimationFrame(sendFrame);
				}, 2000);
			};
			sendFrame();
		} else {
			console.log('not join yet');
		}
	}
	const stopStream = () => {
		cancelAnimationFrame(animationId);
		isStopped = true;
		// websocket.close();
		// Optionally, stop the video stream as well
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

<Label>
	Select an option
	<Select class="mt-2" items={cameras} bind:value={selected} />
</Label>
<Tabs>
	<TabItem open title="Local">
		<video style="width: 100%;" id="local-stream" autoplay muted />
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
