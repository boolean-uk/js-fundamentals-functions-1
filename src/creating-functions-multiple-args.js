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
function arrayGenerator(num1, num2) {
  const arr = []
  for (let i = num1; i <= num2; i++) {
    arr.push(i)
  }
  return arr
}

// console.log(arrayGenerator(10, 13))

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
// function screamingGenerator(string, num) {
//   return `${string.toUpperCase()}${'!'.repeat(num)}`
// }

function screamingGenerator(string, num) {
  for (let i = 0; i < num; i++) {
    string += '!'
  }

  return string.toUpperCase()
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: arrayGenerator, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: screamingGenerator // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
