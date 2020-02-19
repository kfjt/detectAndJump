'use strict';
{
const video = document.querySelector('video');
// const canvas = document.querySelector('canvas');

video.onplaying = (event) => {
    Msg.info = 'loading classify model'
    mobilenet.load().then(model => {
        Msg.info = 'loaded classify model'
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