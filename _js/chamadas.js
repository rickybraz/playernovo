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
