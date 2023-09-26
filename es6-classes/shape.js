/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
  }
}

const shapeInstance = new Shape(50, 100);
console.log('shapeInstance description:', shapeInstance.describe());
