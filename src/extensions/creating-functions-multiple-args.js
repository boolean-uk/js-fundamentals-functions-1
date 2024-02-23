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
function arrayFromRange(lower, upper) {
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
function warn(str, num) {
  let exclamations = ''
  for (let i = 0; i < num; i++) {
    exclamations += '!'
  }
  return str.toUpperCase() + exclamations
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
function adjustTime(timeStr, adjustNum) {
  let hour
  let minute
  if (timeStr.length === 4) {
    hour = parseInt(timeStr.substring(0, 1))
    minute = parseInt(timeStr.substring(2, 4))
  } else {
    hour = parseInt(timeStr.substring(0, 2))
    minute = parseInt(timeStr.substring(3, 5))
  }
  let resultHour
  let resultMinute
  while (true) {
    if (adjustNum < 60) {
      break
    }
    ++hour
    if (hour === 24) {
      hour = 0
    }
    adjustNum -= 60
  }
  for (let i = 1; i <= adjustNum; i++) {
    ++minute
    if (minute === 60) {
      minute = 0
      ++hour
      if (hour === 24) {
        hour = 0
      }
    }
  }
  if (hour === 0) {
    resultHour = '00'
  } else {
    resultHour = hour.toString()
  }
  resultMinute = minute.toString()
  if (resultMinute.length === 1) {
    resultMinute = '0' + resultMinute
  }
  return resultHour + ':' + resultMinute
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: arrayFromRange, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: warn, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: adjustTime // etc
}
