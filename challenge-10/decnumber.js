function countDigits(n) {
  n = Math.abs(n);
  n = String(n);
  return n.length;
}

// function countDigits(n) {
//   let count = 0;
//   n = Math.abs(n);

//   if (n < 10) {
//     return 1;
//   }

//   while (n >= 1) {
//     n = Math.trunc(n / 10);
//     count++;
//   }

//   return count;
// }

function test(input, expected) {
  const result = countDigits(input);
  console.log(
    `Input: ${input} | Expected: ${expected} | Got: ${result} |`,
    result === expected ? "PASS" : "FAIL",
  );
}

test(0, 1); // 0 has 1 digit
test(5, 1); // single digit
test(10, 2);
test(99, 2);
test(100, 3);
test(12345, 5);
test(-1000, 4); // negative number
test(1000000, 7);
