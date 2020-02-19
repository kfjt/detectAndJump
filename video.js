'use strict';

{
const video = document.querySelector('video');

Msg.info = 'Initializing'

const constraints = window.constraints = {
  audio: false,
  video: { facingMode: "environment" }
};

if (!confirm('This site uses a camera')) {
  throw new Error('Permission required to use camera');
}

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  Msg.info = 'stream start'
  const videoTracks = stream.getVideoTracks();
  Msg.info = `Using video device: ${videoTracks[0].label}`;
  stream.onremovetrack = function() {
    Msg.info = 'Stream ended';
  };
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
  video.onloadedmetadata = function(e) {
    Msg.info = 'playing video ...'
    video.play();
    Msg.info = 'playing video'
  };
})
.catch(function(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    Msg.error = 'The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.width.exact + ' px is not supported by your device.';
  } else if (error.name === 'PermissionDeniedError') {
    Msg.error = 'Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.';
  }
  Msg.error = `getUserMedia error: ${error.name}, ${error}`;
});
}
