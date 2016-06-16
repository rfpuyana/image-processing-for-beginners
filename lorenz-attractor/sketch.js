// built based on Shiffman's https://www.youtube.com/watch?v=f0lkz2gSsIk for Processingp5.Vector


var x = 0.01;
var y = 0.01;
var z = 0.01;

var a = 10;
var b = 28;
var c =8/3;

var h = 0;
var ang = 0;
var points = [];
function setup() {
  createCanvas(640,480);
  colorMode(HSB);
}

function rotateCamera(){
  //rotateZ(ang++);
}
function draw() {
  rotateCamera();
  background(0,0,20);
  //
  a = a + random(-.3,.3);
  b = b + random(-.3,.3);
  c = c + random(-.3,.3);


  var dt = 0.01;
  var dx = (a * (y - x))*dt;
  var dy = (x * (b - z) - y)*dt;
  var dz = ((x * y) - (c * z))*dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  translate(width/2,height/2,height/2);
  scale(5);
  strokeWeight(.3);

  noFill();
  var v = createVector(x,y,z);
  append(points,v);
  beginShape();
    for(var v in points){
      stroke(255,100,100);
      curveVertex(points[v].x,points[v].y,points[v].z);
      //h += 0.01;
      //if (h > 255){h=0};
    }
  endShape();

}
