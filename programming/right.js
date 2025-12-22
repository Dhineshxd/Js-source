let arr= [5,8,7,9]

let n = arr.length-1

let copy = arr[n]

for(let i=n-1 ; i>=0 ; i--)
{
    arr[i+1] = arr[i]
}
arr[0] = copy
console.log(arr)