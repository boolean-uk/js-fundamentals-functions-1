// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function  increments(number){
  let sum =0
  sum =number+1
  return sum
}
let value = increments(1)
console.log(value)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalises (name){
  let upperVlaue = name
  let x = upperVlaue.charAt(0).toUpperCase()

  let y= upperVlaue.slice(1)
  let sum= x + y
return sum 

}
let z=capitalises('world')

console.log(z)


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


function myname (name){
  let upperVlaue = name
  let x = upperVlaue.charAt(0).toUpperCase()

  let y= upperVlaue.slice(1)
  let sum= x + y
return 'Hi, '+sum+' :)'

}
let smiley =myname('edward')


console.log(smiley)




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

function stringInArray(arrayName){
let count =0

for (let i=0; i<arrayName.length;i++){
if (typeof arrayName[i] ==='string'){
  count= count+1
console.log(count)
}
}
return count
}
let numArray  =stringInArray([1, 'edward'])
console.log( numArray)
 


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

function object1(value)
{
  if (value.edward ){
  return value
  }else{
    value.edward= 'amazing'
    return value 
  }
}
let result3 = object1({})

console.log(result3)


// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a:  increments, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: myname, // etc
  d: stringInArray,
  e:  object1
}
