// let a = 10;
// document.write(a);

// let b = {
//     user: "abc",
//     email: "abc@abcgmail.com",
//     mobile: 83798742964,
// };
//  document.write(JSON.stringify(b));

// let inp = document.getElementsByTagName("input")[1];
// let inp = document.getElementsByClassName("inp1")[0];
// let inp = document.getElementById("inp1");
let inp = document.querySelector("#inp1");
let h1 = document.querySelector("h1");

function test(){
    // inp.value = "hello world"
    // console.log();
    // h1.textContent = inp.value;
    // h1.innerHTML = inp.value;
    h1.innerText = inp.value;
}