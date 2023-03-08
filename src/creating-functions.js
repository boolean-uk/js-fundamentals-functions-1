// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function addOne(num1) {
  return num1 + 1
}
let add1 = addOne(6)
console.log(add1)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function firstCapital(input) {
  let firstChar = input.charAt(0)
  console.log(firstChar.toUpperCase())
  return
}
firstCapital('bonjour')

// function addCapital(caps1) {
//   return caps1.toUpperCase
// }
// let capital1 =
// console.log

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

function Names1(input) {
  let firstChar = input.charAt(0).toUpperCase() + input.slice(1)
  console.log('Hi,', firstChar, ':)')
  return
}
Names1('edward')

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

function numstrings(numarray) {
  let counter = 0
  for (let i = 0; i < numarray.length; i++) {
    if (typeof numarray[i] === 'string') {
      counter += 1
    }
  }
  console.log(counter)
  return
}
numstrings(['john', 'steven'])

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

function amazingEd(object) {
  if (object.edward) {
    return object
  } else {
    object.edward = 'amazing'
    return object
  }
}
console.log(amazingEd({}))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: firstCapital, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: Names1, // etc
  d: numstrings,
  e: amazingEd
}
