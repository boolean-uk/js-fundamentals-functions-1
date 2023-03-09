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
function arrayBuilder(num1, num2){
  const range = []
  for ( i = num1; i <= num2; i++){
    range.push(i)
  }
return range
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
function shouting(word, numOfExclaims){
  const exclamation = '!'
  return word.toUpperCase() + exclamation.repeat(numOfExclaims)
}
// const firstShout = shouting('habibi', 4)
// console.log(firstShout)
// numOfExclaims * '!'   ???????

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
function clock (time, num1){
  h = Math.floor(num1/60)
  m = num1%60
  let newTime
  if (time.length <= 4){
    minutes = parseInt(time.slice(2, 4)) + m
    hours = Math.floor(minutes/60) + h
    newMinutes = minutes % 60
    if (newMinutes < 10){
      newMinutes = '0' + newMinutes
    }
    newHour = parseInt(time.charAt(0)) + hours
    newestHour = newHour % 24
    newTime = `${newHour}:${newMinutes}`
  } 
  else if (time.length === 5) {
      min = parseInt(time.slice(3, 5)) + m
      jam = Math.floor(min/60) + h
    newMin = min % 60
    newJam = parseInt(time.slice(0, 2)) + jam
    newestJam = newJam % 24
    newTime = `${newestJam}:${newMin}`
    if (newTime.slice(0, 2) === '0:'){
      newTime = '0' + newTime
    }
  }
return newTime
}

const res = clock('7:20', 42)
console.log('new result: ', res)
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: arrayBuilder, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shouting, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: clock // etc
}
