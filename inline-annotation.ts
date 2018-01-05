let drawPoint = (point: {x: Number, y: Number}) => console.log("Coordinates x: " + point.x +" y: "+point.y)
drawPoint({x: 10,y: 20});
//These are called inline annotations, in the params which has reference variable 'point' ,
// as well as the actual data params 'x','y' with data-types can be accessed by reference variable 'point'
//Similarly while we don't need reference variable ,only data params with datatype;

// Below is the same thing implmented by using 'CustomType'

//Create a custom type below
interface Point{
    x:Number;
    y:Number;
}

let drawPoint_with_custom_type = (point: Point) => console.log("Coordinates x: " + point.x +" y: "+point.y)

drawPoint_with_custom_type({x:100,y:200}); // Still valid
let p:Point = {x:500, y:1000}
drawPoint_with_custom_type(p); // Very Good approach as we are passing completly binded param

//But there is a Cohesion problem let's say we have another function
let getDistance = (p1: Point, p2:Point) => {
    //Blah blah code
}
//In oopl Cohesion means basically all the related things should be part of one unit
//Here we are having a point referece and passing to multiple function which completly depends on point and completly related to point behaviour
//So Basically here We need a Point to handle all its related function/behaviour, covered in cohesion.ts file



