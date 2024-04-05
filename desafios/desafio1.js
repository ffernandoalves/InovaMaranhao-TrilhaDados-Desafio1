// O Supervisor do Sando lhe solicitou que crie um programa que exiba uma 
// mensagem personalizada para todas as pessoas que visitam a empresa. O 
// programa deve solicitar o nome das visitas e imprimir uma mensagem de 
// boas-vindas, da seguinte forma: "Olá, [nome], seja bem-vindo(a) à nossa 
// empresa". Caso o nome não seja fornecido, imprima a seguinte 
// mensagem: "Desculpe, nenhum nome fornecido!"

function executarDesafio1() {
    let nomeUsuario = prompt("Digite o nome do usuario: ");

    if ((nomeUsuario == "") || (nomeUsuario[0] == " ")) {
        // caso seja digitado espaço e depois enter
        alert("Desculpe, nenhum nome fornecido!");
    } else {
        alert(`Olá, ${nomeUsuario}, seja bem-vindo(a) à nossa empresa`);
    }
}

executarDesafio1();