'use strict';

const img = document.querySelector('video');

video.onplaying = (event) => {
    console.log('Video is no longer paused.');
    // Load the model.
    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
            console.log('Predictions: ');
            console.log(predictions);
            const queryword = predictions[0].className;
            location.href = `https://www.google.com/search?q=${queryword}`;
        });
    });
};
