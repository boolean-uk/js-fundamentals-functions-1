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
function lowerAndUpper(a, b) {
  const array = []
  for (let i = a; i <= b; i++) {
    array.push(i)
  }
  return array
}
console.log(lowerAndUpper(1, 3))

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

function warning(string, number) {
  let upCasedName = string.toUpperCase()

  for (let i = 0; i < number; i++) {
    upCasedName += '!'
    console.log(upCasedName)
  }
  return upCasedName
}
console.log(warning('Disaster', 5))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowerAndUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: warning // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
