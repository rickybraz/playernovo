function busca(tecla){
    if (tecla.keyCode ==13) {
        window.alert("busca ainda não implantado")
    }

}

function BuscaEstilo() {
    /* Função para dimensionar o frame do Estilo */
    TamanhoFrame("400")

}

function BuscaArtista() {
    window.alert("oi")
}

function BuscaAlbuns() {
    window.alert("oi")
}


function TamanhoFrame(valor) {
    /* Redimensiona o iframe com os parametros passados pelo tamanho informado */
    var index = document.getElementById("JanelaFrame")
    index.style.height = valor + "px"
}

function AbrePlayer(busca,frase) {
  /* Faz a montagem da playlist e chama a pagina do player
  busca = 1-Estilo, 2-Autor 3- Estilo
  frase = Expresão de busca dentro da opção de busca
  */
}
