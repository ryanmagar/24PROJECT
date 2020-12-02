class Dustbin{
    constructor(x,y,width,height){
        var options={
           ' isStatic':true
        }
        this.bodyB=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyB);
        this.body1=Bodies.rectangle(x-(width/2),y-(height/2),height,width);
        World.add(world,this.body1);
        this.bodyr=Bodies.rectangle(x+(width/2),y-(height/2),height,width);
        World.add(world,this.bodyr);
        this.bodyB.width=width;
        this.bodyB.height=height;
    }

    display(){
        fill("white");
        rect(this.bodyB.position.x,this.bodyB.position.y,this.bodyB.width,this.bodyB.height);
        rect(this.body1.position.x-(this.body1.width/2)),(this.body1.height/2);
        rect(this.bodyr.position.x-(this.bodyr.width/2)),(this.bodyr.height/2);
    }
}