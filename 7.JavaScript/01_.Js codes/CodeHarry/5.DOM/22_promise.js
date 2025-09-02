let P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 seconds");
        resolve(56);  // value return karega
    }, 2000);
});

P1.then((value) => {
    console.log(value);  // 56 print karega
});
