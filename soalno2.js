function patternA(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += i;
      }
      console.log(line);
    }
  }
  
  function patternB(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = i; j >= 1; j--) {
        line += j;
      }
      console.log(line);
    }
  }
  
  function patternC(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = i; j < i + i; j++) {
        line += j;
      }
      console.log(line);
    }
  }
  
  function patternD(n) {
        let matrix = [];
        let count = 1;
      
        // Inisialisasi matriks dengan urutan angka berturut-turut
        for (let i = 0; i < n; i++) {
          matrix[i] = [];
          for (let j = 0; j < n; j++) {
            matrix[i][j] = count++;
          }
        }
      
        // Modifikasi matriks untuk menciptakan pola zigzag
        for (let i = 0; i < n; i++) {
          if (i % 2 !== 0) {
            matrix[i].reverse();
          }
        }
      
        // Cetak hasil matriks
        for (let i = 0; i < n; i++) {
          console.log(matrix[i].join(' '));
        }
      
  }
  
  const n = 5;
  console.log('Pattern A:');
  patternA(n);
  console.log('\nPattern B:');
  patternB(n);
  console.log('\nPattern C:');
  patternC(n);
  console.log('\nPattern D:');
  patternD(n);
  