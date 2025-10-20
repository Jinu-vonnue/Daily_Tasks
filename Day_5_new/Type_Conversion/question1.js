//qn1
//Convert the following using  Number()  and log each:  '42' ,  '42px' ,  '' ,  'null' , null ,  undefined ,  true ,  false

let arr1 = ["42", "42px", "", "null", null, undefined, true, false];

arr1.forEach((item) => {
  console.log(Number(item));
});
