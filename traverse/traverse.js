let arr = [10,20,30,40,50]

arr.map((ele)=>{
    console.log(ele);
})

let subjects = ['html','css','js','java','python','react','sql']

subjects.map((ele)=>{
    console.log(ele)
})

let employee = [
    { ename : 'Miller',
        eid : 123,
        sal : 3000
    },{
        ename : 'Adams',
        eid : 124,
        sal :4000
    },{
        ename : 'Scott',
        eid : 145,
        sal : 4500
    }
    ]

    employee.map((ele)=>{
        // console.log(ele)  --print all elements
        console.log(ele.sal,ele.ename,ele.eid)
    })




let arr2 = [2,6,9,8,6,8]

//[2,6,8,9]

let temp = []
for(let i=0 ; i<arr2.length ; i++){
    if(!temp.includes(arr2[i])){
        temp.push(arr2[i])
    }
}

console.log(temp)