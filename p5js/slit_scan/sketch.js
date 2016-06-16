// Based on Shiffman's tutorial on SlitScan

var video;
var captureW = 320;
var captureH = 240;
var pxCol;
var x=0;
var pxDensity = 1;

function setup() {
  background(51);
  createCanvas(windowWidth,240);
  video = createCapture(VIDEO);
  video.size(320,240);
  video.hide();
  noFill();
  stroke(255);
}

function draw() {
  video.loadPixels(); // This line avoids the js error about not being able to load the width property. Thanks to Shiffman
  x+=pxDensity;
  pxCol = copy(video,320/2,0,pxDensity,240,x,0,pxDensity,240);
  if(x > windowWidth){
    x=0;
  }
}
