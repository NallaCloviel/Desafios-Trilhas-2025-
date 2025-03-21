// Programa Trilhas 2025
// Aluna: Nargylla Fernanda Cloviel Lima
// Formação: Ciência de Dados

//Parte 1 - ALGORITMO E LÓGICA DE PROGRAMAÇÃO

//Questão 1 

let numero;

while (numero !== 3) {
    numero = parseInt(prompt("Digite um número (digite 3 para sair):"), 10);
}

console.log("Programa encerrado.");

//Questão 2

let senha = "0209"; 
let tentativa;
let tentativasRestantes = 3;

do {
    tentativa = prompt("Digite a senha de acesso: ");

    if (tentativa === senha) {
        console.log("Acesso concedido!");
        break;
    } else {
        tentativasRestantes--;
        console.log("Senha incorreta. Tente novamente");
    }
} while (tentativasRestantes > 0);

if (tentativasRestantes === 0) {
    console.log("Senha bloqueada!");
}

//Questão 3

let numeros = [2, 4, 12, 14];
console.log("Lista de números:");
numeros.forEach(numero => console.log(numero));

//Questão 4

let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`), 10);
    numeros.push(numero);
}

console.log("Lista de números inseridos:");
numeros.forEach(numero => console.log(numero));

//Questão 5

function mensagemPersonalizada() {
    return "Bem-vindo, espero que você aproveite bastante!";
}

console.log(mensagemPersonalizada());


//Questão 6

function mensagemPersonalizada(nome) {
    return `Olá, ${nome}, que bom ter você no programa Trilhas.`;
}

//Exemplo
let nome = "Nargylla";
console.log(mensagemPersonalizada(nome));


//Questão 7

function calcularQuadrado(numero) {
    return numero * numero;
}
//exemplo
let numero = 3;
console.log(calcularQuadrado(numero)); 


//Questão 8

function Subtracao(numero1, numero2) {
    return numero1 - numero2;
}

// exemplo
let resultado = Subtracao(12, 2);
console.log(resultado);  

