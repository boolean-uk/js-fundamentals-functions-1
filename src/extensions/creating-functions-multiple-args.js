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

function a(lower, upper) {
  const numA = []
  for (let i = lower; i <= upper; i++) {
    numA.push(i)
  }
  return numA
}

a(10, 13)

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
function b(stringA, numA) {
  let outStr = stringA.toUpperCase()
  for (let i = 1; i <= numA; i++) {
    outStr += '!'
  }
  return outStr
}

// b('error', 10)

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

function c(timeStr, minutes) {
  // const [hours, mins] = timeString.split(":").map(Number);
  const timeSplit = timeStr.split(':')
  const timeInNumber = timeSplit.map(Number)
  const [hrs, mins] = timeInNumber // destructure

  const totalMin = mins + minutes
  const newMins = totalMin % 60
  const newHrs = (hrs + Math.floor(totalMin / 60)) % 24

  let newHrsString = ''
  if (newHrs >= 10 || newHrs === 0) {
    newHrsString = `${newHrs.toString().padStart(2, '0')}`
  } else {
    newHrsString = `${newHrs.toString()}`
  }

  const newMinStr = `${newMins.toString().padStart(2, '0')}`
  const newTimeStr = `${newHrsString}:${newMinStr}`

  return newTimeStr
}

const startTime = '23:50'
const durationInMinutes = 30
const endTime = c(startTime, durationInMinutes)

console.log(endTime)
console.log(typeof endTime)

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: a, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: b, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: c // etc
}
