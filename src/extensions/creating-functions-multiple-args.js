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

function PutInArray(lower, upper) {
  const array = []
  for (let i = lower - 1; i <= upper; i++) {
    array.push(i)
  }
  return array
}

console.log(PutInArray(2, 3))

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
function shout(string, number) {
  return string.toUpperCase() + '!'.repeat(string.length)
}
console.log(shout('potato', 3))
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

// Getting there - we're getting the new time as a total number of minutes, now to formatting it so that it uses the 24h format. I've got an idea of how to do this, but I need to figure out the details. It's not quite working yet, and this may need to go in a very different direction. The if statements need to change, I reckon
function addTime(string, number) {
  const totalMinutes =
    parseInt(string.slice(0, 2)) * 60 + parseInt(string.slice(3, 5)) + number
  let newTime = `${Math.floor(totalMinutes / 60)}:${totalMinutes % 60}`
  console.log(newTime)
  if (newTime.slice(0, 2) >= 10 || newTime.slice(3, 5) >= 10) {
    return newTime
  }
  if (newTime.slice(0, 2) < 10 || newTime.slice(3, 5) < 10) {
    newTime = `0${Math.floor(totalMinutes / 60)}:0${totalMinutes % 60}`
    return newTime
  }
  if (newTime.slice(0, 2) < 10 || newTime.slice(3, 5) >= 10) {
    newTime = `0${Math.floor(totalMinutes / 60)}:${totalMinutes % 60}`
    return newTime
  }
  if (newTime.slice(0, 2) >= 10 || newTime.slice(3, 5) < 10) {
    newTime = `${Math.floor(totalMinutes / 60)}:0${totalMinutes % 60}`
    return newTime
  }
  // Commented out underneath is an earlier attempt which I figured would fail, seeing we need to take into account the changes which happen when the number is added
  // if (string.slice(0, 1) !== 0) {
  //   if (string.slice(3, 4) !== 0) {
  //     newTime = `${Math.floor(totalMinutes / 60)}:${totalMinutes % 60}`
  //   }
  //   newTime = `${Math.floor(totalMinutes / 60)}:0${totalMinutes % 60}`
  // }
  // if (string.slice(3, 4) !== 0) {
  //   newTime = `0${Math.floor(totalMinutes / 60)}:${totalMinutes % 60}`
  // }
  // newTime = `${Math.floor(totalMinutes / 60)}:0${totalMinutes % 60}`
  // return newTime
}

console.log(addTime('12:03', 2))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: undefined, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: undefined, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: undefined // etc
}
