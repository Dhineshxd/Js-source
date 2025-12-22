
for(let i =1 ; i<=4 ; i++){
    let str = ""
    for(let j=1 ; j<=4 ; j++)
        {
          if (i==1 || i == 4 || j == 1 || j==5)
          {
            str+="* "
          }
          else{
            str+="  "
          }
        }
        console.log(str)
      }
