let xAnimal= 150;
let yAnimal= 160;
let l= 50;
let h= 50;
let h3= 49;

function menu(){
  background(211,211,211);
  
  textSize(20)
  fill (color (0, 0,0))
  text("Selecione o personagem:",xAnimal-5,yAnimal-50)
   
  //tela 1

  image(imagemDoGato,xAnimal-30, yAnimal, l, h);

  //tela2
  image(imagemDoCachorro,xAnimal+90, yAnimal,l, h);
  
  //tela3
  image(imagemDaVaca,xAnimal+200, yAnimal,l, h3);

  
}