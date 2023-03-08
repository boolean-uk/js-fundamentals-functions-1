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
function count(lower, upper) {
  let num = lower
  const arr = []
  for (let i = 0; i <= upper - lower; i++) {
    arr[i] = num
    num += 1
  }
  return arr
}
console.log(count(230, 235))

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

function makeVeryClear(str, num) {
  str = str.toUpperCase()
  for (let i = 0; i < num; i++) {
    str += '!'
  }
  return str
}
console.log(makeVeryClear('Name', 5))

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

// function convertTime(str, num) {
//   let hour
//   let minutes
//   if (str[1] !== ':') {
//     hour = Number(str[0] + str[1])
//     minutes = Number(str[3] + str[4])
//   } else {
//     hour = Number(str[0])
//     minutes = Number(str[2] + str[3])
//   }
//   console.log(hour, minutes)
//   for (let i = 0; i < num; i++) {
//     // will run 52 times
//     minutes += 1
//     if (minutes === 60) {
//       minutes = 0
//       hour += 1
//       console.log('minutes reached 60')
//       if (hour === 24) {
//         hour = 0
//         console.log('hours reached 24')
//       }
//     }
//   }
//   // 0:33
//   if (hour === 0) {
//     hour = hour.toString() + '0'
//   }
//   if (minutes < 10) {
//     minutes = '0' + minutes.toString()
//   }
//   return `${hour}:${minutes}`
// }

// Revised Version
function convertTime(str, num) {
  const minutes = Number(str.slice(str.indexOf(':') + 1))
  const hours = Number(str.slice(0, str.indexOf(':')))
  const totalMinutes = hours * 60 + minutes + num
  let newMinutes = totalMinutes % 60
  let newHours = Math.floor(totalMinutes / 60) % 24

  if (newHours === 0) {
    newHours = newHours.toString() + '0'
  }
  if (newMinutes < 10) {
    newMinutes = '0' + newMinutes.toString()
  }
  return `${newHours}:${newMinutes}`
}
console.log(convertTime('23:41', 20))
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: count, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: makeVeryClear, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: convertTime // etc
}
