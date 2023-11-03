function mouseClicked() {

  //controle tela de menu
  if (tela == 0) {
    if (mouseX >= xAnimal - 30) {
      tela = 1;
    }

    if (mouseX >= xAnimal + 90) {
      tela = 2;
    }

    if (mouseX >= xAnimal + 200) {
      tela = 3;
    }
  }
  // verifica se o botao foi clicado 
  if (tela != 0) {
    if (mouseX > xBotao && mouseX < xBotao + widthBotao && mouseY > yBotao &&
      mouseY < yBotao + heightBotao) {
      tela = 0;
    }

  }

}