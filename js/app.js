// Inicializa as quantidades disponíveis
let quantidadePista = 100;
let quantidadeSuperior = 200;
let quantidadeInferior = 400;

// Atualiza os valores
document.getElementById('qtd-pista').innerHTML = quantidadePista;
document.getElementById('qtd-superior').innerHTML = quantidadeSuperior;
document.getElementById('qtd-inferior').innerHTML = quantidadeInferior;

function comprar() {
    // Recupera os valores selecionados pelo usuário
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    // Atualiza as quantidades disponíveis com base no tipo de ingresso
    if (tipoIngresso === 'pista' && quantidade <= quantidadePista) {
        quantidadePista -= quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
    } else if (tipoIngresso === 'superior' && quantidade <= quantidadeSuperior) {
        quantidadeSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
    } else if (tipoIngresso === 'inferior' && quantidade <= quantidadeInferior) {
        quantidadeInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
    } else {
        alert("Quantidade indisponível para o tipo de ingresso selecionado.");
        return;
    }

    // Exibe uma mensagem de confirmação
    alert(`Você comprou ${quantidade} ingresso(s) para ${tipoIngresso}.`);
    // Limpa o campo de quantidade após a compra
    document.getElementById('qtd').value = '';
}
