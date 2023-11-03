function tela3(){
  if (tela){
   
  }
}


//código do ator
let xAtor3= 90;
let yAtor3= 366;
let colisao3 = false;
let meusPontos3 = 0;

function mostraAtor3(){
  image(imagemDaVaca,xAtor3, yAtor3, 30,30);
}

function movimentaAtor3(){
  if(keyIsDown (UP_ARROW)){
    yAtor3-=2;
  }
  if(keyIsDown (DOWN_ARROW)){
    if (podeSeMover3()){
    yAtor3 +=2;
    }
  }
}
function verificaColisao3(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao3= collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor3, yAtor3, 15 )
    if (colisao3){
  voltaAtor3ParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero3()){
      meusPontos3 -= 1;
      }
    }
  }
}

function voltaAtor3ParaPosicaoInicial(){
  yAtor3 = 366;
}


function incluiPontos3(){
  textAlign(CENTER);
  textSize(25);
  fill (color (255, 240,60))
  text(meusPontos3, width / 5, 27);
}

function marcaPonto3(){
  if (yAtor3 < 15){
    meusPontos3 +=1;
    somDoPonto.play();
    voltaAtor3ParaPosicaoInicial();

  }
}

function pontosMaiorQueZero3(){
  return meusPontos3 > 0
}

function podeSeMover3(){
  return yAtor3< 366;
}