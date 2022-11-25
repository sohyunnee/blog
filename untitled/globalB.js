const A = require('./globalA');

global.message = '안녕하세요';

let running = false;
global.running = running;

console.log(A());
console.log(global);