const cardBody = document.querySelectorAll(".card-body")[1]; // querySelectorAll node list döndürür ve gerekli olan element için index numarasına ihtiyac duyar

const title = document.querySelector("#tasks-title"); // querySelecotor sayfadaki ilk elementi seçer(çağrılan)

// Click Eventi -- Tıkladığı Anda
// title.addEventListener("click", run);
// function run(e) {
//   console.log(e.target);
// }

// Dubble Click Eventi -- Çift Tıklandığı Anda
// title.addEventListener("dblclick", run);
// function run(e) {
//   console.log(e.target);
// }

// Mouse Down  -- tıklandığı anda
//title.addEventListener("mousedown", run);
// function run(e) {
//   console.log(e.target);
// }

// Mouse Up -- tıklanıp bırakıldığı anda
//title.addEventListener("mouseup", run);
//function run(e) {
//  console.log(e.target);
//}

// Mouse Over -- Mouse üzerine geldiğinde
// title.addEventListener("mouseover", run);
// function run(e) {
//   console.log(e.target);
// }

// Mouse Out -- mouse üzerinden ayrıldığında
// title.addEventListener("mouseout", run);
// function run(e) {
//   console.log(e.target);
// }

// Mouse Over ve Mouse Out -- örn: cardBody içindeki tüm elemenler üzerinde çalışacak.
// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run);
// function run(e) {
//   console.log(e.type);
// }

// Mouse Enter ve Mouse Leave -- örn: cardBody içine girdiğinde bir kez ve ayrılırken bir kez çalışacak. cardBody içindeki elementler önemli değil

cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);
function run(e) {
  console.log(e.target);
}
