// ! How to target element :

// document.getElementById()

let logo = document.getElementById("logo")
console.log(logo);

// target by the tagname

let lists = document.getElementsByTagName("li")
console.log(lists)
console.log(lists[2])

let button = document.getElementsByTagName("button")
console.log(button)
console.log(button[0])

button[0].style.backgroundColor = 'pink'

// target by the className

let cls = document.getElementsByClassName("card")

cls[2].style.backgroundColor = "pink"
cls[1].style.backgroundColor = "red"
cls[0].style.backgroundColor = "green"

// ! how to apply css

logo.style.color = 'red'
logo.style.letterSpacing = '1.5px'
logo.style.fontStyle = "italic"


// ----

let list2 = document.getElementById("list2")
console.log(list2)
list2.style.color = "violet"
list2.style.fontStyle = 'italic'
list2.style.letterSpacing = '1.5px'

// ! how to write in javascript

let boxes = document.getElementsByClassName('card')
console.log(boxes[3])

boxes[3].innerText = 'hello'
boxes[3].innerHTML= '<h2> i Am card 4 from 4</h2> <button> click </button> <p>hi this is tom </p>'

boxes[0].innerHTML = '<a href="#">submit </a>'


let mylogo = document.querySelector("#logo")
console.log(mylogo)

let btn = document.querySelector(".btn")
console.log(btn)

let c = document.querySelector(".card")
console.log(c)

let article = document.querySelector('article')
console.log(article)

// article.style.height = '100px'
// article.style.backgroundColor= 'pink'
 // ! 
article.classList.add('dark')
article.classList.add('hello')
article.classList.remove('hello')

// ! how to create any element

let div = document.createElement("div")

div.classList.add("circle")
div.innerHTML = '<h1> i am tom </h1>'

// article.append(div)

let main = document.querySelector('main')

console.log('main')

main.append(div)
main.prepend(div)
main.before(div)
main.after(div)

