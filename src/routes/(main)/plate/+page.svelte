<script>
	import { onDestroy, onMount } from 'svelte';
	import { Socket } from 'phoenix';
	import { Button, TabItem, Tabs, Fileupload, Label } from 'flowbite-svelte';
	import { PHX_WS_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	/** @type {import('./$types').PageData} */
	export let data;
	let channel,
		value,
		videoInput = document.getElementById('videoInput'),
		localMusicVideo = document.getElementById('localMusicVideo'),
		mediaStream = null,
		screenChannel,
		channelData = {},
		localVideo,
		remoteVideo,
		peerConnection,
		remoteStream = new MediaStream(),
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

	async function connect() {
		isStopped = false;
		localVideo = document.getElementById('local-stream');
		var localStream = await navigator.mediaDevices.getUserMedia({
			audio: true,

			video: { facingMode: 'user' }
		});

		setVideoStream(localVideo, localStream);
		if (isJoined) {
			console.log('joined');
			// channel.on('frame', (frameData) => {
			// 	context.drawImage(localVideo, 0, 0, canvas.width, canvas.height);
			// 	const jpegData = canvas.toDataURL('image/jpeg');

			// 	channel.push('frame', { data: jpegData });
			// });

			let canvas = document.createElement('canvas');
			canvas.width = 1000; // Set the desired width
			canvas.height = 1000; // Set the desired height

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

	onMount(() => {
		localVideo = document.getElementById('local-stream');
		endpoint = data.endpoint;
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
