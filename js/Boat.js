class Boat {
  constructor(x, y, width, height, boatPos, animation) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.animation = animation;
    this.speed = 0.05;
    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }

  animacao(){
    this.speed += 0.05;
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);
    console.log("speed"+ this.speed);
    console.log("animação"+ this.animation.length);
    console.log("index"+ index);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
  
  
  remove(index){
    this.animation = DboatAnimation;
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    Body.setVelocity(this.body,{x:0,y:0});
    setTimeout(()=>{
      Matter.World.remove(world,boats[index].body);
      delete boats[index];
    },2000); // 1 segundo
  }

}
