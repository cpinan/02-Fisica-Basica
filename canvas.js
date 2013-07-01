// Declaración del tamaño del canvas
var CANVAS_WIDTH = 760;
var CANVAS_HEIGHT = 480;

// Obtenemos el canvas a través de DOM y el contexto.
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Seteamos el ancho y alto a nuestro canvas
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// "Clase" juego que tiene los métodos:
// init, draw, update y thread.
var Game = function()
{
	// Instanciamos la clase ejemplo, los 3 ejemplos están basados en una
	// "clase" llamada ejemplo
	var example = new Example();

	// Método que sirve para inicializar valores.
	this.init = function()
	{
		// Iniciamos las variables del ejemplo
		example.init();
		// Llamamos a nuestro hilo
		requestAnimFrame(game.thread);
	};

	this.draw = function()
	{
		context.save();

		context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		context.fillStyle = "#FFFFFF";
		context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Llamamos al método draw de nuestro ejemplo
		example.draw(context);

		context.restore();
	};

	this.update = function(dt)
	{
		// Llamamos la lógica del ejemplo.
		example.update(dt);
	};


	this.thread = function()
	{
		// Calculamos el tiempo transcurrido entre bucle del hilo
		var now = new Date().getTime(), dt = (1 / (now - (time || now)));
    	time = now;

    	// Dibujamos el juego
		game.draw();
		// Ejecutamos la lógica del juego.
		game.update(dt);

		// Volvemos a llamar a nuestro hilo
		requestAnimFrame(game.thread);
	};

};

// Instanciamos nuestra clase juego
var game = new Game();
// Iniciamos el juego
game.init();