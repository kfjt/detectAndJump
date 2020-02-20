'use strict';

{
const video = document.querySelector('video');
const canvas = document.querySelector('#imageCanvasInput');
const canvasReplaceVideo = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  video.style.display = 'none';
}
const drawFrame = () => {
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);
  templateMatch()
  requestAnimationFrame(drawFrame);
}

video.setAttribute('playsinline', '');
video.addEventListener('loadedmetadata', video.play);
video.addEventListener('loadedmetadata', canvasReplaceVideo);
video.addEventListener('loadeddata', drawFrame);

Msg.info = 'Initializing';

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