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
const numbersBetween = (lower, upper) => {
  const returnArray = []
  for (let i = 0; i < upper - lower + 1; i++) {
    returnArray.push(lower + i)
  }
  return returnArray
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
const sillyString = (input, exclamations) => {
  let returnString = input.toUpperCase()
  for (let i = 0; i < exclamations; i++) {
    returnString += '!'
  }
  return returnString
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
const addMinutes = (clock, minutesToAdd) => {
  let hours = parseInt(clock.substring(0, clock.indexOf(':')))
  let minutes = parseInt(clock.substring(clock.indexOf(':') + 1, clock.length))
  if (minutes > 0) minutes += minutesToAdd
  while (minutes >= 60) {
    hours++
    minutes -= 60
  }
  while (hours >= 24) {
    hours -= 24
  }
  let returnString = hours + ':'
  if (hours === 0) {
    returnString = '0' + returnString
  }
  if (minutes >= 10) {
    returnString += minutes
  } else {
    returnString += '0' + minutes
  }
  return returnString
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numbersBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: sillyString, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutes // etc
}
