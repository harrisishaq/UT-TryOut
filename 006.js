function pangkat(x, n) {
  return (n == 1) ? x : (x * pangkat(x, n - 1));
}

console.log(pangkat(5, 3))