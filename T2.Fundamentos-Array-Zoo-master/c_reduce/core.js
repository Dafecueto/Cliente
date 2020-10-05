function sum(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return array.reduce(reducer);
}

function productAll(array) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  const mat2 = array.map(arr => arr.reduce(reducer));
  return mat2.reduce(reducer);
}

function objectify(array) {
  // your code here
}

function luckyNumbers(array) {
  const reducer = (accumulator, currentValue) => accumulator + ", " + currentValue.toString();
  const reducer2 = function (accumulator, currentValue) {
    array.indexOf(currentValue) == array.lenght ? accumulator + ", and " + currentValue : accumulator + ", " + currentValue; 
  }
  const reducer3 = function(valorAnterior, valorActual, indice, vector){
    if (indice == vector.length -1) {
      return valorAnterior.toString() + ", and " + valorActual.toString();
    }
    return valorAnterior.toString() + ", " + valorActual.toString();
  }
  return  "Your lucky numbers are: " + array.reduce(reducer3);
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
