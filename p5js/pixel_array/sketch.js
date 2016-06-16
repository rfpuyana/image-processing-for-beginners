var ax =0;
var ay =0;
function setup() {
   //createCanvas(windowWidth,windowHeight);
   createCanvas(300,300);
   pixelDensity(1);
   background(51);
}

function draw(){
  var b; // brightness
  loadPixels();
  for (var x =0 ; x< width ;x++) {
    for (var y =0 ; y< height ;y++) {
      var pix = (x+y*width)*4 //  find a x,y pixel in the pixel array
       // console.log(y);
        // the pixel array in HTML5 stores R,G,B,A as [0][1][2][3] ...
        // this is why we have these 4 array positions for each channel.
        b =tan(cos(ay/10)+cos(x/ay*ay/10))+sin(ay/1000)/cos(ax/10);
        c =cos(sin(ax/10)+sin(x/ax));
      //  b = cos(sin(x/40)+ay + sin(y/1000)+ax);
      //  ellipse(x,y,10,10);
        //console.log(b);
        pixels[pix+0] = b*255; //R
        pixels[pix+1] = -c*255; //R
        pixels[pix+2] = -c+b*255; //R
        pixels[pix+3] = 255; // A
    }
  }
  updatePixels();
  ax += .1;
  ay += .1;
}
