const diff = (arr1, arr2) => {
  let min = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (min > arr1[i]) {
      min = arr1[i];
    }
  }
  let max = arr2[0];
  for (let i = 0; i < arr2.length; i++) {
    if (max < arr2[i]) {
      max = arr2[i];
    }
  }
  console.log('Min:', min, 'Max:', max);
  let diff = max - min;
  if ((max - min) < 0) {
    diff = diff * -1;
  }
  return diff;
};

let tomb1 = [9, 8, 7, 6, 10];
let tomb2 = [3, 4, 2, 3, 12];
// console.log(diff(tomb1, tomb2));

// legkisebb 2ve oszt, legnagyobb 3al oszt
const diffOszthato = (arr1, arr2) => {
  let min;
  /*  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      min = arr1[i];
    }
  } */
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0 && min === undefined) {
      min = arr1[i];
    }
    if (arr1[i] % 2 === 0 && min > arr1[i]) {
      min = arr1[i];
    }
  }

  let max;
  /*  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 === 0) {
      max = arr2[i];
    }
  } */
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 === 0 && max === undefined) {
      max = arr2[i];
    }
    if (arr2[i] % 3 === 0 && max < arr2[i]) {
      max = arr2[i];
    }
  }
  console.log('Min:', min, 'Max:', max);

  let diff = max - min;
  if ((max - min) < 0) {
    diff = diff * -1;
  }
  return diff;
};

// console.log(diffOszthato(tomb1, tomb2));

const harmadikleg = (arr) => {
  let d;
  let max = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        d = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = d;
      }
    }
  }
  console.log(arr);
  console.log('tomb nagysag:', arr.length);
  max = arr[Math.floor(arr.length * 0.8) - 1];

  return max;
};

let tomb3 = [10, 5, 3, 4, 1, 6, 7, 8, 9, 2, 11, 12, 13];
console.log(harmadikleg(tomb3));
