/**
* commonJs
*/
//lib.js
var counter = 3;
function incCounter() {
    counter++;
}
module.exports = {
    counter: counter,
    incCounter: incCounter,
};

//main.js
var mod = require('./lib');
console.log(mod.counter);
mod.incCounter();
console.log(mod.counter);

//$ node main.js  3  3

// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};

//$ node main.js  3  4

/**
* es6
*/
// m1.js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

// m2.js
import {foo} from './m1.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);

//$ babel-node m2.js    bar baz(500ms以后出现)
