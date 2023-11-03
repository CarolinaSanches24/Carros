function tela2(){
  if (tela){
   
  }
}


//código do ator
let xAtor2= 90;
let yAtor2= 366;
let colisao2 = false;
let meusPontos2 = 0;

function mostraAtor2(){
  image(imagemDoCachorro,xAtor2, yAtor2, 30,30);
}

function movimentaAtor2(){
  if(keyIsDown (UP_ARROW)){
    yAtor2 -=3;
  }
  if(keyIsDown (DOWN_ARROW)){
    if (podeSeMover2()){
    yAtor2 +=3;
    }
  }
}
function verificaColisao2(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao2= collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor2, yAtor2, 15 )
    if (colisao2){
  voltaAtor2ParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero2()){
      meusPontos2-= 1;
      }
    }
  }
}

function voltaAtor2ParaPosicaoInicial(){
  yAtor2 = 366;
}


function incluiPontos2(){
  textAlign(CENTER);
  textSize(25);
  fill (color (255, 240,60))
  text(meusPontos2, width / 5, 27);
}

function marcaPonto2(){
  if (yAtor2 < 15){
    meusPontos2 +=1;
    somDoPonto.play();
    voltaAtor2ParaPosicaoInicial();

  }
}

function pontosMaiorQueZero2(){
  return meusPontos2 > 0
}

function podeSeMover2(){
  return yAtor2< 366;
}