const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope, rope1,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1100, 20);
  ground1 = new Ground(0, 1500, 30, 3000);
  ground2= new Ground(1500, 0, 3000, 30);
  ground3=new Ground(1500, 350, 30, 700)

  hero = new Hero(445,150, 150);
  rope = new Rope(hero.body, { x: 450, y: 100 });

  monster = new Monster(950,550,200);
  
  box1 = new Box(1100, 560, 70, 70);
  box2 = new Box(1100, 490, 70, 70);
  box3 = new Box(1100, 420, 70, 70);
  box4= new Box(1100, 350, 70, 70);
  box5= new Box(1100, 280, 70, 70);

  box6= new Box(750, 560, 70, 70);
  box7= new Box(750, 490, 70, 70);
  box8= new Box(750, 420, 70, 70);
  box9= new Box(750, 350, 70, 70);
  box10=new Box(750, 280, 70, 70);

  box11= new Box(925, 250, 400, 10);
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  hero.display();
  rope.display();

  monster.display();

}

function mouseDragged(){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
   
}



