/*

6. Create an enum Direction with values Up, Down, Left, and Right.
Write a function that takes a direction and logs a message like "You moved Up!".

*/
var Direction;
(function (Direction) {
    Direction["dir1"] = "Up";
    Direction["dir2"] = "Down";
    Direction["dir3"] = "Left";
    Direction["dir4"] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    return "You moved " + direction;
}
console.log(move(Direction.dir2));
