// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementBy1(number) {
  return (number += 1)
}
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalizeStr(str) {
  const firstLetter = str.charAt(0)
  const capitalizedFirstLetter = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1)
  return capitalizedFirstLetter + remainingLetters
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
function smileyName(name) {
  const person = name
  const firstLetter = person.charAt(0)
  const capitalizedFirstLetter = firstLetter.toUpperCase()
  const remainingLetters = person.slice(1)
  const correctName = capitalizedFirstLetter + remainingLetters
  return 'Hi, ' + correctName + ' :)'
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
function howManyString(data) {
  let count = 0
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
      count += 1
    }
  }
  return count
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
function amazingEdward(object) {
  if (object.edward === undefined) {
    object.edward = 'amazing'
  }
  return object
}
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementBy1, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeStr, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyName, // etc
  d: howManyString,
  e: amazingEdward
}
