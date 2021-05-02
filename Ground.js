class Ground{

    constructor(x,y,width,height){

        this.width= width;
        this.height = height;
       var ground_options= {isStatic:true}
        this.ground = Bodies.rectangle(x,y,width,height,ground_options)
        World.add(myWorld,this.ground)
    }
display(){

    var pos = this.ground.position ; 
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}
}
