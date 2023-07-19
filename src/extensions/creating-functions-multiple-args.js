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
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
}

console.log(numArray(0, 4))

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
function shout(sting, num) {
  let x = ''
  for (let i = 1; i <= num; i++) {
    x += '!'
  }
  return sting.toUpperCase() + x
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
function newTime(oldTime, minutes) {
  let hours
  let mins
  // converting string to number variables
  if (oldTime.length === 5) {
    hours = ~~oldTime.slice(0, 2)
    mins = ~~oldTime.slice(3)
  } else {
    hours = ~~oldTime.slice(0, 1)
    mins = ~~oldTime.slice(2)
  }
  // time increase
  for (let i = 1; i <= minutes; i++) {
    mins++
    if (mins === 60) {
      mins = 0
      hours += 1
    }
    if (hours === 24) {
      hours = 0
    }
  }
  // converting number into string and returning value
  let time = 0
  if (hours === 0) {
    hours = '00'
  }
  if (mins < 10) {
    time = hours.toString() + ':0' + mins.toString()
    return time
  } else {
    const time = hours.toString() + ':' + mins.toString()
    return time
  }
}

console.log(newTime('11:00', 234542))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shout, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
