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
function numsBetween(num1, num2) {
  const betweens = []
  let y = 0
  for (let i = num1; i <= num2; i++) {
    betweens[y] = i
    y += 1
    console.log(betweens)
  }
  return betweens
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
function biggeRR(str, num) {
  let uppercase = str.toUpperCase()
  for (let i = 0; i < num; i++) {
    uppercase = uppercase + '!'
  }
  return uppercase
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
function newTime(str, num) {
  const hoursmins = str.split(':')
  let hours = Number(hoursmins[0])
  let mins = Number(hoursmins[1])
  mins = mins + num
  if (mins >= 60) {
    hours = hours + ~~(mins / 60)
    mins = mins % 60
  } else {
    hours = hours + ~~(num / 60)
    mins = mins % 60
  }
  if (hours >= 24) {
    hours = hours - 24
  }
  if (hours === 0) {
    hours = '0' + hours
  }
  if (mins < 10) {
    mins = '0' + mins
  }
  return hours + ':' + mins
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numsBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: biggeRR, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
