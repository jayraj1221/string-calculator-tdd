function add(numbers) {
  if (!numbers) return 0;

  const values = tokenize(numbers);
  const negatives = values.filter(n => parseInt(n) < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return values.reduce((sum, num) => sum + parseInt(num), 0);
}

function tokenize(input) {
  const { delimiters, numberSection } = extractDelimitersAndNumbers(input);
  const delimiterRegex = new RegExp(delimiters.join('|'));

  return numberSection
    .split(delimiterRegex)
    .map(n => n.trim())
    .filter(n => n !== "");
}

function extractDelimitersAndNumbers(input) {
  const defaultDelimiters = [",", "\n"];

  if (input.startsWith("//")) {
    // Match multi-char delimiter: //[***]\n
    const multiCharMatch = input.match(/^\/\/\[(.+)]\n(.*)/);
    if (multiCharMatch) {
      return {
        delimiters: [escapeRegExp(multiCharMatch[1]), "\n"],
        numberSection: multiCharMatch[2],
      };
    }

    // Match single-char delimiter: //;\n
    const singleCharMatch = input.match(/^\/\/(.)\n(.*)/);
    if (singleCharMatch) {
      return {
        delimiters: [escapeRegExp(singleCharMatch[1]), "\n"],
        numberSection: singleCharMatch[2],
      };
    }
  }

  return {
    delimiters: defaultDelimiters.map(escapeRegExp),
    numberSection: input,
  };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = add;
