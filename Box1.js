class Box1
{
    constructor(x, y, width, height, angle)
    {
        var options ={
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke('#00B8C4');
        fill('#00DEEC');
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}