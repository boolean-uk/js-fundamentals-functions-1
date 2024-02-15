function addOne(num) {
  return num + 1
}

function capitaliseWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function addSmiley(name) {
  return 'Hi, ' + capitaliseWord(name) + ' :)'
}

function countStrings(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      count++
    }
  }
  return count
}

function addEdwardProperty(obj) {
  if (!obj.hasOwnProperty('edward')) {
    obj.edward = 'amazing'
  }
  return obj
}

module.exports = {
  a: addOne,
  b: capitaliseWord,
  c: addSmiley,
  d: countStrings,
  e: addEdwardProperty
}
