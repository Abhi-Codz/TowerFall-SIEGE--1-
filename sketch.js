const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Naming varibles
var engine, world;
var base, platform;
var hex;
var sling;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18;
var block19, block20;



function preload()
{

}

function setup()
{
    var canvas = createCanvas(1250, 550);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //Creating body here
    base = new Base(600, height-10, width+52, 20);
    platform = new Base(838, 350, 380, 20);
    hex = new Poly(200, 200, 20);
    sling = new SlingShot(hex.body, {x:200,y:190})

    //Creating the block cato1
    block1 = new Box2(700, 70, 40, 50);
    block2 = new Box2(740, 70, 40, 50);
    block3 = new Box2(780, 70, 40, 50);
    block4 = new Box2(820, 70, 40, 50);
    block5 = new Box2(860, 70, 40, 50);
    block6 = new Box2(900, 70, 40, 50);
    block7 = new Box2(940, 70, 40, 50);
    block8 = new Box2(980, 70, 40, 50);
    //Creating the block cato2
    block9 = new Box3(740, 20, 40, 50);
    block10 = new Box3(780, 20, 40, 50);
    block11 = new Box3(820, 20, 40, 50);
    block12 = new Box3(860, 20, 40, 50);
    block13 = new Box3(900, 20, 40, 50);
    block14 = new Box3(940, 20, 40, 50);
    //Creating the block cato3
    block15 = new Box1(780, 10, 40, 50);
    block16 = new Box1(820, 10, 40, 50);
    block17 = new Box1(860, 10, 40, 50);
    block18 = new Box1(900, 10, 40, 50);
    //Creating the block cato4
    block19 = new Box4(820, 0, 40, 50);
    block20 = new Box4(860, 0, 40, 50);
}


function draw()
{
    background('#382C2C');
    Engine.update(engine);

    base.display();
    platform.display();
    hex.display();
    sling.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY});
}
  
function mouseReleased()
{
    sling.fly();
}
  
/*function keyPressed()
{
   if(keyCode === 32)
    {
      Matter.Body.setPosition(hex.body,{x:100,y:200});
      sling.attach(hex.body);
    }
}*/