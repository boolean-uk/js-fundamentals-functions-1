// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below

function sortingNumbers (num1, num2){
  const array = [num1]
  let mid = num1
  for (let i = 1; i < num2 - num1; i++){
    mid = mid + 1
    array.push(mid)

  }
  array.push(num2)
  return array
}

const result = sortingNumbers(-1,1)
console.log(result)

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

function shoutingReallyLoud(str, num){
  const upperCase = str.toUpperCase()
  let shout = ""
    for (let i = 0; i < num; i++){
      shout += '!'
    }
  return upperCase + shout
      
}

const result2 = shoutingReallyLoud('disaster', 5)
console.log(result2)

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function newTime(str, num) {
  let oldTime = str
  let oldTimeMin = Number(str.slice(-2))
  // console.log(oldTimeMin)
  let oldTimeHr = Number(str.slice(0, -3))
  oldTimeHr = oldTimeHr * 60
  // console.log(oldTimeHr)
  let minute = num
  let newMin = minute + oldTimeHr + oldTimeMin
  // console.log(newMin)
  let newHr = Math.floor(newMin / 60)
  // console.log(newHr)
  newMin = newMin % 60
  // console.log(newMin)
  if (newHr >= 24){
    newHr = newHr - 24
  }
  if (newHr === 0){
    newHr = '0' + String(newHr)
  } else{
    newHr = String(newHr)
  }
  if (newMin < 10){
  newMin = '0' + String(newMin)
  } else{
    newMin = String(newMin)

  }
  // newHr = String(newHr)
  
  return newHr + ":" + newMin  
}

const result3 = newTime('23:50', 30)

console.log(result3)



// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: sortingNumbers, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shoutingReallyLoud, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
