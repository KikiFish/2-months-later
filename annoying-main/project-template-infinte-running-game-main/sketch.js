var dogImg, dog_running1Img, dog_running2Img, dog_running3Img
var ground, invisibleGround
var dog_treat
var nails
var parkImg, nailsImg, treatImg 

var gameOverImg

function preload(){
    
parkImg = loadImage("Park.jpg")
dog = loadAnimation("dog_running1.png", "dog_running2.png", "dog_running3.png")
}

function setup() {
 createCanvas(600, 400)
 dog = createSprite(200, 100)
 dog.addAnimation("dog_running1.png", "dog_running2.png", "dog_running3.png")
 park = createSprite(300,300);
  park.addImage("park",parkImg);
  park.velocityX = 10;
}

function draw() {
 background(parkImg)
 if(park.x > 600){
  park.x = 400
} 
 
}