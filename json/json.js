// json => javascript object notation

// ! 1. JSON.stringify()

// This method is used to convert any js object into json.
// typeOf json is string.

let student = {
    sname : 'rahul',
    age : 10
}
console.log(student)

let jsondate = JSON.stringify(student)

console.log(typeof student)

console.log(jsondate)

console.log(typeof jsondate)

// ! 2. JSON.parse()

// It is used to convert jsondate into js object.
// typeOf  json is string.


let student2 = JSON.parse(jsondate)
console.log(student2)
console.log(typeof student2)
// ! How to take data from the user.

// let sname = prompt("Enter the name")
// let age = prompt("Enter  the Age")
// let ph = prompt("Enter your ph no")

// alert(sname)
// alert(age)
// alert(ph)


// let num1 = parseInt(prompt("Enter the first number "))
// let num2 = parseInt(prompt("Enter the second number"))
// let sum =  num1+num2;
// alert(sum)


console.log("20") //20

console.log(parseInt("20")) //20

console.log(parseInt('abc')) //NaN

console.log(parseInt("20abc20")) //20

console.log(parseInt("abc20")) //NaN

console.log(20 == '20')   // true
console.log(20 === '20')  // false 

console.log(20 != '20')
console.log(20 !== '20')
