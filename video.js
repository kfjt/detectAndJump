'use strict';

{
const video = document.querySelector('video');

Msg.info = 'Initializing'

if (!confirm('This site uses a camera')) {
  throw new Error('Permission required to use camera');
}

const media = navigator.mediaDevices.getUserMedia({
  audio: false,
  video: { facingMode: "environment" }
});

media.then(function(stream) {
  Msg.info = 'stream start'
  video.srcObject = stream;
  video.onloadedmetadata = function(e) {
    video.play();
    Msg.info = 'playing video';
  };
})
.catch(error =>Msg.error = `getUserMedia error: ${error}`);
}
