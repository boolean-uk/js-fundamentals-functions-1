// Completed function examples

// Define a function that returns the string "Hi, Ed!"
// Input | Output
// - | "Hi, Ed!"

function sayHi() {
  return 'Hi, Ed!'
}
console.log(sayHi())
// Define a function that increments (adds 1 to ) a number
// Input   | Output
// 1       | 2
// 4       | 5

function incrementNumber(num) {
  return num + 1
}
console.log(incrementNumber(3))
// change the exported value to be the name of the function you defined
module.exports = {
  a: sayHi,
  b: incrementNumber
}
