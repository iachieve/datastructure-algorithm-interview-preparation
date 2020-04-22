function lineEncoding(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    while (s[i] === s[i + 1]) {
      i++;
      count++;
    }
    res += count > 1 ? `${count}${s[i]}` : `${s[i]}`
  }
  return res;
}