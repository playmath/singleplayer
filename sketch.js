var logo;
var easy, hard, medium;
var gameState = "serve";



function preload(){
logo = loadImage("Logo Transperant.png");
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    easy = createButton("Easy");
    easy.position(width/2 - 100,220);
    easy.class("button");
    easy.mouseClicked(easykaro);

    medium = createButton("Medium");
    medium.position(width/2 - 100,285);
    medium.class("button");
    medium.mouseClicked(mediumkaro);

    hard = createButton("Hard");
    hard.position(width/2 - 100,350);
    hard.class("button");
    hard.mouseClicked(hardkaro);


}

function draw() {

    background("white");
    imageMode(CENTER);
  image(logo,width/2, 100,150,150);
  

    drawSprites();

}

function easykaro(){
  window.open("https://playmath.github.io/singleplayereasy","_self");
}

function hardkaro(){
  window.open("https://playmath.github.io/singleplayerhard","_self");
}

function mediumkaro(){
  window.open("https://playmath.github.io/singleplayermedium","_self");
}
