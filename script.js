var cartaDavid = {
  nome:"Batman",
  imagem: "https://www.nivelepico.com/wp-content/uploads/2012/07/bane-personagem-2.jpg",
  atributos: {
    ataque: 80,
    defesa: 95,
    magia: 20
  }
}

var cartaHelena = {
  nome:"Princesa_Nela",
  imagem: "https://i.pinimg.com/originals/b9/9a/b2/b99ab2d736fa4cfa27f20f303cf066d0.jpg",
  atributos: {
   ataque: 75,
   defesa: 70,
   magia: 95
  }
}

var cartaIstefany = {
  nome:"Tempestade",
  imagem: "https://i.pinimg.com/originals/a3/fa/54/a3fa54600c9056318e6bd02fc0b5b9f9.jpg",
  atributos: {
   ataque: 90,
   defesa: 70,
   magia: 95
  }
}

var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaDavid, cartaHelena, cartaIstefany, cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
//                 0           1             2             3          4          5         6          7            8           9            10

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1) 
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
  obtemAtributoSelecionado()
}

var cartaJogador=""

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  var opcoes = ""
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; heigth: inherit; position: absolute;">';    
  }
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoes+opcoesTexto+'</div>'
}
  
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
        pontosJogador++
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
      }
  if(cartas.length == 0){
  alert("Fim de jogo!")
    if (pontosJogador > pontosMaquina){
      } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Looser!</p>'
    }
} else {
  htmlResultado = '<p class="resultado-final">Tied!</p>'
  document.getElementById("btnProximaRodada").disabled = false
}
  
divResultado.innerHTML = htmlResultado
document.getElementById("btnJogar").disabled = true
  
atualizaPlacar()
exibeCartaMaquina()
atualizaQuantidadeCartas()
}

atualizaQuantidadeCartas()

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  }
  var html = "<div id='opcoes' class='carta-status'>"
  divCartaMaquina.innerHTML = moldura+html+nome+opcoesTexto+'</div>'
}

function atualizaQuantidadeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de Cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

proximaRodada()

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  var divResultado = document.getElementById('resultdo')
  divResultado.innerHTML = ""
}