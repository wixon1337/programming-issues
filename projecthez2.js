let ctx = require('axel');
ctx.clear();
let x = 5;
let y = 10;
ctx.bg(0, 0, 0);
ctx.box(0, 0, 100, 50);
ctx.bg(0, 255, 0);
ctx.line(0, 0, 0, 50);
ctx.line(0, 0, 100, 0);
// ctx.fg(0, 0, 0);
// ctx.text(20, 10, 'szia');

ctx.cursor.restore();
