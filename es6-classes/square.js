/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width ** 2, width * 4);
    this.width = width;
  }

  describe() {
    return `Square: ${super.describe()} Width: ${this.width}`;
  }
}

const squareInstance = new Square(4);
console.log('squareInstance description:', squareInstance.describe());
