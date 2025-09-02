// Example 1: Multiple .then() handlers
let P1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Resolved value");  // ab promise resolved hoga

    }, 2000);
});

//Handle 1
P1.then((value) => {
    console.log("Handle 1:",value);
});

//Handle 2
P1.then((value) => {
    console.log("Handle 2:",value);
});

//Handle 3
P1.then((value) => {
    console.log("Handle 3:",value);
});