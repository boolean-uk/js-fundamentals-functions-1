// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementNumberByOne(number) {
  return number + 1
}
// 2. Define a function that capitalises any string
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
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
function greetWithSmiley(name) {
  return `Hi, ${capitalizeString(name)} :)`
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
function countStrings(array) {
  let count = 0
  for (const element of array) {
    if (typeof element === 'string') {
      count++
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
function addEdward(obj) {
  if (!Object.hasOwnProperty.call(obj, 'edward')) {
    obj.edward = 'amazing'
  }
  return obj
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumberByOne,
  b: capitalizeString,
  c: greetWithSmiley,
  d: countStrings,
  e: addEdward
}
