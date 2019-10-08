//variáveis da bolinha
let xBall = 300;
let yBall = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadexBall = 6;
let velocidadeyBall = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(60);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBall, yBall, diametro);
}

function movimentaBolinha(){
  xBall += velocidadexBall;
  yBall += velocidadeyBall;
}

function verificaColisaoBorda(){
  if (xBall + raio> width ||
     xBall - raio< 0){
    velocidadexBall *= -1;
  }
  if (yBall + raio> height ||
     yBall - raio < 0){
    velocidadeyBall *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBall - raio < xRaquete + raqueteComprimento && 
      yBall - raio < yRaquete + raqueteAltura && 
      yBall + raio > yRaquete){
    velocidadexBall *= -1;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,
                              xBall,yBall,raio);
  if (colidiu){
    velocidadexBall *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBall - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
}

function marcaPonto(){
  if (xBall > 590){
    meusPontos += 1;
  }
  if (xBall < 10){
    pontosDoOponente += 1;
  }
}
