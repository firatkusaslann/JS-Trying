//            // DOMContentLoaded Event'i
// document.addEventListener("DOMContentLoaded", load);
// function load(e) {
//   console.log("Sayfa Yüklendi");
// }

const filter = document.querySelector("#filter");

// // Focus -- mouse ve tab ile odaklanınca
// filter.addEventListener("focus", run);
// // Blur -- mouse ve tab ile odaktan çıkınca
// filter.addEventListener("blur", run);
// function run(e) {
//   console.log(e.type);
// }

// Paste Event'i -- input içine dışarıdan her hangi bir değer yapıştırılınca
filter.addEventListener("paste", run);
// Copy Event'i  -- input içinden her hangi bir değer kopyalanınca
filter.addEventListener("copy", run);
// Cut Event'i   -- İnput içindeki değerden her hangi bir kısım kesilince
filter.addEventListener("cut", run);
// Select Event'i - İnput içinden her hangi bir kısım seçilince
filter.addEventListener("select", run);
function run(e) {
  console.log(e.type);
}
