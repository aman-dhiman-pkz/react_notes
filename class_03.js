/**
 *  Perform the CRUD on Objects and the Array
 * 
 *  Deep Cloning
 * 
 *     To Do use the structuredClone function
 * 
 *  ... spread Opretor  -> ES6 feature
 *    1) To clone the Object or array
 *    2) Use as Rest Operator (Gonna learn it in function section) 
 * 
 * 
 * 
 *   Array CRUD Operation
 * 
 *   1) Create Operation
 
 */

        const arr = [1,2,3,4]
        const emptyArr = []
        const anotherArr = structuredClone(arr) // It will do the deep CLone
                                                // Avoid Immutabiliyt thing

// TO Read a single element
       arr[3] //Will take you to the 4th element of arr

// Search the index of element which a have the value 3

// Traversing ------> Visit every element

for (let i=0;i<arr.length;i++){
    if(arr[i]===3){
        // store the index in some variable
    }
}


/**
 * 1) Find
 */

const value3Element = arr.findIndex(function (i){ return i===3})
// const value3Element = arr.findIndex((i)=>i===3)

/**
 * 2) Filter 
 */

const filterdValue = arr.filter(function (i){return i>2})


// TO Update

// 1) Update for a single Value
    /*
    first you need to find the element 
    and then update the value
  */

    // 2) Update for some values like filtered value

    // 3) Update for all values

const doubleArr = arr.map(i=>i*2)

// To delete

  // Delete single element
   
  arr.splice(2,1) // 2 is the index that we are deleting and 1 is number of element


