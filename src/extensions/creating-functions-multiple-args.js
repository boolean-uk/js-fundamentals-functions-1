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

function numbersBetween(lower, upper) {
  const res = []
  for (let i = lower; i <= upper; i++) {
    res.push(i)
  }
  return res
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

function exclamation(string, number) {
  let res = string.toUpperCase()
  for (let i = 0; i < number; i++) {
    res += '!'
  }
  return res
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

function addTime(currentTime, toAdd) {
  const time = currentTime.split(':')
  let hours = parseInt(time[0])
  let minutes = parseInt(time[1])

  for (let i = 0; i < toAdd; i++) {
    if (minutes + 1 >= 60) {
      if (hours + 1 >= 24) {
        hours = 0
      } else {
        hours++
      }
      minutes = 0
    } else {
      minutes++
    }
  }

  if (hours === 0) {
    hours = `0${hours}`
  } else if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numbersBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
