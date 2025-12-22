let userName = 'Dhinesh';


try{
    console.log(Name);
}catch(error){
    console.log('Error ocuured')
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
finally{
    console.log('Executed')
}

console.log(userName);