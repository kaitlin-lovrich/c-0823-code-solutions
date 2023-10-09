/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(3.14 * radius ** 2, 2 * 3.14 * radius);
    this.radius = radius;
  }

  describe() {
    return `Circle: ${super.describe()}, Radius: ${this.radius}`;
  }
}

const circleInstance = new Circle(6);
console.log('circleInstance description:', circleInstance.describe());
