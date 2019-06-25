/*
for (let y = 0; y < 20; y++) {
  for (let x = 0; x < 20; x++) {
    arr[y][x] = 1;
  }
} */

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
const fill2Darray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 9 + 1);
    }
  }
  return arr;
};
const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0 || j === arr[i].length - 1) {
        process.stdout.write('|');
      } else if (i === 0 || i === arr.length - 1) {
        process.stdout.write('_' + '_');
      } else {
        process.stdout.write(' ' + ' '); // arr[i][j]
      }
    }
    console.log();
  }
};

let arr = generate2d(50, 50);
arr = fill2Darray(arr);
print2d(arr);

// console.log(arr);

/* setInterval(() => {

}, 500); */
