/*

5. Define a type Product with id, name, price, and inStock.
Then, write a function that takes a Product and returns a formatted string:
"Product [id]: name costs $price".

*/
var objs = {
    id: 123,
    name: "prod1",
    price: 100,
    inStock: true,
};
function prodFunction(object) {
    return "".concat(object["id"], " : ").concat(object["name"], " costs $").concat(object["price"]);
}
console.log(prodFunction(objs));
