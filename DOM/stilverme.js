const element = document.querySelector("#clear-todos");

// element özellikleri

/*
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);
*/

// Style ve Element Özelliklerini Değiştirme

/*
element.className = "btn btn-primary";
element.style.color = "#333333";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr";
element.target = "_blank";
*/

// element.textContent = "silin";
// element.innerHTML = "<span style = 'color:green'>Silin</span>";

// const elements = document.querySelectorAll(".list-group-item"); // Node List
// console.log(elements);

// elements.forEach(function (el) {
//   el.style.color = "red";
//   el.style.background = "#eee";
// });

let element2 = document.querySelector("li:first-child");
element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2");
element2 = document.querySelector("li:nth-child(3");
element2 = document.querySelector("li:nth-child(4");
element2 = document.querySelectorAll("li:nth-child(odd");

element2 = document.querySelectorAll("li:nth-child(even");
element2.forEach(function (el) {
  el.style.background = "#ccc";
  el.style.color = "#606060";
});

console.log(element2);

// console.log(element);
