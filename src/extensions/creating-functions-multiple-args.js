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
function numsBetween(numOne, numTwo) {
  const numArray = []
  for (let i = numOne; i <= numTwo; i++) {
    numArray.push(i)
  }
  return numArray
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
function capitaliseExclamation(str, num) {
  let result = ''
  result = str.toUpperCase()
  for (let i = 0; i < num; i++) {
    result = result + '!'
  }
  return result
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
function addMinutesToTime(timeString, additionalMinutes) {
  const [hours, minutes] = timeString.split(':').map(Number)

  const totalMinutes = hours * 60 + minutes + additionalMinutes

  const newHours = Math.floor(totalMinutes / 60) % 24
  const newMinutes = totalMinutes % 60
  let resultTime = ''

  if (newHours > 9 || newHours === 0) {
    resultTime = `${String(newHours).padStart(2, '0')}:${String(
      newMinutes
    ).padStart(2, '0')}`
  } else {
    resultTime = `${String(newHours).padStart(1, '0')}:${String(
      newMinutes
    ).padStart(2, '0')}`
  }
  return resultTime
}

// Example usage:
const originalTime = '14:30' // 2:30 PM
const additionalMinutes = 90 // 1 hour and 30 minutes

const newTime = addMinutesToTime(originalTime, additionalMinutes)
console.log(newTime) // Output: "16:00" (4:00 PM)

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numsBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: capitaliseExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutesToTime // etc
}
