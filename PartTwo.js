// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Not prime if divisible by any number other than 1 and itself
    }
    return true; // Number is prime
}

// Function to find the next prime number greater than or equal to n
function findNextPrime(n) {
    let candidate = n; 
    while (true) {
        if (isPrime(candidate)) {
            console.log(candidate); // Log the prime number
            break; 
        }
        candidate++; // Increment to check the next number
    }
}


let n = 10; 
findNextPrime(n);
