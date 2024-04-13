/* Using object literals */
const user = {
  name: "Ram",
  age: 10,
  email: "ram@gmail.com",
  password: "ram1234",
  job: { job1: "Dev", job2: "Web Dev" },
  salary: 1000,
  hobbies: ["Eat", "Code", "Sleep"],
  greetMessage: function () {
    console.log("\nName: ", this.name);
    console.log("Age: ", this.age);
    console.log("Email: ", this.email);
    console.log("Password: ", this.password);
    console.log("Job: ", this.job);
    console.log("Job1: ", this.job.job1);
    console.log("Job2: ", this.job.job2);
    console.log("Salary: ", this.salary);
    console.log("Hobbies: ", this.hobbies);
    console.log("Hobbie1: ", this.hobbies[0]);
    console.log("Hobbie2: ", this.hobbies[1]);
    console.log("Hobbie3: ", this.hobbies[2]);
  }
};


console.log("\nName: ", user.name);
console.log("Age: ", user.age);
console.log("Email: ", user.email);
console.log("Password: ", user.password);
console.log("Job: ", user.job);
console.log("Job1: ", user.job.job1);
console.log("Job2: ", user.job.job2);
console.log("Salary: ", user.salary);
console.log("Hobbies: ", user.hobbies);
console.log("Hobbie1: ", user.hobbies[0]);
console.log("Hobbie2: ", user.hobbies[1]);
console.log("Hobbie3: ", user.hobbies[2]);
user.greetMessage();