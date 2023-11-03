let tela = 0

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(0, 0, 0);

  if (tela == 0) {
    menu();
  }
  //inicializando a tela 1
  if (tela == 1) {
    tela1();

    carros();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();
    mostraBotaoVoltar();
    mostraAtor1();
    movimentaAtor1();
    verificaColisao1();
    incluiPontos1();
    marcaPonto1();
  }

  if (tela == 2) {
    tela2();
    carros();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();
    mostraAtor2();
    movimentaAtor2();
    verificaColisao2();
    incluiPontos2();
    marcaPonto2();
  }

  if (tela == 3) {
    tela3();
    carros();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();

    mostraAtor3();
    movimentaAtor3();
    movimentaAtor3();
    verificaColisao3();
    incluiPontos3();
    marcaPonto3();
  }
}