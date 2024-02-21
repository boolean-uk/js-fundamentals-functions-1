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
function allNumberArray(lower, upper) {
  const a = []
  const length = upper - lower + 1
  for (let i = 0; i < length; i++) {
    a[i] = lower + i
  }
  return a
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
function stringExclamation(s, n) {
  let ss = s.toUpperCase()
  for (let i = 0; i < n; i++) {
    ss += '!'
  }
  return ss
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
function addTime(stringInput, numberInput) {
  let minString = ''
  let hrString = ''

  const subMin = stringInput.substring(
    stringInput.length - 2,
    stringInput.length
  )
  const min = parseInt(subMin)
  console.log('const min: ' + min)

  let hr = 0
  if (stringInput.charAt(1) === ':') {
    hr = parseInt(stringInput.charAt(0))
  } else {
    hr = parseInt(stringInput.substring(0, 2))
  }
  console.log('const hr: ' + hr)

  const totalMin = numberInput + min
  console.log('const totalMin: ' + totalMin)

  if (totalMin > 60) {
    const extraMin = totalMin % 60
    console.log('const extraMin: ' + extraMin)
    const extraHr = parseInt(totalMin / 60)
    console.log('const extraHr: ' + extraHr)

    // lägg till nya minuter
    minString = extraMin.toString()

    const newHr = hr + extraHr

    if (newHr > 23) {
      // hur många extra timmar
      const extraNewHr = newHr - 24

      hrString = extraNewHr.toString()
    } else {
      // om timme ej går över 23
      hrString = newHr.toString()
    }
  } else {
    // om hr ej överskrider 23 och min ej överskrider 60, lägg till som vanligt
    hrString = hr.toString()
    minString = (min + numberInput).toString()
  }

  if (hrString === '0') {
    hrString = '0' + hrString
  }

  if (minString.length < 2) {
    minString = '0' + minString
  }

  const newTime = hrString + ':' + minString
  return newTime
}

console.log(addTime('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: allNumberArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: stringExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
