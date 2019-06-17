let step01 = 'right';
let step02 = 'up';

let steps = ['right'];

// let steps = ['right', 'up'];

let number0 = 0;
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 5;
let number6 = 6;
let number7 = 7;
let number8 = 8;

let texturalNumber0 = 'ez a nullás mező';
let texturalNumber1 = 'ez az egyes mező';
let texturalNumber2 = 'ez a kettes mező';
let texturalNumber3 = 'ez a hármas mező';
let texturalNumber4 = 'ez a négyes mező';
let texturalNumber5 = 'ez az ötös mező';
let texturalNumber6 = 'ez a hatos mező';
let texturalNumber7 = 'ez a hetes mező';
let texturalNumber8 = 'ez a nyolcas mező';
let texturalNumberX = 'X';

let pos = number4;
// console.log(texturalNumber4, '(', number4, ')');

function walk (firstStep, secondStep) {
  // let tomb = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

  // const kettolepes = (tomb) => {
  //  let pos = number4;
  // };
  switch (firstStep) {
    case 'left': pos = number3;
      break;
    case 'right': pos = number5;
      break;
    case 'up': pos = number1;
      break;
    case 'down': pos = number7;
      break;
  }
  if (pos == number3) {
    // console.log(texturalNumber3, '(', number3, ')');
    switch (secondStep) {
      case 'left': pos = texturalNumberX; console.log(texturalNumberX);
        break;
      case 'right': pos = number4; console.log(texturalNumber4, '(', number4, ')');
        break;
      case 'up': pos = number0; console.log(texturalNumber0, '(', number0, ')');
        break;
      case 'down' : pos = number6; console.log(texturalNumber6, '(', number6, ')');
        break;
    }
  }
  if (pos == number1) {
    // console.log(texturalNumber1, '(', number1, ')');
    switch (secondStep) {
      case 'left': pos = number0; console.log(texturalNumberX);
        break;
      case 'right': pos = number2; console.log(texturalNumber2, '(', number2, ')');
        break;
      case 'up': pos = texturalNumberX; console.log(texturalNumberX);
        break;
      case 'down' : pos = number4; console.log(texturalNumber4, '(', number4, ')');
        break;
    }
  }
  if (pos == number5) {
    // console.log(texturalNumber5, '(', number5, ')');
    switch (secondStep) {
      case 'left': pos = number4; console.log(texturalNumber4, '(', number4, ')');
        break;
      case 'right': pos = texturalNumberX; console.log(texturalNumberX);
        break;
      case 'up': pos = number2; console.log(texturalNumber2, '(', number2, ')');
        break;
      case 'down' : pos = number8; console.log(texturalNumber8, '(', number8, ')');
        break;
    }
  }
  if (pos == number7) {
    // console.log(texturalNumber7, '(', number7, ')');
    switch (secondStep) {
      case 'left': pos = number6; console.log(texturalNumber6, '(', number6, ')');
        break;
      case 'right': pos = number8; console.log(texturalNumber8, '(', number8, ')');
        break;
      case 'up': pos = number4; console.log(texturalNumber4, '(', number4, ')');
        break;
      case 'down' : pos = texturalNumberX; console.log(texturalNumberX);
        break;
    }
  }
}

walk('up', 'right');
