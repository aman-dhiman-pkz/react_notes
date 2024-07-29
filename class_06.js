/**
 *
 * this keyword
 *
 *
 *  For example -> Some family went to visit 2 houses for rent
 *
 *   house 1 -> 'The women says this window looks good'
 *   house 2 -> 'The women says this window looks bad'
 *
 *  this changes and it depends where are you right now means the context
 *
 *  1) Arrow function and normal function are diffrent (not just syntax wise)
 *     They are diffrent on the logic wise as well
 *   In classical function Context changes and for arrow it fixed and they take the
 *   context from the parent
 *
 *
 *  // Arrow function can not change their context so scope would be fixed and it would
 *          the parent one
 *  // But classical function have the dynamic scope
 *
 *
 * // Bind create a new function with the passing context scope but call does not
 *    create the new one and we can call the function and pass the context directly
 *
 *  // Call vs Apply
 *      Call just accept the context as parameter but apply also take argument array as
 *          parameter
 *
 *
 *  Destructing
 *
 *    -> Its an attempt to redefine the approach how we can access the
 *       property of objects
 *
 */

const obj = {
  name: "Sanjay",
  age: "56",
  email: "samay.raine@email.com",
};

obj.name;

function processAge() {
  const { age } = obj;
  const calAge = age * 2;
  console.log(calAge - age);
}

//or
const { name } = obj; // It creates a new var name and intialize the value from the obj
// The var name should be the same as property of object\

// If we need to rename the property name

const { age: aliasAge } = obj; // So here we are storing age value in aliasAge Variable

// In array we do this like
const arr = [1, 2];
const [firstVal, secondVal] = arr;

// to get the last element of an arrya
arr.at(-1)
