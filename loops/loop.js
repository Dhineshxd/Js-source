
// let players = ['rohit','virat','sheryas','rahul','jadeja']


// ! for loop

// for(let i = 0 ; i<players.length ; i++){
//     console.log(players[i]);
// }

// ! while loop
// let num = 10
// while(num <= 15 ){
//     console.log(num)
//     num++
// }

// ! for in loop and for of loop:


//  ! for in loop:
// for in loop is used to traverse and it will take the index

 let subjects = ['java','python','sql','js','css','django']

for(let i in subjects){
    console.log(subjects) //take index value
    console.log(i,subjects[i]);
}


// ! for of loop
// for of loop is used to traverse and it will take the element only in array

// for(let i of subjects){ // ! take element only in the array
//     console.log(i)
// }



let obj = {
    name  : 'pen',
    price : 10,
    color : 'black'
}

for(let i in obj){
    console.log(i) // key 
    console.log(obj[i]) // values
}


// for(let i of obj){   //! for of loop is not possible for object
//     console.log(i)
// }

// ! for in

// for in ---> array --->Index
// for of ---> object ---> key

/*
for(let i in arrayName){
    console.log(i,arrayName[i])
}

for(let key in objectName ){
    console.log(key,objectName[key])
}
*/

// ! for of


/* syntax
for(let ele of arrayName){
    console.log(ele)
}
    */