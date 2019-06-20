let tomb = [0, 0, 0, 0, 0, 0];
console.log(tomb);
// let temp;

const step = (arr) => {
  let x = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      x = i;
    }
  }

  if (x === -1) {
    arr[0] = 1;
    return arr;
  } else if (x === 0) {
    arr[x] = 0;
    arr[x + 1] = 1;
  } else if (x === arr.length - 1) {
    arr[x] = 0;
  } else if (x > 0) {
    // temp = arr[x];
    arr[x] = 0;
    arr[x + 1] = 1;
  }

  return arr;
};

const walk = (arr) => {
  for (let i = 0; i < arr.length + 1; i++) {
    step(tomb);
    console.log(tomb);
  }
};

const main = () => {
  walk(tomb);
};

main();
