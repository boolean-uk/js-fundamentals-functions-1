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

function lowAndHigh(low, high) {
  const numbersarray = []
  for (let i = low; i <= high; i++) {
    numbersarray.push(i)
  }
  return numbersarray
}

// console.log(lowAndHigh(10, 13))

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

function getLoud(str, num) {
  const string = str.toUpperCase()
  const exclamation = '!'.repeat(num)
  return string + exclamation
}

// console.log(getLoud('disaster', 5))

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

function addTime(string, number) {
  const timeSplit = string.split(':')
  const hrs = parseInt(timeSplit[0]) // These parseInts take string numbers and make them into usable numbers
  const mins = parseInt(timeSplit[1])
  const allMins = hrs * 60 + mins

  const sum = allMins + number
  console.log(sum)

  return sum
}

// USE .toString to return number at end back to a string
addTime('1:01', 120)

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowAndHigh, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: getLoud, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
