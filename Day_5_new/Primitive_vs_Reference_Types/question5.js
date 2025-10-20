//qn5
// Write a function  updateUser(user)  that adds a  lastActive  property — mutate it in one version, then avoid mutation in another.

let user = { name: "John" };

function updateUser1(user) {
  let newUser = {};
  Object.assign(newUser, user);
  newUser.lastactive = "12 PM";
  return newUser;
}
function updateUser2(user) {
  return user;
}

console.log(updateUser1(user));
console.log(updateUser2(user));
