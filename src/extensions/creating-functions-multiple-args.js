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

function lowerToUpper(lower, upper) {
  const lowToUpArray = []
  for (let i = lower; i <= upper; i++) {
    lowToUpArray.push(i)
  }
  return lowToUpArray
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

function exclaime(str, num) {
  str = str.toUpperCase()
  for (let i = 0; i < num; i++) {
    str += '!'
  }
  return str
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

function addTime(str, num) {
  const hoursAndMinutes = str.split(':')
  hoursAndMinutes[0] = parseInt(hoursAndMinutes[0])
  hoursAndMinutes[1] = parseInt(hoursAndMinutes[1])
  hoursAndMinutes[1] += num
  while (hoursAndMinutes[1] >= 60) {
    hoursAndMinutes[1] -= 60
    hoursAndMinutes[0] += 1
  }

  while (hoursAndMinutes[0] >= 24) {
    hoursAndMinutes[0] -= 24
  }

  const str1 = hoursAndMinutes[0] === 0 ? '00' : hoursAndMinutes[0]
  const str2 =
    hoursAndMinutes[1] < 10 ? '0' + hoursAndMinutes[1] : hoursAndMinutes[1]

  return str1 + ':' + str2
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowerToUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclaime, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
