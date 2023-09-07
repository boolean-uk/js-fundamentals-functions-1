// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function Increments(number) {
  return (number += 1)
}
console.log(`${Increments(3)}`)

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
console.log(capitalizeString('apple'))
// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
// d
// Example Input an Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
function nameWithSmiley(name) {
  const capitalizedName = capitalizeString(name)
  return `Hi, ${capitalizedName} :)`
}
console.log(nameWithSmiley('edward'))
// TODO: write code below

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

function countStringsInArray(arr) {
  let count = 0
  for (const item of arr) {
    if (typeof item === 'string') {
      count++
    }
  }
  return count
}
console.log(countStringsInArray('Eduard'))
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

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: undefined, // 1. change undefined to be the name of the function you defined for the first TODO
  b: undefined, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: undefined, // etc
  d: undefined,
  e: undefined
}
