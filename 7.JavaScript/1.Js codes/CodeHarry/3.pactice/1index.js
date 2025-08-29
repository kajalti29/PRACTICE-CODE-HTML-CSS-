//Practice set :- 5
// let a = [1, 2, 3, 4, 5];
// a.push(3);
// console.log(a);


let a = [1, 2, 3, 4, 5];
do {
  a.push(3);
} while (a.length < 10);

console.log(a);  
// [1, 2, 3, 4, 5, 3, 3, 3, 3, 3]
