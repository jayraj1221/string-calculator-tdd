function add(numbers) {
  if (!numbers) return 0;

  const values = tokenize(numbers);
  const sum = values.reduce((acc, num) => acc + parseInt(num), 0);
  
  return sum;
}

function tokenize(input) {
  const delimiterRegex = /[,\n]/;
  return input
    .split(delimiterRegex)
    .map(n => n.trim())
    .filter(n => n !== "");
}

module.exports = add;

