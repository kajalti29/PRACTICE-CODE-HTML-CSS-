let p = new Promise(function(resolve, reject) {
        alert("I am an alert in promise"); // popup
        resolve(56); // promise fulfilled with value 56
    });

    console.log("Hello one");

    setTimeout(function() {
        console.log("Hello in 2 seconds");
    }, 2000);

    console.log("My name is " + "john");

    // Promise result handle
    p.then(function(value) {
        console.log("Promise resolved with value:", value);
    });