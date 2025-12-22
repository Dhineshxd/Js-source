let parentDiv = document.getElementById("parent");
let childDiv = document.querySelector("#child");
let btn = document.querySelector("button");

console.log(parentDiv);
console.log(childDiv);
console.log(btn);

btn.addEventListener("click",() =>{
    console.log("button is clicked..")

})
childDiv.addEventListener("click",() =>{
    console.log("Child div is clicked...")
})

parentDiv.addEventListener("click",() =>{
    console.log("Parent div is clicked...")
})