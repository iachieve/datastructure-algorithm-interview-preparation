function notPalindrome(str) {
  return str !== str.split('').reverse().join('');
}

function buildPalindrome(st) {
  var i = 0;
  var aux;
  while (notPalindrome(st)) {
    aux = st.split('');
    aux.splice(st.length - i, 0, st[i]);
    st = aux.join('');
    i++;
  }
  return st;
}