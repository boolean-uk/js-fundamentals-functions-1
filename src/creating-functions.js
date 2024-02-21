// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementNum(input) {
  return input + 1
}
console.log(incrementNum(5))
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function stringCapitalise(input) {
  return input[0].toUpperCase() + input.slice(1, input.length)
}
console.log(stringCapitalise('world'))
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

function capitalSmiley(input) {
  return 'Hi, ' + input[0].toUpperCase() + input.slice(1, input.length) + ' :)'
}
console.log(capitalSmiley('kyle'))

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

function arrayStringCount(inputArray) {
  let stringCount = 0
  for (let i = 0; i < inputArray.length; i++) {
    const arrayItem = inputArray[i]
    if (typeof arrayItem === 'string') {
      stringCount++
      console.log(arrayItem)
    }
  }
  return stringCount
}
console.log(arrayStringCount([1, 2, 3, 4, 5, 'One', 'Two', 'Three']))

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

function functionOne(inputObject) {
  if (inputObject.edward === undefined) {
    inputObject.edward = 'amazing'
  }

  return inputObject
}
console.log(functionOne({ edward: 'annoying' }))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNum, // 1. change undefined to be the name of the function you defined for the first TODO
  b: stringCapitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: capitalSmiley, // etc
  d: arrayStringCount,
  e: functionOne
}
