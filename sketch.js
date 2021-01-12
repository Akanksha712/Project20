var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(700,590,70,20);
    surface1.shapeColor = "pink";
    surface2 = createSprite(500,590,70,20);
    surface2.shapeColor = "red";
    surface3 = createSprite(300,590,70,20);
    surface3.shapeColor = "orange";
    surface4 = createSprite(100,590,70,20);
    surface4.shapeColor = "yellow";

    //create box sprite and give velocity
    ball = createSprite(random(20,750,));
    ball.scale = 0.5;
    ball.shapeColor = "white";
    ball.velocityX = 2;
    ball.velocityY = 2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges=createEdgeSprites()
    


    //add condition to check if box touching surface and make it box



    drawSprites();
}

