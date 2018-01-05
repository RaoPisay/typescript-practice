var Point = (function () {
    //constructor(){} // multiple constructors not allowed in Typescript
    function Point(x, y) {
        //Rule once a param is made option by using ? then all the rightside params should be made optional
        //By using optional params we can initialize default constructor as well.
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('Coordinates : {x: ' + this.x + ', y: ' + this.y + '}');
    };
    Point.prototype.distance = function (anotherPoint) {
        console.log('Coordinates : {x: ' + this.x + ', y: ' + this.y + '}');
        console.log('Coordinates : {x: ' + anotherPoint.x + ', y: ' + anotherPoint.y + '}');
    };
    return Point;
}());
var p0 = new Point();
p0.draw(); // Prints undefined for x and y;
var p1 = new Point();
p1.x = 100;
p1.y = 200;
p1.draw(); // Prints given coordinates
var p2 = new Point(500, 1000);
p2.draw(); // Prints given coordinates
p2.distance(p1); //Simply print logic, prints both objects coordinates
