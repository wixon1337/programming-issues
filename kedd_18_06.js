/* let readline = require('readline-sync');
let name = readline.question('What\'s your name?');
console.log('Hello', name);
 */
/* while (true) {
  let key = readline.keyIn('Press a key, \'q\' to exit!');
  console.log('You pressed', key);
  if (key === 'q') {
    break;
  }
} */

/* let stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', (key) => {
  console.log('You pressed', key);
  if (key === 'q') {
    process.exit();
  }
}); */

// console.log('Kiscica');

/* setInterval(() => {
  console.log('Nagycica');
}, 100); */

/* let time = 1000;
const fun = () => {
  if (time > 0) {
    time -= 100;
    console.log(time);
    setTimeout(fun, time);
  } else {
    console.log('Time is up!');
  }
};

fun(); */

/* const counter = (count) => {
  console.log(count);
  if (count === 0) {
    return 0;
  } else {
    count -= 1;
    counter(count);
  }
};

counter(10); */

/* const arrMin = (index, arr) => {
  if (index === 1) return arr[0];
  return Math.min(arr[index], arrMin(index - 1, arr));
};

let tomb = [1, 5, 2, 4, -10];
console.log(arrMin(tomb.length - 1, tomb)); */

/* const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(6));

for (let i = 0; i <= 10; i++) {
  process.stdout.write(fibo(i) + ' ');
}
 */

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2d = (arr) => {
  let num = 0;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] = num++;
    }
  }
};

let tomb = generate2d(5, 5);
fill2d(tomb);
// console.log(tomb);
let table = require('table');
let out = table.table(tomb);
// console.log(out);

const contains = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (element === arr[i][j]) {
        return true;
      }
    }
  }
  return false;
};

// console.log(contains(13, tomb));

/* const smallestDifference = (arr1, arr2) => {
  let diff = Math.abs(arr1[0] - arr2[0]);
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if ((Math.abs(arr1[i] - arr2[j])) < diff) {
        diff = Math.abs(arr1[i] - arr2[j]);
        arr3 = [ arr1[i], arr2[j] ];
      }
    }
  }
  console.log(Math.abs(diff));
  return arr3;
};

let tomb1 = [5, 3, 2, 10];
let tomb2 = [12, 8, 14, 19];
console.log(smallestDifference(tomb1, tomb2)); */

/* const permuatation = (arr) => {
    let arr2 = [];
    for (let i = 0; i< 6; i++){
        if (arr)
    }
};

const permet = (n) => {

    n*permet(n-1);
};

let tomb3 = [1, 2, 3];
console.log(permuatation(tomb3)); */

let tomb5 = [1, 3, 2, 1];

const stepSum = (arr) => {
  console.log(arr);
  if (arr.length === 2) {
    return [arr[0] + arr[1]];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] += arr[i + 1];
  }
  arr.pop();
  return stepSum(arr);
};

// console.log(stepSum(tomb5));

const stepSum1 = (arr) => {
  if (arr.length === 2) {
    arr = ([(arr[0] + arr[1])]);
  }
  if (arr.length > 2) {
    let tomb = [];
    for (let i = 0; i < arr.length - 1; i++) {
      tomb.push(arr[i] + arr[i + 1]);
    }
    stepSum1(tomb);
  }
  console.log(arr);
};

stepSum1(tomb5);
