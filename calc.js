let calc = (callback, ...params) => {
  if (params.length == 1) {
    return callback(params[0]);
  } else if (params.length == 2) {
    return callback(params[0], params[1]);
  } else if (params.length == 3) {
    return callback(params[0], params[1], params[2]);
  }
};

let korKerulet = (a) => {
  return 2 * a * 3.14;
};

let korTerulet = (a) => {
  return a * a * 3.14;
};

let haromszogKerulet = (...params) => {
  if (params.length < 3) {
    return 'Hiányzik adat.';
  }
  if (params[0] > (params[1] + params[2]) || params[1] > (params[0] + params[2]) || params[2] > (params[0] + params[1])) {
    return 'Ez nem háromszög.';
  } else {
    return params[0] + params[1] + params[2];
  }
};

let haromszogTerulet = (a, b) => {
  return (a * b) / 2;
};

let teglalapKerulet = (...params) => {
  if (params.length == 1) {
    return 4 * params[0];
  } else if (params.length == 2) {
    return (2 * (params[0] + params[1]));
  }
};

let teglalapTerulet = (...params) => {
  if (params.length == 1) {
    return (params[0] * params[0]);
  } else if (params.length == 2) {
    return (params[0] * params[1]);
  }
};

let teglatestFelszin = (...params) => {
  if (params.length == 1) {
    return params[0] * params[0] * 6;
  } else if (params.length == 3) {
    return 2 * ((params[0] * params[1]) + (params[0] * params[2]) + (params[1] * params[2]));
  }
};

let teglatestTerfogat = (...params) => {
  if (params.length == 1) {
    return (params[0] * params[0] * params[0]);
  } else if (params.length == 3) {
    return (params[0] * params[1] * params[2]);
  }
};

let gombFelszin = (a) => {
  return (4 * 3.14 * a * a);
};

let gombTerfogat = (a) => {
  return (4 / 3 * 3.14 * a * a * a);
};

let x = 3;
let y = 4;
let z = 5;

/* calc(korTerulet, x);
calc(korKerulet, x);
calc(haromszogKerulet, x, y, z);
calc(haromszogTerulet, x, y);
calc(teglalapKerulet, x);
calc(teglalapKerulet, x, y);
calc(teglalapTerulet, x);
calc(teglalapTerulet, x, y);
calc(teglatestFelszin, x);
calc(teglatestFelszin, x, y, z);
calc(teglatestTerfogat, x);
calc(teglatestTerfogat, x, y, z);
calc(gombFelszin, y);
calc(gombTerfogat, y); */

console.log(calc(korKerulet, x));
console.log(calc(haromszogKerulet, 3, 1, 1));
console.log(calc(haromszogKerulet, 3, 1));
console.log(calc(teglatestFelszin, x, y, z));
