const masodikv = (array) => {
  let szamSoronkent = 1;
  // process.stdout.write('hello: ');
  // process.stdout.write('hello: ');
  let s = '';
  for (let i = 0; i < array.length; i++) {
    if (i + 1 == szamSoronkent) {
      s += ']\n[';
      szamSoronkent++;
      i = 0;
    }
    s += array[i] + ', ';
    // if (i + 1 == szamSoronkent) s += '\n';
  }

  console.log(s);
  /*
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < szamSoronkent; j++) {
      console.log(array[i]);
      szamSoronkent++;
    }
  }
  */
};

let draw = (array, callback) => {
  return callback(array);
};

let tomb = [1, 2, 3, 4, 5, 6];

draw(tomb, masodikv);
