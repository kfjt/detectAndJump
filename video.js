'use strict';

{
const video = document.querySelector('video');

Msg.info = 'Initializing'

if (!confirm('This site uses a camera')) {
  throw new Error('Permission required to use camera');
}

navigator.mediaDevices.getUserMedia({video: { facingMode: "environment" }})
.then(stream => {
  Msg.info = 'stream start';
  video.setAttribute('playsinline', '');
  video.srcObject = stream;
})
.catch(error => Msg.error = `getUserMedia error: ${error}`);

video.addEventListener('loadedmetadata', video.play);
}