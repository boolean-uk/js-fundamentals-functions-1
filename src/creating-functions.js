// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
// FUNCTION DECLARATION
// let numIncrement = 0;
// function numIncrease(num) {
//   numIncrement = num + 1;
//   return numIncrement;
// }

// const result = numIncrease(11);
// console.log(result);

// FUNCTION EXPRESSION
// let numIncrement = 0;
// const numIncrease = function (num) {
//   numIncrement = num + 1;
//   return numIncrement;
// };

// const result = numIncrease(11);
// console.log(result);

// ARROW FUNCTION
// let numIncrement = 0;
// function a(num) {
//   numIncrement = num + 1;
//   return numIncrement;
// };

let numIncrement = 0
const a = (num) => {
  numIncrement = num + 1
  return numIncrement
}

const increaseResult = a(1)
console.log(increaseResult)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function b(text) {
  const firstCharLow = text.charAt(0)
  const firstCharCap = text.replace(firstCharLow, firstCharLow.toUpperCase())
  return firstCharCap
}

const result = b('adesokan')
console.log(result)

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

function c(text) {
  const firstChar = text.charAt(0)
  const nameCap = text.replace(firstChar, firstChar.toUpperCase())
  const greetings = `Hi, ${nameCap} :)`
  return greetings
}

const nameOutput = c('Rasheed Adesokan')
console.log(nameOutput)

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

function d(array) {
  const stringArr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (typeof element === 'string') {
      stringArr.push(element)
    }
  }
  return stringArr.length
}

const arrayList = [1, 'edward', 11, 45, 'Rasheed']
console.log(d(arrayList))

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
function e(objData) {
  const name = 'edward'
  if (name in objData) {
    return objData
  } else {
    objData[name] = 'amazing'
    return objData
  }
}

const checkObject = { aiyana: 'fantastic' }
console.log(e(checkObject))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: a, // 1. change undefined to be the name of the function you defined for the first TODO
  b: b, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: c, // etc
  d: d,
  e: e
}
