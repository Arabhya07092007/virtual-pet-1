var dog,happyDog,dog2,database,foodS,foodStocke;
var value;


function preload()
{
  happyDog = loadImage("dogImg1.png");
  dog2 = loadImage("dogImg.png");
	
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  
  dog = createSprite(280,340,10,10);
  dog.addImage(dog2);
  dog.scale = 0.2;

  foodStocke = database.ref('food');
  foodStocke.on("value",readStocke);
  
  
}


function draw() { 
  background(46, 139, 87);


  drawSprites();

  
  

  if(keyWentDown("Up_ARROW")){
    writeStocke(foodS);
    dog.addImage(happyDog);
    
    foodS = foodS -1;
    console.log(foodS);

     
  }

  textSize(20);
  fill("white");
  text(" Press the up arrow key to feed the dog ",70,30);
  text("  Food remaining : "+foodS,150,250);
  text("don't do anything untill undefined changes to a number",10,60)

  if(foodS<=0){
    foodS = 0;
  }
  



} 

function writeStocke(x){

  
  database.ref('/').update({
    food:x
  })


}

function readStocke(data){

  foodS = data.val();
  

 

}




