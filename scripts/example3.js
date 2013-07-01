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

	var impulso;
	var viento;

	this.init = function()
	{
		ball = {
			imagen: new Image(),
			x: 100,
			y: 100,
			width: 0,
			height: 0,
			cargado: false,
			rotacion: 0
		};
		ball.imagen.src = "resources/pelota.png";

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

		impulso = 0.75;
		viento = 0.09;

	};

	this.draw = function(context)
	{
		context.save();

		if(ball.cargado)
		{
			context.translate(ball.x + ball.width * 0.5, ball.y + ball.height * 0.5);
			context.rotate(ball.rotacion * (Math.PI / 180));
			context.translate(-(ball.x + ball.width * 0.5), -(ball.y + ball.height * 0.5));
			context.drawImage(ball.imagen, ball.x, ball.y, ball.width, ball.height);
		}

		context.restore();
	};

	this.update = function(dt)
	{
		if(KEY_STATES.UP)
			yspeed -= poder * impulso;

		if(KEY_STATES.DOWN)
			yspeed += poder * impulso;

		if(KEY_STATES.LEFT)
			xspeed -= poder;

		if(KEY_STATES.RIGHT)
			xspeed += poder;

		xspeed += viento;
		xspeed *= friccion;
		yspeed += gravedad;

		ball.x += xspeed;
		ball.y += yspeed;

		ball.rotacion += xspeed;

	};

	return this;
};