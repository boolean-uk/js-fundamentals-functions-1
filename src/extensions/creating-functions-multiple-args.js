// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function inbetween(lower, upper){
  const element = [];
  for (let i = lower; i < upper+1; i++){
    element.push(i)
  }
  return element
}
// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function scream(string, number){
  string = string.toUpperCase()
  for (let i = 0; i < number; i++) {
    string = string.concat('!')    
  }
  return string
}
// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(string, number){
  let[hours, minutes] = string.split(':')
  if(number %60 !== 0){
    minutes = (Number(minutes) + (number%60)).toString()
    if (Number(minutes) > 60) {
      hours = (Number(hours) +1 ).toString()
      minutes = (Number(minutes) - 60).toString()
      minutes = Number(minutes) < 10 ? '0' + minutes : minutes
    }
  }

  if(Math.floor(number/60) > 0){
    hours = (Number(hours) + Math.floor(number/60)).toString()
  }


  if(Number(hours) > 23){
    hours = (Number(hours) - 24 ).toString()
    hours = Number(hours) === 0 ? '0'+hours : hours
  }
  
  return hours.concat(':' + minutes)
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: inbetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: scream, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
