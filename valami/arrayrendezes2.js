const masodikv = (array) => {
  let kezdetiHossz = array.length;
  for (let i = 1; i <= kezdetiHossz; i++) {
    console.log(tomb);
    tomb.pop();

    /* process.stdout.write('[');
    process.stdout.write(array.toString());
    process.stdout.write(']\n');
    array.pop(); */
  }
};

const elsov = (array) => {
  let kezdetiHossz = array.length;
  let tomb = [];
  for (let i = 0; i < kezdetiHossz; i++) {
    tomb.push(array[i]);
    console.log(tomb);
  }
};

let draw = (array, callback) => {
  return callback(array);
};

let tomb = [1, 2, 3, 4, 5, 6];

draw(tomb, elsov);
draw(tomb, masodikv);
