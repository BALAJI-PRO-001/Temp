const user = new Object();
// console.log(user);
user.name = "Ram";
user.email = "ram@gmail.com";
user.password = "ram1234";
user.greetMessage = () => {
  console.log("\nName: ", user.name);
  console.log("Email: ", user.email);
  console.log("Password: ", user.password);
}

console.log("\nName: ", user.name);
console.log("Email: ", user.email);
console.log("Password: ", user.password);
user.greetMessage();