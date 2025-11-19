//   represent a unique identifier. Symbols are immutable and are often used to create unique property keys for objects to avoid name collisions.
let sym1 = Symbol('description1');
let sym2 = Symbol('description2');

console.log(sym1); // Output: Symbol(description1)
console.log(sym2); // Output: Symbol(description2)
console.log(sym1 === sym2); // Output: false, because each Symbol is unique
