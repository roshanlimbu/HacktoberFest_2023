// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to generate random prime numbers
function generateRandomPrimes(count) {
    const primeNumbers = [];
    while (primeNumbers.length < count) {
        const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
        if (isPrime(randomNum)) {
            primeNumbers.push(randomNum);
        }
    }
    return primeNumbers;
}

// Display 10 random prime numbers
const primeNumbers = generateRandomPrimes(10);
const primeNumbersDiv = document.getElementById("primeNumbers");
primeNumbersDiv.textContent = "Random Prime Numbers: " + primeNumbers.join(", ");
