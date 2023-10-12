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
function numarray(num1, num2) {
  array = []
  for (i = num1; i <= num2; i++) {
    array.push(i)
  }
  return array
}

test1 = numarray(1, 10)
console.log(test1)

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

// let string = 'abc'
// let marks = '!'.repeat(5)
// console.log(string.toUpperCase())
// console.log(string + marks)

function exclamation(string, number) {
  let marks = '!'.repeat(number)
  let text = string.toUpperCase()
  return text + marks
}

test2 = exclamation('disaster', 5)
console.log(test2)

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

function newtime(stringtime, number){
  let addtime = number
  const [hour, minutes] = stringtime.split(':')
  let start_h = Number(hour)
  let start_m = Number(minutes)
  
  // everything in minutes
  let mins = start_m + (start_h * 60) + addtime
  
  // check how many hours
  let new_h = Math.floor(mins / 60)
  new_h = new_h > 23 ? new_h - 24 : new_h 
  new_h = new_h == 0 ? '0' + new_h : new_h
  
  // check how many minutes
  let new_m = mins % 60
  new_m = new_m < 10 ? '0' + new_m : new_m

  // the new time
  let new_time = new_h + ":" + new_m
  return new_time
}

test3 = newtime('00:50', 30)
console.log(test3)

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numarray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newtime // etc
}
