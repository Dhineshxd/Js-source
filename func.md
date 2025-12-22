
// how to create  function---

function add(){
    console.log(3+6);
}
add();

//function is a set of code, used for doing some particular task.
//it is used for reuseability
//whenever we are creating function, if we want to execute we have to call the function.


//types of function

//1.Named function: the function that having some name, is called named function

2.Annonymous function:
the function that does not have any name is called annonymous function.
---syntax:
 function(){
    
 }


 3. Nested function:
        function inside another function.

4. Lexical Scopping:
 In nested function inner function can access all the properties of outer function but the outer function can not access the properties of the inner function, this is called lexical scopping
 ex:
 let parent = ()=>{
    let bike = "duke"

    let child =()=>{
        let mobile = "Apple"
        console.log(bike)
    }
    child()
}
parent()
