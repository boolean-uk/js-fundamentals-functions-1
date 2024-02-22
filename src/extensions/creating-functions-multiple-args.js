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

function countOrder(a, b) {
  const _outArray = []
  for (var i = a; i <= b; i++)
    _outArray.push(i)
  return _outArray
}

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

function addExclamations(str, num) {
  return str.toUpperCase() + '!'.repeat(num)
}

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

function addTime(str, minutes) {
  var _times = str.split(":")

  // check for invalid input
  if (_times.length !== 2) return '0:00'

  var _hours = parseInt(_times[0])
  var _minutes = parseInt(_times[1])

  _minutes += minutes

  while (_minutes >= 60) {
    _minutes -= 60
    _hours += 1
  }

  _hours %= 24

  return ( _hours === 0 ? '00' : _hours) + ':' + (`${_minutes}`).padStart(2, '0')
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: countOrder, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: addExclamations, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
