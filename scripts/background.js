let img;
var canvas;

function preload(){
  img = loadImage('source/howitworks_bg.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  img.resize(windowWidth, 0);
}
  
function draw() {
  img.loadPixels();
  
  background(255);

  let cols = 4;

  for (let y = 0; y < img.height; y += cols) {
  for (let x = 0; x < img.width; x += cols) {

    // Get the index of the current pixel in the video pixel array
    let index = (x + y * img.width) * 4;
    
    // Extract the color components (red, green, blue) from the pixel
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    
    // Calculate the brightness of the pixel
    let brightnessValue = (r + g + b) / 3;
    
    // Map the brightness value to the size of the circle
    let circleSize = map(brightnessValue, 255, 0, 0, cols-cols*2.2);
    
    // Draw a circle at the pixel location with size based on brightness

    noStroke();
    fill(217, 217, 217);

    ellipse(x, y, circleSize, circleSize);
  }
  }



  for (let y = 2; y < img.height; y += cols*2) {
    for (let x = 2; x < img.width; x += cols*2) {
  
      // Get the index of the current pixel in the video pixel array
      let index = (x + y * video.width) * 4;
      
      // Extract the color components (red, green, blue) from the pixel
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      // Calculate the brightness of the pixel
      let brightnessValue = (r + g + b) / 3;
      
      // Map the brightness value to the size of the circle
      let circleSize = map(brightnessValue, 255, 0, 0, cols-cols*2);
      
      // Draw a circle at the pixel location with size based on brightness
      noStroke();
      fill(217, 217, 217);

      ellipse(x, y, circleSize, circleSize);
    }
    }
  }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}