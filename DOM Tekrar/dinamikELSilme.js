// dinamik element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu
// todos[1].remove();

// Remove Child
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[1]);

console.log(todos);
console.log(todoList);
