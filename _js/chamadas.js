function busca(tecla){
    if (tecla.keyCode ==13) {
        window.alert("busca ainda não implantado")
    }

}

function BuscaEstilo() {
    /* Função para dimensionar o frame do Estilo */
    TamanhoFrame("700")

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
  Se estilo = 1 - ROCK
              2 - POP
              3 - INFANTIL
              4 - Samba e salsa
              5 - Acustico
              6 - Reggae
              7 - DANCE
              8 - MPB
              9 - Coral
              10 - Blues
              11 - Hard Rock
              12 - Contry
              13 - Baião e XOTE
              14 - SALSA
              15 - INSTRUMENTAL

  */
  window.alert("chequei")
}
