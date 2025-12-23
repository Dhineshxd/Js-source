

// ! promise is a one js object, It is used to handle the asynchronized operation

// by using new keyword we can create promise
// promise takes one callback function, inside the callback function it
   // take two parameters[resolve and reject]
// for handling the resolve we need .then() block and for handling the reject we .catch() block.

// promise having 3 states. [pending, fulfilled, rejected]
// .finally() block will execute everytime.



let p = new Promise((resolve,reject)=>{

    // resolve("hello")

    //  reject("hi")

    let task = true;
    if(task)
        {
        resolve("we will do the task")
        }
    else{
        reject("we will not do the task👍❤️ ")
    }


})

console.log(p)

p.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("i have made a promise")
)

