// Fibonacci series ek number sequence hai jisme har number apne pichle do numbers ka sum hota hai
// Fibonacci series print karne ka code likho.
let n = 10;
let a = 0, b = 1;

console.log("Fibonacci Series:");
for(let i = 0; i<n; i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}


