let P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong ❌");
    }, 2000);
});

P2.catch((err) => {
    console.log("Handler A:", err);
});

P2.catch((err) => {
    console.log("Handler B:", err);
});
