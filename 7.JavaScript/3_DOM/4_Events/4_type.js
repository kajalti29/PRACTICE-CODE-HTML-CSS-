let usernameInput = document.getElementByIdr("username");

usernameInput.addEventListener('input', function(){
    console.log('Current value:' + usernameInput.value);  
});

let comments = document.getElementById('comments');
comments.addEventListener('input', function() {
    console.log('Textarea value: ' + comments.value);
});