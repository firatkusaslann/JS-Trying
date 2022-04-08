const todoInput = document.getElementById("todo");
let element;
element = todoInput;
element = todoInput.classList;
element = todoInput.classList.length;

todoInput.classList.add("newClass"); // yeni class ismi ekleme
todoInput.classList.add("newClass2"); // yeni class ismi ekleme
todoInput.classList.remove("form-control"); // class ismi kaldırma

element = todoInput;
element = todoInput.placeholder; // attribute yazdırma
element = todoInput.getAttribute("placeholder"); // tavsiye edilmiyor
todoInput.setAttribute("placeholder", "Naber"); // attribute değiştirme
todoInput.setAttribute("title", "Baslık"); // attribute ekleme
element = todoInput;
element = todoInput.hasAttribute("name"); // attribute sorgulama -- true dönecek
todoInput.removeAttribute("name"); // attribute Kaldırma
console.log(element);
