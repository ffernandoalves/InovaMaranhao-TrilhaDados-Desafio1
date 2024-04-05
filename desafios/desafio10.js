// A Alura pretende aumentar o salário dos seus colaboradores e, 
// para isso, propus a você a criação de um algoritmo que acrescente:
//         - 10%, se o salário for menor ou igual a R$ 2000;
//         - 5%, se for maior a R$ 5000 e menor que R$ 10000;
//         - 2%, se for maior  que R$10000 e menor que R$15000.
// Após a operação, o algoritmo deve imprimir na tela o valor original 
// antes do aumento e o valor com aumento.


function executarDesafio10() {
    let salario = parseFloat(prompt('Informe o salário'));
    let novoSalario;
    if (salario<=2000) {
        novoSalario = salario+salario*0.1;
        alert(`Valor do salário sem aumento R$ ${salario}, valor do salário com aumento R$ ${novoSalario}`);
    } else if (salario>5000 && salario<10000) {
        novoSalario = salario+salario*0.05;
        alert(`Valor do salário sem aumento R$ ${salario}, valor do salário com aumento R$ ${novoSalario}`);
    } else if (salario>10000 && salario<15000) {
        novoSalario = salario+salario*0.02;
        alert(`Valor do salário sem aumento R$ ${salario}, valor do salário com aumento R$ ${novoSalario}`);
    }
}

executarDesafio10();