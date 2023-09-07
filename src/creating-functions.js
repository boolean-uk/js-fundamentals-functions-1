// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function numAddOne(num) {
  return ++num
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function stringCapitalise(inputString) {
  return inputString[0].toUpperCase() + inputString.slice(1, inputString.length)
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

function greeter(inputName) {
  return `Hi, ${inputName[0].toUpperCase()}${inputName.slice(
    1,
    inputName.length
  )} :)`
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

function stringCounter(arrayInput) {
  let stringCount = 0
  for (let i = 0; i < arrayInput.length; i++) {
    const item = arrayInput[i]
    if (typeof item === 'string') {
      stringCount++
    }
  }
  return stringCount
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

function addEd(inputObject) {
  const keys = Object.keys(inputObject)
  if (!keys.includes('edward')) {
    inputObject.edward = 'amazing'
    return inputObject
  }
  return inputObject
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: numAddOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: stringCapitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greeter, // etc
  d: stringCounter,
  e: addEd
}
