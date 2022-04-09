// const filterInput = document.getElementById("filter");

// // filterInput.onfocus = function () {   // eski ve pek kullanılmayan bir yöntem
// //   console.log("Naber");
// // };

// filterInput.addEventListener("focus", function (e) {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.placeholder);
//   console.log(e.target.className);
//   //   console.log("Naber");
// });

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit Eventi");

  e.preventDefault(); // submitin yenileme özelliğini etkisiz kılar
}
