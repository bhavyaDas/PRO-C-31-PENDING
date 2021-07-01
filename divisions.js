////////////////////////////////Code Started////////////////////////////////

//Made a Divisions class
class Divisions {

    //Used a constructor
    constructor(x, y, w, h) {

        //Created variables and set's value
        var options = {

            //Object is be static
            isStatic: true

        }

        //Made rectangular body inside this.body
        this.body = Bodies.rectangle(x, y, w, h, options);

        //this.w has a value of w
        this.w = w;

        //this.h has a value of h
        this.h = h;

        //Added this.body to World
        World.add(world, this.body);

    }

    //Display function for display object
    display() {

        //Stored this.body's position inside pos variable   
        var pos = this.body.position;

        //Set rect mode as (CENTER)
        rectMode(CENTER);

        //Set shape color as "white"
        fill("white");

        //Displayed the object through rectangular shape
        rect(pos.x, pos.y, this.w, this.h);

        //Used a for loop
        for (var i = 0; i < this.body.length; i++) {

            //Displayed the object through rectangular shape continiously
            rect(this.body[i][0], this.body[i][1]);

        }

    }

};

 ////////////////////////////////Code Ended////////////////////////////////