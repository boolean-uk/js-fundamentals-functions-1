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
function createRange(lower, upper) {
  const range = []
  for (let i = lower; i <= upper; i++) {
    range.push(i)
  }
  return range
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
function addExclamationMarks(str, num) {
  return str.toUpperCase() + '!'.repeat(num)
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
function calculateNewTime(startTime, minutesToAdd) {
  const additionalMinutes = minutesToAdd
  const [startHour, startMinutes] = startTime.split(':')
  const currentHour = Number(startHour)
  const currentMinutes = Number(startMinutes)

  const totalMinutes = currentMinutes + currentHour * 60 + additionalMinutes

  let newHour = Math.floor(totalMinutes / 60)
  newHour = newHour > 23 ? newHour - 24 : newHour
  newHour = newHour == 0 ? '0' + newHour : newHour

  let newMinutes = totalMinutes % 60
  newMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes

  const newTime = newHour + ':' + newMinutes
  return newTime
}

module.exports = {
  a: createRange,
  b: addExclamationMarks,
  c: calculateNewTime
}
