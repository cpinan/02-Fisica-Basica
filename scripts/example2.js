/*
* Ejemplo de velocidad, fricción y gravedad.
*/
var Example = function()
{
	var ball;
	var poder;

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

		xspeed *= friccion;
		yspeed += gravedad;

		ball.x += xspeed;
		ball.y += yspeed;

	};

	return this;
};