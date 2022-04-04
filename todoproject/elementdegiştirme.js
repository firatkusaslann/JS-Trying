// //   Replace

// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "task-title";
// newElement.textContent = "Yeni Todolar";

// // eski element
// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// console.log(newElement);

//deneme//
// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "task-title";
// newElement.textContent = "Tüm Tasklar";

// // old Element
// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// console.log(newElement);

// card header elementinin içindeki text i değiştireceğim

const cardheader = document.querySelector(".card-header");

const newElement = document.createElement("h2");
newElement.className = "card-header";
newElement.textContent = "Todo Listesi Burada";

//old Element
const oldElement = document.querySelector(".card-header");

cardheader.replaceWith(newElement, oldElement); // replace with, child olmayan durumlrda

console.log(newElement);

// button elementinin özelliklerini değiştireceğim

// <button type="submit" class="btn btn-danger">Todo Ekleyin</button>

const buttontext = document.querySelector(".btn");

const newButton = document.createElement("h3");
newButton.className = "btn btn-warning";
newButton.textContent = "Yeni Bir To-Do EKle";

// old element

const oldButton = document.querySelector(".btn.btn-danger");

buttontext.replaceWith(newButton, oldElement);

console.log(newButton);
