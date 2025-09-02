// alert("Hello")

// setTimeout(function(){
//     alert("I am inside of settimeout")
// }, 2000)


let timer = setInterval(() => {
    console.log("Running...");  
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Stopped after 5 seconds!");
})