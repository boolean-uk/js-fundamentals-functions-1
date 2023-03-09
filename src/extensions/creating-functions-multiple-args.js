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

function pushToArray(num1, num2) {
  const array = []
  for (let i = num1; i <= num2; i++) {
    array.push(i)
  }
  return array
}

console.log(pushToArray(-1, 1))

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

function addExclamation(str1, num1) {
  let newStr1 = str1.toUpperCase()
  for (let i = 1; i <= num1; i++) {
    newStr1 += `!`
  }
  return newStr1
}

console.log(addExclamation(`disaster`, 5))

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

function addTime(str1, num1) {
  const splitTime = str1.split(`:`) // splits input string in to array
  const oldHours = Number(splitTime[0] * 60) // sets array[0] to hours & converts to minutes
  const oldMinutes = Number(splitTime[1]) // sets array[1] to minutes
  const newTotalMinutes = oldHours + oldMinutes + num1 // adds all minute values together for new total minutes
  let newHours = Math.floor(newTotalMinutes / 60) // divides total minutes by 60 and rounds down for new hours
  let newMinutes = String(newTotalMinutes % 60)

  if (newHours >= 24) {
    newHours = newHours - 24
  }
  if (newHours === 0) {
    newHours = `0` + newHours
  } else {
    newHours = String(newHours)
  }
  if (newMinutes < 10) {
    newMinutes = `0` + newMinutes
  }

  const newTime = newHours + `:` + newMinutes
  return newTime

  // console.log(oldHours)
  // console.log(oldMinutes)
  // console.log(newTotalMinutes)
  // console.log(newHours)
  // console.log(newMinutes)
  // console.log(typeof newHours)
  // console.log(typeof newMinutes)
  // console.log(newTime)
}
console.log(addTime('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: pushToArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: addExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
