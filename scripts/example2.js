/*
* Ejemplo de velocidad, fricción y gravedad.
*/
var Example = function()
{
	var ball;
	var poder;

	// Variables para manejar velocidad en X y Y, la fricción y la gravedad
	var xspeed, yspeed;
	var friccion;
	var gravedad;

	this.init = function()
	{
		ball = {
			color: "#FF0000",
			radius: 20,
			x: 100,
			y: 100
		};

		// Iniciamos los valores.
		poder = 0.3;

		xspeed = 0;
		yspeed = 0;
		friccion = 0.95;

		gravedad = 0.1;

	};

	this.draw = function(context)
	{
		context.save();

		context.beginPath();

		context.fillStyle = ball.color;
		context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
		context.fill();

		context.closePath();

		context.restore();
	};

	this.update = function(dt)
	{
		if(KEY_STATES.UP)
			yspeed -= poder;

		if(KEY_STATES.DOWN)
			yspeed += poder;

		if(KEY_STATES.LEFT)
			xspeed -= poder;

		if(KEY_STATES.RIGHT)
			xspeed += poder;

		/*
		Ahora hemos dividido, ya no aplicamos la velocidad
		directamente al X,Y de la pelota sino a nuestra variable velocidad
		A la cual le multiplicamos la fricción al eje X
		Sino te acuerdas que es fricción te recomiendo leer:
		http://www.aulafacil.com/curso-fisica-movimiento/curso/Lecc-26.htm
		Y la gravedad que como sabemos, la gravedad siempre nos empuja al piso.
		Por eso le sumamos al yspeed. Para que el objeto vaya
		hacia abajo.
		Si no estas seguro como funciona esto, revisa el artículo 1 de esta serie.
		*/

		xspeed *= friccion;
		yspeed += gravedad;

		ball.x += xspeed;
		ball.y += yspeed;

	};

	return this;
};