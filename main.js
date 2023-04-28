var song1 = "";
var song2 = "";
function preload(){
song1 = loadSound("TOHoutro.mp3");
song2 = loadSound("megalovania.mp3");
}
function setup(){
canvas = createCanvas(400,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,400,300);
}