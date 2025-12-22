

let str1 = 'hello'
let str2 = "HOW ARE YOU"
let str3 = 'I AM FINE'

console.log(typeof str1, str1)
console.log(typeof str2, str2)
console.log(typeof str3, str3)


//how to know the length of the String

console.log(` the length of ${str1} is ${str1.length}`)

//  methods of String

 // ! 1. toUpperCase()

 // this method is used to convert one string into uppercase and it will
 // return one new string original string will not change
 let upper = str1.toUpperCase()
 console.log(str1.toUpperCase())
 console.log(upper)
 console.log(str1)

 // ! 2. toLowerCase()
 // this method is used to convert one string into LowerCase and it will
 //return one new string original string will not Change

 console.log(str2.toLowerCase())

 let lower = str2.toLowerCase()
 console.log(lower)
 console.log(str2)

 // ! 3.trim()
// it will remove the space

 let empName = " Miller "
 console.log(empName)
 console.log(empName.length)

 let emp = empName.trim()
 console.log(emp)
 console.log(emp.length)

 // ! 4.indexOf()

 // this method is used to return the index of the given character.
 // it will take the first appearance of the given character
console.log(empName.indexOf("i"))
console.log(empName.indexOf("l"))

//! 5. lastIndexOf()
 
//this method is used to return the index of the given character.
// it will take the last appearance of the given character.

console.log(empName.lastIndexOf("M"))


// ! 6. charAt()

// this method is used to know the character . present in the given position

console.log(empName.charAt(12))
console.log(empName.charAt(2))


// reverse String

// let reverse = (str)=>{
//   console.log("Before", str)
//   let i =0 , j = str.length - 1;
//     while(i<=j){
//           let t = str[i];
//           str[i]=str[j];
//           str[j]=t;
//     }

// }
// reverse("hello"

// ! 7. includes()

// it is used to know the given  the string is

let msg = " I  am from chennai "


console.log(msg.includes("chennai"))
console.log(msg.includes("bangalore"))


// ! 8.concat()

//  it is used to combine two or more than two strings and it will return one new string

let str4 = "hello"
let str5 = "how are you"

console.log(str4.concat("",str5,"?"))

// ! 9. replace()

// it is used to replace one string with another string
//it will replace only the first occurance.
 
let msg2 = "I am from bangalore, I love chennai"

console.log(str4.replace("l","$"))


console.log(msg.replace("bangalore","chennai"))

// ! 10.replaceAll()

// it will used to replace one string with another string.
// it will replace all the occurance of the string.

console.log(str1.replaceAll("l","$"))

console.log(msg.replaceAll("bangalore","chennai"))


// ! 11.split()

//it will used to convert any string into array

let str6 = "we love javascript"
console.log(str6.split(" "))
console.log(str6.split(""))
console.log(str6.split())
console.log(str6.split("a"))

// ! 12. slice()

// --slice(Start index 0, End index 4)

// it is used to extract one string to another string
// it takes two parameters(StartIndex, EndIndex).
// it does not includes the end index value.
// it can take negative value also
// by using this method we can extract only from left to right
console.log("hello : "+ str4.slice(0,4))
console.log("hello : "+str4.slice(2))
console.log("hello : "+str1.slice(-2)) 
console.log("hello : "+str4.slice(-3,-1))
console.log("hello : "+str4.slice(-3,-5))


// ! 13. subString() 

// it is used to extract one string to another string
// it takes two parameters(StartIndex, EndIndex).
// it does not includes the end index value.
// it will not take negative value.
// if will not take negative value


let str7 = "hello"
console.log(str7.substring(0,4))
console.log(str7.substring(2))
console.log(str7.substring(-2))
console.log(str7.substring(3,1))

