// Define a function that returns the string "Hi, Ed!"
// Input | Output
// - | "Hi, Ed!"
// TO DO: write code below

function sayHi () {
  return 'Hi, Ed!'
}

// Define a function that increments (adds 1 to ) a number
// Input   | Output
// 1       | 2
// 4       | 5
// TO DO: write code below
function incrementNumber (num) {
  return num + 1
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: sayHi,
  b: incrementNumber
}
