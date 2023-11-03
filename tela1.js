function tela1() {

}

//código do ator
let xAtor1 = 90;
let yAtor1 = 366;
let colisao1 = false;
let meusPontos1 = 0;

// variaveis do botao
let xBotao = 400;
let yBotao = 5;
let widthBotao = 100;
let heightBotao = 30;



function mostraAtor1() {
  image(imagemDoGato, xAtor1, yAtor1, 30, 30);
}

function movimentaAtor1() {
  if (keyIsDown(UP_ARROW)) {
    yAtor1 -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor1 += 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (xAtor1 + 30 < width) {
      xAtor1 += 3;
    }


  }
  if (keyIsDown(LEFT_ARROW)) {
    if (xAtor1 > 0) {
      xAtor1 -= 3;
    }
  }
}
function verificaColisao1() {

  for (let i = 0; i < imagemCarros.length; i++) {
    colisao1 = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor1, yAtor1, 15)
    if (colisao1) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos1 -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor1 = 366;
}


function incluiPontos1() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos1, width / 5, 20);
}

function marcaPonto1() {
  if (yAtor1 < 15) {
    meusPontos1 += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();

  }
}

function pontosMaiorQueZero() {
  return meusPontos1 > 0
}

function podeSeMover() {
  return yAtor1 < 366;
}
function mostraBotaoVoltar() {
  fill(255);
  noStroke(); //Retira o preenchimento da borda
  rect(xBotao, yBotao, widthBotao, heightBotao, 10);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text('Voltar', xBotao + widthBotao / 2, yBotao + heightBotao / 2);
}
