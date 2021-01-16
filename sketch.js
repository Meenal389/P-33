const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState="Start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  g2=new Ground(5,400,10,800)
  g3=new Ground(795,400,10,800)

  
  //object=Bodies.rectangle(x,y,width,height)
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


}
 


function draw() {
  background("black");
  ground.display()
  g2.display()
  g3.display()

  textFont("Times New Roman")
  textSize(30)
 text("Score : "+score,20,30);
 text("500",20,520)
 text("500",100,520)
 text("500",180,520)
 text("500",260,520)
 text("100",340,520)
 text("100",420,520)
 text("100",500,520)
 text("200",580,520)
 text("200",660,520)
 text("200",740,520)
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   push()
   stroke("yellow")
   strokeWeight(2)
   line(10,480,790,480);
   pop()

   
   if(turn===5){
     gameState="end";
   }
   if(particle!=null){
    particle.display()

    if(particle.body.position.y>480){
      if(particle.body.position.x<60){
        score=score+500
        particle=null
      }
      else if(particle.body.position.x<150 && particle.body.position.x>70){
      score=score+500
      particle=null
      }
      else if(particle.body.position.x<230 && particle.body.position.x>160){
        score=score+500
        particle=null
      }
      else if(particle.body.position.x<310 && particle.body.position.x>240){
          score=score+500
          particle=null
      }
      else if(particle.body.position.x<390 && particle.body.position.x>320){
            score=score+100
            particle=null
      }
      else if(particle.body.position.x<470 && particle.body.position.x>400){
        score=score+100
        particle=null
        }
     else if(particle.body.position.x<550 && particle.body.position.x>480){
          score=score+100
          particle=null
          }
      else if(particle.body.position.x<630 && particle.body.position.x>560){
            score=score+200
            particle=null
            }
     else if(particle.body.position.x<720 && particle.body.position.x>640){
              score=score+200
              particle=null
        }
      else {
        score=score+200
        particle=null
      }
    }
  }
  if(gameState==="end"){
    push()
    textSize(56)
    fill(255)
    stroke("cyan")
    strokeWeight(1)
    text("Game Over",270,230)
    pop()
  }
}


function mousePressed(){
   if(gameState!="end"){
     turn+=1
     particle=new Particle(mouseX,10,8)
   }
  
}


 