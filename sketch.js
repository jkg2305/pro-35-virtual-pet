var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogImg;



function preload()
{
	//load images here
dogImg = loadImage("images/dogImg.png")
happyDogImg = loadImage("images/dogImg1.png")


}

function setup() {
  database = firebase.database();
 // console.log(database);
	createCanvas(500, 500);
 

  dog = createSprite(250,250,10,10);
dog.addImage=(dogImg)

//happyDog = createSprite(350,350,10,10)
//happyDog.addImage("images/happyDogImg")


foodStock=database.ref("Food");
foodStock.on("value",readStock)




}


function draw() {  

  drawSprites();
  background(46,139,87)


//dog.display();
//happyDog.display();




if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg)
}


drawSprites()
textSize(13)
fill(255,255,254)
text("food remaining :"+foodS,170,200);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20)
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}


database.ref('/').update({
 Food:x 
})

}



