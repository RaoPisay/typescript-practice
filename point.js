"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export is a key word to export the whole thing to outside world--Meaning outside world can import this module.
//check the module.ts file for example
var PointE = (function () {
    function PointE(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointE.prototype.draw = function () {
        console.log('Coordinates : {x: ' + this._x + ', y: ' + this._y + '}');
    };
    PointE.prototype.distance = function (anotherPoint) {
        console.log('Coordinates : {x: ' + this._x + ', y: ' + this._y + '}');
        console.log('Coordinates : {x: ' + anotherPoint._x + ', y: ' + anotherPoint._y + '}');
    };
    Object.defineProperty(PointE.prototype, "x", {
        //setter and getter(A new and awesome way to implement), otherwise known as properties 
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointE;
}());
exports.PointE = PointE;
