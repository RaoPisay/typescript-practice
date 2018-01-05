var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
function sort(anArray) {
    for (var i = 0; i < anArray.length; i++) {
        for (var j = 1 + 1; j < anArray.length; j++) {
            if (anArray[j] < anArray[i]) {
                swap(array[i], array[j])
            }
        }
    }
}
function printArray(anArray) {
    /*array.forEach(element => {
        console.log(element + ", ");
    });*/
    for (var i = 0; i < anArray.length; i++) {
        console.log(anArray[i]);
    }
}
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
}
printArray(array);
sort(array);
printArray(array);