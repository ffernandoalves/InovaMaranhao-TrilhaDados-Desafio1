// O Daniel está aprendendo a programar com seu pai, que é engenheiro 
// de software. Um dia, seu pai pediu que ele criasse um programa 
// simples: receber dois números do usuário e retornar o resultado 
// da multiplicação deles. Para ajudar o Daniel, como seria a implementação 
// desse algoritmo?


function executarDesafio6() {
    let num1 = parseInt(prompt("Primeiro número"));
    let num2 = parseInt(prompt("Segundo número"));
    let mult = num1 * num2;

    alert(`Resultado da multiplicação entre o números fornecidos é: ${mult}`);
}

executarDesafio6();