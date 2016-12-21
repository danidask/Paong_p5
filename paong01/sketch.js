var bubble = [];

function setup() {
  createCanvas(640, 480);
  for (var i = 0; i < 4; i++) {
    bubble[i] = new Bubble(i * 80 + 80, 60, 1);
  }
}

function draw() {
  background(235);

  //rect(0, 0, width, height);

  for (var i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }





}