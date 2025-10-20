//qn5
//Create a function  removeFalsy(arr)  that removes all falsy values ( false ,  0 ,  '' , null ,  undefined ,  NaN )

let arrFalse = [false ,  0 ,  '' , null ,  undefined ,  NaN];

function removeFalsy(arr){
  let arrTrue =[];
  for(i of arr){
    if(!(arrFalse.includes(i))){
      arrTrue.push(i);
    }
  }
  return arrTrue;
}

console.log(removeFalsy([1,2,3,0,'',4,false,5,null,6,7,8,undefined,NaN,9,10]));