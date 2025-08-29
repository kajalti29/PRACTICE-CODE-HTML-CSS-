
var btn = document.getElementById("btn");


btn.addEvenListener('click', function(e) {
    // var btn = e.target;
    // var btn = btn.id;
    // var btn_name = btn.textContent;
    alert("Hello World1!");
});

btn.addEvenListener('click', function(e) {
    alert("Hello World2!");
});