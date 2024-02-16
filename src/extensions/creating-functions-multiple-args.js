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
function array(lower, upper) {
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
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
function exclamation(string, number) {
  return string.toUpperCase() + '!'.repeat(number)
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
function newTime(timeStr, additionalMinutes) {
  // Parse the input string to extract hours and minutes
  const [hoursStr, minutesStr] = timeStr.split(':')

  // Convert hours and minutes to numbers
  let hours = parseInt(hoursStr)
  let minutes = parseInt(minutesStr)

  // Add additional minutes
  minutes += additionalMinutes

  // Handle overflow of minutes into additional hours
  hours += Math.floor(minutes / 60)
  minutes %= 60

  // Handle overflow of hours (if exceeds 24 hours)
  hours %= 24

  // Format hours and minutes into a string
  const formattedHours = hours < 1 ? '0' + hours : String(hours)
  const formattedMinutes = String(minutes).padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}`
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: array, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
