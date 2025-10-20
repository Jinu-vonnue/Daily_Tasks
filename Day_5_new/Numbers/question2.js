//qn2
//Write a function  safeAdd(a, b)  that adds two floating numbers (like  0.1 + 0.2 ) accurately using integer scaling.

function safeAdd(num1,num2){
  return (num1+num2).toFixed(2);
 
}
console.log(safeAdd(0.1,0.2));