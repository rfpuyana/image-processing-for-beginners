// Rafael Puyana 2016
// Based on Shiffman's tutorial https://www.youtube.com/watch?v=CQpGhT-RLkM
// Seriously > https://github.com/brianchirls/Seriously.js/
// Make sure the Seriously ls files are in the Library folder as well as the effects.

function setup() {
  var canvas = createCanvas(640,480,WEBGL);
  canvas.id('p5canvas');
  var video = createCapture(VIDEO);
  video.size(640,480);
  video.id('p5video');
  video.hide();
  background(51);
  videoReady();
}

function videoReady(){
  //console.log("VIDEO READY");
  var r =116/255;
  var g =112/255;
  var b =44/255;
  var seriously = new Seriously();
  var target= seriously.target('#p5canvas');
  var chroma = seriously.effect('chroma');
  chroma.source = "#p5video";
  target.source = chroma;
  chroma.screen = [r,g,b,1];
  seriously.go();
}
