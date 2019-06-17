const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mult = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

const operation = (a, b, t) => {
  return t(a, b);
};

console.log(operation(1, 2, add));
console.log(operation(1, 2, sub));
console.log(operation(1, 2, mult));
console.log(operation(1, 2, div));
