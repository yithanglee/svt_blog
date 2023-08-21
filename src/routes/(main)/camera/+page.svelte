<script>
	import { onDestroy, onMount } from 'svelte';
	import { Socket } from 'phoenix';
	import { Button, TabItem, Tabs, Fileupload, Label } from 'flowbite-svelte';

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
		remoteStream = new MediaStream();
	let endpoint = 'localhost:8512';

  
	function log() {
		console.log(...arguments);
	}
	let mediaSource, videoTrack, selectedVideo;

	async function playMedia() {
		videoInput = document.getElementById('videoInput');
		localMusicVideo = document.getElementById('localMusicVideo');
		if (mediaStream) {
			mediaStream.getTracks().forEach((track) => track.stop());
		}

		if (videoInput.files.length === 0) {
			console.error('No video selected.');
			return;
		}

		const selectedVideo = videoInput.files[0];
		const videoBlob = new Blob([selectedVideo], { type: selectedVideo.type });
		let NUM_CHUNKS = 1;

		try {
			mediaSource = new MediaSource();

			localMusicVideo.src = window.URL.createObjectURL(mediaSource);

			mediaSource.addEventListener(
				'sourceopen',
				function () {
					var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');

					var chunkSize = Math.ceil(videoBlob.size / NUM_CHUNKS);
					var i = 0;

					(function readChunk_(i) {
						// eslint-disable-line no-shadow
						var reader = new FileReader();

						// Reads aren't guaranteed to finish in the same order they're started in,
						// so we need to read + append the next chunk after the previous reader
						// is done (onload is fired).
						reader.onload = function (e) {
							sourceBuffer.appendBuffer(new Uint8Array(e.target.result));
							log('Appending chunk: ' + i);
							if (i === NUM_CHUNKS - 1) {
								sourceBuffer.addEventListener('updateend', function () {
									if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
										mediaSource.endOfStream();
									}
								});
							} else {
								if (localMusicVideo.paused) {
									localMusicVideo.play(); // Start playing after 1st chunk is appended.
								}
								readChunk_(++i);
							}
						};

						var startByte = chunkSize * i;
						var chunk = videoBlob.slice(startByte, startByte + chunkSize);

						reader.readAsArrayBuffer(chunk);
					})(i); //
				},
				false
			);
		} catch (error) {
			console.error('Error playing video:', error);
		}
	}

	function setVideoStream(videoElement, stream) {
		videoElement.srcObject = stream;
	}

	function unsetVideoStream(videoElement) {
		if (videoElement.srcObject) {
			videoElement.srcObject.getTracks().forEach((track) => track.stop());
		}
		videoElement.removeAttribute('src');
		videoElement.removeAttribute('srcObject');
	}
	function createPeerConnection(stream) {
		let pc = new RTCPeerConnection({
			iceServers: [
				//  'stun:stun.stunprotocol.org'
				// Information about ICE servers - Use your own!
				{
					urls: ['stun:localhost:3487']
				}
			]
		});
		pc.ontrack = handleOnTrack;
		pc.onicecandidate = handleIceCandidate;
		stream.getTracks().forEach((track) => pc.addTrack(track));

		return pc;
	}
	function handleOnTrack(event) {
		console.log('track on...');
		remoteStream.addTrack(event.track);
	}
	function handleIceCandidate(event) {
		if (!!event.candidate) {
			pushPeerMessage('ice-candidate', event.candidate);
		}
	}
	async function guestConnect() {
		var videoElement = document.getElementById('localMusicVideo');
		var localStream = videoElement.mozCaptureStream(); // check for browser

		setVideoStream(localVideo, localStream);
		peerConnection = createPeerConnection(localStream);
	}
	async function connect() {
		localVideo = document.getElementById('local-stream');
		remoteVideo = document.getElementById('remote-stream');
		var localStream = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: true
		});
		setVideoStream(localVideo, localStream);
		peerConnection = createPeerConnection(localStream);
	}
	function disconnect() {
		if (peerConnection != null) {
			unsetVideoStream(localVideo);
			unsetVideoStream(remoteVideo);
			remoteStream = new MediaStream();
			setVideoStream(remoteVideo, remoteStream);
			peerConnection.close();
			peerConnection = null;

			pushPeerMessage('disconnect', {});
		}
	}
	async function call() {
		if (peerConnection != null) {
			let offer = await peerConnection.createOffer().then((o) => {
				console.log('offered!');
				peerConnection.setLocalDescription(o);
				pushPeerMessage('video-offer', o);
			});
		} else {
			console.log('Camera not setup yet!');
		}
	}

	function pushPeerMessage(type, content) {
		channel.push('peer-message', {
			body: JSON.stringify({
				type,
				content
			})
		});
	}
	function receiveRemote(offer) {
		console.log('receive remote');
		if (offer != null) {
			if (peerConnection != null) {
				let remoteDescription = new RTCSessionDescription(offer);
				console.log('set remote desci');
				peerConnection.setRemoteDescription(remoteDescription);
			}
		}
	}

	async function answerCall(offer) {
		if (offer != null) {
			receiveRemote(offer);
			let answer = await peerConnection.createAnswer();
			peerConnection
				.setLocalDescription(answer)
				.then(() => pushPeerMessage('video-answer', peerConnection.localDescription));
		}
	}
	onMount(() => {
		localVideo = document.getElementById('local-stream');
		remoteVideo = document.getElementById('remote-stream');
		remoteStream = new MediaStream();
		setVideoStream(remoteVideo, remoteStream);
		console.log(data);
		endpoint = data.endpoint;
		const socket = new Socket('ws://' + endpoint + '/socket');
		socket.connect();
		var topic = 'support:' + 'lobby';
		// Join the topic
		channel = socket.channel(topic, {});
		channel
			.join()
			.receive('ok', (data) => {
				console.log('Joined topic', topic);
			})
			.receive('error', (resp) => {
				console.log('Unable to join topic', topic);
			});

		channel.on('peer-message', (payload) => {
			var message = JSON.parse(payload.body);
			switch (message.type) {
				case 'video-offer':
					log('offered: ', message.content);
					answerCall(message.content);
					break;
				case 'video-answer':
					log('answered: ', message.content);
					receiveRemote(message.content);
					break;
				case 'ice-candidate':
					log('candidate: ', message.content);
					let candidate = new RTCIceCandidate(message.content);
					if (peerConnection != null) {
						peerConnection.addIceCandidate(candidate).catch(reportError);
					}
					break;
				case 'disconnect':
					disconnect();
					break;
				default:
					reportError('unhandled message type')(message.type);
			}
		});

		var screenChannel = socket.channel(topic + '_screen', {});
		screenChannel
			.join()
			.receive('ok', (data) => {
				console.log('Joined topic', topic + '_screen');
			})
			.receive('error', (resp) => {
				console.log('Unable to join topic', topic + '_screen');
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
		if (screenChannel) {
			screenChannel
				.leave()
				.receive('ok', (resp) => {
					console.log('Left the screen channel', resp);
				})
				.receive('error', (resp) => {
					console.log('Error leaving the screen  channel', resp);
				});
		}
	});
</script>

<Tabs>
	<TabItem open title="Remote">
		<video style="width: 100%;" id="remote-stream" controls autoplay />

		<video style="width: 100%;" id="local-stream" autoplay muted />

		<video style="width: 100%;" id="localMusicVideo" controls autoplay />
		<Label class="space-y-2 mb-2">
			<span>Upload file</span>
			<Fileupload bind:value id="videoInput" />
		</Label>
		<Label>File: {value}</Label>
		<Button
			on:click={() => {
				playMedia();
			}}>Play</Button
		>
	</TabItem>
</Tabs>

<section>
	<Button
		on:click={() => {
			guestConnect();
		}}>Guest Connect</Button
	>

	<Button
		on:click={() => {
			call();
		}}>Call</Button
	>
	<Button
		on:click={() => {
			connect();
		}}>Connect</Button
	>
	<Button
		on:click={() => {
			disconnect();
		}}>Disconnect</Button
	>
</section>
