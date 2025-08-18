// Ek number check karo ki prime hai ya nahi.
let num = 6;
let isPrime = true;

if(num < 1){
    isPrime = false;
}else{
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " ek Prime number hai");
} else {
    console.log(num + " Prime number nahi hai");
}