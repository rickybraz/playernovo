function busca(tecla){
    if (tecla.keyCode ==13) {
        window.alert("busca ainda não implantado")
    }

}

function BuscaEstilo() {
    /* Função para dimensionar o frame do Estilo */
    TamanhoFrame("700")
    var index = document.getElementById("MenuAlfa")
    index.innerHTML = ' '

}

function BuscaArtista() {
    var index = document.getElementById("MenuAlfa")
    index.innerHTML = `<tr>
                        <td><a href='#' class="fonteSecundaria corPrimaria">A</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">B</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">C</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">D</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">E</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">F</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">G</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">H</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">I</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">J</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">K</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">L</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">M</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">N</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">O</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">P</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">R</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">Q</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">S</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">T</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">U</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">V</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">X</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">Y</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">W</a></td>
                        <td><a href='#' class="fonteSecundaria corPrimaria">Z</a></td>
                    </tr>`
}

function BuscaAlbuns() {
  var index = document.getElementById("MenuAlfa")
  index.innerHTML = `<tr>
                      <td><a href='#' class="fonteSecundaria corPrimaria">A</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">B</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">C</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">D</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">E</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">F</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">G</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">H</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">I</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">J</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">K</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">L</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">M</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">N</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">O</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">P</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">R</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">Q</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">S</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">T</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">U</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">V</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">X</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">Y</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">W</a></td>
                      <td><a href='#' class="fonteSecundaria corPrimaria">Z</a></td>
                  </tr>`
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
