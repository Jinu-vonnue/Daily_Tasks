/*

5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

Test cases:
Input: 1, 2, 3, 4
Expected output: 10

Input: 1, 2
Expected output: 3

*/
function sumOfArguments() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var i = arr_1[_a];
        sum += i;
    }
    return sum;
}
var result = sumOfArguments(1, 2, 3, 4);
console.log("Sum is " + result);
