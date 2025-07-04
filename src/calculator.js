function add(numbers) {
  if (!numbers) return 0;

  const values = tokenize(numbers);
  const negativeNumbers = values.filter(n => parseInt(n) < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
  }

  return values.reduce((sum, num) => sum + parseInt(num), 0);
}


function tokenize(input) {
  let delimiterRegex = /[,\n]/;
  let numberSection = input;

  const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)/);

  if (customDelimiterMatch) {
    const customDelimiter = customDelimiterMatch[1];
    numberSection = customDelimiterMatch[2];
    delimiterRegex = new RegExp(`[${customDelimiter}\n]`);
  }

  return numberSection
    .split(delimiterRegex)
    .map(n => n.trim())
    .filter(n => n !== "");
}

module.exports = add;
