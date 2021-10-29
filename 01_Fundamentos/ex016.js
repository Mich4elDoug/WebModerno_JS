/*
Exercício 016:

Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação.

Por exemplo: 
    
    calculadora (2, ‘+’, 3). 
    A função efetuará a soma de 2 e 3. 

Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(num1, op, num2){

    num1 = Number(num1)
    num2 = Number(num2)

    switch(op){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2            
        case '/':    
            return num1 / num2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(10, '+', 2))
console.log(calculadora(10, '-', 2))
console.log(calculadora(10, '*', 2))
console.log(calculadora(10, '/', 2))
console.log(calculadora(10, 'a', 2))