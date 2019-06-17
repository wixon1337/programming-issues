/* let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
arr[0] = 10;
console.log(arr);
console.log('Tömb mérete:', arr.length);
arr.push(100);
console.log(arr);
let x = arr.pop();
console.log(x);

for (let i = 0; i < arr.length; i++) {
  arr[i] = 0;
}
console.log(arr);

let a = Math.random();
console.log(a); */

let generateArray = (size) => {
  let tomb = [];
  for (let i = 0; i < size; i++) {
    tomb[i] = Math.floor(Math.random() * 10 + 1);
  }
  return tomb;
};

let arr = generateArray(5);
console.log(arr);

let sumArray = (arr) => {
  let osszeg = 0;
  for (let i = 0; i < arr.length; i++) {
    osszeg += arr[i];
  }
  return osszeg;
};

console.log('Összeg: ', sumArray(arr));

let multArray = (arr) => {
  let osszeg = 1;
  for (let i = 0; i < arr.length; i++) {
    osszeg *= arr[i];
  }
  return osszeg;
};

console.log('Szorzat: ', multArray(arr));

let countElement = (szam, tomb) => {
  let elofordulasSzam = 0;
  for (let i = 0; i < tomb.length; i++) {
    if (szam === tomb[i]) {
      elofordulasSzam++;
    }
  }
  return elofordulasSzam;
};

console.log('Ennyiszer van 2es: ', countElement(2, arr));

const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('Max: ', maxArray(arr));

const minArray = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log('Min: ', minArray(arr));

const containsElement = (x, tomb) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
};

console.log('Van e benne 3-as? ', containsElement(3, arr));

const indexOfElement = (x, tomb) => {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return i;
    }
  }
  return -1;
};

console.log('Keresett elem (4) indexe: ', indexOfElement(4, arr));

const copy2xArray = (arr) => {
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    b[i] = arr[i] * 2;
  }
  return b;
};

console.log('Tömb duplázva: ', copy2xArray(arr));

const parosArray = (arr) => {
  let arr2 = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr2[j] = arr[i];
      j++;
    }
  }
  return arr2;
};

console.log('Paros szamok a tömben: ', parosArray(arr));

const szetvalogatasArray = (arr, Paros, Paratlan) => {
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      Paros[j] = arr[i];
      j++;
    } else {
      Paratlan[k] = arr[i];
      k++;
    }
  }
};

let Paros = [];
let Paratlan = [];
szetvalogatasArray(arr, Paros, Paratlan);
console.log('Páros:', Paros, 'Páratlan: ', Paratlan);

const metszetArray = (arr, arr2) => {
  let metszet = [];
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        metszet[k] = arr[i];
        k++;
        break;
      }
    }
  }
  return metszet;
};

let tomb1 = [1, 3, 4, 5, 6];
let tomb2 = [3, 5, 11];
console.log('Metszet:', metszetArray(tomb1, tomb2));
