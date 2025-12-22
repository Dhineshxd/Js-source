
//  ! how to declare array

let arr = [10,"html",true,undefined]
console.log(arr)

// ! how to know the length of the array

console.log(arr.length)

// ! methods

// ! 1.push()

// tis method is used to add any element at the end of the array
// it will return the length of the modified array

let number = [10,20,30]

number.push(40)

console.log(number)

// ! 2. pop() 

// it i used to remove the last element from the array
// it will return the remove element.

let tokens = ["keywords","identifier","separators","operators","literals"]

tokens.pop()

console.log(tokens)

// ! 3.unshift()

// it i used to remove the last element from the array
// it will return the remove element.

let players = ["rohit","virat","iyer"]
players.unshift("gill")

console.log(players)

// ! 4. shift()

// it i used to remove the first element from the array
// it will return the remove element.

players.shift()

console.log(players)

let cricketer = ["smriti","harmaan","dipti"]

cricketer.shift()
console.log(cricketer)


// ! 5. indexOf()

// it is used to know the index of the given element in the array.
// if the element is not present it will return -1.

let subject = ["html","css","js","react"]

console.log(subject.indexOf("css"))


// ! 6. concat()

// it is used to combine two or more than two arrays and it will return one new array.


let trainer = ["tabrez","pranav","nikhil","gaurav","vignesh"]

console.log(subject.concat(trainer))

// ! 7.includes()

// it will return true if the element is present in the array else it will return false

console.log(trainer.includes("santanu"))
console.log(trainer.includes("tabrez"))

// ! 8.join()

let characters = ['h','e','l','l','o']

console.log(characters.join(""))

let arr2 = [5,6,20,1,5]
console.log(arr2.sort())

