
// Javascript External File

/* 
JavaScript program to find a given number is prime number or not:
JavaScript function named isPrime that accepts a parameter which checks if the given number is
prime number or not and returns true or false. 
*/

// function isPrime(number){ 
// above signature is another way to define a function as well.
var isPrime = function (number) {
    var isPrime = true;      
    if (number >= 2){
        if(number == 2 || number == 3){
            isPrime = true;
        } 
            else if(number % 2 == 0){
                isPrime = false;
            }
            else {
            for (i=3 ; i <= Math.floor(number/2); i++){
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
                else {
                    isPrime = true;
                }
            }
        }
    }
    else {
        isPrime = false;
    }
    return isPrime;
    }

console.log(`Print if the Given number is A PRIME then 'TRUE' and if NOT A PRIME then 'FALSE':
The function returns RESULT is: ` + isPrime(97));
