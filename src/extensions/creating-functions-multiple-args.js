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
function arrCreation(start, end) {
  const arr = []
  let j = 0

  for (let i = start; i <= end; i++) {
    arr[j] = i
    j++
  }
  return arr
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
function capitalExclamations(string, num) {
  let result = string.toUpperCase()

  for (let i = 0; i < num; i++) {
    result = result + '!'
  }
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
function newTime(time, minutes) {
  const splitTime = time.split(':')
  if (Number(splitTime[1]) + minutes < 60) {
    splitTime[1] = Number(splitTime[1]) + minutes
    if (Number(splitTime[1]) < 10) {
      splitTime[1] = '0' + splitTime[1]
    }
  } else {
    const hours = Math.floor((Number(splitTime[1]) + minutes) / 60)
    minutes = minutes - 60 * hours
    splitTime[1] = Number(splitTime[1]) + minutes
    if (Number(splitTime[1]) < 10) {
      splitTime[1] = '0' + splitTime[1]
    }
    for (let i = 0; i < hours; i++) {
      if (Number(splitTime[0]) === 23) {
        splitTime[0] = '00'
      } else {
        splitTime[0] = Number(splitTime[0]) + 1
      }
    }
  }
  return splitTime.join(':')
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: arrCreation, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: capitalExclamations, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
