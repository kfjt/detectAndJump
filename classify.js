'use strict';
{
const video = document.querySelector('video');

video.onplaying = (event) => {
    Msg.info = 'Video is no longer paused.';
    Msg.info = 'loading classify model'
    // Load the model.
    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(video).then(predictions => {
            Msg.info = `Predictions: ${predictions}`;
            const queryword = predictions[0].className;
            video.pause();
            Msg.info = ''
            Msg.classify= queryword
            // location.href = `https://www.google.com/search?q=${queryword}`;
        });
    });
};
}