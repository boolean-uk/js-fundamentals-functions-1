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
function rangeOfNums(lower, upper) {
  const result = []
  for (let index = lower; index <= upper; index++) {
    result.push(index)
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
function turnStringToWarning(string, number) {
  string = string.toUpperCase()

  for (let index = 0; index < number; index++) {
    string += '!'
  }
  return string
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

function addTime(time, minutes) {
  const [hours, mins] = time.split(':').map(Number)
  const timeInMins = hours * 60 + mins + minutes
  const newValueHours = Math.floor(timeInMins / 60) % 24
  const newValueMins = timeInMins % 60
  let formattedHours
  if (newValueHours === 0) {
    formattedHours = newValueHours.toString().padStart(2, '0')
  } else {
    formattedHours = newValueHours
  }
  const formattedMinutes = newValueMins.toString().padStart(2, '0')
  return `${formattedHours}:${formattedMinutes}`
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: rangeOfNums, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: turnStringToWarning, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
