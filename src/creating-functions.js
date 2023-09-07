// 1. Define a function that takes a number and increments it by 1.
function incrementNumber(num) {
  return num + 1
}
incrementNumber()
console.log(incrementNumber())
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

// 2. Define a function that capitalises any string
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizeString('hello'))

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
function greetWithSmiley(name) {
  const capitalized = capitalizeString(name)
  return `Hi, ${capitalized} :)`
}
console.log(greetWithSmiley('ayo'))

//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
function arrayData(arr) {
  let count = 0 // initialize count to 0
  // loop throught each item in the array
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      count++
    }
  }
  return count
}
console.log(arrayData(['ayo', 'lukas', 'daniel']))
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
function propertyEdward(obj) {
  const keys = Object.keys(obj)
  if (!keys.includes('edward')) {
    obj.edward = 'amazing'
  }
  return obj
}
const goodpeople = {
  aiyana: 'fantastic'
}
console.log(propertyEdward(goodpeople))
console.log(Object.keys(goodpeople))
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
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greetWithSmiley, // etc
  d: arrayData,
  e: propertyEdward
}
