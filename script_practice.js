// console.log("hello");
// function greet(name){
//     console.log(`hello , ${name}!`);

// }
// greet("Rahini");




// Q1. Armstrong Secure Code
// Scenario: A banking system validates codes using Armstrong logic. This system processes large
// datasets and must handle edge cases efficiently.

// function Armstrong(num){
//     if(num<100 || num>999){
//         return false;
//     }
//     let temp = num ;
//     let sum = 0 ;
//     while(temp!=0){
//         sum = sum + Math.pow(temp%10,3);
//         temp = Math.floor(temp/10);
//     } 
//     if(sum==num){
//         return true ;
//     }
//     else{
//         return false;
//     }
// }

//  const output = Armstrong(153);
//  console.log(output);







// Q4. Vowel Density Analyzer
// Scenario: A text engine analyzes vowel density in documents. This system processes large
// datasets and must handle edge cases efficiently.



// function vowelCounter(word){
//     let count = 0 ;
//     for(let ch of word){
//         ch = ch.toLowerCase();
//         if(ch==='a' || ch==='i' || ch==='e' || ch==='o' || ch==='u'){
//             count++;
//         }
//     }
//     return count ;
// }

// const output = vowelCounter("education");
// console.log(output);


// Q3. Fibonacci Population Model
// Scenario: A biology simulation predicts growth using Fibonacci. This system processes large
// datasets and must handle edge cases efficiently 


// function fibonacci(num){
//     if(num<=0) return 0;
//     if(num ===1) return 1;
//     let a = 0 , b= 1 ;
//     for(let i = 2 ; i<= num;i++){
//         let next = a+b;
//         a=b;
//         b=next;
//     }
//     return b;
// }
//  const output = fibonacci(7);
//  console.log(output);

// prime number check code 

// Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Generate a prime key starting from or above `start`
function primeEncryptionKey(start) {
    if (start <= 2) return 2;

    let num = start % 2 === 0 ? start + 1 : start;

    while (!isPrime(num)) {
        num += 2; // skip even numbers
    }
    return num;
}

// Example: generate a prime encryption key starting from 100
const key = primeEncryptionKey(100);
console.log("Prime encryption key:", key); // For 100 → 101