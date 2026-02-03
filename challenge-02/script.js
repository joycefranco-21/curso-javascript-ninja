// function sumCalculation(x, y) {
//     return x + y;
// }
// console.log(sumCalculation(2, 5))

function calculate(a, b, c) {
  if (a === undefined && b === undefined && c === undefined) {
    return false;
  }
  if (b === undefined && c === undefined) {
    return a;
  } else if (c === undefined) {
    return a + b;
  } else if (a !== undefined && b !== undefined && c !== undefined) {
    return (a + b) / c;
  }
  return null;
}

console.log(calculate());

// module.exports = calculate;