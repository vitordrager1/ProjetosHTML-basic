let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = []
let tentativas = 6;

const palavras = [
    palavra01={
        nome : "GIRAFA",
        categoria : "ANIMAL"
    },
    palavra02={
        nome : "ZEBRA",
        categoria : "ANIMAL"
    },
    palavra03={
        nome : "GAVIAO",
        categoria : "ANIMAL"
    },
    palavra04={
        nome : "ONITORRINCO",
        categoria : "ANIMAL"
    }
];

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada =  palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    
    
}

criarPalavraSecreta()

function montarCategoriaTela(){
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;
}

function montarPalavraTela(){
    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for (let i = 0; i<palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML+="<div class='letras'>" + listaDinamica[i] + " </div>"
        }
        else{
            palavraTela.innerHTML+="<div class='letras'>" + listaDinamica[i] + " </div>"
        }
    }

}

function verificaLetra(letra){
    document.getElementById('tecla-'+letra).disabled = true
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra)
        comparaLista(letra)
        montarPalavraTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#464646"
    document.getElementById(tecla).style.color = "#fff"
}

function comparaLista(letra){
    const index = palavraSecretaSorteada.indexOf(letra)
    if(index  < 0){
        tentativas--;
        carregaImagem();
        if(tentativas == 0){
            abreModal("OPS!", "Não foi desta vez ... A palavra secreta era <br>"+ palavraSecretaSorteada);
        }

    }else{
        for(let i = 0; i<palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(let i = 0; i<palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }
    if(vitoria == true){
        abreModal("PARABÉNS!", "YOU WIN!");

        tentativas = 0;
    }

}

function carregaImagem(){
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')";
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')";
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')";
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')";
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca06.png')";
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca07.png')";
            break;
        default:
            document.getElementById('imagem').style.background = "url('./img/forca01.png')";
            break;
    
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById('exampleModalLabel')
    modalTitulo.innerText = titulo
    let modalBody = document.getElementById('modalBody')
    modalBody.innerHTML = mensagem
    $("#myModal").modal({
        show:true
    });
}

let restart = document.querySelector("#restart")
restart.addEventListener("click",function(){
    location.reload();
})
montarCategoriaTela();
montarPalavraTela();