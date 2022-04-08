// const element = document.querySelector("#clear-todos");

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

// const elements = document.querySelectorAll(".list-group-item"); // node list
// elements.forEach(function (el) {
//   el.style.color = "white";
//   el.style.background = "#606060";
// });

// const li = document.querySelectorAll("#todo"); // node list döndürdü
// li.forEach(function (li) {
//   li.style.outline = "3px solid #333";
//   li.style.borderRadius = "1rem";
//   li.style.padding = "1rem 2rem";
//   li.style.fontSize = "2rem";
//   li.style.background = "#f6f6f6";
//   li.placeholder = " Bir todo ekleyebilirsin";
//   console.log(li);
// });

let element2 = document.querySelector("li"); // ilk "li" yi seçti
element2 = document.querySelector("li:first-child"); // ilk "li" yi seçti
element2 = document.querySelector("li:last-child"); // son "li" yi seçti
element2 = document.querySelector("li:nth-child(2)"); // ikinci çocuğu seçti
element2 = document.querySelector("li:nth-child(3)"); // üçüncü çocuğu seçti
element2 = document.querySelectorAll("li:nth-child(odd)"); // "querySElectorAll" ve "odd" kullanarak tek sayı olan çocukları seçti
element2 = document.querySelectorAll("li:nth-child(even)"); // "querySelectorAll" ve "even" kullanarak çift sayı olan çocukları seçti

element2.forEach(function (li) {
  li.style.background = "#606060";
  li.style.color = "#fff";
});

console.log(element2);
