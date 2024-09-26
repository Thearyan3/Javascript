let d = "this is keyboard event";
document.querySelector("h1").textContent = d;

// Types of Keyboard Events :
// 1. Onkeyup
// 2. Onkeypress
// 3. Onkeydown

let inp = document.querySelector("#inp");
let box = document.querySelector(".box");

function b(){
    box.textContent = inp.value;
}

function c(){
    box.style.backgroundColor = "red";
}

// function a(){
//     console.log(inp.value);

//     document.body.style.backgroundColor = "black";
// }