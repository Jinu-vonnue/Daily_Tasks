/*

5. Define a type Product with id, name, price, and inStock.
Then, write a function that takes a Product and returns a formatted string:
"Product [id]: name costs $price".

*/

type product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};
const objs: product = {
  id: 123,
  name: "prod1",
  price: 100,
  inStock: true,
};


function prodFunction(object:product){
  return `${object["id"]} : ${object["name"]} costs $${object["price"]}`
}

console.log(prodFunction(objs));