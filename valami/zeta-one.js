//console.log('Hello World!');

const PI = 3.14;
let valtozo = 'SZia';

//console.log(PI);
//console.log(valtozo);

//valtozo = 'Hello'

//console.log(valtozo);

//let a;
//a = 'új érték';
//console.log(a);

let tomb=[12,32,53,64,75,'valami', true];
//console.log(tomb[5]);
//console.log(tomb[6]);
let matrix = [[1,2,3], [4,5,6], [7,8,9]];
let y = 2;
let x = 1;
let point = matrix[y][x];
//console.log(point);

const objektum = {
    a: 2,
    b: 4,
    c: true,
    d: 'sztring'
};

//console.log(objektum, a);

/* 

let a=3;

if (a>2) {
    console.log('Az A nagyobb mint 2');
} else {
    console.log('Az A kisebb mint 2');
}

const c = 10;

switch(c){
    case 1: 
        console.log('cica');
        break;
    case 5: 
        console.log('kutya');
        break;
    case 10:
        console.log('hal');
        break;
    default: 
        console.log('elenfánt');
}

let d = 0;
while (d<10) {
    console.log(d);
    d++;
}

let e = 0;
do  {
    console.log(e);
    e++;
} while (e<10);

for (let i =0; i<10; i++){
    console.log(i);
}
*/


const elsoFunkciom = (a, b) => {
    return a + b;
};

let t = elsoFunkciom(1, 2);
console.log(t);
