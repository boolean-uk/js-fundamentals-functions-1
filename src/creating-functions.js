// 1. Define a function that takes a number and increments it by 1.
//

// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function increaseByOne(num) {
  return num + 1
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalise(string) {
  return string.toUpperCase()[0] + string.slice(1)
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smiley(name) {
  return 'Hi, ' + name.toUpperCase()[0] + name.slice(1) + ' :)'
}
const person = smiley('norik')
console.log(person)

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function howManyWords(array) {
  let output = 0
  // eslint-disable-next-line no-undef
  for (i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-undef
    if (typeof array[i] === 'string') {
      output += 1
    }
  }
  return output
}
const testArray = ['Alex', 'June', 'Hello', 345, true, 'Is Life this good']
const words = howManyWords(testArray)
console.log(words)

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet
// exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function amazingEd(object) {
  // eslint-disable-next-line no-prototype-builtins
  if (object.hasOwnProperty('edward') !== true) {
    object.edward = 'amazing'
  }
  return object
}
const whereEddieAt = { aiyana: 'fantastic', bob: 'amazing' }
const newObject = amazingEd(whereEddieAt)
console.log(newObject)
// eslint-disable-next-line no-prototype-builtins
console.log(whereEddieAt.hasOwnProperty('aiyana'))
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increaseByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: howManyWords,
  e: amazingEd
}
