let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número é menor');
        } else {
            exibirTextoNaTela ('p', 'O número é maior')
        }
        tentativas++;
        limparCampo()
    }
}
        
  
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random () * numeroLimite + 1);
    let quantitadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if (quantitadeDeNumerosEscolhidos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

       if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
       } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
       }
    }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
        {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', 'Selecione um número de 1 a 100');
}