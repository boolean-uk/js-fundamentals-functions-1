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
function newArray(lower, upper) {
  const returnValue = []
  for (let index = lower; index < upper + 1; index++) {
    returnValue.push(index)
  }
  return returnValue
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
function cap(str, num) {
  str = str.toUpperCase()

  let strEnd = ''
  for (let index = 0; index < num; index++) {
    strEnd += '!'
  }
  return str + strEnd
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
function time(str, num) {
  const minutes = parseInt(str.slice(str.length - 2, str.length))
  const hours = parseInt(str.slice(0, 2))
  const newMinutes = (minutes + num) % 60
  const newHours = (hours + parseInt((minutes + num) / 60)) % 24
  let returnValueHours = newHours.toString()
  let returnValueMinutes = newMinutes.toString()
  if (newMinutes < 10) {
    returnValueMinutes = '0' + returnValueMinutes
  }
  if (newHours === 0) {
    returnValueHours = '0' + returnValueHours
  }
  return returnValueHours + ':' + returnValueMinutes
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: newArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: cap, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: time // etc
}
