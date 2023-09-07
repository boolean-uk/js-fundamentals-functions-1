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
function numbers(lower, upper) {
  const array = []
  for (let x = lower; x <= upper; x++) {
    array.push(x)
  }
  return array
}

console.log(numbers(1, 3))
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
  for (let x = number; x > 0; x--) {
    word = word.concat('!')
  }
  return word
}

console.log(shout('Hi', 2))
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

function time(string, number) {
  let minutes = number
  let hour = 0

  if (string.length === 4) {
    minutes += Number(string.slice(2, 4))
    hour += Number(string.slice(0, 1))
  }
  if (string.length === 5) {
    minutes += Number(string.slice(3, 5))
    hour += Number(string.slice(0, 2))
  }

  for (let x = minutes; minutes > 60; x - 60) {
    minutes = minutes - 60
    hour += 1
  }

  if (hour === 24) {
    hour = 0
  }

  // let newTime = String(hour) + ":" + String(minutes)
  let newMin = ''
  let newHour = ''

  if (minutes < 10) {
    newMin = ':0' + String(minutes)
  } else {
    newMin = ':' + String(minutes)
  }
  if (hour < 10) {
    newHour = '0' + String(hour)
  } else {
    newHour = String(hour)
  }

  let newTime = newHour + newMin

  if (newTime.length === 5 && newTime[0] === '0' && newTime[1] !== '0') {
    newTime = newTime.slice(1, 5)
  }

  // if (hour === 0) {
  //   newTime = "00:" + String(minutes)
  // }

  // else {
  //   newTime = String(hour) + ":0" + String(minutes)
  // }

  return newTime
}

console.log(time('8:62', 60))

// yeah boiiii
const hope = '9'
const money = 10

// test
console.log(Number(money))
console.log(String(hope))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numbers, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shout, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: time // etc
}
