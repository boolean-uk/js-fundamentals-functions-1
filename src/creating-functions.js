// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function addsOne(num) {
  return num + 1
}
console.log(addsOne(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function addsCap(string) {
  const capitalString = string[0].toUpperCase()
  return capitalString + string.slice(1)
}
console.log(addsCap('Hello'))

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
function addSmiley(string) {
  const name = string[0].toUpperCase()
  return 'Hi, ' + name + string.slice(1) + ' :)'
}
console.log(addSmiley('edward'))

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

const array = ['Edward', 'Aiyana', 4, 6, 'Jason', 10]
function stringCount() {
  let nonStringCount = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      nonStringCount = nonStringCount + 1
    }
  }
  return nonStringCount
}
console.log(stringCount())
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

let object = { 

}
 console.log(object)
 function changeObject() {
   let properties = Object.keys(object)
   for (let i = 0; i <= properties.length; i++) {
   if ((properties[i] === 'edward') && (object[properties[i]] === 'amazing')) {
           object.edward = 'amazing'
         } else if ((properties[i] !== 'edward') && (object[properties[i]] !== 'amazing')) {
           object.edward = 'amazing'
     }
   }
   return object
 }
 
 console.log(changeObject())

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addsOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: addsCap, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: addSmiley, // etc
  d: stringCount,
  e: changeObject
}
