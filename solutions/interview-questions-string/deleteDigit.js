function deleteDigit(n) {
  let potentials = [];
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    potentials.push(Number(arr.slice(0, i).concat(arr.slice(i + 1)).join('')));
  }
  return Math.max.apply(Math, potentials);
}