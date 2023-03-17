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
  return num += 1
}

const input1 = incrementNumber(1)
const input2 = incrementNumber(2)

console.log(input1)
console.log(input2)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

const string1 = "hello";
const string2 = "world";
const string3 = "welcome";

function capitaliseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitaliseFirstLetter(string1))
console.log(capitaliseFirstLetter(string2))
console.log(capitaliseFirstLetter(string3))

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

function addSmiley(name) {
  const toUpperCase = name[0].toUpperCase() + name.slice(1)
  return `Hi, ${toUpperCase} :)`
}
console.log(addSmiley('priya'))

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

function amountOfStrings(array) {
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      counter++
    }
  }
  return counter
}
console.log(amountOfStrings(['priya', 'gabriel', 'hamza', 4]))



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

let testObject = {edward: 'fabulous'}
function changeObject(object) {
  if (!object.edward) {
    object.edward = 'amazing'
  }
  return object
}

console.log(changeObject(testObject))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliseFirstLetter, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: addSmiley, // etc
  d: amountOfStrings,
  e: changeObject
}
