// //    Async/Awaitasync 
// function myFunc() {
//     return "Hello Async";
// }

// myFunc().then(console.log); // "Hello Async"



function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function fetchData() {
    console.log("⏳ Waiting for data...");
    let result = await getData();  // यहाँ रुक जाएगा जब तक result ना आए
    console.log(result);
    console.log("Task Completed");
}

fetchData();
