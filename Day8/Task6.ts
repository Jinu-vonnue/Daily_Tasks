/*

6. Create an enum Direction with values Up, Down, Left, and Right.
Write a function that takes a direction and logs a message like "You moved Up!".

*/

enum Direction {
  dir1 = "Up",
  dir2 = "Down",
  dir3 = "Left",
  dir4 = "Right",
}

function move(direction:string){
  return "You moved "+direction;
}

console.log(move(Direction.dir1));