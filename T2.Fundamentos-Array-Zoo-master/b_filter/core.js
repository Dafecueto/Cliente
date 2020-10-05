function onlyEven(array) {
  return array.filter(val => val % 2 == 0)
}

function onlyOneWord(array) {
  const withoutBlank = function() {

  }
 return array.filter(str => !str.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter(arr => arr.every(val => val > -1));
}

function allSameVowels(array) {
  return array.filter(el => 
    (el.includes("a") && !el.includes("e") && !el.includes("i") && !el.includes("o") && !el.includes("u"))
    || (el.includes("e") && !el.includes("a") && !el.includes("i") && !el.includes("o") && !el.includes("u"))
    || (el.includes("i") && !el.includes("a") && !el.includes("e") && !el.includes("o") && !el.includes("u"))
    || (el.includes("o") && !el.includes("a") && !el.includes("i") && !el.includes("e") && !el.includes("u"))
    || (el.includes("u") && !el.includes("a") && !el.includes("i") && !el.includes("o") && !el.includes("e")))
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
