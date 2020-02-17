'use strict';
{
const video = document.querySelector('video');
const classifyElement = document.querySelector('#classifyMsg');


video.onplaying = (event) => {
    console.log('Video is no longer paused.');
    // Load the model.
    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(video).then(predictions => {
            console.log('Predictions: ');
            console.log(predictions);
            const queryword = predictions[0].className;
            video.pause();
            classifyElement.innerHTML = queryword
            // location.href = `https://www.google.com/search?q=${queryword}`;
        });
    });
};
}