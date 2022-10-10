console.log("Eduarda")

//Variaveis
//Responsaveis por guardar dados na memória
//inicia com a palavra var, let ou const

var nome = "Eduarda"
console.log(nome)

let idade = 18;
console.log(idade)

let idade2 = "18"
console.log(idade2)

const estudo = true;
console.log(estudo)

//Variavel  com vírgula

var nome2 = "Duda", 
    idade3 = 18,
    estuda = true;

//uma variavel sem valor

var precoDoCarro;
console.log(precoDoCarro)

//regras dos nomes das variaveis
/*
    Os nomes das variaveis podem iniciar com $, _, ou letras.
    Podem conter números mas não iniciar com eles.

    Case sensitive
    nome é diferente de NOME, Nome, noMe ...

    Não utilizar palavras reservadas. (tem sua função já pré-definida)
    
    Camel Case
    é comum nomerarmos assim: abrirCaixa
*/

//Exemplos de nomes de variaveis

//Invalido
/*
var #nome;
var fuction;
var 1pessoa;
*/

//Valido

var $selecionar;
var _nome;
var pessoa1passou;

//Declarar

//console.log(data)
//is not defined

//Mudar o valor atribuido
//É possivel mudar os valores atribuidos a variaveis declaradas com var e let. Porém não é possivel  modificar valores das declaradas com const.

var idade4 = 17;
idade4 = 29;
console.log(idade4)

let preco = 50;
preco = 10;
console.log(preco)


//const possuiFaculdade = true;
//possuiFaculdade = false;
//console.log(possuiFaculdade)

//-------------------------------------------------------------------------
//EXERCICIO

//Declarar uma variavel com seu nome
var dUDA = "Eduarda"
console.log(dUDA)

//Declarar uma variavel com sua idade
var MinhaIdade = "18"
console.log(MinhaIdade)

//Declarar uma variavel com sua comida favorita e não atribuir valor
var ComidaFav;
console.log(ComidaFav)

//Atribuir valor a sua comida favorita
var ComidaFav = "Frango com purê de batata"
console.log(ComidaFav)

//Declarar 5 variaveis  diferentes sem valores

var SemValor2;
console.log(SemValor2)

var SemValor3;
console.log(SemValor3)

var SemValor4;
console.log(SemValor4)

var SemValor5;
console.log(SemValor5)

var SemValor6;
console.log(SemValor6)

//Revisão
console.log("Erick")
console.log(2*10)
console.log(2-10)
console.log(2+10)
console.log(10/3)
console.log(10%3)

//Revisão com calculos

var valor1 = 7;
var valor2 = 2;
 var resultado = valor1 + valor2
console.log(resultado)

//