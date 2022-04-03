// yeni element oluşturma

const newLink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

//Text Content

// newLink.textContent = "Farklı pençerede aç.";

// text node

const text = document.createTextNode("Naber");
cardbody.appendChild(text);

console.log(cardbody);
console.log(newLink);
