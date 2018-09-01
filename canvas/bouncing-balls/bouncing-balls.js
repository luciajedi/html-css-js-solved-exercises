var positions = [{x:20, y:20, dx:2, dy:3}];
var r = 20;
var WIDTH = 400;
var HEIGHT = 300;
var ctx;
var interval;

function init(){
	var cv = document.getElementById('container');
	ctx = cv.getContext("2d");

  // Adding another ball
	var aux = Math.floor(Math.random() * WIDTH) + 1;
	positions.push({x:aux, y:aux, dx:3, dy:2});

	interval = setInterval(draw, 10);
}

function clear(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawBall(newx, newy, color = "black"){
	ctx.beginPath();
	ctx.arc(newx, newy, r, 0, Math.PI * 2, true);
	ctx.fillStyle = color;
	ctx.fill();
}

function draw(){
	clear();

	for(i=0; i<positions.length; i++){
		var newx = positions[i].x;
		var newy = positions[i].y;
		var newdx = positions[i].dx;
		var newdy = positions[i].dy;
		var pos = positions[i];

    // Check if it goes outside the size of the canvas, and set the acceleration
		if (newx + r + newdx > WIDTH || newx - r + newdx < 0) {
			newdx = -newdx;
		}
		if (newy + r + newdy > HEIGHT || newy - r + newdy < 0) {
			newdy = -newdy;
		}

    // Adding the acceleration (positive or negative)
		newx += newdx;
		newy += newdy;

		positions[i].x = newx;
		positions[i].y = newy;
		positions[i].dx = newdx;
		positions[i].dy = newdy;

    // This will make the first ball blue and the others black
		if (i==0){
      drawBall(newx, newy,"rgba(10,150,150,.5)");
		}else{
      drawBall(newx, newy);
    }
	}
    // We can set the color in each ball if we want different colors
    /* To stop the bouncing, just use
    clearInterval(interval);
    */
}

window.onload = init;
