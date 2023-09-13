// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

const incrementByOne = (number) => {
  return number + 1
}
console.log(incrementByOne)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

const capitalizeString = (inputString) => {
  if (inputString.length === 0) {
    return inputString
  }
  const capitalizedString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1)
  return capitalizedString
}
console.log(capitalizeString)

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

const smilyCaptalizeString = (inputString) => {
  if (inputString.length === 0) {
    return inputString
  }
  const capitalizedString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1)

  const greeting = `Hi, ${capitalizedString} :)`

  return greeting
}
console.log(smilyCaptalizeString)

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

const countStrings = (dataArray) => {
  let count = 0

  for (const item of dataArray) {
    if (typeof item === 'string') {
      count++
    }
  }
  return count
}
console.log(countStrings)
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

const addEdwardProperty = (inputObject) => {
  if (!inputObject.addEdwardProperty('edward')) {
    inputObject.edward = 'amazing'
  }
  return inputObject
}
console.log(addEdwardProperty)
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: undefined, // 1. change undefined to be the name of the function you defined for the first TODO
  b: undefined, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: undefined, // etc
  d: undefined,
  e: undefined
}
