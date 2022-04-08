// yeni elemenet oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
cardbody.appendChild(newLink);

// newLink.textContent = "Buraya Basın"; // tüm içeriği silip girilen değeri yazar. pek doğru bir kullanım değil
// const text = document.createTextNode("N'aber?");
// cardbody.appendChild(text);
// console.log(cardbody);

console.log(newLink);
