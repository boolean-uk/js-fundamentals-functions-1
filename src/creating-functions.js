// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increments(number) {
  return (number += 1)
}
console.log(increments(3))
// 2. Define a function that capitalises any string
function capitalises(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log(capitalises('hello'))
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
function personNamewithSmiley(name) {
  return 'Hi, ' + capitalises(name) + ' :)'
}
console.log(personNamewithSmiley('adam'))

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

function howManyStrings(array) {
  let stringcount = 0
  for (const element of array) {
    if (typeof element === 'string') {
      stringcount++
    }
  }
  return stringcount
}
console.log(howManyStrings([1, 'edward']))

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
function addingEdward(object) {
  if (!object.hasOwnProperty('edward')) {
    object.edward = 'amazing'
  }
  return object
}
console.log(addingEdward({ edward: 'fabulous' }))
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increments, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: personNamewithSmiley, // etc
  d: howManyStrings,
  e: addingEdward
}
