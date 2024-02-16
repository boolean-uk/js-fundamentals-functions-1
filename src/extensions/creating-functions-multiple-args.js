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
function getNumbersBetween(lower, upper) {
  const numbers = []
  for (let i = lower; i < upper + 1; i++) {
    numbers.push(i)
  }
  return numbers
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
function scream(string, number) {
  let capitalizedString = string.toUpperCase()
  for (let i = 0; i < number; i++) {
    capitalizedString += '!'
  }
  return capitalizedString
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
function addMinutes(startTime, minutesToAdd) {
  const time = startTime.split(':')
  let hours = parseInt(time[0])
  let minutes = parseInt(time[1])
  minutes += parseInt(minutesToAdd)

  if (minutes >= 60) {
    const remainder = Math.floor(minutes / 60)
    // console.log(remainder, minutes)
    hours += remainder
    minutes -= 60 * remainder
    // console.log(minutes)

    if (minutes < 10) {
      minutes = '0' + minutes
    }

    if (hours >= 24) {
      hours -= Math.floor(hours / 24) * 24

      if (hours < 10) {
        hours = '0' + hours
      }
    }
  }
  return `${hours}:${minutes}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: getNumbersBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: scream, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutes // etc
}
