// console.log(document);

// document.body.style.backgroundColor="red";
// document.body.innerHTML="<h1>RAHINI</h1>";


var a = [ "apple" ,"mango", "vm", ["potato","tomato"]];
var copyofa = [...a];
a[3].pop();
console.log(copyofa);