class Canhao{
    //propriedades do objeto
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

    }
    //funções do objeto
    //mostrar o canhão na tela
    display(){
push()
imageMode(CENTER)
    image(canhaoImg2,this.x, this.y,this.width,this.height)
    image(canhaoImg,160,120,200,200)
pop()
    }
}