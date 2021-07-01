//////////////////////////////Code Started//////////////////////////

//Created Plinko class
class Plinko {

    //Used a  constrcutor
    constructor(x, y) {

        //Created variables and set's value
        var options = {

            //Set restitution(bounciness) as 1
            restitution: 1,

            //Set friction(slippriness) as 0
            friction: 0,

            //Object is be static
            isStatic: true
        }

        //Value of this.r is equals to 10
        this.r = 10;

        //Created circular object inside this.body
        this.body = Bodies.circle(x, y, this.r, options);

        //Added this.body to World
        World.add(world, this.body);

    }

    //Used a display function to display objects
    display() {

        //pos variable stores position of this.body
        var pos = this.body.position;

        //angle variable stores angle of this.body
        var angle = this.body.angle;

        //Started implementation of steps for some period of time
        push();

        //Translated pos.x and pos.y (keeping then updated in informal way)
        translate(pos.x, pos.y);

        //Rotated the angle
        rotate(angle);

        //Image mode is (CENTER)
        imageMode(CENTER);

        //Set no outline color
        noStroke();

        //Text color to be "white"
        fill("white");

        //Ellipse mode as (RADIUS)
        ellipseMode(RADIUS);

        //Displayed object in ellipse dhape
        ellipse(0, 0, this.r, this.r);

        //Stopped implementation of steps
        pop();

    }

};

//////////////////////////////Code Ended//////////////////////////