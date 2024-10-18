function Jueguito () {
  background(0);
  fill(255);
  image(fotoSinopsis, 240, 40, 880, 560);
  textSize(24);
  text("Dipper despierta a los zombies en Gravity Falls mientras Mabel está en una fiesta de karaoke.\n Los gemelos descubren que solo las perfectas armonias pueden derrotar a los zombies, y \n Mabel no tiene mejor idea que comenzar el karaoke, algo que Dipper odia y se niega a hacer  \n¿Que hará Dipper? ¿Se unira al karaoke de Mabel y el Tio Stan? ¿Podran terminar con los zombies?\n                          \n¡Ayuda a los gemelos misterio, y al Tio Stan, a terminar con esto y poder seguir con su fiesta!", 230, 700-miVariable*2);
  //boton back
  if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
    fill(246, 77, 150); //rosa
    cursor(HAND);
  } else {
    fill(38, 51, 70); //azul
    cursor(ARROW);
  }
  rect(40, 55, ancho, alto, 40);
    fill(255);
  textSize(25);
  text("volver al inicio", 65, 101);
  //boton start
  if ( frameCount/60 >= 4 )
    text("presiona la tecla enter para comenzar", 500, 570);
}
function Dialogos() {
  background(0);
  image(hablan, 240, 40, 880, 560);
  text("aca va todo el texto con lo de txt", 500, 100);
  //boton decision
  if ( frameCount/60 >= 3 ) // las opciones para decidir aparecen a los 3 segundos que termine el texto
   text("Cantar con Mabel y el Tio Stan", 100, 527);
  text("Llamar a los agentes", 1030, 527);
  if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
}
function Cantar() {
  background(0);
  image(cantando, 240, 40, 880, 560);
  text("aca va todo el texto con lo de txt", 500, 100);
  ////juego//////
  //segunda decision
  if ( frameCount/60 >= 15 ) //despues de 15 segundos aparece la 2da decision
   text("Usar megáfono para aumentar el ruido", 100, 527);
  text("Utilizar dispositivo de resonancia", 1030, 527);
  if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  ////juego//////
  if ( frameCount/60 >= 15 ) //despues de 15 segundos aparece el aviso
  text("Sus armonias no son lo suficientemente poderosas para derrotar a los zombies. \n Solo quedan ¡10 SEGUNDOS! para que los zombies se adueñen completamente de la cabaña y los conviertan en zombies", 200, 100);
  ////sigue el juego//////
}
function Agentes () {
  background(0);
  text("aca va todo el texto con lo de txt", 500, 100);
   ////juego//////
   if ( frameCount/60 >= 15 ) //despues de 15 segundos aparece el aviso
   text("¡Los agentes nunca atendieron, \n el Tio Stan, Mabel y Dipper fueron convertidos en zombies! ", 200, 100);
 ////sigue el juego//////
 //aca iria otra decision
 }
