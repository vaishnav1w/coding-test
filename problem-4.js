function countMultiples(arr) {
    const result = {};
    for (let i = 1; i <= 9; i++) {
      result[i] = 0; // Initialize count for each number 1 to 9
    }
    
    for (const num of arr) {
      for (let i = 1; i <= 9; i++) {
        if (num % i === 0) {
          result[i]++;
        }
      }
    }
    
    return result;
  }
  
  // Example input
  const inputArr = [1,2,8,9,12,46,76,82,15,20,30];
  console.log(countMultiples(inputArr));
  
  // For user input (comma separated numbers) using readline
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter numbers separated by commas: ', (input) => {
    const arr = input.split(',').map(x => parseInt(x.trim()));
    console.log(countMultiples(arr));
    readline.close();
  });
  