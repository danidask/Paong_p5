function Hook(startX) {
  
  this.x = startX;
  this.startY = height - 10;
  this.y = this.startY;
  this.speed = 10;

  this.show = function() {
    stroke(150);
    strokeWeight(4);
    line(this.x, this.startY, this.x, this.y);
  }

  this.move = function() {
    this.y -= this.speed;
  }
}