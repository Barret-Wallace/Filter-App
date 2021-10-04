function preload(){
    filer_color = "";
}
//function preload allows images, audio, or any variables that are required throughout your website application to be created.
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
}
//function setup allows you to put elements to get your website ready.
function draw(){
    image(cam,0,0,400,400);
}
//function draw allows you to draw anything inside the canvas, it is a non-stop function.
function Apply(){
    filer_color = document.getElementById('color').value;
    tint(filer_color);
}
function Capture(){
    save("filter_image.png");
}