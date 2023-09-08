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

function lowerToUpper(lowerNum, upperNum) {
  const array = []
  for (let i = lowerNum; i <= upperNum; i++) {
    array.push(i)
  }
  return array
}
lowerToUpper(-1, 1)

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

function capsExclamationMarks(str, num) {
  const toCapitals = str.toUpperCase()
  const exMarkNum = '!'.repeat(num)
  return toCapitals + exMarkNum
}
// console.log(capsExclamationMarks('error', 10))

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

function adjustTime(stringTime, timeIncrease) {
  const splitTime = stringTime.split(':')

  let hours = splitTime[0]
  let mins = splitTime[1]

  mins = parseInt(mins) + timeIncrease
  console.log('new mins:', mins)

  if (mins > 59) {
    hours = parseInt(hours) + Math.floor(mins / 60)
    mins %= 60
  }

  // console.log('New hours:', hours)
  // console.log('New mins:', mins)

  if (hours % 24 === 0) {
    hours = '00'
  }
  return hours.toString() + ':' + mins.toString().padStart(2, '0')
}

console.log(adjustTime('7:50', 72))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowerToUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: capsExclamationMarks, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: adjustTime // etc
}
