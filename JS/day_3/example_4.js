class User {
  name = null;
  email = null;
  password = null;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  greetMessage() {
    console.log("\nName: ", this.name);
    console.log("Email: ", this.email);
    console.log("Password: ", this.password);
  }
}

const user = new User("Ram", "ram@gmail.com", "ram1234");
console.log("\nName: ", user.name);
console.log("Email: ", user.email);
console.log("Password: ", user.password);
user.greetMessage();