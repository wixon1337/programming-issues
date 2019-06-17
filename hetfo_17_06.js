const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

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
      arr[i][j] = Math.floor(Math.random() * 3 + 1);
    }
  }
  return arr;
};

let tomb = generate2d(20, 20);
// console.log(fill2Darray(tomb));
// print2d(fill2Darray(tomb));

const elsoFeladat = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 2 && arr[i][j - 1] === 1 && arr[i][j + 1] === 3) {
        sum++;
      }
    }
  }
  if (sum > 0) {
    return 'Van (vizszintes 123): ' + sum;
  } else {
    return 'Nincs';
  }
};

// console.log(elsoFeladat(tomb));

const masodikFeladat = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i >= 2) {
        if (arr[i][j] === 3 && arr[i - 1][j] === 2 && arr[i - 2][j] === 1) {
          sum++;
        }
      }
    }
  }
  if (sum > 0) {
    return 'Van (fülggőleges 123): ' + sum;
  } else {
    return 'Nincs';
  }
};

// console.log(masodikFeladat(tomb));

const harmadikFeladat = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i >= 2) {
        if (arr[i][j] === 3 && arr[i - 1][j] === 2 && arr[i - 1][j - 1] === 1) {
          sum++;
        }
      }
    }
  }
  if (sum > 0) {
    return 'Van (fülggőleges 12 alatta 3): ' + sum;
  } else {
    return 'Nincs';
  }
};

// console.log(harmadikFeladat(tomb));

const poli = (str) => {
  let str2 = '';
  let str1 = '';
  for (let i = str.length; i >= 0; i--) {
    if (str.charAt(i) !== ',' && str.charAt(i) !== '.' && str.charAt(i) !== ' ') {
      str2 += str.charAt(i);
    }
  }
  for (let i = str2.length; i >= 0; i--) {
    if (str2.charAt(i) !== ',' && str2.charAt(i) !== '.' && str2.charAt(i) !== ' ') {
      str1 += str2.charAt(i);
    }
  }
  /* console.log(str1);
  console.log(str2); */
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

let s = 'Géza, kék az ég.';
// console.log(poli(s));

const cezar = (str, int) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + int) > 122) {
      console.log('nagyobb');
    } else {
      process.stdout.write(String.fromCharCode(str.charCodeAt(i) + int));
    }
  }
};

let s2 = 'abcdz';
cezar(s2, 1);

let z = 'z';
let a = 'a';
console.log();
console.log(z.charCodeAt(0));
console.log(a.charCodeAt(0));
