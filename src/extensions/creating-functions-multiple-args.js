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
function returnNumbersBetween(a, b) {
  let array = []
  for (let i = a; i <= b; i++) {
    array.push(i)
  }
  return array
}
console.log(returnNumbersBetween(1, 3))

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
function upperCaseWithExclamationMarks(string, number) {
  return string.toUpperCase() + '!'.repeat(number)
}
console.log(upperCaseWithExclamationMarks('disaster', 5))
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

function addMinutesToTime(timeString, minutesToAdd) {
  let timeParts = timeString.split(':')
  let hours = parseInt(timeParts[0], 10)
  let minutes = parseInt(timeParts[1], 10)
  let dateObj = new Date()
  dateObj.setHours(hours)
  dateObj.setMinutes(minutes)
  dateObj.setMinutes(dateObj.getMinutes() + minutesToAdd)
  let formattedTime   =   dateObj.getHours() + ':' + ('0' + dateObj.getMinutes()).slice(-2)
  return formattedTime
}
console.log(addMinutesToTime('7:50', 4))
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: returnNumbersBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: upperCaseWithExclamationMarks, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutesToTime // etc
}
