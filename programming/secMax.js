let arr = [10,1,20,19,15,18]

let max = -Infinity
let secMax = -Infinity

for(let i = 1 ; i<arr.length; i++){
   if(arr[i]>max)
    {
     secMax = max
     max = arr[i]
   }
   else if(arr[i] > secMax && arr[i] < max) {
    secMax = arr[i]
   }

   if(secMax == -Infinity){
    console.log("Second Max Number :"+ secMax)
   }
   else{
    console.log("Second Max Not Found")
   }
}