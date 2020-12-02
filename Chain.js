class Chain{
    constructor(bodyA,pointB){
         var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0,
            length : 350 
         }
         this.pointB = pointB;
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
    }
    display(){
        var pointA = this.pointB;
        var pointB = this.rope.bodyA.position;

        push();
        strokeWeight(3);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop ();
    }
}