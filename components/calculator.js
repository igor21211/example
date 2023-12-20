class Calculator {
  constructor(x, y, action) {
    this.x = x;
    this.y = y;
    this.action = action;
  }

  result() {
    switch (this.action) {
      case "+":
        return this.x + this.y;
      case "-":
        return this.x - this.y;
      case "*":
        return this.x * this.y;
      case "/":
        if (this.y === 0) {
          return "Error divide to zero";
        }
        return this.x / this.y;
      default:
        return "Wrong action";
    }
  }
}

export default Calculator;
