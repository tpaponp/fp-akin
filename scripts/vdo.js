let video;
var canvas;

function preload(){
  video = createCapture(VIDEO);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');

    video.size(width, height);
    video.hide();

    noStroke();
    fill(217, 217, 217);
    
  }
  
function draw() {
  video.loadPixels();
  background(255);

  let cols = 4;

  for (let y = 0; y < video.height; y += cols) {
  for (let x = 0; x < video.width; x += cols) {

    // Get the index of the current pixel in the video pixel array
    let index = (x + y * video.width) * 4;
    
    // Extract the color components (red, green, blue) from the pixel
    let r = video.pixels[index];
    let g = video.pixels[index + 1];
    let b = video.pixels[index + 2];
    
    // Calculate the brightness of the pixel
    let brightnessValue = (r + g + b) / 3;
    
    // Map the brightness value to the size of the circle
    let circleSize = map(brightnessValue, 255, 0, 0, cols-cols*2.4);
    ellipse(x, y, circleSize, circleSize);
  }
  }

  for (let y = 2; y < video.height; y += cols*2) {
    for (let x = 2; x < video.width; x += cols*2) {
  
      // Get the index of the current pixel in the video pixel array
      let index = (x + y * video.width) * 4;
      
      // Extract the color components (red, green, blue) from the pixel
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      // Calculate the brightness of the pixel
      let brightnessValue = (r + g + b) / 3;
      
      // Map the brightness value to the size of the circle
      let circleSize = map(brightnessValue, 255, 0, 0, cols-cols*2);
      
      // Draw a circle at the pixel location with size based on brightness
      ellipse(x, y, circleSize, circleSize);
    }
    }



  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}