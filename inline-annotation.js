var drawPoint = function (point) { return console.log("Coordinates x: " + point.x + " y: " + point.y); };
drawPoint({ x: 10, y: 20 });
var drawPoint_with_custom_type = function (point) { return console.log("Coordinates x: " + point.x + " y: " + point.y); };
drawPoint_with_custom_type({ x: 100, y: 200 }); // Still valid
var p = { x: 500, y: 1000 };
drawPoint_with_custom_type(p); // Very Good approach as we are passing completly binded param
