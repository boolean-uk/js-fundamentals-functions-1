// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementNumber(num1) {
  return num1 + 1
}

// CHECK ME WITH THIS.......
console.log(incrementNumber(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalize(string) {
  return string && string[0].toUpperCase() + string.slice(1)
}
const saying = 'hello'

// CHECK ME WITH THIS.......
console.log(capitalize(saying))

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
  const capitalizedname = capitalize(name)
  return `Hi, ${capitalizedname} :)`
}
// CHECK ME WITH THIS....
console.log(smiley('edward'))

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
function stringfinder(array) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      count++
    }
  }
  return count
}

console.log(stringfinder(['lukas', 'ayo', 1, 3, 'person']))

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

function propertyEdward(obj) {
  const keys = Object.keys(obj)
  if (!keys.includes('edward')) {
    obj.edward = 'amazing'
  }
  return obj
}

const awesomepeople = {
  aiyana: 'fantastic'
}

console.log(propertyEdward(awesomepeople))
console.log(Object.keys(awesomepeople))

// TODO: change each undefined below to be the name of the functions you defined

module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalize, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: stringfinder,
  e: propertyEdward
}
