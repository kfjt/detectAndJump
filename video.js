'use strict';

{
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');

Msg.info = 'Initializing'

if (!confirm('This site uses a camera')) {
  throw new Error('Permission required to use camera');
}

navigator.mediaDevices.getUserMedia({video: { facingMode: "environment" }})
.then(stream => {
  Msg.info = 'stream start'
  video.srcObject = stream
})
.catch(error => Msg.error = `getUserMedia error: ${error}`);

const drawFrame = () => {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(video, 0, 0)
  requestAnimationFrame(drawFrame)
}

video.addEventListener('loadedmetadata', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  video.style.display = 'none';
});
video.addEventListener('loadedmetadata', () => {
  Msg.info = 'video play'
  video.play();
});
video.addEventListener('loadeddata', drawFrame)
}