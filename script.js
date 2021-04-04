function adicionarFilme() {
  var campoFilmeAdicionado = document.querySelector('#filme')
  var campoFilme = campoFilmeAdicionado.value
  if (campoFilme.endsWith('.jpg')){
    listarFilmesNaTela(campoFilme)  
  } else {
    alert("Imagen Inválida!")
  }
  campoFilmeAdicionado.value = ""
 }

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}



//function adicionarFilme() {
//  alert("Clicou!")
//}

//function adicionarFilme() {
//  console.log("Clicou!")
//}