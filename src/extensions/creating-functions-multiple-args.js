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
function GetRangeAsArray(lower, upper) {
  const arrayOut = []
  for (let i = lower; i <= upper; i++) {
    arrayOut.push(i)
  }
  return arrayOut
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
function StringToShoutingCase(text, exclamationIntensity) {
  let textOut = text.toUpperCase()
  textOut = textOut + '!'.repeat(exclamationIntensity)
  return textOut
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
function addTime(currentTime, timeSpan) {
  const [hourStr, minuteStr] = currentTime.split(':')
  let hourInt = parseInt(hourStr)
  let minuteInt = parseInt(minuteStr)

  const hoursToAdd = Math.floor(timeSpan / 60)
  const minutesToAdd = timeSpan % 60

  // New day
  hourInt += hoursToAdd
  if (hourInt >= 24) {
    hourInt %= 24
  }

  // New hour
  minuteInt += minutesToAdd
  if (minuteInt >= 60) {
    minuteInt %= 60
    hourInt += 1
    if (hourInt >= 24) {
      hourInt %= 24
    }
  }

  // Add leading 0 for minutes
  const minuteFormatted = minuteInt < 10 ? `0${minuteInt}` : `${minuteInt}`
  const hourFormatted = hourInt === 0 ? `0${hourInt}` : `${hourInt}`

  return `${hourFormatted}:${minuteFormatted}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: GetRangeAsArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: StringToShoutingCase, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
