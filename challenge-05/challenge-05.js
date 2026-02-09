/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
let sampleValues = [ 2, 'test', true, 2.5, 'joyce' ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function sampleFunction(arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
// console.log(sampleFunction(sampleValues)[1]);
// console.log(sampleValues[0]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 
function randomFunction(arr, number) {
    if (!Array.isArray(arr)) {
        return 'The argument needs to be an Array!';
    }

    if (number < 0 || number >= arr.length || !Number.isInteger(number)) {
        return 'Error: the index does not exist.'
    }
    
    return arr[number];
};

// TESTES
// console.log(randomFunction([1, 2, 3], 0));
// console.log(randomFunction([1, 2, 3], 3.14));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
//

let randomVar = [2, 'hello', false, 2.5, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
// console.log(sampleFunction(randomVar));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// 
function book(bookName) {
    const bookTitle = {
        ulysses : {
            quantidadePaginas: 300,
            autor: 'James Joyce',
            editora: 'Arqueiro'
        },

        verity: {
           quantidadePaginas: 350,
           autor: 'Coleen Hoover',
           editora: 'Record'
        },

        domCasmurro: {
            quantidadePaginas: 208,
            autor: 'Machado de Assis',
            editora: 'Principis'
        }
    };
    
    if (!bookName) {
        return bookTitle;
    };

    return bookTitle[bookName];

}

console.log(book('domCasmurro'));


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
const livro = 'ulysses';
console.log(`O livro ${livro} tem ${book('ulysses').quantidadePaginas} páginas!`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
