// Change events tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye

// For text input
var usernameInput = document.getElementById('username');
usernameInput.addEventListener('change', function() {
    console.log('Text input changed to: ' + usernameInput.value);
});

// For dropdown
var colorSelect = document.getElementById('colors');
colorSelect.addEventListener('change', function() {
    console.log('Selected color: ' + colorSelect.value);
});
