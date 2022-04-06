const element = document.querySelector("#clear-todos");

// element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// const fk = document.querySelector("#todo-form");
// console.log(fk);
// console.log(fk.id);
// console.log(fk.name);
// console.log(fk.innerHTML);
// console.log(fk.style);

// element.className = "btn btn-warning";
// element.style.color = "purple";
// element.style.margin = "1rem";
// element.href = "https://www.google.com";
// element.target = "_blank"

// const add = document.querySelector("button");
// console.log(add);
// console.log(add.className);
// console.log(add.classList);
// console.log(add.classList[0]);
// console.log(add.textContent);
// console.log(add.innerHTML);
// console.log(add.style);

// add.className = "btn btn-dark";
// add.style.color = "yellow";
// add.style.marginLeft = "3rem";
// add.textContent = "Yeni TODO Ekle!!";
// add.style.padding = "2rem";
// console.log(add);
// add.innerHTML = "<span style ='color:green'>Ekle</span>"

const elements = document.querySelectorAll(".list-group-item"); // node list
elements.forEach(function (el) {
  el.style.color = "white";
  el.style.background = "#606060";
});


