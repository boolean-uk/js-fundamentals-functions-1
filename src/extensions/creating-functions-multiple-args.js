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

function numArray(lower, upper) {
  const output = []

  for (let i = lower; i <= upper; i++) {
    output.push(i)
  }

  return output
}

console.log(numArray(1, 5))

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

function shout(string, number) {
  let word = string.toUpperCase()
  for (let i = 1; i <= number; i++) {
    word += '!'
  }

  return word
}

console.log(shout('hello', 5))

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

function clock(string, number) {
  let hours = 0
  let minutes = 0

  minutes += number

  if (string.length === 5) {
    hours += parseInt(string.slice(0, 2))
    minutes += parseInt(string.slice(3))
  } else if (string.length === 4) {
    hours += parseInt(string.slice(0, 1))
    minutes += parseInt(string.slice(2))
  }

  // console.log(hours)
  // console.log(minutes)

  while (minutes > 60) {
    minutes -= 60
    hours++
  }

  while (hours >= 24) {
    hours -= 24
  }

  // console.log(hours)
  // console.log(minutes)

  let newTime = ''

  if (hours === 0) {
    newTime = '00:'
  } else {
    newTime = String(hours) + ':'
  }

  if (minutes >= 10) {
    newTime += String(minutes)
  } else {
    newTime += '0' + String(minutes)
  }

  return newTime
}

console.log(clock('1:03', 122))

// practice
// const word = "70"
// const test = parseInt(word)
// console.log(test)
// console.log(String(test))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shout, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: clock // etc
}
