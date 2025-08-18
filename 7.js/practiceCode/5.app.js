// Ek array me se duplicates remove karna.

let arr = [1,2,3,4,2,5];
let duplicateArr = [...new Set(arr)];
console.log(duplicateArr);