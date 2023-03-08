// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function increment(num1) {
  return num1 + 1
}

console.log(increment(11))

// 2. Define a function that capitalises any string

function anyString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(anyString('hello'))

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

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
  return `Hi, ${name.charAt(0).toUpperCase() + name.slice(1)} :)`
}

console.log(smiley('timmy'))

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

function numOfStrings(array) {
  let output = 0
  for (let j = 0; j < array.length; j++) {
    if (typeof array[j] === 'string') output += 1
  }
  return output
}

numOfStrings([1, 2, 'Three', 4, 'Five', 'Six'])

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
  if (Object.prototype.hasOwnProperty.call(object, 'edward')) {
    return object
  } else {
    object.edward = 'amazing'
    return object
  }
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: anyString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: numOfStrings,
  e: amazingEd
}
