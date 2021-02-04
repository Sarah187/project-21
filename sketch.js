
var canvas;
var music;
var block1, block2, block3, block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,570,200,50);
    block1.shapeColor = "lightblue";
    block2 = createSprite(300,570,200,50);
    block2.shapeColor = "pink";
    block3 = createSprite(500,570,200,50);
    block3.shapeColor = "lightgreen";
    block4 = createSprite(700,570,200,50);
    block4.shapeColor = "yellow";

    //create box sprite and give velocity

    ball = createSprite(random(20,750),100,50,50);
    ball.velocityX = 8
    ball.velocityY = 10

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if (block1.isTouching(ball) && ball.bounceOff(block1)) {
        ball.shapeColor = block1.shapeColor;
        music.play();
    }

    if (block2.isTouching(ball) && ball.bounceOff(block2)) {
        ball.shapeColor = block2.shapeColor;
        music.play();
    }

    if (block3.isTouching(ball) && ball.bounceOff(block3)) {
        ball.shapeColor = block3.shapeColor;
        music.stop();
        ball.VelocityX=0
    }

    if (block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor = block4.shapeColor;
    }

    drawSprites();
}
