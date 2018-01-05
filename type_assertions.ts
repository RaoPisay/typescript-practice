let message = 'abc';
console.log(message.endsWith('c')) // Here you will get suggestion for String api when you say . ctrl+Space
let msg:any
msg = 'abc';
console.log(msg); //No code complete suggestions here when we say . ctrl+space;

// So what should we do in order to get the code complete suggestions for certain types
//Below are 2 ways to do the same 

//Way #1 --Type Assetions
let endsWithBC = (<String>msg).endsWith('bc');
console.log(endsWithBC);

//way #2 --
let alternativeWay = (msg as String).endsWith('abc');
console.log(alternativeWay);


