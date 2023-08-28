<script>
	import { onDestroy, onMount } from 'svelte';
	import { Socket } from 'phoenix';
	import { Button, TabItem, Tabs, Fileupload, Label } from 'flowbite-svelte';
	import { PHX_WS_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	/** @type {import('./$types').PageData} */
	export let data;
	let channel,
		value,
		mediaStream = null,
		screenChannel,
		channelData = {},
		localVideo,
		remoteVideo,
		peerConnection,
		videoInput,
		localMusicVideo,
		remoteStream,
		endpoint = 'localhost:8512';

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
		await guestConnect();
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
	function createPeerConnection(stream, isGuest) {
		console.log('this is guest? ' + isGuest);
		console.log('creating peer connection');
		let pc = new RTCPeerConnection({
			iceServers: [
				//  'stun:stun.stunprotocol.org'
				// Information about ICE servers - Use your own!
				{
					urls: ['stun:webrtc.damienslab.com', 'stun:localhost:3487']
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
		localVideo = document.getElementById('local-stream');
		var videoElement = document.getElementById('localMusicVideo');

		var localStream = videoElement.mozCaptureStream(); // check for browser

		setVideoStream(localVideo, localStream);
		console.log('guest connect create peer connection');
		peerConnection = await createPeerConnection(localStream, true); // send stream data to receiver?
	}
	async function connect() {
		localVideo = document.getElementById('local-stream');

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
			// this will display receiveer's stream... on the remote-stream
			await peerConnection.createOffer().then((offer) => {
				console.log('call offered!');
				peerConnection.setLocalDescription(offer);
				pushPeerMessage('video-offer', offer);
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
			console.log('receive remote when offer is not null  ');
			if (peerConnection != null) {
				console.log('receive remote when offer and peer con is not null');
				let remoteDescription = new RTCSessionDescription(offer);
				
				peerConnection.setRemoteDescription(remoteDescription).then(() => {
				// by this line, the ontrack should fire liao...
					console.log('set remote desci !');
				});
			}
		}
	}

	async function answerCall(offer) {
		if (offer != null) {
			await receiveRemote(offer);
// in between the remote stream nned to add track o... 
			var answer = await peerConnection.createAnswer();
			console.log('asnwer created!');
			console.log(answer);
			peerConnection
				.setLocalDescription(answer)
				.then(() => pushPeerMessage('video-answer', peerConnection.localDescription));
		}
	}
	onMount(() => {
		localVideo = document.getElementById('local-stream');

		videoInput = document.getElementById('videoInput');
		localMusicVideo = document.getElementById('localMusicVideo');
		remoteVideo = document.getElementById('remote-stream');
		remoteStream = new MediaStream();

		setVideoStream(remoteVideo, remoteStream);
		console.log(data);
		endpoint = data.endpoint;

		const socket = new Socket(PHX_WS_PROTOCOL + endpoint + '/socket');
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
					// log('candidate: ', message.content);
					let candidate = new RTCIceCandidate(message.content);
					if (peerConnection != null) {
						peerConnection.addIceCandidate(candidate).catch(reportError);
					}
					break;
				case 'disconnect':
					disconnect();
					break;
				default:
					console.log('has errors');
				// reportError('unhandled message type')(message.type);
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

<div class="flex flex-col sm:grid grid-cols-12">
	<div class="col-span-12 sm:col-span-8">
		<video style="width: 100%;" id="remote-stream" controls autoplay />
	</div>
	<div class="col-span-4">
		<video style="width: 100%;" id="local-stream" autoplay muted />

		<video style="width: 100%;" id="localMusicVideo" controls autoplay />
	</div>
</div>

<section class="">
	<div>
		<Label class="space-y-2 mb-2">
			<span>Upload file</span>
			<Fileupload bind:value id="videoInput" />
		</Label>
	</div>

	<div class="flex gap-4">
		<Button
			on:click={() => {
				playMedia();
			}}>Play</Button
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
	</div>
</section>
