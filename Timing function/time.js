let  a = setInterval(()=>{
    console.log('hi')
},1000)
   let b=     setTimeout(()=>{
        clearInterval(a)
        },6000)

        clearTimeout(b);