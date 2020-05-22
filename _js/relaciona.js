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
  var link
  if (pesquisa="artista"){
    link = "_paginas/artista.html"
  } else {
    link = "_paginas/tocador.html"
  }

  /* Monta a lista de apresentação*/
  var index = document.getElementById("ListaRelacao")
  for (var aux=1; aux<=elementos.length; aux++) {
    chave = elementos[aux-1].split("&")
    index.innerHTML = index.innerHTML + `<li onClick=`+ link +`?cod=` + chave[1] + ` class='corPrimaria fontePrincipal'>` +chave[0]+ `</li>`
  }
}



function relaciona (pesquisa, letra){
  /* Faz a busca um array com o nome do artista / album e seu codigo atravez de um array
  estrutura do array -> Nome + & + codigo
  */
  return ["Acorde Luz&1", "Acustica do Ser&2", "Haline Amaral&4", "Anima&5", "Arte Renascer&6", "Auta de Souza&7", "Allan Filho&10"]
}
