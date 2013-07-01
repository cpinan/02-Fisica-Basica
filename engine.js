// Método estándar para el hilo del juego
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var time;

// Variables para obtener que tecla se esta presionando.
var KEY_STATES = { UP: false, DOWN: false, LEFT: false, RIGHT: false };

// Se ejecuta cuando se presiona una tecla

/*
* Los números: 38, 37, 39 y 40 son el código ASCII al presionarlo
* 38 es la flecha de arriba
* 37 la flecha izquierda
* 39 la flecha derecha
* 40 la flecha de abajo
*/
document.onkeydown = function(event)
{
	event = event || window.event;
	var char_code = event.keyCode || event.which;

	if(char_code == "38")
		KEY_STATES.UP = true;

	if(char_code == "37")
		KEY_STATES.LEFT = true;

	if(char_code == "39")
		KEY_STATES.RIGHT = true;

	if(char_code == "40")
		KEY_STATES.DOWN = true;

};

// Se ejecuta cuando se deja de presionar una tecla
document.onkeyup = function(event)
{
	event = event || window.event;
	var char_code = event.keyCode || event.which;

	if(char_code == "38")
		KEY_STATES.UP = false;

	if(char_code == "37")
		KEY_STATES.LEFT = false;

	if(char_code == "39")
		KEY_STATES.RIGHT = false;

	if(char_code == "40")
		KEY_STATES.DOWN = false;

};