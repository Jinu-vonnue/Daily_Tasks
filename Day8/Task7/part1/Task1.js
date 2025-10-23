// const arrObj:Obj[] =[]
var students = [
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 },
];
var passMark = 50;
var newArray = [];
students.forEach(function (itm) {
    newArray.push({
        name: itm.name,
        status: itm.marks > passMark ? "Pass" : "Fail",
    });
});
console.log(newArray);
