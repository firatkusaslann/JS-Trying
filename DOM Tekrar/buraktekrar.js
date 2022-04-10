const addInput = document.querySelector("#todo");
const addBtn = document.querySelector(".btn.btn-danger");

const todoList = document.querySelectorAll(".list-group-item"); // node list alabilmek için listeyi değil liste elemenlarını all ile seç.
// todoList[2].remove();

todoList.forEach(function (e) {
  e.style.background = "#f1f1f1";
  e.remove();
  console.log(e);
});

// for (let i = 0; i < todoList.length; i++) {
//   todoList[i].style.background = "#f1f1f1";

//   console.log(i);
// }

// const ulList = document.querySelector("ul");

// ulList.style.background = "#333";

// ulList.remove()
// console.log(ulList);
