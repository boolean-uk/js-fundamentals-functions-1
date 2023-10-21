// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function incrementedByOne(number) {
  return number + 1
}
const input = incrementedByOne(1)
console.log(input)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const capitals = capitalizeString('hello')
console.log(capitals)

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
function smileyName(name) {
  return 'Hi, ' + name.charAt(0).toUpperCase() + name.slice(1) + ' :)'
}
const myName = smileyName('edward')
console.log(myName)
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
function arrayLength(arr) {
  let str = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      str++
    }
  }
  return str
}
const stringNumbers = arrayLength(['edward', 'aiyana'])
console.log(stringNumbers)
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
function amazingEdward(obj) {
  if (!('edward' in obj)) {
    obj.edward = 'amazing'
  }
  return obj
}
console.log(amazingEdward({}))
console.log(amazingEdward({aiyana:'fabulous'}))


// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementedByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyName, // etc
  d: arrayLength,
  e: amazingEdward
}
