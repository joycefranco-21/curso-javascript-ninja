/* Dado um array de números, você deve:
Retornar:
- O número que mais se repete

Exemplo:
const numbers = [4, 2, 7, 4, 2, 4, 9, 7, 2, 2, 7];
Saida:   2
*/

function mostFrequent(numbers) {
  // 4, 2, 7, 4, 2, 4, 9, 7, 2, 2, 7
  let unicos = {};

  for (i = 0; i < numbers.length; i++) {
    if (unicos[numbers[i]] === undefined) {
      unicos[numbers[i]] = 1;
    } else {
      unicos[numbers[i]]++;
    }
  }

  let max = 0;
  let resposta = null;

  for (i = 0; i < numbers.length; i++) {
    if (unicos[numbers[i]] > max) {
      max = unicos[numbers[i]];
      resposta = numbers[i];
    }
  }

  return resposta;
}

//console.log(mostFrequent([4, 2, 7, 4, 2, 4, 9, 7, 2, 2, 7]));

// ===== Minimal Test Framework =====
function assertEqual(actual, expected, description) {
  if (actual === expected) {
    console.log(`✔ PASS - ${description}`);
  } else {
    console.error(`❌ FAIL - ${description}`);
    console.error(`   Expected: ${expected}`);
    console.error(`   Received: ${actual}`);
  }
}

// ===== Unit Tests =====

console.log("Running Unit Tests...\n");

// 1. Example case
assertEqual(
  mostFrequent([4, 2, 7, 4, 2, 4, 9, 7, 2, 2, 7]),
  2,
  "Should return 2 as most frequent",
);

// 2. All equal
assertEqual(
  mostFrequent([5, 5, 5, 5]),
  5,
  "Should return 5 when all elements are equal",
);

// 3. All unique (returns first)
assertEqual(
  mostFrequent([1, 2, 3, 4]),
  1,
  "Should return first element when all are unique",
);

// 4. Negative numbers
assertEqual(
  mostFrequent([-1, -1, 2, 2, 2]),
  2,
  "Should handle negative numbers",
);

// 5. Empty array
assertEqual(mostFrequent([]), null, "Should return null for empty array");

console.log("\nTests finished.");
