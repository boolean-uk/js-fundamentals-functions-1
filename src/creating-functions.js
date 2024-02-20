// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function increment(num) {
  return num += 1
}

console.log(increment(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

function capitalise(str) {
  str = str[0].toUpperCase() + str.slice(1, str.length)
  return str
}

console.log(capitalise('hamtaro'))

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

function greet(str) {
  str = "Hi, " + capitalise(str) + " :)"
  return str
}

console.log(greet('hamtaro'))

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

function countStrings(arr) {
  let count = 0
  for (const elem in arr) {
    if (typeof arr[elem] === 'string') count++
  }
  return count
}

console.log(countStrings(['meep', 8.0, 'Java and JavaScript are friends :)', 'Lollipop', true]))

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

function praiseEdward(obj) {
  if (obj.edward === undefined) {
    obj.edward = 'amazing'
  }
  return obj
}

console.log(praiseEdward({}))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greet, // etc
  d: countStrings,
  e: praiseEdward
}
