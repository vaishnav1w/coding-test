function generateOddNumbersProblem3(a) {
    // If a is even, reduce by 1, else keep as is
    const count = a % 2 === 0 ? a - 1 : a;
  
    const result = [];
    for(let i = 0; i < count; i++) {
      result.push(2 * i + 1);
    }
    return result.join(", ");
  }
  
  // User input with readline
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', (a) => {
    console.log(generateOddNumbersProblem3(parseInt(a)));
    readline.close();
  });
  