// // Local Storage

//----------------setItem

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50");

//----------------getItem

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//----------------Clear Local Storage

// localStorage.clear();

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50");

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("hareket") === null) {
//   console.log("sorguladığınız veri bulunmuyor");
// } else console.log("sorguladığınz veri bulundu");

// Local Storage - Array Yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// // localStorage.setItem("todos", JSON.stringify(todos)); // lacal storage içine yazılan stringi array olarak yazar

// const value = JSON.parse(localStorage.getItem("todos")); // local storage içine yazılan arrayi kullanmak için Json.parse kullanılır
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);
function addTodo(e) {
  const value = todoInput.value;
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(value);

  localStorage.setItem("todos", JSON.stringify(todos));

  e.preventDefault();
}
