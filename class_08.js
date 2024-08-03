/**
 *
 *
 *  Promise
 *
 *  new Promise((resolve,reject)=>{
 *          if('things go well')
 *              resovle('I fulfilled my promise')
 *          else{
 *              reject('Sorry I could not full fill my promise')
 *          }
 *  })
 *
 *    if you hit DB query -> either it will give you the data or give you the error
 *             API-Call  -> either it will give you the data or give you the error
 *
 *    return the Promise to us
 */

new Promise()
  //igonore inside
  .then((data = 3) => {
    console.log(data, "We got the data");
    return data * 2;
  })
  .then((data) => {
    console.log(data); // output -> 6
  })
  .catch((err) => {
    console.log(err);
  });
//---------------------------------------------------

/**
 *
 * What is the API
 *    Application Programming Inerface
 * for example -> if you want to share some data
 *                You can provide the data in excel data -> Only people contact you
 *                                                      will have the data
 *                Create a server, Created a path basically the endpoint
 *                I will give to the user which wants the data
 *
 *  fetch
 */

function fetchMeSomeData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

const res = fetchMeSomeData();

res
  .then((data) => {
    console.log(data, "In the resolve");
    return data.json();
  })
  .then((data) => {
    console.log(data, "It got resolved Guys!!");
  })
  .catch((err) => {
    console.log(err);
  });

// Async and await

// these async and await are the keywords

const fetchDataWithAsync = async () => {
  // mark loading flag on
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res.json();
  } catch (err) {
    // Write you fallback case
    alert("Something Went wrong!!");
  } finally {
    // mark the laoding off
  }
};

fetchDataWithAsync()
printSomething()
