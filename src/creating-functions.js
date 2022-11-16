// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function input(nums) {
  return nums +1
}
const result = input(3)


// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function cappystring(caps) {
  const uppercasechar = caps[0].toUpperCase()
  const lowercasechar = caps.slice(1)
  return `${uppercasechar}${lowercasechar}`
}
// console.log(cappystring('hello'))
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
function smileystring(smileyfaces) {
  const upperchar = smileyfaces[0].toUpperCase()
  const lowerchar = smileyfaces.slice(1)
  return `Hi, ${upperchar}${lowerchar} :)`
}
// console.log(smileystring('hamza & kat'))

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
function stringNumber(array) {
  let numOfString = 0
  for (let i = 0; i <= array.length; i++) {
    const stringCheck = typeof array[i]
    if (stringCheck === 'string') {
      numOfString += 1
    }
  }
  return numOfString
}
const array1 = ['edward', 'aiyana', 'Hamza', 'kat', 9, 10]
// console.log(stringNumber(array1))

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
function object(name) {
  if (name.edward) {
  return name }
  else { name.edward = 'amazing'}
  return name
}
const name = {
  aiyana: 'fantastic',
  akis: 'Amazing',
  ahmed: 'brain not working',
}
// console.log(object(name))

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
  a: input, // 1. change undefined to be the name of the function you defined for the first TODO
  b: smileystring, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: cappystring, // etc
  d: stringNumber,
  e: object,
}