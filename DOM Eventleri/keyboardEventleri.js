// klayve eventleri

//             //keypress
// document.addEventListener("keypress", run);
// function run(e) {
//   //console.log(e.which); // ascii tablosundaki değerini verir
//   console.log(e.key);     // basılan karakteri yazdırır
//   //console.log("Naber");
// }

//             //keydown
// document.addEventListener("keydown", run);
// function run(e) {
//   console.log(e.key);
// }

//              //keyup
// document.addEventListener("keyup", run);
// function run(e) {
//   console.log(e.key);
// }

// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup", changeText);
// function changeText(e) {
//   header.textContent = e.target.value;
// //   console.log(e.target.value);
// }

const baslik = document.querySelector(".card-title");
const searchInput = document.querySelector("#filter");

searchInput.addEventListener("keyup", changeText);
function changeText(e) {
  baslik.textContent = e.target.value; // e.target.value - e fonksiyonundaki hedefin değerini yazdırır
  //console.log(e.target.value);
}
