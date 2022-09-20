// 1. Define a function that takes a number and increments it by 1.

// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function number(i) {
  return ++i
}
console.log(number(2))
// 2. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smileyHi(name) {
  const upCase = name[0].toUpperCase()
  const restOfName = name.slice(1)
  return `Hi, ${upCase + restOfName} :)`
}
console.log(smileyHi('edward'))
// TODO: change undefined below to be the name of the functions you defined
module.exports = {
  a: number, // 1. change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: smileyHi // 2. change undefined to be the name of the function you defined to say hi (the second TODO)
}
