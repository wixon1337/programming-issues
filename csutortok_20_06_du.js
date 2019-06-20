let readLine = require('readline-sync');

const szamologep = (callback, int, int2) => {
  return callback(int, int2);
};

const add = (int, int2) => {
  return int + int2;
};

const sub = (int, int2) => {
  return int - int2;
};

const mult = (int, int2) => {
  return int * int2;
};

const div = (int, int2) => {
  if (int2 === 0) {
    console.log('Nulllával nem osztunk bástya.');
  } else {
    return int / int2;
  }
};

const rem = (int, int2) => {
  return int % int2;
};

const szamBeker = (str, str2) => {
  let x = readLine.question(str);
  while (isNaN(x) === true) {
    x = readLine.question(str2);
  }
  return x;
};

const funcBeker = () => {
  let x = readLine.question('Add meg a müveletet: + - * / vagy % ');
  while (x !== '+' && x !== '-' && x !== '*' && x !== '/' && x !== '%') {
    x = readLine.question('Mondom müveletet: + - * / vagy % ');
  }
  return x;
};

const main = () => {
  let a = Number(szamBeker('Add meg az első számot!: ', 'MONDOM SZÁMOT!'));
  let b = Number(szamBeker('Add meg az második számot!: ', 'MONDOM SZÁMOT!'));
  let func = funcBeker();
  switch (func) {
    case '+': console.log(szamologep(add, a, b));
      break;
    case '-': console.log(szamologep(sub, a, b));
      break;
    case '*': console.log(szamologep(mult, a, b));
      break;
    case '/': console.log(szamologep(div, a, b));
      break;
    case '%': console.log(szamologep(rem, a, b));
      break;
  }
};

main();
