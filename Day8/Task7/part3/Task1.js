var arr = [
    [1, 2, 3],
    [0, 7],
];
var total = 0;
function sumArray(arr) {
    var sum = "";
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (typeof item == "object") {
            total += sumArray(item);
        }
        else {
            sum += item;
        }
    }
    return Number(sum);
}
sumArray(arr);
console.log(total);
