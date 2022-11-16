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
function numberFiller(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}
const result = numberFiller(3, 56)
console.log(result)
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
function ITSALLGOINGWRONG(word, amountOfEx) {
  const eX = '!'
  return word.toUpperCase() + eX.repeat(amountOfEx)
}
console.log(ITSALLGOINGWRONG('test', 15))

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
function timeCalculator(time, amountToAdd) {
  if (time.length === 5) {
    let timeInMinutes = time.substring(0, 2) * 60
    const minutesFromTime = time.substring(3, 6)
    const totalAmountToAdd = (amountToAdd += Number(minutesFromTime))
    timeInMinutes += totalAmountToAdd
    if (timeInMinutes > 1440) {
      timeInMinutes -= 1440
      const hours = Math.floor(timeInMinutes / 60)
      const minutes = timeInMinutes % 60
      const finalMinutes = 0 + minutes
      return `${hours}:${finalMinutes}`
    }
  } else if (time.length === 4) {
    let timeInMinutes = time.substring(0, 1) * 60
    const minutesFromTime = time.substring(2, 6)
    const totalAmountToAdd = (amountToAdd += Number(minutesFromTime))
    timeInMinutes += totalAmountToAdd
    const hours = Math.floor(timeInMinutes / 60)
    const minutes = timeInMinutes % 60
    const finalMinutes = 0 + minutes
    return `${hours}:${finalMinutes}`
  }
}
console.log(timeCalculator('7:50', 72))
// IF MINUTES GO OVER 24 HOURS, THEN MINUS 24 HOURS WORTH OF MINUTES
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numberFiller, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: ITSALLGOINGWRONG, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: timeCalculator // etc
}
