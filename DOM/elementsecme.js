let element;

// Elementi Id'e göre seçme
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Elementi Class'a göre seçme
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

// Element Tag'e göre seçme
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// Query Selector - Css Selector - Tek bir element döndürür - Sayfada bulduğu ilk elementi getirir
element = document.querySelector("#todo-form"); // id ismi sayfada tek olacağı için bu doğru kullanım
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");
element = document.querySelector(".card-header");

element = document.querySelector("li");
element = document.querySelector("div");

// Query Selector All - tüm elementleri seçer
element = document.querySelectorAll(".list-group-item"); // node list

element.forEach(function (el) {
  console.log(el);
});

// console.log(element);
