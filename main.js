const form = document.getElementById('valid-form'); //Obtem o elemento do formulário com o ID valida-form//

let formvalid = false; //variável que mantém o estado de validação do formulário (não utilizada no codigo fornecido)//

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}  //Função que retorna true se campoB for maior que campoA//

form.addEventListener('submit', function (e) {
//Adiciona um ouvinte de evento para o evento de envio do formulário.
    e.preventDefault(); //Impede o comportamento padrão de envio do formulário, que recarregaria a página//
    let campoA = parseFloat(document.getElementById('campoA').value); //Obtém o valor do Campo A como um número//
    let campoB = parseFloat(document.getElementById('campoB').value); //Obtém o valor do Campo B como um número//
}
// PARSEFLOAT: Converte a string obtida em um número de ponto flutuante. Se o conteúdo da string não for um número válido, a função parseFloat() retornará NaN (Not a Number)//

    if (numbervalid(campoA, campoB)){ 
//Verifica se campoB é maior que campoA//
        document.querySelector('.error-message').style.display = 'none'; //Oculta a mensagem de erro//
        document.querySelector('.success-message').style.display = 'block'; //Exibe a mensagem de sucesso//
        campoA.value = ''; //Limpa o campo//
        campoB.value = ''; //Limpa o campo//
    } 
    else { 
//Se a condição não for atendida, exibe a mensagem de erro e oculta a mensagem de sucesso//
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
);