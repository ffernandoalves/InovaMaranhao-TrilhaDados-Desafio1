// A professora Sandra pretende automatizar o resultado da nota 
// de um aluno de ensino médio e solicitou-lhe que crie um programa 
// que receba três notas finais e que apareça para ela "Aprovado", 
// se a média estiver entre 7 e 10.  Caso a média for menor que 7 
// e maior ou igual a 0, o programa deve imprimir na tela "Reprovado".


function executarDesafio3() {
    let qtdNotas = 3;
    let contaNota = 0;
    let soma = 0;

    while (contaNota < qtdNotas) {
        soma += parseFloat(prompt(`Nota ${contaNota+1}:`));
        contaNota++;
    }

    let media = soma/qtdNotas;
    if (0 <= media && media < 7) {
        alert("Reprovado");
    } else if (7 <= media && media <= 10) {
        alert("Aprovado");
    }
}

executarDesafio3();