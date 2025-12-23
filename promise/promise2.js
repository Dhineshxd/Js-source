// ! Promise() - Promise is an object that has a status of an async operation, and its corresponding values.

/**
const URL = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(URL);
console.log(promise);
promise
.then(function (response) {
    return response.json();
})
.then(function (data) {
    return data;
})
.catch(function (error)
 {
    console.log("Error Occur..",error)
});

*/

let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) 
        resolve("The number is even!");
    else 
        reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure