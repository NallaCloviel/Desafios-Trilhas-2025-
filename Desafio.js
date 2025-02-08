// Programa Trilhas 2025
// Aluna: Nargylla Fernanda Cloviel Lima
// Formação: Ciência de Dados

// Questão 1:

let nome = "Nargylla";
console.log(nome);

// Questão 2:

let idade = 25;
let altura = 1.75;
console.log("Idade: " + idade + " e Altura: " + altura);


// Questão 3:

let preco = 50.00;
let desconto = 0.2;
let preco_final = preco - (preco*desconto);
console.log("Preço final: R$" + preco_final);

//Questão 4:

let temperatura = 30;
if (temperatura > 25) {
    console.log("Está calor");
} else {
    console.log("Está fresco!");
}

//Questão 5:

let idade = 20;
if (idade >= 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}

// Questão 6:

let nota = 8;
if (nota >= 7){
    console.log("Aprovado");
}else if (nota < 6 && nota > 5){
    console.log("Recuperação");
}else{
    console.log("Reprovado");
}

//Questão 7

let numero1 = 3;
let numero2 = 7;

if (numero1 == numero2){
    console.log("Os números são iguais");
} else (
    console.log("Os números são diferentes");
)

//Questão 8

let nome = "Nargylla";
let idade = 20;
console.log("Olá, meu nome é "+ nome + " e eu tenho " + idade + "anos.")

//Questão 9

let numero = 0;
while (numero <= 10){
    console.log(numero);
    numero++;
}

//Questão 10

let numero = prompt("Digite um número: ");
while (numero != 5) {
    numero = prompt("Digite um número: "); 
}
console.log("Você digitou o número 5. Fim!");

//Questão 11

let numero = 7;
let i = 0;
while (i <= 10){
    i++
    console.log(numero + " x " + i + " = " + (numero * i))
}

//Questão 12

for (let i = 0; i<= 20; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

//Questão 13

function calcularArea(raio){
    const pi = 3.14; 
    return pi * (raio * raio); 
}

let raio = prompt("Digite o raio do círculo (em metros): ");
let area = calcularAreaCirculo(raio);
console.log("A área do círculo com raio " + raio + " é: " + area + "m");

//Questão 14

//Declaração de uma variável chamada numero1 que recebe um valor inserido pelo usuário por meio do prompt.
let numero1 = prompt("Digite um número: ");

//Transformando a variável em um float porque vindo por meio do prompt fica como string.
//Declarando como float para dar liberdade ao usuário de somar números decimais também.
numero1 = parseFloat(numero1); 

//Declaração de uma variável chamada numero2 que recebe um valor inserido pelo usuário por meio do prompt.
let numero2 = prompt("Digite mais um número: ");

//Transformando a variável em um float porque vindo por meio do prompt fica como string.
numero2 = parseFloat(numero2);

//Criação da variável soman e fazendo a operação de somar os números
let soma = (numero1 + numero2);

//Utilização do console.log para imprimir o resultado.
console.log(soma)

//Questão 15
function somar(numero1, numero2) {
    return numero1 + numero2;
}

function resultado(resultado) {
    console.log(resultado);
}

const numero1 = 10;
const numero2 = 20;

const soma = somar(numero1, numero2);

resultado(soma);
