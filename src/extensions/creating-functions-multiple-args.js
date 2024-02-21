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

function lowup(lower, upper) {
  let newArr = []
  for (let i = lower; i <= upper; i++) {
       newArr.push(i)
  }
  return newArr
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

function ex(str, num) {
  newStr = str.toUpperCase()
  for (let i = 0; i < num; i++) {
      newStr += "!"
  }
  return newStr
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

function newTime(str, num) {
  const [h, m] = str.split(':')
  let hours = parseInt(h)
  let minutes = parseInt(m)
  const totalMins = (hours * 60 + minutes + num) % (24 * 60)

  let newHours = Math.floor(totalMins / 60)
  let newMinutes = totalMins % 60
  let formattedHours

    if (newHours === 0) {
      formattedHours = '00'
    } else {
      formattedHours = newHours.toString()
    }

  let formattedMins

    if (newMinutes < 10) {
      formattedMins = '0' + newMinutes.toString()
    } else {
      formattedMins = newMinutes.toString()
    }
      

  return `${formattedHours}:${formattedMins}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowup, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: ex, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
