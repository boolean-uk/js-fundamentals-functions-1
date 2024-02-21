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
function getArr(lowerNumber, upperNumber) {
  const numberArr = []
  for (let i = lowerNumber; i <= upperNumber; i++) {
    numberArr.push(i)
  }
  return numberArr
}
console.log(getArr(1, 10))

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
function exclamation(string, number) {
  let exclamationNumber = ''
  for (let i = 1; i <= number; i++) {
    exclamationNumber += '!'
  }
  return string.toUpperCase() + exclamationNumber
}
console.log(exclamation('disaster', 5))

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
function newTime(string, number) {
  const stringWithout = string.split(':')
  const stringToNumberHour = Number(stringWithout[0]) * 60
  const stringToNumberMin = Number(stringWithout[1]) + number
  const numbersAdded = stringToNumberHour + stringToNumberMin
  let hours = Math.floor(numbersAdded / 60)
  let min = numbersAdded % 60
  if (min < 10) {
    min = '0' + min
  }
  if (hours > 23) {
    hours = '00'
  }

  return hours + ':' + min
}
console.log(newTime('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: getArr, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
