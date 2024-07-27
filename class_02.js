/**
 *
 * 1) Scope
 * 2) Hoisting
 * 3) Object
 * 4) Array
 */

// In JS we have 3 types of Scope

// 1) Gloabl Scope

let globalVar = 0;

function fun() {
  console.log(globalVar, "Check the output");
}

// 2) Functional Scope

// Before ES6, when we don't have the let and the const syntax

// When we used to use var

function oldFunction() {
  console.log(a, "In the top");
  if (true) {
    var a = 5;
  }
}

// 3) Block Scope

function blockScope() {
  console.log(x, "At the top");
  if (true) {
    let x = 0;
  }
}

// Remaining Scope to discuss is -> Lexical Scope (When learn about 'this')

// Hoisting

/**
 *
 *  Its the process of Javscript to make the declartion at the top
 *
 *  for var cases its intilize the value using undefined, and not throw
 *
 *  the error if try to access it before the excution step
 *
 *  for let and const it will not allow to do that as it creates the temproal zone
 *
 *  b/w the decaration and execution step
 */

// Object in js

// Object-> An unique instance in the world

// In js if you want to create an Object, you don't need class

// Object defination is that

const obj = {
  name: "Ramesh",
  age: 15,
  phone: 987648579,
};

const chair = {
  color: "Blue",
  material: "wood",
  price: 400,
};

console.log(obj.name);
//or
console.log(obj["name"]); // When you have the property name in some var

// Constant Vs Immutability

// In constant you can not change the value
// But You can mutate the value if variable is mutable

const x = 5;

x = 6 // throw me an error because the data type is not mutable

const y = {name:'Rajesh',age:50}
const z = y  // Assign the address to z not the new copy of object

y = {name:'Ashwin'} // Throw me an error

y.name = 'A' // this will throw me an error as we are not changing the value
            // We are just mutating it
z.name = 'Abc'
// TO clone objects we can follow the below syntax

const w = {...z} // Using the spread operator

// It will reflect in the y as well since they both are sharing the same
// Object address
/**
 *  --------
 *  | y    |
 *  --------
 *          |---------------------> ---------------------------
 *                                  |{name:'Rajesh',age:50}    |
 *          |---------------------> ----------------------------
 *   --------
 *   | z    |
 *   --------
 * 
 * Array ->
 * 
 *   // In C language -> Array is collection of homogenious data type
 *   // In js -> Array is a collection of data (Hetro geniuos)
 * 
 * 
 *  // 2 take- aways -> 1) It can store any type of data
 *                      2) You don't need to define the length (Because its not
 *                      compile language)
 */
