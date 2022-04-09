// Event Capturing veya Delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("Silme İşlemi");
  }
  if (e.target.id === "filter") {
    console.log("Filtreleme İşlemi");
  }
  if (e.target.id === "clear-todos") {
    console.log("Tüm Taskları Temizleme İşlemi");
  }
  //   console.log(e.target);
}


