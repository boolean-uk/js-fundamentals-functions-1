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
function fillTheGap(low, high) {
  const filledArr = []
  if (low > high) {
    return `1st number must be lower than the 2nd`
  }
  for (let i = low; i <= high; i++) {
    filledArr.push(i)
  }
  return filledArr
}
console.log(fillTheGap(8, 7))

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
function addExclam(str, num) {
  num = num + str.length
  return str.toUpperCase().padEnd(num, '!')
}
// console.log(addExclam('fire',2));

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
function addMinutes(str, num) {
  const hStr = str.slice(0, 2)
  let hoursStr = ''
  const mStr = str.slice(-2)
  let minStr = ''
  let hours = 0
  let min = 0
  for (let i = 0; i < hStr.length; i++) {
    if (hStr[i] === ':') {
      continue
    }
    hoursStr = hoursStr + hStr[i]
    hours = hoursStr * 1
  }
  for (let i = 0; i < mStr.length; i++) {
    minStr = minStr + mStr[i]
    min = minStr * 1
  }
  if (num >= 60) {
    min = min + (num % 60)
    hours = hours + Math.floor(num / 60)
  } else {
    min = min + num
  }
  if (min > 59) {
    hours = hours + 1
    min = min - 60
  }
  if (hours > 23) {
    hours = '00'
  }
  if (min < 10) {
    min = `0${min}`
  }
  return `${hours}:${min}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: fillTheGap, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: addExclam, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutes // etc
}
