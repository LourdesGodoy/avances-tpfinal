////SOLO FALTAN LOS DIALOGOS Y SONIDO

let alto, ancho, esquinaX1, esquinaY1;
let pantalla;
//let texto;
let FotoPortada, fotoSinopsis, hablan;
let fuente;
let miVariable = 1;

function preload() {
  FotoPortada = loadImage('data/FotoPortada.jpg');
  fotoSinopsis = loadImage('data/fotoSinopsis.jpg');
  hablan = loadImage('data/hablan.jpg');

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
    strokeWeight(4)
    rect(180, 476, ancho, alto, 40);
    rect(970, 476, ancho, alto, 40);
    stroke(255)
    strokeWeight(1)
    fill(255);
    textSize(25);
    text("Jugar", 250, 527);
    text("Creditos", 1030, 527);
  } else if (pantalla == "jugar") { //estado 2
    background(0);
    fill(255);
    stroke(0);
    image(fotoSinopsis, 240, 40, 880, 560);
    textSize(24);
    strokeWeight(4);
    text("Dipper despierta a los zombies en Gravity Falls mientras Mabel está en una fiesta de karaoke.\n Los gemelos descubren que solo las perfectas armonias pueden derrotar a los zombies, y \n Mabel no tiene mejor idea que comenzar el karaoke, algo que Dipper odia y se niega a hacer  \n¿Que hará Dipper? ¿Se unira al karaoke de Mabel y el Tio Stan? ¿Podran terminar con los zombies?\n                          \n¡Ayuda a los gemelos misterio, y al Tio Stan, a terminar con esto y poder seguir con su fiesta!", 230, 700-miVariable*2);
    //boton back
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      fill(246, 77, 150); //rosa
      cursor(HAND);
    } else {
      fill(38, 51, 70); //azul
      cursor(ARROW);
    }
    strokeWeight(4);
    rect(40, 55, ancho, alto, 40);
    strokeWeight(1)
    fill(255);
    textSize(25);
    text("volver al inicio", 65, 101);
    //boton start
    if ( frameCount/60 >= 4 )
      text("presiona la tecla enter para comenzar", 500, 570); 
  } else if (pantalla == "creditos") { //estado 3
    background(0);
    textSize(35);
    text("         Creadoras del juego: \n Godoy Lourdes y Sofia Gramajo \n  \n          Creador de la serie: \n               Alex Hirsch \n  \n       Trabajo Practico Final \nProfesor: Matias Jauregui Lorda\n             PMIW - Comision 2 \n                     \n                      2024 ©", width / 3, height / 5);
    //boton back
    strokeWeight(4)
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      fill(246, 77, 150); //rosa
      cursor(HAND);
    } else {
      fill(38, 51, 70); //azul
      cursor(ARROW);
    }
    rect(40, 55, ancho, alto, 40);
    strokeWeight(1)
    fill(255);
    textSize(25);
    text("volver al inicio", 65, 101);
  }
  if (pantalla == "dialogos") { //estado 4
    background(0);
    image(hablan, 240, 40, 880, 560);
    //text(texto[1], 20, 20);
    text("holis quiero dormir tengo sueño :(", 500, 500);
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
  if (pantalla == "jugar"){ //boton volver al inicio desde jugar
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      pantalla = "inicio";
    }
  }
  
  if (pantalla == "creditos") { //boton volver al inicio desde creditos
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      pantalla = "inicio";
    }
  }
}
function keyPressed () { //boton (enter) para comenzar el juego
  if (pantalla == "jugar") {
    if ( keyCode === ENTER) {
      pantalla = "dialogos";
    }
  }
}

//creo que esto no funciona todavia....
//} else if (pantalla == "creditos") {
//  println("aprete el mouse");
//  LosCreditos();
//} else {
//  Jueguito();
//}
