let tomb = [0, 0, 0, 0];

const egyMoz = (arr) => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 1;
    console.log(arr);
    arr[i] = 0;
  }
  console.log(arr);
};

const main = () => {
  egyMoz(tomb);
};

main();
