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
function generateNumbers(lower, upper) {
  if (lower > upper) {
    return []
  }
  const result = []
  for (let num = lower; num <= upper; num++) {
    result.push(num)
  }
  return result
}

console.log(generateNumbers(1, 3))
console.log(generateNumbers(10, 13))
console.log(generateNumbers(-1, 1))

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
function emphasizeString(str, num) {
  const upperCaseStr = str.toUpperCase()
  const exclamationMarks = '!'.repeat(num)

  return upperCaseStr + exclamationMarks
}
console.log(emphasizeString('disaster', 5))
console.log(emphasizeString('error', 10))

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
  // Parse the input time string into hours and minutes
  const [hoursStr, minutesStr] = timeString.split(':')
  const hours = parseInt(hoursStr)
  const minutes = parseInt(minutesStr)

  // Calculate the new time
  const totalMinutes = hours * 60 + minutes + additionalMinutes

  // Calculate the new hours and minutes
  const newHours = Math.floor(totalMinutes / 60) % 24 // Ensure it stays within 24 hours
  const newMinutes = totalMinutes % 60

  // Format the result as 'hh:mm'
  const formattedHours = String(newHours).padStart(2, '0')
  const formattedMinutes = String(newMinutes).padStart(2, '0')

  return '${formattedHours}:${formattedMinutes}'
}

console.log(addMinutesToTime('7:50', 4))
console.log(addMinutesToTime('7:50', 72))
console.log(addMinutesToTime('11:50', 20))
console.log(addMinutesToTime('12:50', 120))
console.log(addMinutesToTime('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
// Export the function using CommonJS module syntax
// Export the function with the desired name

module.exports = {
  generateNumbers,
  emphasizeString,
  addMinutesToTime
}
