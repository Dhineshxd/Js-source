

// ! setTimeout :
/**
console.log("Executed...")
function greet(){

    console.log("Successful");

}
setTimeout(greet,3000);
*/


/** 
setTimeoutId = setTimeout(function(){
    console.log("Executed...")

},1000);
clearInterval(setTimeoutId);
*/

// ! setInterval


let value = 0;
let IntervalId = null;


function interval(){
    value += 1;
    console.log({count : value})
    if(value === 10){
        clearInterval(IntervalId);
    }

}
IntervalId =setInterval(interval,1000);
                                 