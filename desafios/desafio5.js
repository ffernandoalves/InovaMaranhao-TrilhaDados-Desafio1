// Suponha que o seu primo tenha interesse em produzir um algoritmo 
// que imprima os números de 20 até 1 em ordem decrescente e pediu 
// ajuda a você. Como você implementaria esse algoritmo?


function executarDesafio5() {
    alert("Veja o resultado no Console");
    let starNum = 20;
    let endNum = 1;
    for (let i = starNum; i >= endNum; i--) {
        console.log(`${i}`);
    }
}

executarDesafio5();