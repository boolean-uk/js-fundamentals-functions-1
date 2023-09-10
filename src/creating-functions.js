// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
function increment1(number) {
  return number + 1
}

console.log(increment1(1))
console.log(increment1(2))

//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

// 2. Define a function that capitalises any string
function capitalFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalFirst('hello'))
console.log(capitalFirst('dana'))
console.log(capitalFirst('mia'))

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
function smileyFace(name) {
  const capitalLetter = name[0].toUpperCase()
  const remainderString = name.slice(1)
  return 'Hi, ' + capitalLetter + remainderString + ' :)'
}
const smileyTest = smileyFace('edward')
console.log(smileyTest)
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

// 4. Define a function that takes an array of data and returns how many strings are in the array.
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

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
function addEdward(objectInput) {
  const objectCheck = Object.hasOwn(objectInput, `edward`)
  if (objectCheck !== true) {
    objectInput.edward = 'amazing'
  }
  return objectInput
}
const objectInput = {}
console.log(addEdward(objectInput))
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
  a: increment1, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalFirst, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyFace, // etc
  d: dataArray,
  e: addEdward
}
