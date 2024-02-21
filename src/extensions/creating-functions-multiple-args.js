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
function takeTwoNums(lower, upper) {
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
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
function createString(str, num) {
  let excl = ''
  let newString = str.toUpperCase()
  for (let i = 1; i <= num; i++) {
    excl += '!'
  }
  return (newString += excl)
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
function fixTime(str, num) {
  const [hourStr, minutesStr] = str.split(':')
  let hour = parseInt(hourStr)
  let minutes = parseInt(minutesStr)

  minutes += num
  minutes += hour * 60

  hour = Math.floor(minutes / 60)
  minutes = minutes % 60
  hour %= 24

  if (hour === 0) {
    hour += '0'
  } else if (minutes < 10) {
    minutes = '0' + minutes
  }
  const returnString = `${hour}:${minutes}`
  return returnString
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: takeTwoNums, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: createString, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: fixTime // etc
}
