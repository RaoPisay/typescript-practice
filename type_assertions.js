var message = 'abc';
console.log(message.endsWith('c')); // Here you will get suggestion for String api when you say . ctrl+Space
var msg;
msg = 'abc';
console.log(msg); //No code complete suggestions here when we say . ctrl+space;
// So what should we do in order to get the code complete suggestions for certain types
//Below are 2 ways to do the same 
//Way #1 --Type Assetions
var endsWithBC = msg.endsWith('bc');
console.log(endsWithBC);
//way #2 --
var alternativeWay = msg.endsWith('abc');
console.log(alternativeWay);
