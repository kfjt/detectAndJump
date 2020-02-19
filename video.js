'use strict';

{
const video = document.querySelector('video');
video.setAttribute('playsinline', '');
video.autoplay = true;

Msg.info = 'Initializing'

if (!confirm('This site uses a camera')) {
  throw new Error('Permission required to use camera');
}

navigator.mediaDevices.getUserMedia({video: { facingMode: "environment" }})
.then(stream => {
  Msg.info = 'stream start';
  video.srcObject = stream;
})
.catch(error => Msg.error = `getUserMedia error: ${error}`);
}