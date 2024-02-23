/* eslint-disable no-unused-vars */
// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementByOne(number) {
  return number + 1
}
console.log(incrementByOne(2)) // should be 3
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalizeAnyString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizeAnyString('yo')) // should be 'Yo'

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
function greetName(name) {
  const capitalize = capitalizeAnyString(name)
  return `Hi, ${capitalize} :)`
}
console.log(greetName('henrik')) // should be 'Hi, Henrik :)'

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
function countStrings(arr) {
  return arr.filter((item) => typeof item === 'string').length
}
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
const obj = { edward: 'cool' }
function addEdwardProperty(obj) {
  // eslint-disable-next-line no-prototype-builtins
  if (!obj.hasOwnProperty('edward')) {
    obj.edward = 'amazing'
  }
  return obj
}
// eslint-disable-next-line no-undef
console.log(obj, addEdwardProperty('amazing'))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne,

  b: capitalizeAnyString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greetName, // etc
  d: countStrings,
  e: addEdwardProperty
}
