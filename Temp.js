
// arbitary function
// function add() {
//   let sum = 0;
//   for (let element of arguments) {
//     sum += element;
//   }
//   return sum;
// }

// console.log("Sum : ", add(100, 100, 100, 100, 100));


// spred operator 
// function add(...values) {
//   let sum = 0;
//   for (let value of values) {
//     sum += value;
//   }
//   return sum;
// }

// console.log("Sum : ", add(100, 100, 100, 100, 100));


// function as expression
// const add = function(num1, num2) {
//   return num1 + num2;
// }

// console.log("Sum : ", add(100, 100));


//call back

// function result(cb, num1, num2) {
//   return cb(num1, num2);
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log("Result : ", result(add, 100, 100));