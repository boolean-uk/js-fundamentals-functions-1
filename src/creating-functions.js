// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementNumber(num) {
  return (num += 1)
}
console.log(incrementNumber(3))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

function captialiseString(str) {
  return str[0].toUpperCase() + str.slice(1)
}
console.log(captialiseString('hello'))

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

function greeting(name) {
  const captialisedName = name.charAt(0).toUpperCase() + name.slice(1)
  return `Hi, ${captialisedName} :)`
}
console.log(greeting('Gabriel'))

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

const testArray = ['1', 1, '1', 1, 1, 1, '1', '1', 1, '1', 1, 1, 1] // 5 strings
function countStrings(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      count += 1
    }
  }
  return count
}
console.log(countStrings(testArray))

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
const testObject = { aiyana: 'fantastic' }
function addEdward(obj) {
  if (!obj.edward) {
    obj.edward = 'amazing'
  }
  return obj
}
console.log(addEdward(testObject))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: captialiseString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greeting, // etc
  d: countStrings,
  e: addEdward
}
