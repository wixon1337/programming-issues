let read = require('readline-sync');

let szotar = ['kecske', 'barany', 'macska', 'cica',
  'kutya', 'majom', 'vereb', 'galamb', 'pingvin', 'medve', 'farkas', 'roka'];

let szotar2 = ['barany'];

let rszam = Math.floor(Math.random() * szotar.length) + 1;
let szo = szotar[rszam - 1];
let life = Math.floor(szo.length / 2);

let tomb = szo.split('');
let tomb2 = [];

for (let i = 0; i < tomb.length; i++) {
  tomb2[i] = '_';
}
console.log(tomb2);

let test = (arr, arr2, kulcs, int) => {
  let db = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === kulcs) {
      arr2[i] = arr[i];
      db++;
    }
  }
  if (db === 0) {
    int--;
  }
  return int;
};

let lifeTest = (arr, arr2, int) => {
  console.log(arr);
  console.log(arr2);
  if (arr === arr2) {
    int--;
  }
  return int;
};

let vegetest = (arr) => {
  let db = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '_') {
      db++;
    }
  }
  return db;
};

while (true) {
  let key = read.keyIn('Mondj egy betűt, ami szerinted benne van. Nyomj q-t a kilépéshez \n');
  if (key === 'q') {
    break;
  } else {
    // let eredeti = tomb2;
    life = test(tomb, tomb2, key, life);
    // let valtoztatott = tomb2;
    //  lifeTest(eredeti, valtoztatott, life);
    console.log('Életed: ', life);
    if (vegetest(tomb2) === 0) {
      console.log(tomb2);
      console.log('Nyertél bazdmeg!');
      break;
    }
  }
  if (life === 0) {
    console.log('Elfogyott az életed! kcsög');
    break;
  }
  console.log(tomb2);
}
