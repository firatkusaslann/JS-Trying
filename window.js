// Window objesine genel bakış

// alert("merhaba");
// console.log(this);

/////////////////Confirm işlemi

// const cevap = confirm("Emin misiniz?");
// console.log(cevap);
// if (cevap) {
//   console.log("Silin Gitsin");
// } else {
//   console.log("Silinmedi");
// }

//Başka bir kulllanım

// if (confirm("Emin misiniz?")) {
//   console.log("Silin Gitsin");
// } else {
//   console.log("Silinmedi");
// }

// const cevap = prompt("2+2=?");

// if (cevap == 4) {
//   console.log("Doğru Cevap");
// } else {
//   console.log("Yanlış Cevap");
// }

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// sayfayı sonsuz kez yeniler------------value = window.location.href;

// if (confirm("Sayfa yenilensi mi")) {
//   window.location.reload();
// } else {
//   console.log("Sayfa Yenilenmedi");
// }

value = window.outerHeight; // pencere yüksekliği
valuee = window.outerWidth; // pencere genişliği
value = window.innerHeight; // Sayfa yüksekliği
valuee = window.innerWidth; // Sayfa geniliği
value = window.scrollX; //sayfa alt scroll çubuğunun başlangıç noktasına uzaklık pikseli
value = window.scrollY; //sayfa sağ scroll çubuğunun başlangıç noktasına uzaklık pikseli

console.log(value);
