const names = {fname: "Ram", sname: "Kumar"};
const user = Object.create(names);
user.fullName = user.fname + " " + user.sname;
user.email = "ram@gmail.com";
user.password = "ram1234";
user.greetMessage = function() {
  console.log("\nFullName: ", user.fullName);
  console.log("FirstName: ", user.fname);
  console.log("SecondName: ", user.sname);
  console.log("Email: ", user.email);
  console.log("Password: ", user.password);
}

console.log("\nFullName: ", user.fullName);
console.log("FirstName: ", user.fname);
console.log("SecondName: ", user.sname);
console.log("Email: ", user.email);
console.log("Password: ", user.password);
user.greetMessage();