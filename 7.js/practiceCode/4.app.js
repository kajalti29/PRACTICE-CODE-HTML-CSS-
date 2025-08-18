//alindrome ek aisa word, number, sentence ya string hota hai jo ulta padhne par bhi same hi dikhe.

// Palindrome check karne ka code likho (ex: "madam").
function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));



