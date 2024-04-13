let user = {
  name: "Ram",
  age: 10,
  email: "ram@gmail.com",
  password: "ram1234",
  hobbies: ["code", "eat", "sleep"],
  job: { job1: "Tester", job2: "Web dev" },
  salary: 1000.0
};

console.log("Iterating Keys")
const keys = Object.keys(user);
console.log("Keys : ", keys);
for (let key of keys) {
  console.log(key);
}

console.log("\n\nIterating Values")
const values = Object.values(user);
console.log("Values : ", values);
for (let value of values) {
  console.log(value);
}

console.log("\n\nIterating Pair")
const pairs = Object.entries(user);
console.log("Pairs : ", pairs);
for (let pair of pairs) {
  console.log(pair);
}