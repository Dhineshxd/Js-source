let btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    console.log("f1")
})

btn.addEventListener("click",()=>{
    console.log("f2")
})


let circle = document.querySelector(".box3")
let value = 0;
circle.addEventListener("mouseover",()=>{
    value++;
    let c = document.querySelector("#h1")
    c.innerText = value;
})

circle.addEventListener("mouseout",()=>{
    value = 0
    let c = document.querySelector("#h1")
    c.innerText = value
})


let button = document.querySelector(".btn3")

button.addEventListener("click",(e)=>{
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(e.target.innerText)
})

let key = document.querySelector(".text")

key.addEventListener("",(e)=>{
    
})

let input2 = document.querySelector("#inp2")

console.log(input2)

input2.addEventListener("keypress",(e)=>{
    console.log(e.target.value)
    let box = document.querySelector(".box3")
    box.innerHtml = `<h2> ${e.target.value}</h2>`
    console.log("hi")
})