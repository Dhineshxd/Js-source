/**
let obj = {
    name : "Tom",
    email : "xyz@gmail.com"
};
let obj2 = {...obj}
obj2.email = "abc@gmail.com";

let obj3 = Object.assign({}, obj);
obj3.email = "npm@gmail.com";

console.log(obj);
console.log(obj2)
console.log(obj3);
*/

let obj = {
   
    team : {
        name : "jerry",
        country : "Us"
   
        
        }
};




let obj3 = JSON.parse(JSON.stringify(obj));
obj3.name = "tom";
obj3.team.country= "india"
console.log(obj3);
console.log(obj)