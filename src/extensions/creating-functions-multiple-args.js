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
function numSequence(lowerEnd, upperEnd) {
  const arr = []
  for (let i = lowerEnd; i <= upperEnd; i++) {
    arr.push(i)
  }
  return arr
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

function dramatizedText(string, urgency) {
  const count = Math.max(urgency, 0)
  return string.toUpperCase() + `!`.repeat(count)
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
function addMinutes(originalTimeHHMM, addedMinutes) {
  // splitting the string to get hours and minutes
  const arrTime = originalTimeHHMM.split(`:`)
  const hour = parseInt(arrTime[0])
  const minutes = parseInt(arrTime[1])
  // let finalTime = new Date()
  // finalTime.setUTCHours(hour, minutes + addedMinutes)
  // finalTime.setUTCMilliseconds(hour * 24 * 60 * 1000 + (minutes + addedMinutes) * 60 * 1000)
  // finalStr = finalTime.getUTCHours() + `:` + finalTime.getUTCMinutes()
  // eslint-disable-next-line no-undef
  finalStr =
    ((hour + parseInt((minutes + addedMinutes) / 60)) % 24) +
    `:` +
    ((minutes + addedMinutes) % 60).toString().padStart(2, `0`)
  if ((hour + parseInt((minutes + addedMinutes) / 60)) % 24 === 0) {
    // eslint-disable-next-line no-undef
    finalStr = `0` + finalStr
  }
  // eslint-disable-next-line no-undef
  return finalStr
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numSequence, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: dramatizedText, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutes // etc
}
