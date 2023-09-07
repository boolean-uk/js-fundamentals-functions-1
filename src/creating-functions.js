// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increments (num1){
  return num1 + 1
}
increments(1)
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalizeme() {
  let word = "hello";
  return(word.charAt(0).toUpperCase() + word.slice(1))
}
capitalizeme()


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
  return 'Hi, ' + name[0].toUpperCase() + name.slice(1) + ' :)'
}


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

function howManyStrings(strings) {
  let str = 0
  for (let i = 0; i < strings.length; i++) {
    if (typeof strings[i] === 'string') {
      str++
    }
  }
  return str
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

function edward(object) {
  if (object.edward !== undefined) {
    return object
  } else {
    object.edward = 'amazing'
    return object
  }
}
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increments, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeme, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyFace, // etc
  d: howManyStrings,
  e: edward
}
