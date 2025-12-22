
// ! Character Length program

// let userName = 'Dhinesh Kumar';
// let count = 0;
// for(let i = 0;i<userName.length;i++){
//     count++;
// }

// console.log(`Count of the String is ${count}`);

//! print Even Number

// let reminder;
// for(let i=1; i<=101; i++){
//     reminder = i%2;
//        if(reminder === 0){
//           console.log(i)
//        }
// }

// ! Vowels 

// let word = 'hello everyone';
// let vowels = 'aeiou' ;

// for(let i = 0 ;i < word.length ; i++){
//    if(vowels.includes(word[i])){
//      console.log(`Vowels ${word[i]}`)
//    }
//    else{
//     console.log(`Not a vowels ${word[i]}`)
//    }
// }


// ! while

let readLineSync = require("readline-sync")

let number = readLineSync.question("Enter the Number : ")

while(number >= 50){
    number = readLineSync.question('Enter less than 50 - ')
}

console.log("Accepted!!!")