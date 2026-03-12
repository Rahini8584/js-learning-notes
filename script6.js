// console.log(document);

// document.body.style.backgroundColor="red";
// document.body.innerHTML="<h1>RAHINI</h1>";


// var a = [ "apple" ,"mango", "vm", ["potato","tomato"]];
// var copyofa = [...a];
// a[3].pop();
// console.log(copyofa);

// const myobj ={
//     username :"Rahini",
//     hobby : {
//         hobby1 : "sleeping",
//     },
// };

// const copy ={...myobj};
// myobj.username  ="Rahini kalra";
// myobj.hobby.hobby1="eating";
// console.log(copy);


// const myobj ={
//     username :"Rahini",
//     hobby : {
//         hobby1 : "sleeping",
//     },
// };

// const copy =JSON.parse(JSON.stringify(myobj));
// myobj.username  ="Rahini kalra";
// myobj.hobby.hobby1="eating";
// console.log(copy);

// const myobj ={
//     username :"Rahini",
//     hobby : {
//         hobby1 : "sleeping",
//     },
//     greet : function(){
//         console.log("hello");
//     },
// };

// const copy =structuredClone(myobj);
// myobj.username  ="Rahini kalra";
// myobj.hobby.hobby1="eating";
// console.log(copy);
  

// const video = document.getElementById("rahini");
// navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{video.srcObject=stream;})


// const camera = document.getElementById('camera')
// navigator.mediaDevices.getUserMedia({video: true}).then((stream)=>{
//     camera.srcObject = stream
// })

const video = document.getElementById("nikhal");

navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
    video.srcObject = stream;
})