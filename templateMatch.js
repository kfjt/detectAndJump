'use strict';

const loadOpenCv = (onloadCallback) => {
  const script = document.querySelector('#opencvjs');
  script.addEventListener('load', () => {
    if (cv.getBuildInformation)
    {
      // console.log(cv.getBuildInformation());
      Msg.info = 'loading module opencv'
      onloadCallback();
    }
    else
    {
      // WASM
      cv['onRuntimeInitialized']=()=>{
        // console.log(cv.getBuildInformation());
        Msg.info = 'loading module opencv wasm'
        onloadCallback();
      }
    }
  });
}

const loadImageToCanvas = (url, cavansId) => {
  let canvas = document.getElementById(cavansId);
  let ctx = canvas.getContext('2d');
  let img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    canvas.style.display = 'none';
  };
  img.src = url;
};

const templateMatch = () => {
  const src = cv.imread('imageCanvasInput');
  const templ = cv.imread('templateCanvasInput');
  const dst = new cv.Mat();
  const mask = new cv.Mat();
  cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
  const result = cv.minMaxLoc(dst, mask);
  const maxPoint = result.maxLoc;
  const color = new cv.Scalar(255, 0, 0, 255);
  const point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
  cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
  cv.imshow('canvasOutput', src);
  src.delete(); dst.delete(); mask.delete();
}

loadOpenCv(() => {});
loadImageToCanvas('6.jpg', 'templateCanvasInput');
// document.querySelector('video').addEventListener('loadeddata', templateMatch);
