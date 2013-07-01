/*
* Ejemplo para mover la pelota por el canvas.
*/
var Example = function()
{
	var ball;
	var poder;

	this.init = function()
	{
		ball = {
			color: "#FF0000",
			radius: 20,
			x: 100,
			y: 100
		};

		poder = 1;
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
			ball.y-= poder;

		if(KEY_STATES.DOWN)
			ball.y+= poder;

		if(KEY_STATES.LEFT)
			ball.x-= poder;

		if(KEY_STATES.RIGHT)
			ball.x+= poder;
	};

	return this;
};