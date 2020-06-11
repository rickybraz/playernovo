function MontaDados(){
  /* Faz a leitura via get do tipo de pesquisa (artista e albuns) e letra para mostrar */
  var query = location.search.slice(1)
  var pesquisa
  var letra

  var chaveValor = query.split('=');
  var pesquisa = chaveValor[0];
  var letra = chaveValor[1];

  var index = document.getElementById("TituloRelaciona")
  /* Imprime o titulo da pagina de relação */
  if (pesquisa=="album") {
      index.innerHTML = `<h2 id="bemvindo" class='corPrimaria fontePrincipal'>Albuns com a letra `+letra.toUpperCase()+`</h2>`
  } if (pesquisa =="artista"){
      index.innerHTML = `<h2 id="bemvindo" class='corPrimaria fontePrincipal'>Artistas com a letra `+letra.toUpperCase()+`</h2>`
  }

  /* Monta a relação de artistas */
  var elementos = relaciona(pesquisa, letra)
  elementos.sort()
  /* Ver qual tipo de pesquisa e para onde vai o link */
  var index = document.getElementById("ListaRelacao")


  for (var aux=1; aux<=elementos.length; aux++){
    chave = elementos[aux-1].split("&")
    if (pesquisa =='artista') {
      index.innerHTML = index.innerHTML + `<a href=artistas.html?cod=` + chave[1] + ` class='corPrimaria fontePrincipal'><li class="RelacionaLi">` +chave[0]+ `</li></a>`
    } if (pesquisa =='album') {
      index.innerHTML = index.innerHTML + `<li onClick="AbrePlayer(3,` + chave [2]+ `)" class="corPrimaria fontePrincipal RelacionaLi"><strong>` +chave[0]+ `</strong><p class='linhasimples'>` +chave[1] + `</p></li></a>`
    }
  }

}

function AlbunsArtista(codigo) {
  /** Função que monta os albuns na pagina do artista */
  var elementos = relaciona('ArtistaAlbum').sort()
  var index = document.getElementById("ListaAlbuns")
  for (var aux=1; aux<=elementos.length; aux++) {
    var chave = elementos[aux-1].split("&")
    index.innerHTML = index.innerHTML + `<li onClick="AbrePlayer(3,` + chave[1] + `)" class="RelacionaLi"><span class="linhasimples"> <i class="fas fa-play tocador"></i> ` +chave[0]+ `</span></li>`
  }


}

function relaciona (pesquisa, letra){
  /* Faz a busca um array com o nome do artista / album e seu codigo atravez de um array
  estrutura do array
  Artista => Artista + & + codigo
  Album => Album + Artista + Codigo
  ArtistaAlbum => Relação de albuns do artista
  */
  if (pesquisa=='artista') {
      return ["Acorde Luz&1", "Acustica do Ser&2", "Haline Amaral&4", "Anima&5", "Arte Renascer&6", "Auta de Souza&7", "Allan Filho&10"]
  } if (pesquisa =='album'){
      return ["Alegria Cristã&GAN&1", "Semente da verdade&Grupo musical Castelã&2", "Chamado&Grupo AME&4", "Receita de Paz&Grupo musical Receita da PAz&5", "Viajante do tempo&Guilherme Medina&6", "Doce sintonia&Lau Porto&7"]
  } if (pesquisa == 'ArtistaAlbum') {
      return ["Anjos&10", "Semente do amanha&20","Viajante do universo&21","Chamado&11","Amor&22","Eu interior&11"]
  }

}
