export default class Point {
  constructor(x, y, size = 1) {
    this.x = x;
    this.y = y;
    this.size = size
  }

  addX(amount) {
    this.x += amount * this.size
  }

  addY(amount) {
    this.y += amount * this.size
  }

  zoom(size) {
    this.size = size;
  }

  turn(rad, amount) {
    this.addX(amount * Math.cos(rad))
    this.addY(amount * Math.sin(rad))
  }
}

