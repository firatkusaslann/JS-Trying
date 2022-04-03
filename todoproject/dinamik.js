// yeni element oluşturma

const newLink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı sayfaya git"));

cardbody.appendChild(newLink);

console.log(newLink);
