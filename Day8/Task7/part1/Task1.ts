/*

const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];
Create a new array:
[
  { name: "Alice", status: "Fail" },
  { name: "Bob", status: "Pass" },
  { name: "Charlie", status: "Fail" },
]

*/
type Obj = { name: string; marks: number };
// const arrObj:Obj[] =[]
const students: Obj[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

let passMark = 50;

type ObjNew = { name: string; status: string };
const newArray: ObjNew[] = [];

students.forEach((itm) => {
  newArray.push({
    name: itm.name,
    status: itm.marks > passMark ? "Pass" : "Fail",
  });
});

console.log(newArray);
