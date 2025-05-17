// Function to generate first 'a' odd numbers
function generateOddNumbers(a) {
    const result = [];
    for(let i = 0; i < a; i++) {
      result.push(2 * i + 1);
    }
    return result.join(", ");
  }
  
  // For user input using readline (Node.js)
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', (a) => {
    console.log(generateOddNumbers(parseInt(a)));
    readline.close();
  });
  