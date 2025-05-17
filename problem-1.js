class Calculator {
    constructor(a, b, operation) {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.operation = operation.toLowerCase();
    }
  
    calculate() {
      switch (this.operation) {
        case 'addition':
          return this.a + this.b;
        case 'subtraction':
          return this.a - this.b;
        case 'multiplication':
          return this.a * this.b;
        case 'division':
          if (this.b === 0) {
            return "Error: Division by zero is not allowed.";
          }
          return this.a / this.b;
        default:
          return "Error: Invalid operation. Please choose addition, subtraction, multiplication, or division.";
      }
    }
  }
  
  // User Input
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the first number: ', (a) => {
    readline.question('Enter the second number: ', (b) => {
      readline.question('Enter the operation (addition, subtraction, multiplication, division): ', (operation) => {
        const calc = new Calculator(a, b, operation);
        console.log(`Result: ${calc.calculate()}`);
        readline.close();
      });
    });
  });
  