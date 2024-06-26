function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 12 === 0) {
        console.log("OKYES")
      } else if (i % 3 === 0) {
        console.log("Ok")
      } else if (i % 4 === 0) {
        console.log("YES")
      } else {
        console.log(i);
      }
    }
  }
  
  // Misalkan n adalah 20
  printNumbers(15)
  