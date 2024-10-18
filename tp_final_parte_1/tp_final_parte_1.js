////SOLO FALTAN LOS DIALOGOS Y SONIDO

let alto, ancho, esquinaX1, esquinaY1;
let pantalla;
//let texto;
let FotoPortada, fotoSinopsis, hablan, cantando;
let fuente;
let miVariable = 1;

function preload() {
  FotoPortada = loadImage('data/FotoPortada.jpg');
  fotoSinopsis = loadImage('data/fotoSinopsis.jpg');
  hablan = loadImage('data/hablan.jpg');
  cantando = loadImage('data/cantando.jpg');

  //texto = loadStrings("texto.txt");
}

function setup() {
  createCanvas(1350, 700);

  pantalla = "inicio";

  alto = 80;
  ancho = 200;
  esquinaX1 = 150;
  esquinaY1 = 40;

  fuente = loadFont ('data/Creepster-Regular.ttf');
  textFont(fuente);
  textSize(64);
}
function draw() {
  background(0);

  miVariable = frameCount;

  //estado 1
  if (pantalla == "inicio") {
    image(FotoPortada, 240, 40, 880, 560);
    textFont(fuente);
    textSize(90);
    fill(119, 167, 65);
    text("KARAOKE ZOMBIE", 400, 120);
    //colorcito en los botones
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      fill(246, 77, 150); //rosa
      cursor(HAND);
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      fill(246, 77, 150);
      cursor(HAND);
    } else {
      fill(38, 51, 70); //azul
      cursor(ARROW);
    }
    //dibujo botones
    rect(180, 476, ancho, alto, 40);
    rect(970, 476, ancho, alto, 40);
    stroke(0);
    fill(255);
    textSize(25);
    text("Jugar", 250, 527);
    text("Creditos", 1030, 527);
  } else if (pantalla == "jugar") { //estado 2
    Jueguito();
  }
  if (pantalla == "creditos") { //estado 3
    LosCreditos ();
  }
  if (pantalla == "dialogos") { //estado 4
    Dialogos();
  }
  if (pantalla == "cantar"){ //estado 5
  Cantar();
  }
  if (pantalla == "agentes"){ //estado 6
  Agentes();
  }
}
function mousePressed() {
  if (pantalla == "inicio") {
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) { //boton jugar
      pantalla = "jugar";
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) { //boton creditos
      pantalla = "creditos";
    }
  }
  if (pantalla == "jugar") { //boton volver al inicio desde jugar
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      pantalla = "inicio";
    }
  }

  if (pantalla == "creditos") { //boton volver al inicio desde creditos
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      pantalla = "inicio";
    }
  }
  if (pantalla == "dialogos") { //boton cantar con mabel
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      pantalla = "cantar";
    }
  } else if (pantalla == "dialogos") //boton llamar agentes
  if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
  pantalla = "agentes";
  }
}
function keyPressed () { //boton (enter) para comenzar el juego
  if (pantalla == "jugar") {
    if ( keyCode === ENTER) {
      pantalla = "dialogos";
    }
  }
}
