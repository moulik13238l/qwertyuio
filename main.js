img = "";

function preload()
{
    img = loadImage('download (1).jfif');
}

function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#197300");
    text("Dinosaur", 45, 75);
    noFill();
    stroke("#197300");
    rect(30, 60, 450, 350 );
}