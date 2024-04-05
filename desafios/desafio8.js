// Um contador pretende automatizar a folha salarial dos seus 
// funcionários para economizar mais tempo. Para isso, solicitou 
// a você um um programa que some todos os salários em uma lista. 
// Logo, implemente um algoritmo que receba do contador uma lista 
// de salários e calcule a soma deles. Posteriormente ao cálculo, 
// o algoritmo deve imprimir o salário total da folha de pagamento.


function executarDesafio8() {
    let salarios = [];
    let qtdFunc = parseInt(prompt("Quantidade de funcionários: "));
    let contaFunc = 0;
    while (contaFunc < qtdFunc) {
        salarios.push(parseFloat(prompt(`Salário do funcionário [${contaFunc+1}]: `)));
        contaFunc++;
    }
    let total = 0;
    for (let salario of salarios) {
        total += salario;
    }
    alert(`Salário total da folha de pagamento é: ${total}`);
}

executarDesafio8();