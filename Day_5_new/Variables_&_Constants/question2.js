//qn2
//Try reassigning a  const  variable and catch the error using  try...catch . Print the error message

const str = "Apple";

try {
  str = "Mango";
} catch (error) {
  console.log(error);
  console.log("Error handled");
  console.log(str);
}