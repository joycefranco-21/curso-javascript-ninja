// teste.js

// 1. Importamos a função que você criou no outro arquivo
// O './' significa "nesta mesma pasta"
const calcular = require('./script');

let testes = [
    { "func": calcular(), "esperado": false },
    { "func": calcular(10), "esperado": 10 },
    { "func": calcular(10, 5), "esperado": 15 },
    { "func": calcular(10, 10, 2), "esperado": 10 },
]

let count = 1;

console.log("=== INICIANDO OS TESTES ===");
testes.forEach(t => { 
    logarResultado(t.func, t.esperado);
})
console.log("=== FIM DOS TESTES ===");

function logarResultado(resultado, resultadoEsperado)
{
    if (resultado === resultadoEsperado) {
        console.log("✅ Teste " + count + ": Passou!");
    } else {
        console.log("❌ Teste " + count + ": Falhou. Recebido: " + resultado);
    }
    count++;
}