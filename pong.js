// variáveis da bola
let xBall = 300
let yBall = 200
let diamBall = 20
let raio = diamBall/2;

// velocidade da bola
let velocityXBall = 3
let velocityYBall = 3

//variáveis da raquete
let xRaquete = 30;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false

//variáveis do oponente
let xRaqueteOponente = 560;
let yRaqueteOponente = 150;
let velocityYOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(60);
  showBall();
  moveBall();
  showRaquete(xRaquete, yRaquete);
  showRaquete(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
  checkCollisionLib();
}

function showRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function moveRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function moveRaqueteOponente() {
  velocityYOponente = yBall - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function showBall() {
  circle(xBall, yBall, diamBall);
}

function moveBall() {
  xBall += velocityXBall
  yBall += velocityYBall
  
  // raio da bolinha não sai da tela
  if (xBall+raio > width || xBall-raio < 0) {
    velocityXBall *= -1;
  }
  
  if (yBall+raio > height || yBall-raio < 0) {
    velocityYBall *= -1;
  }
}

// function checkCollision() {
//     if (xBall - raio < xRaquete + raqueteComprimento && yBall - raio < yRaquete + raqueteAltura && yBall + raio > yRaquete) {
//         velocityXBall *= -1;
//     }
// }

function checkCollisionLib() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBall, yBall, raio);
  if (colidiu) {
    velocityXBall *= -1;
  }}