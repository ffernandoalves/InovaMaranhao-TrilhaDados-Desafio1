// A Clara criou um formulário para recolher as informações pessoais 
// de seu cliente e deseja que a idade apareça na tela assim ele 
// informe o ano de nascimento. Então, ela o solicitou a elaboração 
// de um algoritmo que retorne a idade da pessoa, baseada no ano de 
// nascimento fornecido. Crie um algoritmo que execute essa tarefa.


function executarDesafio9() {
    let anoAtual = 2024;
    let anoNascimento = parseInt(prompt("Ano de nascimento: "));
    let idade = anoAtual - anoNascimento;
    alert(`Idade: ${idade}`);
}

executarDesafio9();