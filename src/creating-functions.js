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
  const result = number + 1
  return result
}
const increment = increments(11)
console.log(increment)
// 2. Define a function that capitalises any string
//
// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalise(string) {
  const result = string
  const firstLetter = result[0]
  const capitalfirstLetter = firstLetter.toUpperCase()
  return result.replace(firstLetter, capitalfirstLetter)
}
const capitalized = capitalise('hello')
console.log(capitalized)
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
  const stringName = name
  const firstLetter = stringName[0]
  const capitalise = firstLetter.toUpperCase()
  return `Hi, ${stringName.replace(firstLetter, capitalise)} :)`
}
const result = smileyName('giorgio')
console.log(result)
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
function stringCount(arr) {
  let count = 0
  let i = 0
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      count++
    }
  }
  return count
}
const result1 = stringCount(['edward', 'aiyana'])
const countOfStrings = result1
console.log(countOfStrings)
if (countOfStrings === 1) {
  console.log(`you have ${countOfStrings} string`)
} else if (countOfStrings > 1) {
  console.log(`you have ${countOfStrings} strings`)
} else {
  console.log('you have no strings')
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
function addToObject(object) {
  const result = object
  result.edward = 'amazing'
  // result.edward = 'fabulous'
  // let i = 0
  // for (i = 0; i < result.length; i++) {
  if (!result.edward) {
    result.edward = 'amazing'
  } // else if
  // i++
  // }
  // }
  return result
}
const newObject = addToObject({
  aiyana: 'fantastic',
  edward: 'fabulous'
})
console.log(newObject)
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increments, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyName, // etc
  d: stringCount,
  e: addToObject
}
