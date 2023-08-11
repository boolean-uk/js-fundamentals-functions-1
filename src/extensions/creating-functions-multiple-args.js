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
function numbers(number1, number2) {
  const array = []
  for (let i = number1; i <= number2; i++) {
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
function getString(string, number) {
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
function newTime(string, number) {
  const [hours, minutes] = string.split(':').map(Number)
  const total = hours * 60 + minutes + number

  const newHours = Math.floor(total / 60) % 24
  const newMinutes = total % 60

  if (newHours >= 10 || newHours === 0) {
    // eslint-disable-next-line prettier/prettier
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`
  } else {
    // eslint-disable-next-line prettier/prettier
    return `${String(newHours).padStart(1, '0')}:${String(newMinutes).padStart(2, '0')}`
  }
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numbers, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: getString, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
