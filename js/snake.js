var espacioJugar = document.getElementById("espacioJugar");
var snake = document.getElementById("snake");
var botonReiniciar = document.getElementById("botonReiniciar");
var teclas = {
  izquierda: 37,
  arriba: 38,
  derecha: 39,
  abajo: 40
};
var x = 0;
var y = 0;
var mover = 20;

document.addEventListener("keydown", eventoTecla);
document.addEventListener("click", reiniciarJuego);


function eventoTecla(tecla){
  switch(tecla.keyCode){
    case teclas.izquierda:
      x = x - mover;
      snake.style.marginLeft = x.toString() + "px";
      if(x < 0){
        perder();
      }
    break;

    case teclas.arriba:
      y = y - mover;
      snake.style.marginTop = y.toString() + "px";
      if(y < 0){
        perder();
      }
    break;

    case teclas.derecha:
      x = x + mover;
      snake.style.marginLeft = x.toString() + "px";
      if(x > 380){
        perder();
      }
    break;

    case teclas.abajo:
      y = y + mover;
      snake.style.marginTop = y.toString() + "px";
      if(y > 380){
        perder();
      }
    break;

  //  default:

    //break;
  }
}



function pararTeclas(){
  document.removeEventListener("keydown", eventoTecla);
}

function perder(){
  alert("GAME OVER!");
  pararTeclas();
}

function reiniciarJuego() {
  x = 0;
  y = 0;
  snake.style.marginTop = x;
  snake.style.marginLeft = y;
  document.addEventListener("keydown", eventoTecla);
}
