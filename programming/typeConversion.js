let a = '2'
let b = '3'
console.log( " Not converting into number :"+(a+b))

// Type Conversion Method
// ! 1.Number
 let num1 = "10"
 let num2 = "10"
 console.log(" String : "+ ( num1 + num2) )
 //typeConversion
 console.log(" Number Add : "+ (Number(num1)+Number(num2)))

 // ! 2. String

 let x = 10
 let y = 231
 console.log(x+y)
console.log( ' String :' +(String(x)+String(y)))


let c = Number(num1)
let d = String(x)


console.log(Boolean(a)) // value present it will return true. if value is not there then it will 
                        // return false
console.log(Boolean(0)) // if 0 is present it will return false

// ! NaN(Not a Number)

let z = "String"
console.log(Number(z)) //NaN