//QUESTION 1
let number = 7;
if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// QUESTION 2
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//QUESTION 3
let score = 70;

if (score >= 70) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}

//QUESTION 4
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

//QUESTION 5
const product = {
  name: "Bag",
  price: 5000,
  isMember: true,
};

let finalPrice;

if (product.isMember) {
  finalPrice = product.price - (product.price * 10) / 100;
} else {
  finalPrice = product.price;
}
console.log(finalPrice);
