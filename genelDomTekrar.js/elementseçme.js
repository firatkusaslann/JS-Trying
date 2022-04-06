// elemeenti Id'e göre seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// elementi Class ismine göre seçme
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

// elementi Tag'e göre seçme

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// query selector -- css selector - tek bir elementi seçer
// query selector ile seçerken parametrenin başına elementin kullandığı css selectorı koyulmalıdır.

element = document.querySelector("#todo-form");
element = document.querySelector("#task-title");

element = document.querySelector(".list-group-item");
element = document.querySelector("li"); // tag seçerken tagi yazmak yeterlidir
element = document.querySelector("div");

// query selector all - querySelectorAll - tüm elementleri seç

element = document.querySelectorAll(".list-group-item"); // node list döndürür

element.forEach(function (el) {
  // foreach methodu node list üzerinde gezinmemizi sağlar
  console.log(el);
});

// console.log(element);

element = document.querySelectorAll("a");

element.forEach(function (links) {
  console.log(links);
});

element = document.querySelectorAll("i");

element.forEach(function (i) {
  console.log(i);
});

element = document.querySelectorAll("ul");
element.forEach(function (ul) {
  console.log(ul);
});

//console.log(element);
