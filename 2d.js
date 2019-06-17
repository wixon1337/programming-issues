// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

// let k = generate2d(3, 3);
// console.log(k);

const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

// print2d(k);

const fill2Darray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 10 + 1);
    }
  }
  return arr;
};

let tomb = [[4, 5], [2, 1], [9, 0]];
console.log(fill2Darray(tomb));

const sum2DArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
};

console.log(sum2DArray(tomb));

const max2dArray = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
      }
    }
  }
  return max;
};

console.log(max2dArray(tomb));
