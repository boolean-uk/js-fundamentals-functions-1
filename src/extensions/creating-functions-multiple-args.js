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

function fromTo(lower, upper) {
  const numbers = []
  for (let i = lower; i <= upper; i++) {
    numbers.push(i)
  }
  return numbers
}

console.log(fromTo(1, 3))

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.

function allCaps(string, number) {
  let newString = string.toUpperCase()
  for (let i = number; i > 0; i--) {
    newString += '!'
  }
  return newString
}

console.log(allCaps('watch out', 6))

// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.

function addTime(time, add) {
  const indexOfColon = time.search(':')
  const hours = Number(time.slice(0, indexOfColon))
  const minutes = Number(time.slice(indexOfColon + 1, indexOfColon + 3))
  const totalMinutes = hours * 60 + minutes + add

  let newHours = Math.floor(totalMinutes / 60)
  let newMinutes = 0

  if (totalMinutes - newHours * 60 < 10) {
    newMinutes = '0' + (totalMinutes - newHours * 60)
  } else {
    newMinutes = totalMinutes - newHours * 60
  }

  if (newHours >= 24) {
    newHours = newHours - 24
    if (!newHours) {
      newHours = '00'
    }
  }

  const newTime = `${newHours}:${newMinutes}`
  return newTime
}

console.log(addTime('23:50', 30))

// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: fromTo, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: allCaps, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
