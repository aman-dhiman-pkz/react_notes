/**
 *
 *
 */

const start = 0;

let x = start * 2;

setTimeout(() => {
  console.log("I am Time Out");
}, 0);

console.log(x, "value of x");

// first line 11 would print out then 14

// real o/p is 14 first and then 11

/**
 *
 *               | Js Interpetator|
 *
 *                      statment 1 ----------> if executable excecute it
 *                async statment 2 ----------> if not executable then will say it to wait
 *                      statment 3 ----------> and execute statment 3
 */

// Network call it takes times as it require some preapration
// setTimeout
// write file

function asyncFun() {
  console.log("Hello I am function");

  let x = 0,
    res;

  setTimeout(() => {
    res = 50;
  }, 0);

  x = res;

  console.log(x, "I am last statement of this function");
}

asyncFun(); // line 36 execute first // line 40 and // In last line 38

// How to solve it

// 1) Callback

// Call back is concept where we pass the function to another function
// And we got the value

const fakeNetworkCall = (cb) => {
  let res;
  setTimeout(() => {
    res = 50;
    cb(res);
  }, 0);
};

// first step -> 2nd step -> 3rd step -> 4 step

function asyncFun() {
  let x;

  const printFun = (val) => {
    x = val;
    console.log(x, "I am last statement of this function");
  };

  fakeNetworkCall(printFun);
}

// Callback Hell     >
// Promise

// Promise give 2 things to you result and error

/**
 *
 *
 *  Please give the wdth in percentage or vw
 *
 *   percentage depends on the parent width and height
 *   vw and vh does not depend on the parent one
 *
 *   There are 2 type of elements
 *     block level and inline level
 *        Block Level -> Which have some default margin and also
 *                       they try to cover the available width from left to right
 *                       more genral example - > div, p , h1 h2 h3
 *        Inline Element-> Which does not have the defualt value of margin
 *                        and they don't try to take the avaiable width as well
 *                          example <span>, <a> and more
 *
 *
 *
 */

function add(a, b, callBack) {
  // process the things
  callBack(a + b);
}

const res = add(3, 4);
const cb = (result) => {
  console.log(result);
};
add(3, 4, cb);
