let img;
let stripeSize = 10;

function preload(){
  // img = loadImage('assets/fashion-trash.jpeg')
  img = loadImage('assets/Jennifers-Body-Banner.jpg');
}

function setup() {
  createCanvas(400, 400);
  frameRate(3)
    // noLoop();

}

function draw() {
  background(220);
  image(img, 0, 0, 400, 400);
  
  loadPixels();
  for(let y = 0; y < img.height; y += stripeSize){
    randYPos = int(random(0, img.height - stripeSize));
    stripe = img.get(0, randYPos, img.width, stripeSize);
    // img.set(0, y, stripe);
    image(stripe, 0, y, width, stripeSize);
  }
  // updatePixels();
}
