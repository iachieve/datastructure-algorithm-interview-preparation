/*  
test command:
  jest interview-questions-recursion/test/getNthFib.test.js --watch
*/

function getNthFib(n) {
  if(n ===2) return 1;
  if(n === 1) return 0;
  return getNthFib(n - 1) + getNthFib(n - 2);

}

module.exports = getNthFib;