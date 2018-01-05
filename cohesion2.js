var PointE = (function () {
    function PointE(x, y) {
        this.x = x;
        this.y = y;
    }
    PointE.prototype.draw = function () {
        console.log('Coordinates : {x: ' + this.x + ', y: ' + this.y + '}');
    };
    PointE.prototype.distance = function (anotherPoint) {
        console.log('Coordinates : {x: ' + this.x + ', y: ' + this.y + '}');
        console.log('Coordinates : {x: ' + anotherPoint.x + ', y: ' + anotherPoint.y + '}');
    };
    Object.defineProperty(PointE.prototype, "X", {
        //setter and getter(A new and awesome way to implement), otherwise known as properties 
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointE;
}());
//In the above we are creating coordinats while initializing the point object
var pe1 = new PointE(100, 200);
console.log(pe1.x);
pe1.x = 50;
console.log(pe1.x);
pe1.draw();
