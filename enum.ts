enum Color{Red, Green, Blue};// Automatically assign values like 0, 1, 2 and so on.
let bgColor = Color.Red;
console.log(bgColor); // Prints 0;
console.log(Color.Green);// Prints 1;
console.log(Color.Blue);//// Prints 2;

//Removing verbose
enum Color2 {Red=3, Green=2, Blue=1}
console.log(Color2.Red); // Prints 3;
console.log(Color.Green);// Prints 2;
console.log(Color.Blue);//// Prints 1;


