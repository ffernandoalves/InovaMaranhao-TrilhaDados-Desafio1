// Escreva um programa que solicita dois números e verifica se o 
// primeiro número é divisível por segundo. Assim sendo, é esperada 
// na saída a impressão da seguinte frase: "O primeiro número é 
// divisível por segundo" Caso contrário, o programa deve exibir 
// "O primeiro número não é divisível pelo segundo".


function executarDesafio7() {
    let num1 = parseInt(prompt("Primeiro número"));
    let num2 = parseInt(prompt("Segundo número"));

    if (num1 % num2 == 0) {
        alert("O primeiro número é divisível por segundo");
    } else {
        alert("O primeiro número não é divisível pelo segundo");
    }
}

executarDesafio7();