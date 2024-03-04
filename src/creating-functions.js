// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//

const { a } = require("./calling-functions")

// TODO: write code below
function plusOne(a) {
  return a + 1
}

const number = plusOne(1)
console.log(number)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function firstChar(word) {
  const wordStart = word.charAt(0).toUpperCase()
  const wordEnd = wordStart + word.slice(1)
  return wordEnd
}

const str = firstChar('world')
console.log(str)

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
function greeting(name) {
  const person = name.charAt(0).toUpperCase()
  const personName = person + name.slice(1)
  return 'Hi, ' + personName + ' ' + ':)'
}

const smiley = greeting('John')
console.log(smiley)

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
function check(array) {
  let output = 0
  for (let a = 0; a < array.length; a++) {
    if (typeof array[a] === 'string') {
      output += 1
    }
  }
  return output
}

const input = ['hello', 'hi', 'hey', 'heehee', 2, 6, 89, 'boo', 'aah']
console.log(check(input))
// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function addProp(prop) {
  let obj = prop
  if (Object.hasOwn(obj, 'edward')) {
    obj = prop
  } else obj.edward = 'amazing'
  return obj
}

const value = addProp({ edwrd: 'fab' })
console.log(value)

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: plusOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: firstChar, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greeting, // etc
  d: check,
  e: addProp
}
