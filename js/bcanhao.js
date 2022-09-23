class BCanhao{
    //propriedades do objeto
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 30
        var options = {
            isStatic: true
        }
      this.body = Matter.Bodies.circle(x,y,this.r,options)
      World.add(world,this.body)
    this.preload = loadImage("imagens/cannonball.png")



    }
    //funções do objeto
    //mostrar o canhão na tela
    display(){
    push()
    imageMode(CENTER)
    image(this.preload,this.body.position.x,this.body.position.y,this.r,this.r)
    pop()
    }
atirar(){
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body, {x:50, y:-50})

}




}