class BCanhao{
    //propriedades do objeto
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 30
        var options = {
            isStatic: true
        }
      this.body = Bodies.circle(x,y,this.r,options)
      World.add(world,this.body)
    this.preload = loadImage("imagens/cannonball.png")



    }
    //funções do objeto
    //mostrar o canhão na tela
    display(){
    push()
    translate(this.x, this.y)
    imageMode(CENTER)
    image(this.preload,0,0,this.r,this.r)
    pop()
    }
atirar(){
var novoAngulo = canhao.angle - 28
novoAngulo = novoAngulo *(3.14/180)
var velocidade = p5.Vector.fromAngle(novoAngulo)
velocidade.mult(0.5)

Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body, {x:velocidade.x*(180/3.14), y:velocidade.y*(180/3.14)})
console.log("atirar")
}




}