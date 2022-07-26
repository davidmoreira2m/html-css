
//ATIVAR LINKS NO MENu
const links = document.querySelectorAll(".header__menu a");
function ativarLink(link) {
    if (location.href.includes(link.href)) {
        link.classList.add('ativo');
    }
}
links.forEach(ativarLink)

//ATIVAR ITENS ORCAMENTO
const parametros = new URLSearchParams(location.search);
function ativarProduto (parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto)

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta (event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    resposta.classList.toggle('ativa');

    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
}
function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

 
// GALERIA DE BICICLETAS
const galeria = document.querySelectorAll('.bicicleta__imagens img');
const galeriaContainer = document.querySelector('.bicicleta__imagens')

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem) ;
}
galeria.forEach(eventosGaleria) ;

// ANIMACAO
if(window.SimpleAnime) {
    new SimpleAnime();
}