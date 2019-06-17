let vampirszam = 12;
let vampirno = 3;
let alfaszam = 1;
let himhp = 4;
let nohp = himhp / 2;
let alfahp = 3 * himhp;
let sam_tar = 3;
let sam_golyo = 8;
let dean_tar = 4;
let dean_golyo = 10;
let castielserules = vampirszam * 0.03;

let dean_toltenyei = dean_tar * dean_golyo;
console.log('Deannek', dean_toltenyei, 'tölténye van.');

let sam_toltenyei = sam_tar * sam_golyo;
console.log('Samnek', sam_toltenyei, 'tölténye van.');

let osszes_tolteny = dean_toltenyei + sam_toltenyei;
console.log('Összesen', osszes_tolteny, 'töltényük van.');

console.log('Egy női vámpir kivégézéséhez', nohp, 'töltény kell.');

console.log('Egy alfa kivégzéséhez', alfahp, 'töltény kell.');

if (dean_toltenyei > sam_toltenyei) {
  console.log('Deannek van több tölténye.');
} else if (dean_toltenyei == sam_toltenyei) {
  console.log('Ugyanannyi töltényük van.');
} else {
  console.log('Samnek van több tölténye');
}

let tokillall = alfaszam * alfahp + vampirno * nohp + (vampirszam - vampirno - alfaszam) * himhp;
console.log('Az összes vámpir kivégzéséhez', tokillall, 'töltény kell.');

let allhimhp = (vampirszam - vampirno - alfaszam) * himhp;
let allnohp = vampirno * nohp;
let allalfahp = alfaszam * alfahp;
let himvampir = vampirszam - vampirno - alfaszam;

let a = sam_golyo;
for (let i = 1; i <= vampirno; i++) {
  a = a - 2;
  console.log(a);
  if (a < 0) {
    a = a + 2;
    break;
  }
}
console.log('sam maradék golyó:', a);

let b = dean_golyo;
for (let i = 1; i <= vampirno; i++) {
  b = b - 2;
  console.log(b);
  if (b < 0) {
    b = b + 2;
    break;
  }
}
if (b >= 4) {
  for (let i = 1; i <= himvampir; i++) {
    b = b - 4;
    console.log(b);
    if (b < 0) {
      b = b + 4;
      break;
    }
  }
}
console.log('dean maradék golyó:', b);

/*
let sam_maradektolteny = sam_golyo % nohp;
console.log('Samnek', sam_maradektolteny, 'tölténye marad.');

let dean_maradektolteny = dean_golyo % nohp;
console.log('Deannek', dean_maradektolteny, 'tölténye marad.');
*/

if (osszes_tolteny > tokillall || osszes_tolteny == tokillall) {
  console.log('Nem kellett Castiel segítsége.');
} else {
  console.log('Kell Castiel segítsége.');
}

// console.log(allnohp);
// console.log(allalfahp);
// console.log(allhimhp);
// let maradekvampir =

// console.log(castielserules);
