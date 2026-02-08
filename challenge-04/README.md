# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = function (a) {
  return !!a;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy(false);
isTruthy("");
isTruthy(NaN);
isTruthy(null);
isTruthy(undefined);
isTruthy(0n);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy("Oi");
isTruthy(true);
isTruthy([]);
isTruthy({});
isTruthy(1);
isTruthy(-2);
isTruthy("0");
isTruthy(function teste() {
  return "teste";
});
isTruthy("false");
isTruthy(" ");

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro = {
  marca: "fiat",
  modelo: "palio",
  placa: "hah1166",
  ano: 2016,
  cor: "vermelho",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor) {
  this.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
  return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
  return this.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
  return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
  return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
};

console.log(carro.obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionaPessoas = function (pessoas) {
  const lugaresRestantes = this.assentos - this.quantidadePessoas;

  if (this.quantidadePessoas === this.assentos) {
    return "O carro já está lotado!";
  }

  if (pessoas > lugaresRestantes) {
    const pluralPessoas = lugaresRestantes === 1 ? "pessoa" : "pessoas";
    const pluralCabe = lugaresRestantes === 1 ? "cabe" : "cabem";
    return `Só ${pluralCabe} mais ${lugaresRestantes} ${pluralPessoas}!`;
  }

  this.quantidadePessoas += pessoas;
  const pluralFinal = this.quantidadePessoas === 1 ? "pessoa" : "pessoas";
  return `Já temos ${this.quantidadePessoas} ${pluralFinal} no carro!`;
};

carro.removePessoas = function (pessoas) {
  let palavraAtual = this.quantidadePessoas === 1 ? "pessoa" : "pessoas";
  if (this.quantidadePessoas > 0 && pessoas <= this.quantidadePessoas) {
    this.quantidadePessoas -= pessoas;
    let palavraAtual = this.quantidadePessoas === 1 ? "pessoa" : "pessoas";
    return `Já temos ${this.quantidadePessoas} ${palavraAtual} no carro!`;
  }
  return `Não é possivel tirar ${pessoas} ${palavraAtual} do carro, pois só tem ${this.quantidadePessoas} ${palavraAtual}.`;
};

console.log(carro.removePessoas(2));

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()); // rosa

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //"vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // "verde musgo"

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); //"Esse carro é um fiat palio"

// Adicione 2 pessoas no carro.
console.log(carro.adicionaPessoas(2)); //"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionaPessoas(4)); //"Só cabem mais 3 pessoas!"

// Faça o carro encher.
console.log(carro.adicionaPessoas(3)); //"Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
console.log(carro.removePessoas(4));

// Adicione 10 pessoas no carro.
console.log(carro.adicionaPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 1
```
