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

function bigOlRange(lower, upper) {
  const output = []
  for (let i = lower; i < upper + 1; i++) {
    output.push(i)
  }
  return output
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

function emphasis(string, num) {
  const upCase = string.toUpperCase()
  let numberOfExclaims = ''
  for (let i = 0; i < num; i++) {
    numberOfExclaims = numberOfExclaims + '!'
  }
  const output = upCase + numberOfExclaims
  return output
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

function addMinutes(time, additional) {
  const timeArray = time.split(':').map(Number)
  // turn additional minutes into hours and minutes.
  const hoursMinutes = [additional]
  let additionalHours = 0
  let additionalMinutes = 0
  // FIXING ADDITIONAL INTO HOURS AND MINUTES TO ADD TO THE TOTAL TIME.
  while (hoursMinutes[0] > 59) {
    hoursMinutes[0] = hoursMinutes[0] - 60
    additionalHours++
  }
  additionalMinutes = hoursMinutes[0]
  timeArray[1] = timeArray[1] + additionalMinutes

  // ADDING ADDITIONAL HOURS
  while (timeArray[1] > 59) {
    timeArray[1] = timeArray[1] - 60
    additionalHours++
  }
  timeArray[0] = timeArray[0] + additionalHours
  // FIXING WHEN MORE THAN 24 HOURS TO GO BACK TO 0
  if (timeArray[0] >= 24) {
    timeArray[0] = timeArray[0] - 24
  }
  // TURNING TIMEARRAY BACK INTO A STRING OF TIME.
  const stringTimeArray = timeArray.map(String)
  if (stringTimeArray[1] < 10) {
    stringTimeArray.push(stringTimeArray[1])
    stringTimeArray[1] = '0'
  }
  if (stringTimeArray[0] < 10) {
    stringTimeArray.unshift('0')
  }
  // GETTING RID OF UNNECESSARY ZEROS.
  const addColonTime = stringTimeArray.join('')
  let finalTime = [addColonTime.slice(0, 2), ':', addColonTime.slice(2)].join(
    ''
  )
  if (finalTime[0] === '0' && finalTime[1] !== '0') {
    finalTime = finalTime.slice(1)
  }
  return finalTime
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: bigOlRange, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: emphasis, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutes // etc
}
