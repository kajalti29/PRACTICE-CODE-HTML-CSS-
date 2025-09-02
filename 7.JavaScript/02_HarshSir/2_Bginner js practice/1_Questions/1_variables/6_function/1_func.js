// Q26. Function to add two numbers.

// function add(a, b){
//      return a + b;
// }
//      console.log(add(3, 4));  //7




// Q27. Function to square a number.

// function square(n){
//     return n * n;
// }
// console.log(square(4)); //16




// Q28. Function to greet by name.
// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("Kajal"));


// Q29. Function to find sum of array numbers.

// function sumArray(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   return total;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));  // 15



// Q30. Function to check if a number is prime.

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false





























