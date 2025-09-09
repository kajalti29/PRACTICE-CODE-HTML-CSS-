
let con = document.querySelector("#container");
let love = document.querySelector("#container i");

con.addEventListener("dblclick", function(){
    // Show heart
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = 0.8;

    // After 1s shrink back
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)';
        love.style.opacity = 0;
    }, 1000);
});
