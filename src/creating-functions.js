// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increments(number) {
  let extraNumber = number + 1
return extraNumber
}

const number1 = increments(1)

const number2 = increments(2)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalises(word) {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1)
  return newWord
  // const firstCapChar =firstChar.toUpperCase()

  // console.log(  firstChar.toUpperCase()  )
}
capitalises('hello')

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

function smiley(name) {
  let newWord = name.charAt(0).toUpperCase() + name.slice(1)
  return `Hi, ${newWord} :)`
}
smiley("edward")

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
function arrayLength(list){
  
  let numberOfStrings = 0
  
  // console.log(`lenght : ${lengthOfList}`)
  for(let i=0 ; i<=list.length ;i++){

    // console.log(i)

    if(typeof list[i] === "string"){

      numberOfStrings++

    }
    // console.log(lengthOfArray)
  }
  console.log(numberOfStrings)

  return numberOfStrings

}
arrayLength(['edward'])
arrayLength(['edward','aiyana','as'])
arrayLength([1])
arrayLength([1, 'edward'])
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

function objAndPro(obj){

let edwardAndAmazing = {'edward':'amazing'}

const result = Object.assign(edwardAndAmazing,obj)
return result

}

objAndPro({})
objAndPro({'aiyana' : 'fabulous'})
objAndPro({'edward' : 'fabulous'})

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increments, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: arrayLength,
  e: objAndPro
}
