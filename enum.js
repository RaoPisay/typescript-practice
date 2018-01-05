var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // Automatically assign values like 0, 1, 2 and so on.
var bgColor = Color.Red;
console.log(bgColor); // Prints 0;
console.log(Color.Green); // Prints 1;
console.log(Color.Blue); //// Prints 2;
//Removing verbose
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 3] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 1] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red); // Prints 3;
console.log(Color.Green); // Prints 2;
console.log(Color.Blue); //// Prints 1;
