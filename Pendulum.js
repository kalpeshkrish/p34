class Pendulum{
    constructor(x,y,color){
        var options = {
          isStatic: false,
          density: 7.8,
          friction : 0,
          restitution: 1.3
        }
        this.body = Bodies.circle(x,y,40,options);
        this.r = 40;
        this.color=color;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        noStroke();
        
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ();
    }
}
