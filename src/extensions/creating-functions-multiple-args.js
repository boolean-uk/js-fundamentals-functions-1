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

function numRange(num1, num2) {
  const out = []
  for (let i = num1; i <= num2; i++) {
    out[out.length] = i
  }
  return out
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

function panicFunction(msg, sos) {
  msg = msg.toUpperCase()
  for (let i = 0; i < sos; i++) {
    msg += '!'
  }
  return msg
}

console.log(panicFunction('looool', 5))
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

function addTime(current, passed) {
  let hour
  let min
  // get hour and min from string
  if (current[1] === ':') {
    hour = Number(current[0])
    min = Number(current[2] + current[3])
  } else if (current[2] === ':') {
    hour = Number(current[0] + current[1])
    min = Number(current[3] + current[4])
  } else {
    return 'ERROR: invalid time format'
  }

  // time calculation
  min += passed
  if (min > 60) {
    const hoursPassed = Math.floor(min / 60)
    console.log('days passed: ', hoursPassed / 24)
    if (hoursPassed > 0) {
      min -= hoursPassed * 60
    }
    hour += hoursPassed
    if (hour > 23) {
      hour = 0 + (hour % 24)
    }
  }

  // add 0s if needed
  let hourString = hour.toString()
  let minString = min.toString()
  if (hour === 0) {
    hourString = '0' + hourString
  }
  if (minString.length === 1) {
    minString = '0' + minString
  }
  return hourString + ':' + minString
}

console.log(addTime('12:00', 35280))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numRange, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: panicFunction, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
