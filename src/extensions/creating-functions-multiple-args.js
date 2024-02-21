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

function rangeOfNumbers(lower, upper) {
  const numbers = []
  for (let i = lower; i <= upper; i++) {
    numbers.push(i)
  }
  return numbers
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

function upperCaseWithExclamations(string, number) {
  return string.toUpperCase() + '!'.repeat(number)
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

function addMinutesToTime(time, minutes) {
  const [hours, mins] = time.split(':').map((str) => parseInt(str))
  const newMins = mins + minutes
  const newHours = hours + Math.floor(newMins / 60)
  const newMinsMod = newMins % 60
  const formattedMins = newMinsMod < 10 ? '0' + newMinsMod : newMinsMod // Ensure two digits for minutes
  let formattedHours
  if (newHours % 24 < 1) {
    formattedHours = '0' + (newHours % 24) // Add leading zero for midnight
  } else if (newHours % 24 < 10) {
    formattedHours = '' + (newHours % 24) // Removing additional zeros for single digit hours
  } else {
    formattedHours = (newHours % 24).toString().padStart(2, '0') // Ensure two digits for hours
  }
  return `${formattedHours}:${formattedMins}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: rangeOfNumbers, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: upperCaseWithExclamations, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutesToTime // etc
}
