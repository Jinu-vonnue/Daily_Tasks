/*

5. Create a UI with a name input box, and we should be able to see the entered name below with adding the prefix as "Hello". 
   But we should not be able to see the printed name each time when a user enters a character in the input, instead it should be shown when the user stops typing.

*/


let input = document.getElementById("name");

let heading = document.getElementById("heading");


input.addEventListener("input",function(){
   setTimeout(()=>{
      heading.innerHTML = `Hello ${input.value}`
   },3000);
})
