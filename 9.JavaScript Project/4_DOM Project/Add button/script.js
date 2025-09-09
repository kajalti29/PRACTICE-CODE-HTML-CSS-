


let addBtn = document.querySelector("#add");
let statusText = document.querySelector("h5");
let check = 0;  // 0 = Stranger, 1 = Friend

addBtn.addEventListener("click", function () {
    if (check === 0) {
        statusText.innerText = "Friend";
        statusText.style.color = "green";
        addBtn.innerHTML = "Remove Friend";
        check = 1;
    } else {
        statusText.innerText = "Stranger";
        statusText.style.color = "red";
        addBtn.innerHTML = "Add Friend";
        check = 0;
    }
});
