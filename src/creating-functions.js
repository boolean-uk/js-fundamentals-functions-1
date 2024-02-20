// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function task1(x) {
  return x + 1
}

task1(1)
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello
function task2(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

task2('hello')

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
function task3(name) {
  return 'Hi, ' + name.charAt(0).toUpperCase() + name.slice(1) + ' :)'
}

task3('edward')

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
function task4(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      result++
    }
  }
  return result
}
task4(['edward', 1])

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
function task5(object) {
  if (!Object.hasOwn(object, 'edward')) {
    object.edward = 'amazing'
    return object
  } else {
    return object
  }
}
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: task1, // 1. change undefined to be the name of the function you defined for the first TODO
  b: task2, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: task3, // etc
  d: task4,
  e: task5
}
