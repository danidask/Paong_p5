var bubble = [];
var hook;

function setup() {
  createCanvas(640, 480);

  bubble[0] = new Bubble(100, height - 400, false, 3, false);
  bubble[1] = new Bubble(200, height - 400, false, 3, false);
  bubble[2] = new Bubble(width / 2, height - 400, false, 3, false);
  bubble[3] = new Bubble(width - 100, height - 400, true, 3, false);
  bubble[4] = new Bubble(width - 200, height - 400, true, 3, false);
}

function draw() {
  background(235);

  //rect(0, 0, width, height);

  for (var i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }

  if (hook) {
    hook.move();
    hook.show();
    checkhook();
  }

}

function checkhook() {
  if (hook.y < 0) { //if hits the top, destroy
    hook = null;
    return;
  }
  for (var i = 0; i < bubble.length; i++) {


    if (abs(bubble[i].x - hook.x) < bubble[i].radious && bubble[i].y + bubble[i].radious > hook.y) {
      hook = null;
      if (bubble[i].bbsize > 1) {
        bubble.push(new Bubble(bubble[i].x + (bubble[i].radious / 2), bubble[i].y, true, bubble[i].bbsize - 1, true));
        bubble.push(new Bubble(bubble[i].x - (bubble[i].radious / 2), bubble[i].y, false, bubble[i].bbsize - 1, true));
      }
      bubble.splice(i, 1);
      return;
    }
  }
}

function mousePressed() {
  hook = new Hook(mouseX);
}