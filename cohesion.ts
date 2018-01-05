class Point
{
    x:Number;
    y:Number;
    //constructor(){} // multiple constructors not allowed in Typescript
    
    constructor(x?:Number, y?:Number){
        //Rule: once a param is made optional by using '?' then all the rightside params should be made optional
        //By using optional params we can initialize default constructor as well.
        this.x = x;
        this.y = y;
    }
    //if you want to forbidden to reset the x and y variables we can make it as private
    //Follow cohesion2.ts for new way of declaring constructor
    
    draw() {
        console.log('Coordinates : {x: '+this.x+', y: '+this.y+'}');
        
    }
    distance(anotherPoint :Point) {
        console.log('Coordinates : {x: '+this.x+', y: '+this.y+'}');
        console.log('Coordinates : {x: '+anotherPoint.x+', y: '+anotherPoint.y+'}');
    }
}

let p0:Point = new Point();
p0.draw(); // Prints undefined for x and y;

let p1:Point = new Point();
p1.x = 100;
p1.y = 200;
p1.draw(); // Prints given coordinates

let p2:Point = new Point(500,1000);
p2.draw(); // Prints given coordinates

p2.distance(p1);//Simply print logic, prints both objects coordinates