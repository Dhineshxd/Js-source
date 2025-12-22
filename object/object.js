
let student = {
    sname : 'rohit',
    sid : 10,
    isPlayer : true,
    skills : ['html','css','js','java','sql','python'],
    address : {
        city : 'chennai',
        pincode : 600051

    }
}
console.log(student)

// ! How to access

console.log(student.sname)
console.log(student.address.pincode)

// ! How to Modify

student.sid = 20
console.log(student)

// ! How to add

student.phNo = 1234567895

student.address.country = 'india'

console.log(student)

// ! How to delete

delete student.isPlayer

console.log(student)


// ! Object Methods 

let employee = {
    ename : 'Miller',
    sal : 6000,
    sid : 123
}

// ! 1. Object.keys()

// This method is used to return all the keys in one array.

console.log(Object.keys(employee))
console.log(Object.keys(student))

// ! 2. Object.values()

// This Method is used to return all the values in one array.

console.log(Object.values(employee))
console.log(Object.values(student))
console.log(Object.values(student.address))

// ! 3. Object.entries()

// It will return one array inside that all the key value pairs will be stored in each separated array.

console.log(Object.entries(employee))
console.log(Object.entries(student))

// ! 4. Object.freeze()

// It is used to make any object frozen, we can't add/modify/delete any element from the object.

console.log(employee)

Object.freeze(employee)

console.log("After Freeze")

employee.sal = 10000       // We Cant't Modify

delete employee.sal        // We Can't Delete

employee.location = ' chennai'  // We Can't Add

console.log(employee)

// ! 5 . Object.isFrozen()

// It will return true if the object is frozen else it will return false.

console.log(Object.isFrozen(employee))  //true
console.log(Object.isFrozen(student))   // false

// ! 6. Object.seal()

// It is similar to Object.freeze() method here we Can't add or modify or delete any property
let player = {
    name : 'jadeja',
    age : 35

}

console.log(player)

console.log("AFTER SEAL")

Object.seal(player)

player.TeamName = 'CSK' // Adding not possible
delete player.name // delete not possible
player.age = 36 // Modification is possible

console.log(player)



// ! 7. Object.isSealed()

// It is used to check whether the given object is sealed or not.

console.log(Object.isSealed(player)) // true
console.log(Object.isSealed(student)) // false
console.log(Object.isSealed(employee)) // true

// ! 8. Object.assign()

// It is used to combine two or more than two objects and it will return one new object.

let obj1 = {
    name : 'pen',
    price : 50
}
let obj2 = {
    color : 'red',
    brand : 'camlin'
}

let obj3 = Object.assign({},obj1,obj2)

console.log(obj3)
console.log(obj2)
console.log(obj1)

// ! 9. hasOwnProperty()
// It is used to know the given property is present or not.
// if it is present it will return else false

console.log(player.hasOwnProperty('name'))
console.log(player.hasOwnProperty('salary'))