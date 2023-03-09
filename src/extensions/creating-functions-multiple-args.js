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

const array = []
function allNums(lower, upper) {
  for (let i = lower; i <= upper; i++) {
    array.push([i])
  }
}
allNums(-1, 1)
console.log(array)

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

function twoArgs(string1, number1) {
  return string1.toUpperCase() + '!'.repeat(number1)
}

console.log(twoArgs('Hello', 7))

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

function newTime(oldTimeString, additionalMins) {
  timeSplit = oldTimeString.split(':')
  const currentHoursToMins = parseInt(timeSplit[0] * 60)
  const currentMinsToMins = parseInt(timeSplit[1])
  const currentMinsTotal = currentHoursToMins + currentMinsToMins
  let newMinsTotal = currentMinsTotal + additionalMins
  if (newMinsTotal >= 1440) {
    newMinsTotal = newMinsTotal - 1440
  }
  const newHours = Math.floor(newMinsTotal / 60)
  let newMins = newMinsTotal % 60
  if (newMins < 10) {
    newMins = `0${newMins}`
  }
  return `${newHours}:${newMins}`
}

console.log(newTime('7:50', 4))
console.log(newTime('7:50', 72))
console.log(newTime('11:50', 20))
console.log(newTime('12:50', 120))
console.log(newTime('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: allNums, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: twoArgs, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
