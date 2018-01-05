//JS way to creating a function with variable
var log_1 = function (message) {
    console.log(message);
};
//TS way to create a function with variable
var doLogTS_1 = function (message) { return console.log(message); }; // One param with one statement
var doLogTS_2 = function (message) { return console.log(message); }; // One param with one statement,
// we can even remove paranthesis if it is only one param, but it is recommended to use braces even if there is only 1 param
//let doLogTS_3 = message_1,message_2 => console.log(message); //Invalid without braces
var doLogTS_3 = function (message_1, message_2) { return console.log(message_1 + message_2); };
var doLogTS_4 = function (message_1, message_2) {
    var msg = message_1 + message_2;
    console.log(msg);
};
log_1('With Plain JS way');
doLogTS_1('With TS Way');
doLogTS_2('With TS Way without param braces');
doLogTS_3('With multiple param with braces', "World");
doLogTS_3('With multiple param with braces and multiple statements', "World");
