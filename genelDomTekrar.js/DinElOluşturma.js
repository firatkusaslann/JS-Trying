// yeni elemenet oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

// newLink.textContent = "Buraya Basın"; // tüm içeriği silip girilen değeri yazar. pek doğru bir kullanım değil

console.log(newLink);
