//types of function--
//1.Named function

// function abc(a,b){
//  console.log("i am named function");
// };
// abc();


// // 2.Annonymus fuction

// // function (){

// //}

// //3. function with expression

// let namedFuncExpression = function ex(){
//     console.log("i am function with expression");
// };

// let annonymusFunc = function (){
//     console.log("i am annonymus function");
// };

// namedFuncExpression();
// annonymusFunc();

// //IIFE - Immediately invoke function Expression

// (function(){
//     console.log("i am iife function");
// })()

// // 5. Arrow fuction
// let arrow=()=>{
//     console.log("i am arrow function");
// } ;

// arrow();


// let addition = (a,b) =>{
//     return a+b;
// };

// console.log(addition(10,5));


// let subraction = (a,b) =>{
//     return a-b;
// };

// console.log(subraction(10,5));

// let arrowInOneLine = (a,b) => a*b;
// console.log(arrowInOneLine(10,5));

// let arrowitoutparanthesis = a => a*a;
// console.log(arrowitoutparanthesis(25));


//nested function

// function outerFunc(){
//     function innerFunc(){
//         console.log("i am from inner function");
//     }
//     innerFunc();
// }

// outerFunc();


// how to create  function---

function add(){
    console.log(3+6);
}
add();

// function with parameter 

function sub(a,b){
    console.log("Total value is : "+(a-b));
   
}
sub(40,10);
sub(80,50);

// function with return stmt


function mul(a,b){
    return a*b;
}

let res = mul(10,5);
console.log(res);

// annonymous function
//function(){

//}


// 3. function with expression
let display = function(){
   console.log("i am display function");
}
display();


// swap to number without using third variable

let swap = function(a,b){
  console.log("before swap")
  console.log(a,b)

  
  a=a+b-(b=a)
  console.log("after swap")
  console.log(a,b)
}
swap(10,20)

//a=a+b b=a-b a=a-b


// count the digit of the number
let num = 12345;
let digitCount = 0;
while(num > 0){
 num = Math.floor(num/10)
 digitCount++
}

console.log(digitCount);

//Arrow function

let wish =(userName)=>{
 console.log("hello")
 console.log(userName)
}
wish("gowtham");

// reverse one number

let reverse = (num)=>{
    let rev = 0
    while(num>0){
        let d = num % 10
        console.log(d)
        rev = rev*10+d
        num = Math.floor(num / 10)
    }
  console.log(rev)
}
reverse(123)


// nested function

let outer = ()=>{

  
    let num1 = 40
      console.log(`I am Outer Function.. is ${num1}`)

      let inner = ()=>{
        console.log("hello")
      }
      inner()
}
outer()


let myName="Kottish"
console.log(`hello everyone my name is ${myName}`)

let a = 10
let b = 20
console.log(`the addition of is two number is ${a} and ${b} is : ${(a+b)}`)


// Lexical Scopping

let parent = ()=>{
    let bike = "duke"

    let child =()=>{
        let mobile = "Apple"
        console.log(bike)
    }
   
    child()
}
parent()


