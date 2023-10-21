// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementNumber(num) {
  return num + 1
}
console.log(incrementNumber(12))
// 2. Define a function that capitalises any string
// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitaliseString(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
const greeting = 'hello'
console.log(greeting)
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
function Smiley(name) {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
  return 'Hi, ' + capitalized + ' :)'
}
const name = 'edward'
const hiThere = Smiley(name)
console.log(hiThere)
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
const sizeArr = [1, 'edward', 'aiyana', 'Henk', 'Karel']

function dataSize(dataArray) {
  let stringSize = 0
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] === 'string') {
      stringSize++
    }
  }
  return stringSize
}
console.log(dataSize(sizeArr))

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
function edward(object) {
  if (object.edward !== 'fabulous') {
    object.edward = 'amazing'
  }
  return object
}
const object = { aiyana: 'fantastic' }
const callingEdward = edward(object)
console.log(callingEdward)

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliseString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: Smiley, // etc
  d: dataSize,
  e: edward
}
