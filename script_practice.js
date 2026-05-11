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

// // Check if a number is prime
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;

//     for (let i = 3; i * i <= n; i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// // Generate a prime key starting from or above `start`
// function primeEncryptionKey(start) {
//     if (start <= 2) return 2;

//     let num = start % 2 === 0 ? start + 1 : start;

//     while (!isPrime(num)) {
//         num += 2; // skip even numbers
//     }
//     return num;
// }

// // Example: generate a prime encryption key starting from 100
// const key = primeEncryptionKey(100);
// console.log("Prime encryption key:", key); // For 100 → 101  


// // type casting in js 
// let num = 123332;
// let str = num.toString();
// console.log(typeof str);


// Q10. Palindrome AI Message Filter
// Scenario: An AI chatbot filters symmetric messages to detect bot patterns. This system processes
// large datasets and must handle edge cases efficiently.
// Rules:
// Ignore case and spaces Use loops only.
// Task: Check if string is palindrome
// Sample Input: 'Madam'
// Sample Output: true
// Explanation: Same forward/backward

// function palindrome(str){
//     str = str.toLowerCase();
//     let cpy = str ;
//     for(let i = 0 ; i<str.length;i++){
//         for(let j = str.length -1 ; j>0 ; j--){
//             if(cpy[i]==str[j]);
//         }
//     }
// }


// function sum(...nums){
//    console.log(nums);
// }

// sum(1,2,3,4,5);


// const student = {
//   name: "Rahini",
//   class: 7,
//   city: "Patiala"
// };

// for (let key in student) {
//   console.log(key, "=>", student.key);
// }

// 1. Creating the Promise
// let myPromise = new Promise((resolve, reject) => {
//     let success = false; // Simulating an operation (change to true to test resolve)

//     if (success) {
//         resolve("Operation Successful!");
//     } else {
//         reject("Operation Failed.");
//     }
// });

// // 2. Consuming the Promise
// myPromise
//     .then((result) => {
//         console.log(result); // Handles Success (Resolve)
//     })
//     .catch((error) => {
//         console.log(error); // Handles Error (Reject)
//     })
//     .finally(() => {
//         console.log("Operation Completed."); // Runs no matter what
//     });


// const arr = [ 1,2,3,4,5];
// for(let i = 0 ; i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach((num)=>{
//     console.log(num*2)
// });

// const fruits = ["apple", "banana", "mango"];

// fruits.forEach((fruit, i) => {
//   console.log(i, fruit);
// });
// for each uses a function in it 
// .length exist without bracket 


// console.log(Math.floor(8.3));

// const user = { name: "Rahini", age: 20 };

// for (const [key] of Object.entries(user)) {
//   console.log(key);
// }


let a = [ 4,8,1];
console.log(a);
a.push(5);
console.log(a);
let b = a.pop();
console.log(a);
console.log(b);
a.unshift(4);
console.log(a);
let c = a.shift();
console.log(a);
console.log(c);
let d = a.sort((a,b)=> b-a);
console.log(d);
let e = a.map((x)=>x+1);
console.log(e)
let f  = a.filter((x)=>x>2);
console.log(f);
a.push(6);
a.push(3);
console.log(a);
console.log(a.length);
let g = a.reduce((acc, n)=>acc+n,0);
console.log(g);