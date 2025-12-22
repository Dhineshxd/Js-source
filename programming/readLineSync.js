// ! Read Line Sync

// Read the data from user

const readLineSync = require("readline-sync")

const userName = readLineSync.question("What is your Name ? ")

console.log("My Name is : "+ userName)
