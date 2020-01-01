class Shape {
  get area() {
    return 0;
  }

  get shapeName() {
    const name = Object.getPrototypeOf(this).constructor.name;
    return name;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = r;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }

  get area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(b, h) {
    super();
    this.base = b;
    this.height = h;
  }

  get area() {
    return (this.base * this.height) / 2;
  }
}

const listOfShapes = [
  new Circle(3),
  new Rectangle(2, 3),
  new Triangle(3, 4),
  new Circle(2),
];

listOfShapes.forEach(shape => {
  console.log(`Shape: ${shape.shapeName} - area: ${shape.area}`);
});
