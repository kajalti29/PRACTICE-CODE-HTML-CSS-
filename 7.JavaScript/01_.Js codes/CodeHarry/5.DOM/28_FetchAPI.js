// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())  
//     .then(data => console.log(data))    
//     .catch(error => console.error("Error:", error));


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My New Post",
        body: "This is post content",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log("Created:", data))
.catch(error => console.error("Error:", error));
