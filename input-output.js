function testScope() {
    console.log(b); // ?
    var a = 10;
    console.log(a); // ?
}

testScope();

//================

function testScope() {
    console.log(a); // ?
    var a = 10;
    console.log(a); // ?
}

//==============

function testScope() {
    console.log(a); // ?
    let a = 10;
    console.log(a); // ?
}

testScope();

//===================

function testScope() {
    console.log(a); // ?
    let a = b = 10;
    console.log(a); // ?
}

testScope();
console.log(b)
console.log(a)

//================

function testScope() {
    let a = b = 10;
    console.log(a); // ?
}

testScope();
console.log(b)
console.log(a)

//
function testScope() {
    let a = b = 10;
    console.log(a); // ?
}

testScope();
console.log(b)
console.log(name) // in js there is ame keyword which is reserved therefore name will ""

//======================

function outer() {
    var x = 10;

    if (true) {
        var x = 20;
        let y = 30;
        console.log(y); // ?
    }

    console.log(x); // ?
    console.log(y); // ?
}

outer();

//=================

var a = 10;

function outer() {
    var b = 20;

    function inner() {
        var c = 30;
        console.log(a); // ?
        console.log(b); // ?
        console.log(c); // ?
    }

    inner();
}

outer();
console.log(c); // ?

//===========
var x = 5;

function foo() {
    var x = 10;
    console.log(x); // ?
}

foo();
console.log(x); // ?

//===============

var x = 5;

function foo() {
    x = 10;
    console.log(x); // ?
}

foo();
console.log(x); // ?

//==================

function foo() {
    console.log(bar); // ?
    bar = 10;
    console.log(bar); // ?
}

foo();
console.log(bar); // ?


//===========

function foo() {
    let bar;
    console.log(bar); // ?
    bar = 10;
    console.log(bar); // ?
}

foo();
console.log(typeof bar); // ?

//==============================

console.log("Call: ", hello());

let a = 10;

function hello() {
  return a;
}

//===========================


console.log("Call: ", hello());

var a = 10;

function hello() {
  return a;
}

// ========================

console.log("Call: ", hello2());

var a2 = 10;

const hello2 = () => {
  return a2;
};


//================

console.log("Call: ", hell32());

var a2 = 10;

var hell32 = () => {
  return a2;
};

// ============
test();
function test() {
  console.log(a); // What is the output?
 a = 1;
  console.log(a); // What is the output?
}
// ===============

let x = 1;

function firstFunction() {
  let x = 2;
  function secondFunction() {
    console.log(x); // What is the output?
  }
  secondFunction();
}

firstFunction();

//==============

let x = 1;

function outerFunction() {
  let x = 2;
  function innerFunction() {
    let x = 3;
    console.log(x); // What is the output?
  }
  innerFunction();
}

outerFunction();
console.log(x); // What is the output?


////////============

const arr = [];
const obj = {};
obj.name = "Frontendcoder";
 obj[arr] = "React";
console.log(obj);