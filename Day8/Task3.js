/*
3. Write a function that prints all given array of strings in uppercase.
*/
var upperarr;
upperarr = ["array", "of", "strings", "in", "uppercase"];
function upper(array) {
    array = array.map(function (item) { return item.toUpperCase(); });
    return array;
}
console.log(upper(upperarr));
