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
function generateRange(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    result.push(i)
  }
  return result
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
function addExclamation(string, number) {
  const stringToUpperCase = string.toUpperCase()
  const exclamation = '!'.repeat(number)
  const result = stringToUpperCase + exclamation
  return result
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
function addMinute(time, minToAdd) {
  const [hoursString, minuteString] = time.split(':')
  let hours = parseInt(hoursString)
  let mins = parseInt(minuteString)

  mins += minToAdd
  // Calculate new hours and minutes
  hours += Math.floor(mins / 60)
  mins = mins % 60

  hours = hours % 24

  if (hours === 0) {
    hours = `0${hours}`
  } else if (mins < 10) {
    mins = `0${mins}`
  }
  return `${hours}:${mins}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: generateRange, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: addExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinute // etc
}
