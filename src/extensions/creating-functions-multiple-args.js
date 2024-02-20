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
function fillArrayFromLowerToUpper(lower, upper) {
  return Array.from(Array(upper - lower + 1), (_, index) => index + lower)
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

function repeatExclamation(string, count) {
  return string.toUpperCase() + '!'.repeat(count)
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
function change(time, minutesToBeAdded) {
  // legg til additional tid, sjekk deretter om timer er >= 24 ?
  const split = time.split(':')
  let hours = Number(split[0])
  let minutes = Number(split[1])
  const additionalHours = Math.floor(minutesToBeAdded / 60)
  const additionalMinutes = minutesToBeAdded - additionalHours * 60
  minutes += additionalMinutes
  hours += additionalHours

  if (minutes > 60) {
    const h = Math.floor(minutes / 60)
    hours += h
    minutes -= h * 60
  }
  hours = hours % 24
  // hours = hours / 10 < 1 ? `0${hours}` : hours.toString()
  minutes = minutes / 10 < 1 ? `0${minutes}` : minutes.toString()
  return `${hours}:${minutes}`
}
console.log(change('7:50', 72))
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: fillArrayFromLowerToUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: repeatExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: undefined // etc
}
