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