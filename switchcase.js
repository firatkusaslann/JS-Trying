// const process = 2;

// if (process === 1) {
//   console.log("İşlem 1");
// } else if (process === 2) {
//   console.log("İşlem 2");
// } else if (process === 3) {
//   console.log("İşlem 3");
// } else {
//   console.log("Geçersiz işlem");
// }

const process = 4;
switch (process) {
  case 1:
    console.log("İşlem1");
    break; // switch case den çık anlamına gelir. kullanılmazsa kendinden sonraki case'i de çalıştırır.
  case 2:
    console.log("işlem2");
    break;
  case 3:
    console.log("işlem3");
    break;
  default:
    console.log("geçersiz İşlem");
}
