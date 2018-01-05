

//JS way to creating a function with variable

let log_1 = function(message){
    console.log(message);
}

//TS way to create a function with variable

let doLogTS_1 = (message) => console.log(message); // One param with one statement
let doLogTS_2 = message => console.log(message); // One param with one statement, we can even remove paranthesis if it is only one param, but it is recommended to use braces even if there is only 1 param
//let doLogTS_3 = message_1,message_2 => console.log(message); //Invalid without braces
let doLogTS_3 = (message_1,message_2) => console.log(message_1 + message_2);
let doLogTS_4 = (message_1,message_2) => {
    let msg = message_1 + message_2;
    console.log(msg);
}

log_1('With Plain JS way');
doLogTS_1('With TS Way');
doLogTS_2('With TS Way without param braces');
doLogTS_3('With multiple param with braces',"World");
doLogTS_3('With multiple param with braces and multiple statements',"World");



