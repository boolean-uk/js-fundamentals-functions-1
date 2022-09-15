// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementsByOne(number) {
  return ++number
}
incrementsByOne(1)
incrementsByOne(1)

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
function hiWithSmile(name) {
  const firstLetterUpperCase = name[0].toUpperCase()
  const restOfName = name.slice(1)
  return `Hi, ${firstLetterUpperCase + restOfName}:)`
}
hiWithSmile('edward')

// TODO: change undefined below to be the name of the functions you defined
module.exports = {
  a: undefined, // 1. change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: undefined // 2. change undefined to be the name of the function you defined to say hi (the second TODO)
}
