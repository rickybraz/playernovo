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
                        <td onClick="MostraArtista('a')" class="fonteSecundaria corPrimaria">A</td>
                        <td onClick="MostraArtista('b')"  class="fonteSecundaria corPrimaria">B</td>
                        <td onClick="MostraArtista('c')"  class="fonteSecundaria corPrimaria">C</td>
                        <td onClick="MostraArtista('d')"  class="fonteSecundaria corPrimaria">D</td>
                        <td onClick="MostraArtista('e')"  class="fonteSecundaria corPrimaria">E</td>
                        <td onClick="MostraArtista('f')"  class="fonteSecundaria corPrimaria">F</td>
                        <td onClick="MostraArtista('g')"  class="fonteSecundaria corPrimaria">G</td>
                        <td onClick="MostraArtista('h')"  class="fonteSecundaria corPrimaria">H</td>
                        <td onClick="MostraArtista('i')"  class="fonteSecundaria corPrimaria">I</td>
                        <td onClick="MostraArtista('j')"  class="fonteSecundaria corPrimaria">J</td>
                        <td onClick="MostraArtista('k')"  class="fonteSecundaria corPrimaria">K</td>
                        <td onClick="MostraArtista('l')"  class="fonteSecundaria corPrimaria">L</td>
                        <td onClick="MostraArtista('m')"  class="fonteSecundaria corPrimaria">M</td>
                        <td onClick="MostraArtista('n')"  class="fonteSecundaria corPrimaria">N</td>
                        <td onClick="MostraArtista('o')"  class="fonteSecundaria corPrimaria">O</td>
                        <td onClick="MostraArtista('p')"  class="fonteSecundaria corPrimaria">P</td>
                        <td onClick="MostraArtista('q')"  class="fonteSecundaria corPrimaria">R</td>
                        <td onClick="MostraArtista('r')"  class="fonteSecundaria corPrimaria">Q</td>
                        <td onClick="MostraArtista('s')"  class="fonteSecundaria corPrimaria">S</td>
                        <td onClick="MostraArtista('t')"  class="fonteSecundaria corPrimaria">T</td>
                        <td onClick="MostraArtista('u')"  class="fonteSecundaria corPrimaria">U</td>
                        <td onClick="MostraArtista('v')"  class="fonteSecundaria corPrimaria">V</td>
                        <td onClick="MostraArtista('x')"  class="fonteSecundaria corPrimaria">X</td>
                        <td onClick="MostraArtista('y')"  class="fonteSecundaria corPrimaria">Y</td>
                        <td onClick="MostraArtista('w')"  class="fonteSecundaria corPrimaria">W</td>
                        <td onClick="MostraArtista('z')"  class="fonteSecundaria corPrimaria">Z</td>
                    </tr>`
}

function MostraArtista(letra) {
  index = window.frames[0]
  index.location = "_paginas/modelorelaciona.html?artista="+letra
}

function BuscaAlbuns() {
  var index = document.getElementById("MenuAlfa")
  index.innerHTML = `<tr>
                      <td onClick="MostraAlbum('a')" class="fonteSecundaria corPrimaria">A</td>
                      <td onClick="MostraAlbum('b')"  class="fonteSecundaria corPrimaria">B</td>
                      <td onClick="MostraAlbum('c')"  class="fonteSecundaria corPrimaria">C</td>
                      <td onClick="MostraAlbum('d')"  class="fonteSecundaria corPrimaria">D</td>
                      <td onClick="MostraAlbum('e')"  class="fonteSecundaria corPrimaria">E</td>
                      <td onClick="MostraAlbum('f')"  class="fonteSecundaria corPrimaria">F</td>
                      <td onClick="MostraAlbum('g')"  class="fonteSecundaria corPrimaria">G</td>
                      <td onClick="MostraAlbum('h')"  class="fonteSecundaria corPrimaria">H</td>
                      <td onClick="MostraAlbum('j')"  class="fonteSecundaria corPrimaria">J</td>
                      <td onClick="MostraAlbum('i')"  class="fonteSecundaria corPrimaria">I</td>
                      <td onClick="MostraAlbum('k')"  class="fonteSecundaria corPrimaria">K</td>
                      <td onClick="MostraAlbum('l')"  class="fonteSecundaria corPrimaria">L</td>
                      <td onClick="MostraAlbum('m')"  class="fonteSecundaria corPrimaria">M</td>
                      <td onClick="MostraAlbum('n')"  class="fonteSecundaria corPrimaria">N</td>
                      <td onClick="MostraAlbum('p')"  class="fonteSecundaria corPrimaria">P</td>
                      <td onClick="MostraAlbum('o')"  class="fonteSecundaria corPrimaria">O</td>
                      <td onClick="MostraAlbum('q')"  class="fonteSecundaria corPrimaria">R</td>
                      <td onClick="MostraAlbum('r')"  class="fonteSecundaria corPrimaria">Q</td>
                      <td onClick="MostraAlbum('s')"  class="fonteSecundaria corPrimaria">S</td>
                      <td onClick="MostraAlbum('t')"  class="fonteSecundaria corPrimaria">T</td>
                      <td onClick="MostraAlbum('u')"  class="fonteSecundaria corPrimaria">U</td>
                      <td onClick="MostraAlbum('v')"  class="fonteSecundaria corPrimaria">V</td>
                      <td onClick="MostraAlbum('x')"  class="fonteSecundaria corPrimaria">X</td>
                      <td onClick="MostraAlbum('y')"  class="fonteSecundaria corPrimaria">Y</td>
                      <td onClick="MostraAlbum('w')"  class="fonteSecundaria corPrimaria">W</td>
                      <td onClick="MostraAlbum('z')"  class="fonteSecundaria corPrimaria">Z</td>
                  </tr>`
}

function MostraAlbum(letra) {
  index = window.frames[0]
  index.location = "_paginas/modelorelaciona.html?album="+letra
}


function MontaDados(){
  /* Faz a leitura via get do tipo de pesquisa (artista e albuns) e letra para mostrar */
  var query = location.search.slice(1)
  var pesquisa
  var letra

  var chaveValor = query.split('=');
  var pesquisa = chaveValor[0];
  var letra = chaveValor[1];

  var index = document.getElementById("TituloRelaciona")

  if (pesquisa=="album") {
      index.innerHTML = `<h2 id="bemvindo" class='corPrimaria fontePrincipal'>Albuns com a letra `+letra.toUpperCase()+`</h2>`
  } if (pesquisa =="artista"){
      index.innerHTML = `<h2 id="bemvindo" class='corPrimaria fontePrincipal'>Artistas com a letra `+letra.toUpperCase()+`</h2>`
  }

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
