export default class DirectionGenerator {
  constructor(rad) {
    this.step = rad
    this.current = 0
  }

  changeRad(rad) {
    this.step = rad
  }

  next() {
    this.current = this.current + this.step
    return this.current
  }
}