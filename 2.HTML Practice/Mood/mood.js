let moods = JSON.parse(localStorage.getItem("moodHistory")) || [];

const moodList = document.getElementById("moodList");
const moodButtons = document.querySelectorAll(".mood-btn");

// Show mood list
function displayMoods() {
    moodList.innerHTML = "";

    // Get unique dates from moods
    const dates = [...new Set(moods.map(mood => mood.date))];

    dates.forEach(date => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${date}</strong> - ${
            moods.filter(m => m.date === date).map(m => m.emoji).join(" ")
        }`;

        // ❌ Delete this date's moods button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete this date";
        delBtn.style.marginLeft = "10px";
        delBtn.onclick = () => {
            // Remove all moods of that date
            moods = moods.filter(m => m.date !== date);
            localStorage.setItem("moodHistory", JSON.stringify(moods));
            displayMoods();
        };

        li.appendChild(delBtn);
        moodList.appendChild(li);
    });
}

// Add mood on button click
moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = {
            emoji: button.textContent,
            date: new Date().toLocaleDateString()
        };
        moods.push(mood);
        localStorage.setItem("moodHistory", JSON.stringify(moods));
        displayMoods();
    });
});

// Initial call
displayMoods();
