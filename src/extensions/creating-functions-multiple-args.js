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
function returnAllNumbersBetween(lower, upper) {
  const arrayToReturn = []
  for (let i = lower; i <= upper; i++) {
    arrayToReturn.push(i)
  }
  return arrayToReturn
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
function stringWithExclamation(str, num) {
  let stringToReturn = str.toUpperCase()
  for (let i = 0; i < num; i++) {
    stringToReturn += '!'
  }
  return stringToReturn
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
function addTime(str, num) {
  let hours = parseInt(str.split(':')[0])
  let minutes = parseInt(str.split(':')[1])
  for (let i = 0; i < num; i++) {
    if (minutes < 59) {
      minutes += 1
    } else if (minutes === 59 && hours === 23) {
      hours = 0
      minutes = 0
    } else {
      hours += 1
      minutes = 0
    }
  }
  let timeToReturn = ''
  if (hours === 0) {
    timeToReturn += '00:'
  } else {
    timeToReturn += hours + ':'
  }
  if (minutes === 0) {
    timeToReturn += '00'
  } else if (minutes < 10) {
    timeToReturn += '0' + minutes
  } else {
    timeToReturn += minutes
  }
  return timeToReturn
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: returnAllNumbersBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: stringWithExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
