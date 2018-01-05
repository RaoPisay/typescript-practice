/**
 * let keyword and compare with var
 */
var number = 1;
var count = 5;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Finally ' + i);
}
doSomething();
