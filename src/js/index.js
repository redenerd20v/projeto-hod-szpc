document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.carrossel .imagem');
    const informacoes = document.querySelectorAll('.conteudo .informacoes');
    const botoesCarrossel = document.querySelectorAll('.botoes-carrossel .botao');
    let indiceAtivo = 0;
    let intervalo;

    function atualizarCarrossel() {
        // Remove a classe ativa da imagem e informação atuais
        imagens.forEach((img, index) => {
            img.classList.toggle('ativa', index === indiceAtivo);
        });
        informacoes.forEach((info, index) => {
            info.classList.toggle('ativa', index === indiceAtivo);
        });
        botoesCarrossel.forEach((botao, index) => {
            botao.classList.toggle('selecionado', index === indiceAtivo);
        });
    }

    function proximo() {
        indiceAtivo = (indiceAtivo + 1) % imagens.length;
        atualizarCarrossel();
    }

    function anterior() {
        indiceAtivo = (indiceAtivo - 1 + imagens.length) % imagens.length;
        atualizarCarrossel();
    }

    function iniciarIntervalo() {
        intervalo = setInterval(proximo, 3000); // Muda a imagem a cada 3 segundos
    }

    function pararIntervalo() {
        clearInterval(intervalo);
    }

    botoesCarrossel.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            pararIntervalo();
            indiceAtivo = index;
            atualizarCarrossel();
            iniciarIntervalo();
        });
    });

    // Inicia o carrossel
    atualizarCarrossel();
    iniciarIntervalo();
});
