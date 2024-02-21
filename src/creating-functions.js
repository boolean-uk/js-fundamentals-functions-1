// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increaseNumber(num) {
  return num + 1
}
// console.log(increaseNumber(555))
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalise(str) {
  const firstChar = str.charAt(0).toUpperCase()
  return firstChar + str.slice(1)
}
// const test = capitalise('test')
// console.log(test)

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
function addSmile(name) {
  const firstChar = name.charAt(0).toUpperCase()
  return `Hi, ${firstChar}${name.slice(1)} :)`
}
// const smile = addSmile('name')
// console.log(smile);
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
function findStrings(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      count++
    }
  }
  return count
}
// let strCounter = findStrings([1,2,'str',2,'str2'])
// console.log(strCounter);
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
function amazingEd(obj) {
  if (!obj.edward) {
    obj.edward = 'amazing'
  }
  return obj
}
// const checkEd = amazingEd({ p1: 'maria', p2: 'eddie' })
// console.log(checkEd)
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increaseNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: addSmile, // etc
  d: findStrings,
  e: amazingEd
}
