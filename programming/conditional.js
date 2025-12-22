// ! Conditional Statement in js:

//! Types :
   /* 1. if statement
      2. else statement
      3. else-if statement
      4. switch statement
      5. Ternary statement
    */

// ! 1. if statement

   /*
    if(condition){
     code run if the condition is true
    }
    */

    // let n = 2
    // if(n%2==0){
    //     console.log("Even")
    // }
    
// ! 2. Else Statement

  /*
  if(condition){
  }
  else{
    code run if the condition is false
    }

    */

    
    // let n = 3
    // if(n%2==0){
    //     console.log("Even")
    // }
    // else{
    //     console.log("Odd")
    // }

// ! 3. Else if statement

   /*
     if(condition){
     }
     else if(condition){
     }
     else{
        }
        */

        // let age = 15;
        // if(age >= 18){
        //      console.log("Adult");
        // }
        // else if(age <=18){
        //     console.log("Teenage");
        // }
        // else{
        //     console.log("Older");
        // };

// ! 4. Switch Statement

// const mark = 85;

// let branch;

// switch(true){
//     case mark >=90 :
//         branch = "Computer Science"
//         break;
//     case mark >=80 :
//         branch = "Information Technology"
//         break;
//     case mark >=70:
//         branch = "Electrical Electronics Communication"
//         break;
//     default :
//      branch = "Not Declare"
//      break;

// }
// console.log(`Student Branch is : ${ branch} `)

// ! 5. Ternary Statement

/*Syntax

    condition ? expressionIfTrue : expressionIfFalse   
    
    */

// let age = 21;

// const result =
//     (age >=18)? "You are eligible for vote" : "Not eligible";

// console.log(result);

// ! 6. Nested if Else

// let weather = "sunny";
// let temp = 25;

// if (weather === "sunny") {
//     if (temp > 30) {
//         console.log("It's a hot day!");
//     } else if (temp > 20) {
//         console.log("It's a warm day.");
//     } else {
//         console.log("It's a bit cool today.");
//     }
// } else if (weather === "rainy") {
//     console.log("Don't forget your umbrella!");
// } else {
//     console.log("Check the weather forecast!");
// };

// ! 7. Nullish operator

// It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.
//  It's commonly used to provide default values for variables.

function display(num) { 
    num = num ?? 55; 
    console.log(num); 
} 
display(); // 55 
display(22); // 22