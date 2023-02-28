// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function incrementByOne(num) {
  return ++num
}
incrementByOne(1)
// 2. Define a function that takes any person's name and returns it with a smiley :)!

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function upperCaseFirstChar(string) {
  const firstLetter = string[0].toUpperCase()
  const newString = firstLetter + string.slice(1)
  return newString
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

function hiWithaSmile(name) {
  const upperCaseName = name[0].toUpperCase()
  const endOfname = name.slice(1)
  return `Hi, ${upperCaseName + endOfname} :)`
}
// TODO: change undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne, // 1. change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: hiWithaSmile // 2. change undefined to be the name of the function you defined to say hi (the second TODO)
}

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

function noOfStrings(array) {
  let numberOfStrings = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      ++numberOfStrings
    }
  }
  return numberOfStrings
}

const strings = ['edward', 'aiyana']

console.log(noOfStrings(strings))

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

function addProperty(object) {
  if (!object.edward) {
    object.edward = 'amazing'
  }
  return object
}
const people = { aiyana: 'fantastic' }

console.log(addProperty(people))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: upperCaseFirstChar, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: hiWithaSmile, // etc
  d: noOfStrings,
  e: addProperty
}
