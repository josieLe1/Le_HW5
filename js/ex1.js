class Square {
  constructor (side) {
      this.side = side;
  }
  calcPerimeter() {
    return this.side * 4;
  }
  calcArea() {
    return this.side * this.side;
  }
  calcDiagonal() {
    return (Math.sqrt(this.side * this.side + this.side * this.side)).toFixed(3);
  }
  describe () {
    return `Square with side ${this.side} has perimeter of ${this.calcPerimeter()}, area of ${this.calcArea()}, and diagonal of ${this.calcDiagonal()} `
  }
}

const squares = [];

squares[0] = new Square(7);
squares[1] = new Square(8);
squares[2] = new Square(9);

squares.forEach(square => {
  console.log(square.describe());
})


