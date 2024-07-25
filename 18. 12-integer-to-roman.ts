function intToRoman(num: number): string {
  let result = '';
  const mappings = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  for (let i = 0; i < mappings.length; i++) {
    const quotient = Math.floor(num / mappings[i].value);
    for (let j = 0; j < quotient; j++) {
      result += mappings[i].symbol;
    }
    num %= mappings[i].value;
  }
  return result;
};

console.log(intToRoman(1994))
