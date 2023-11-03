let imagemDaVaca;
let imagemDoCachorro;
let imagemDoGato;

let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemDaEstrada= loadImage("imagens/estrada.png")
  
  imagemDaVaca = loadImage("imagens/vaquinha01.png");
  imagemDoCachorro = loadImage("imagens/cachorro2.png");
  imagemDoGato = loadImage("imagens/gato3.png");
  
  imagemCarro= loadImage("imagens/carro-1.png");
  imagemCarro2= loadImage("imagens/carro-2.png");
  imagemCarro3= loadImage("imagens/carro-3.png");
  imagemCarros= [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]



  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto =loadSound("sons/pontos.wav")
}