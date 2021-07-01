var snow=[]

function preload(){
  bg=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(900,500)

}

function draw() {
  background(bg);
  
  
    
    for(var i=0;i<snow.length;i++){
      snow[i].display()
      snow[i].movement()
    }

  snow.push(new Snow(random(0,800),random(1,6)))
  
  drawSprites();
} 