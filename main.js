const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "source-over";
let size = 20;
let number = 0;
let scale = 5;
let hsl =0;

function draw(){
	let angel = number*0.2;
	let radius =  scale*Math.sqrt(number*2);
	let positionX = radius*Math.sin(angel) + canvas.width/2;
	let positionY = radius*Math.cos(angel) +canvas.height/2;
	ctx.fillStyle = `hsl(${hsl},100%,50%)`;
	ctx.beginPath();
	ctx.arc(positionX,positionY,size,0,Math.PI*2);
	ctx.closePath();
	ctx.fill();
	number++;
	hsl+=0.5;

}

function animation() {
	draw()
	requestAnimationFrame(animation);
}

animation()