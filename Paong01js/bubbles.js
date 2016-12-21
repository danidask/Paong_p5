function Bubble(startX, startY, startdirX) {
  this.x = startX;
  this.y = startY;
  this.dirX = startdirX;
  this.dirY = 1;
  this.radious = 16;
  this.speed = 0;
  this.acceleration = 0;
  this.maxspeed = 8;
  this.horizontalspeed = 1;

  this.move = function() {
    this.speedchange();
    if (this.dirX) this.x += this.horizontalspeed;
    else this.x -= this.horizontalspeed;
    if (this.dirY) this.y += this.speed;
    else this.y -= this.speed;
    this.checkboundaries();
  }

  this.show = function() {
    noStroke();
    fill(0, 255, 0);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.radious, this.radious);
  }

  this.speedchange = function() {
    this.acceleration += 0.01;
    if (this.dirY && this.speed < this.maxspeed) {
      this.speed += this.acceleration;
    } else if (!this.dirY) {
      this.speed -= this.acceleration;
    }
    if (this.speed < 0) {
      this.speed = 0;
      this.acceleration = 0;
      this.dirY = true;
    }
  }

  this.checkboundaries = function() {
    if (!this.dirX && this.x < this.radious) this.dirX = true;
    else if (this.dirX && this.x > width - this.radious) this.dirX = false;
    if (this.dirY && this.y > height - this.radious) {
      this.dirY = false;
      this.acceleration = 0;
    }
  }

}