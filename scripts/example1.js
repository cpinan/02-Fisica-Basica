/*
* Ejemplo para mover la pelota por el canvas.
*/
var Example = function()
{
	// Declaración de variables: La pelota y el poder de movimiento.
	// Poder = Cantidad de pixeles que se moverá.
	var ball;
	var poder;

	// Método de inicialización para arrancar las variables
	// Todo el código se optimizará mientras avancemos
	// Ya que ahorita lo importante es saber para que sirve cada cosa.
	this.init = function()
	{
		// Esta forma sirve para declarar una variable con valores
		// Que podemos llamar:
		// ball.x = 100000;
		// Y asi cada valor.
		ball = {
			color: "#FF0000",
			radius: 20,
			x: 100,
			y: 100
		};

		// Es el valor de movimiento para nuestra pelotita
		poder = 1;
	};

	// Método para dibujar en pantalla
	this.draw = function(context)
	{
		// El context.save y restore los uso frecuentemente
		// Es un concepto matemático que sirve para salvar la matriz
		// antes de ser pintada, trasladada, rotada, etc
		// Y la devuelve a su estado "virgen" xD
		context.save();

		// Inicia el path para dibujar nuestra pelota
		context.beginPath();

		// fillStyle indica de que color vamos a rellenar la pelota
		context.fillStyle = ball.color;
		// arc recibe 6 parametros
		// arc(centroX, centroY, radio, anguloInicial, anguloFinal, contra_sentido_reloj)
		// El último parámetro es solo para la forma en como se va a dibujar
		// Pueden hacer pruebas, aunque tendrían que dibujar medio círculo
		// Recordando un poco de Mates Modifiquen el Math.PI * 2 y jueguen con ello.
		context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
		context.fill();

		// Siempre que inicies un path asegurate de cerrarlo con este método
		context.closePath();

		// Restaura la matriz anterior antes de aplicar los cambios.
		context.restore();
	};

	// Método update que sirve para dividir la lógica de dibujado con la lógica del juego
	this.update = function(dt)
	{
		/*
		Ciertamente la validación del teclado la podriamos haber hecho directamente al 
		presionar la tecla, pero no se recomienda ya que se pueden interrumpir los eventos
		de teclado. Para ellos cree estas variables.
		Es un concepto un poco complicado pero si tienen dudas pueden dejar un comentario
		y haré una demostración con diferentes casos.
		*/

		if(KEY_STATES.UP) // Si estas presionando arriba
			ball.y-= poder;

		if(KEY_STATES.DOWN) // Si estas presionando abajo
			ball.y+= poder;

		if(KEY_STATES.LEFT) // Si estas presionando izquierda
			ball.x-= poder;

		if(KEY_STATES.RIGHT) // Si estas presionando derecha
			ball.x+= poder;
	};

	// Retonar la clase actual.
	return this;
};