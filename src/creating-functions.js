// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function numInc(number) {
  number++
  return number
}
const test = numInc(3)
console.log(test)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
const test2 = capString('hi fred')

function capString(string) {
  const change1 = string[0].toUpperCase()
  string[0] = change1
  const string2 = change1 + string.slice(1, string.length)
  return string2
}
console.log(test2)

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
const name1 = 'Edward'
const name2 = 'Aiyana'

function modS(name) {
  const change1 = name[0].toUpperCase()
  name[0] = change1
  const newString = 'Hi, ' + change1 + name.slice(1, name.length) + ' :)'

  return newString
}

console.log(modS(name1))
console.log(modS(name2))

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
let sAmount = 0
const array = ['I', 'hope', 'this', 'works', 1]

const array2 = ['edward']
const array3 = ['edward', 'aiyana']
const array4 = [1]
const array5 = [1, 'edward']
let i = 0
// console.log(typeof (array[4]))

function arrayCount(data) {
  let sAmount = 0
  for (i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
      sAmount++
    }
  }
  return sAmount
}

console.log(arrayCount(array))
console.log(arrayCount(array2))
console.log(arrayCount(array3))
console.log(arrayCount(array4))
console.log(arrayCount(array5))

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
const ob1 = {}
const ob2 = { aiyana: 'fantastic' }
const ob3 = { edward: 'fabulous' }

function edA(blank) {
  if (blank.edward) {
    return blank
  } else {
    blank.edward = 'amazing'
    return blank
  }
}

console.log(edA(ob1))
console.log(edA(ob2))
console.log(edA(ob3))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: numInc, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: modS, // etc
  d: arrayCount,
  e: edA
}
