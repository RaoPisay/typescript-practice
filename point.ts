//export is a key word to export the whole thing to outside world--Meaning outside world can import this module.
//check the module.ts file for example
export class PointE
{
    constructor(private _x?:Number, private _y?:Number){}
    draw() {
        console.log('Coordinates : {x: '+this._x+', y: '+this._y+'}');
        
    }
    distance(anotherPoint :PointE) {
        console.log('Coordinates : {x: '+this._x+', y: '+this._y+'}');
        console.log('Coordinates : {x: '+anotherPoint._x+', y: '+anotherPoint._y+'}');
    }
    //setter and getter(A new and awesome way to implement), otherwise known as properties 
    get x()
    {
        return this._x;
    }
    set x(value:Number)
    {
        this._x = value
    }
    //By using the above we can use this properties as fields
}