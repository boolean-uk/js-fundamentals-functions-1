// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increments1(num1) {
  return ++num1
}

// 2. Define a function that capitalises any string
// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalize(text) {
  const upperCaseChar = text[0].toUpperCase()
  const textEnd = text.slice(1)

  return `${upperCaseChar}${textEnd}`
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
function sayHi(name) {
  const upperCaseChar = name[0].toUpperCase()
  const nameEnd = name.slice(1)

  return `Hi, ${upperCaseChar}${nameEnd} :)`
}

// let name = edward

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
function lengthOfArray(array) {
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      counter += 1
      console.log(counter)
    }
  }
  return counter
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

function addEdward(amazing) {
  if (amazing.edward) {
    return amazing
  } else {
    amazing.edward = 'amazing'
    return amazing
  }
}
const amazing = {
  aiyana: 'fantastic',
  ben: 'the best',
  summer: 'still here'
}
addEdward(amazing)
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increments1, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalize, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: sayHi, // etc
  d: lengthOfArray,
  e: addEdward
}
