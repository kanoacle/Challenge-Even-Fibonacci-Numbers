/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs ( maxFibValue ) {
  var sum = 0;
  var fib = [0, 1];

  while ( fib[fib.length - 1] <= maxFibValue) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    if (fib[fib.length - 1] % 2 === 0){
      sum += fib[fib.length - 1];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};