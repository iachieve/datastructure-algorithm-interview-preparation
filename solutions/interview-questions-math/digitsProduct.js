function digitsProduct(product) {
  function digitsProduct(num) {
    let prod = 1;
    while (num) {
      prod *= num % 10;
      num = Math.floor(num / 10);
    }
    return prod;
  }
  for (let i = 0; i < 1000; i++) {
    if (digitsProduct(n) === product) return n;
  }
  return -1;
}


function digitsProduct(product) {
  function digitsProduct(num) {
    // return [...num.toString()].map(x=> parseInt(x)).reduce((a, b) => a * b);
    return [...num.toString()].reduce((a, b) => a * b);
  }
  for (let i = 0; i < 1000; i++) {
    if (digitsProduct(n) == product) return n;
  }
  return -1;
}



function digitsProduct(product) {
  if (product === 0) return 10;
  if (product === 1) return 1;

  let factors = [];
  for (let factor = 9; factor > 1; factor--) {
    while (product % factor === 0) {
      factors.push(factor);
      product /= factor;
    }
  }

  if (product > 1) return -1;
  return parseInt(factors.reverse().join(''))
}


module.exports = digitsProduct;