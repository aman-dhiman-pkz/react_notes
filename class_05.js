/**
 *
 *
 * Lexical Scope
 *
 * This  -> single lecture won;t i guess
 *
 * Higher Order function -> Practicle thins
 * First class Function
 * Currying in Javascript
 * Closure
 */

// First class function in js

// When you treated the function like normal other variable

const variableX = "Some Value";

const funX = () => {
  return "Some Value";
};

const funXProcessor = (fun, variable) => {
  console.log(variable);
  const storeVal = fun();
  console.log(storeVal);
};

// When we will pass vairableX and funX into the above function

funXProcessor(funX, variableX);

/**
fun  = funX and variable =  variableX
const funXProcessor = (fun, variable)=>{
    // 
    console.log(variable); -> variable would be variableX hence the value is "Some Value"
    const storeVal = fun(); -> fun would be funX hence the we are calling funX
    console.log(storeVal); -> we consoling the value "Some Value"
}
 */

// Higher Order function

// 1) It can accept function as parameter

//Either 1 or both

// 2) It can return function in return value
const globalVar = "Global Var";

function createMultiPlier(mulitplier) {
  const fun = function (val) {
    return val * mulitplier;
  };

  // fun(3)
  return fun;
}

const twiceMe = createMultiPlier(2);
const thriceMe = createMultiPlier(3);
const fourthTimes = createMultiPlier(4);

// Responsive Design
// Wrie a function which indentifie the screensize and return the appropiate view

// responsiveDesign(MobileDesign, WebDesign)

// Closure

// If there is 2 function name outer and inner, And inner is define inside the outer

// then inner can access the all variables of outer, even the outer scope excecution
// is finished

function Outer() {
  const x = 5, // x would be created in the memory, but not he x
    y = 7; // y would be create in the memory, Y is deleted from the memory
  return function inner() {
    console.log(x);
  };
}

// Currying In JS
function sum(x) {
  return function (y) {
    return x + y;
  };
}

sum(2)(5); // output 7

/**
 *
 *  1) Create a Table in html using Javascript
 *  2) In the inital load table should be empty (Column should be there but no rows)
 *  3) There should be add row button in your page, once we click this,
 *     form should be appear
 *
 *          or
 *      structure of page would be
 *                   FORM
 *                      ADD ROW Button
 *                   Table
 *
 *  4) There should be search field as on the top of table
 *     so if you search the username in table it should show the search result
 *  5) Last column would be the action it would contain edit and delete
 *
 *      so on click of edit the form should prefield the value and on add row click
 *          its should update the table
 *      on  Click on the delete it should delete the row from the table
 */
