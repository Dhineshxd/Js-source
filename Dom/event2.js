// step 1 : target the form and add the submit

// step 2 : stop refresh eventobject.preventDefault()

// step 3 : target the input and take the data

let form = document.querySelector("form")

console.log(form)

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
   
//     let sname = document.getElementById("sname").value;
//     let pass = document.getElementById("pass").value;

//     console.log( sname , pass)
//     console.log("Submitted...")

// })

let select = document.querySelector("select")

console.log(select)

select.addEventListener("change",(e)=>{
    console.log(e.target.value)
    let body = document.querySelector("body")
    body.style.backgroundColor = e.target.value

    console.log("Changed..")
})