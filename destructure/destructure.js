
// Object Destructure:

let employee = {
     ename : 'Miller',
     sal : 4000,
     eid : 1,
     city : 'New York'
}

// console.log(employee)
// console.log(employee.ename)

 // ! destructure

 let { ename, sal , eid , city} = employee;
 console.log(ename)
 console.log(sal)
 console.log(eid)
 console.log(city)


 let state = {
    city1 : 'Tamil Nadu',
    city2 : 'Kerala',
    city3 : "Andhra"

 }

 let {city1,city2,city3} = state;

 console.log(city1)
 console.log(city2)
 console.log(city3)

 // ! shallow copy

 let arr1 = [10,20,30,40]
 let copy = arr1 // shallow copy
 copy.push(50);
 arr1.shift();

 console.log(copy) //[20,30,40,50]
 console.log(arr1)  // [20,30,40,50]