function updateClock(){
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();

    // ternary operator
    h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

    // Show time
    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}

// Update every second
    setInterval(updateClock, 1000);

    // Run once immediately
    updateClock();
