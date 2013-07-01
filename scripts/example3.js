/*
* Ejemplo de imagen, impulso, viento y rotación
*/
var Example = function()
{
	var ball;
	var poder;

	var xspeed, yspeed;
	var friccion;
	var gravedad;

	// Nuevas variables: Impulso y viento
	var impulso;
	var viento;

	this.init = function()
	{
		ball = {
			imagen: new Image(), // También agregamos una imagen
			x: 100,
			y: 100,
			width: 0,
			height: 0,
			cargado: false, // Y una variable para identificar si se ha cargado la imagen
			rotacion: 0 // Agregamos rotación
		};
		// Cargamos la ruta del recurso, asegurarse de tener la imagen.
		ball.imagen.src = "resources/pelota.png";

		// Método que sirve para identificar cuando la imagen ya está cargada.
		ball.imagen.onload = function()
		{
			ball.width = this.width;
			ball.height = this.height;
			ball.cargado = true;
		};

		poder = 0.3;

		xspeed = 0;
		yspeed = 0;
		friccion = 0.95;
		gravedad = 0.1;

		// Asignamos los valores a nuestras variables.
		impulso = 0.75;
		viento = 0.09;

	};

	this.draw = function(context)
	{

		if(ball.cargado) // Si la imagen esta cargada.
		{
			/*
			* Esta parte puede ser un poco compleja sino entienden algo
			* comenten y lo explico.
			*/

			context.save();
			/*
			* Normalmente el punto X,Y de un objeto esta ubicado arriba a la izquierda
			* así como el canvas, pero para hacer una rotación el punto de origen
			* debe estar en el centro del objeto (mirar el tutorial)
			* Ya que sino va a girar sobre el punto inicial formando un ángulo raro
			* Lo que hacemos es trasladar el contexto al centro de la imagen
			* Luego lo rotamos (El Math.PI / 180 es para convertir a radianes)
			* Y finalmente lo trasladamos a su posición anterior para que no se vea afectado
			* el contexto y seguir trabajando.
			* Si no se entendió recalco, dejen un comentario y lo explico a detalle 
			* en un artículo.
			*/
			context.translate(ball.x + ball.width * 0.5, ball.y + ball.height * 0.5);
			context.rotate(ball.rotacion * (Math.PI / 180));
			context.translate(-(ball.x + ball.width * 0.5), -(ball.y + ball.height * 0.5));

			// Luego de ello dibujamos la imagen con los siguientes parámetros:
			// drawImage(imagen, x, y, ancho, alto)
			context.drawImage(ball.imagen, ball.x, ball.y, ball.width, ball.height);
			context.restore();
		}

	};

	this.update = function(dt)
	{
		if(KEY_STATES.UP)
			yspeed -= poder * impulso; // Ahora multiplicamos por un impulso para dar efecto de aceleración

		if(KEY_STATES.DOWN)
			yspeed += poder * impulso; // Igual para este punto.

		if(KEY_STATES.LEFT)
			xspeed -= poder;

		if(KEY_STATES.RIGHT)
			xspeed += poder;

		xspeed += viento; // Sumamos viento a la velocidad en X para que empuje para el lado adecuado
		xspeed *= friccion;
		yspeed += gravedad;

		ball.x += xspeed;
		ball.y += yspeed;

		// Rotamos la pelota.
		ball.rotacion += xspeed;

	};

	return this;
};