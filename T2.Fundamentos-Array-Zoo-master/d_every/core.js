// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  const isEven = (number) => number % 2 == 0;
  return input.every(isEven);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((val, i, input) => typeof val === typeof input[0]);; 
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {

  return input.every((el) => el.isAnArray = true && el.every(val => val > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every(el => 
     (el.includes("a") && !el.includes("e") && !el.includes("i") && !el.includes("o") && !el.includes("u"))
  || (el.includes("e") && !el.includes("a") && !el.includes("i") && !el.includes("o") && !el.includes("u"))
  || (el.includes("i") && !el.includes("a") && !el.includes("e") && !el.includes("o") && !el.includes("u"))
  || (el.includes("o") && !el.includes("a") && !el.includes("i") && !el.includes("e") && !el.includes("u"))
  || (el.includes("u") && !el.includes("a") && !el.includes("i") && !el.includes("o") && !el.includes("e")))

}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
