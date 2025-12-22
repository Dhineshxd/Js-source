// ! Spread Operator::  
/** 

// ! Array !!.

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10]

let num = [...arr1];
console.log(num)

// ! Object !!.

let emp = {
    name : "Tom",
    job : "Developer",
    sal : 3000
};

let emp2 = {
    name1 : "Adam",
    job1 : "Tester",
    sal1 : 20000
};
let emp3 ={...emp};



let employees = {...emp,...emp2};
console.log(employees);

*/

// ! function..

let country = ["India","USA","UK","SA","NZ"];

function places(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

}
places(...country);