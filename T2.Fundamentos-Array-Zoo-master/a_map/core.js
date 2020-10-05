function multiplyBy10(array) {
  return array.map(value => value*10);
}

function shiftRight(array) {
  const lastIndex = array[array.length-1];
  return array.map((el, index) => index < array.length-1 ? array[index+1] = el : array[0] = lastIndex)
}

function onlyVowels(array) {
  return array.map(str => str.replace(/[^aeiou]/g, function(i) {
    return i = "";
  }))
}

function doubleMatrix(array) {
  return array.map(arr => arr.map(val => val*2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
