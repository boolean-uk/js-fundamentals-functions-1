// 1. define a function that takes two numbers: lower and upper.
// The function should Output:
// Input        | Output
// 1, 3         | [1, return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below


function assOne(lower, upper) {
  let newArr = []

  for (let i = lower; i <= upper; i++) {
    newArr.push(i)
  }
  return newArr
}

assOne(-1, 1)


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


function assTwo(str, num) {
  // console.log(str + " " + num)
  let newStr = str.toUpperCase()
  let exclamation = ""


  for (let i = 0; i < num; i++) {
    exclamation += "!"
  }

  let endText = newStr += exclamation

  // console.log(endText)
  return endText

}

assTwo("value", 4)











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

function assThree(str, num) {
  const [strHours, strMinutes] = str.split(':').map(Number);
  console.log(strHours)
  console.log(strMinutes)
  let zero = "0"
  let hoursToMinutes = strHours * 60
  console.log(hoursToMinutes)

  let totalMinutes = hoursToMinutes + strMinutes + num
  console.log(totalMinutes)

  let reCalcHours = Math.floor(totalMinutes / 60)
  let minLeft = totalMinutes - (reCalcHours * 60)


  console.log(minLeft)


  if (reCalcHours === 24) {
    reCalcHours = 0
  } else if (reCalcHours > 24) {
    reCalcHours = reCalcHours % 24
  }



  console.log(reCalcHours)
  let hoursString = reCalcHours.toString()
  if (hoursString === "0" ||
    hoursString === "1" ||
    hoursString === "2" ||
    hoursString === "3" ||
    hoursString === "4" ||
    hoursString === "5" ||
    hoursString === "6" ||
    hoursString === "7" ||
    hoursString === "8" ||
    hoursString === "9"

  ) {
    hoursString = `${hoursString}`
  }


  let minString = minLeft.toString()

  if (minString === "0" ||
    minString === "1" ||
    minString === "2" ||
    minString === "3" ||
    minString === "4" ||
    minString === "5" ||
    minString === "6" ||
    minString === "7" ||
    minString === "8" ||
    minString === "9"

  ) {
    minString = `0${minString}`
  }
  let newTimeString = hoursString + ":" + minString




  console.log(newTimeString)
  return newTimeString
}



assThree("05:00", 5)






// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: assOne, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: assTwo, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: assThree // etc
}
