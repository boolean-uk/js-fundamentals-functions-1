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
function returnNumbersInBetween(firstNumber, lastNumber) {
  let newArray = []
  for (let i = firstNumber; i <= lastNumber; i++) {
newArray.push(i)
  }
  console.log(newArray)
  return newArray
}

returnNumbersInBetween(-1,10)

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

function returnStringUpperCaseExclamations(aString, aNumber) {
  let newString = ''
  const exclamation = '!'
  for (let i = 0; i <= aNumber - 1; i++) {
    newString += exclamation
  }
  return aString.toUpperCase() + newString
}

console.log(returnStringUpperCaseExclamations("my my my", 10))
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

function clock(timeString, aNumber) {
  const newTime = timeString.split(':')
  const hours = newTime[0]
  const minutes = newTime[1]
  let totalMinutes = 0
  let newHoursToMin = 0
  console.log(newTime)
  newHoursToMin = parseInt(hours, 10) * 60
  totalMinutes = parseInt(minutes, 10) + aNumber + newHoursToMin
  console.log(totalMinutes)
  if (totalMinutes >= 1440) {
  totalMinutes = totalMinutes - 1440
  }
  let newHours = Math.floor(totalMinutes / 60)
  let newMinutes = totalMinutes % 60
  if (newHours < 1) {
    newHours = `0${newHours}`
  }
  if (newMinutes < 10) {
    newMinutes = `0${newMinutes}`
  }
return `${newHours}:${newMinutes}`
  }

  console.log(clock('23:56', 4))


// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: returnNumbersInBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: returnStringUpperCaseExclamations, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: clock // etc
}
