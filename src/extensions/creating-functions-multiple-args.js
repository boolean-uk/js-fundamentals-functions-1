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

function makeArray(lower, upper) {
  const array = []
  for (let i = 0; i <= upper - lower; i++) {
    array.push(lower + i)
  }
  return array
}
console.log('makeArray(5, 10)', makeArray(5, 10))

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
function AddExclamationMarks(inputString, numOfMarks) {
  let marks = ''
  for (let i = numOfMarks; i > 0; i--) {
    marks += '!'
  }
  return inputString.toUpperCase() + marks
}
console.log('AddMarks:', AddExclamationMarks('hello', 6))
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
function AddMintuesToTime(time, minutes) {
  const timesplit = time.split(':')
  const mseconds =
    parseInt(timesplit[0]) * 60 * 60 * 1000 +
    parseInt(timesplit[1]) * 60 * 1000 +
    minutes * 60 * 1000
  const newTime = new Date(mseconds)
  timesplit[0] = newTime.getHours()
  if (timesplit[0] < 10) {
    timesplit[0].toString()
    timesplit[0] = '0' + timesplit[0]
  } else {
    timesplit[0].toString()
  }
  timesplit[1] = newTime.getMinutes().toString()
  return timesplit[1] < 10
    ? `${timesplit[0]}:0${timesplit[1]}`
    : `${timesplit[0]}:${timesplit[1]}`
}
console.log(
  'AddMintuesToTime("14:02" , 75)- result:',
  AddMintuesToTime('14:02', 75)
)
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: makeArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: AddExclamationMarks, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: AddMintuesToTime // etc
}
