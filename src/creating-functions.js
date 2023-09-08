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
  return num + 1
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitaliseString(aString) {
  const capitalLetter = aString[0].toUpperCase()
  const remainderString = aString.slice(1)
  return capitalLetter + remainderString
}
const hello = capitaliseString('hello')
console.log(hello)

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

function smileyFace(name) {
  const capitalLetter = name[0].toUpperCase()
  const remainderString = name.slice(1)
  return 'Hi, ' + capitalLetter + remainderString + ' :)'
}
const smileyTest = smileyFace('edward')
console.log(smileyTest)

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

function dataArray(inputArray) {
  let numberOfStrings = 0
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === 'string') {
      numberOfStrings = numberOfStrings + 1
    }
  }
  return numberOfStrings
}
const inputArray = [1, 2, 3, 'edward', 'bob', [1, 3, 'sam']]
console.log(dataArray(inputArray))

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

function addEdward(objectInput) {
  const objectCheck = Object.hasOwn(objectInput, `edward`)
  if (objectCheck !== true) {
    objectInput.edward = 'amazing'
  }
  return objectInput
}
const objectInput = {}
console.log(addEdward(objectInput))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliseString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyFace, // etc
  d: dataArray,
  e: addEdward
}
