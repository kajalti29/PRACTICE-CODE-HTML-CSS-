// let myPromise = new Promise((resolve, reject) => {
//     // async kaam
//     if (success) {
//         resolve("Success value");
//     } else {
//         reject("Error aaya");
//     }
// });


// 

let P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 seconds");
        resolve(56);
    }, 2000);
});

P1.then((value) => {
    console.log(value);
});
