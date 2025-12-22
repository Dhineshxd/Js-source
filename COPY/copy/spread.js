let  obj = {
    name : "Tom",
    subject : "Html"
};

// let obj2 = obj // reference copy

let obj3 = {...obj}; // Shallow Copy
obj3.name = "Jerry";
console.log(obj)
console.log(obj3)