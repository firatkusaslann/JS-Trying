// KARŞILAŞTIRMA OPERATÖRLERİ

// ==   eşit eşit operatörü. iki değerin eşitliğini kontrol eder. true veya false döndürür.
// ===  hem veri tipini hem de değeri karşılaştırma operatörü
// !=   eşit değil midir karşılaştırma operatörü
// !==
// >    büyüktür karşılaştırma operatörü
// <    küçüktür karşılaştırma operatörü
// >=   büyük ve eşittir karşılaştırma operatörü
// <=   küçük ve eşittir karşılaştırma operatörü

// mantıksal bağlaçlar
// &&   and  karşılaştırma operatörü tüm değerlerin eşit olması durumunda true döndürür | değerlerden birisi bile false ise false döndürür.
// ||   or karşılaştırma operatörü karşılaştıran değerlerden her hangi birisi eşit ise true döndürür. hepsinin eşit değil olması durumunda false döndürür.
// !    not karşılaştırma operatörü true ise false | false ise true'ya çevirir

// console.log(2 == 2);
// console.log("js" == "java");
// console.log(2 == "2"); //bir tarafta number veri diğer tarafta string veri tipi olursa oto olarak number veriye çevrilir ve karşılaştırılır
// console.log(2 === "2"); //  YAYGIN KULLANIM

// console.log(4 > 2);
// console.log(2 > 4);

// console.log(4 < 2);
// console.log(2 < 4);

// console.log(2 <= 4);
// console.log(2 <= 2);
// console.log(4 >= 2);
// console.log(4 >= 4);

// console.log(2 != 4);

//MANTIKSAL BAĞLAÇLAR

// Not(!) operatörü
// console.log(!(2 == 2));

// And(&&) operatörü
// console.log(2 == 2 && "ahmet" == "ahmet");
// console.log(2 == 2 && "ahmet" == "mehmet");

// Or operatörü
// console.log(4 == 2 || "ahmet" == "ahmet");
// console.log(4 == 2 || "fırat" == "ahmet");

////////////////////////////////////////////////////////////////////////////////
//KOŞULLAR

// if (kosul) {
//     //if blok
// }

// const error = true;

// if (error == true) {
//   console.log("Hata oluşmadı");
// }

// if (error == true) {
//     console.log("Hata oluşmadı");
//   }
// else {
//     console.log("Hata oluştu")
// }

// if (error == false) {
//     console.log("Hata oluşmadı");
//   }
// else {
//     console.log("Hata oluştu")
// }

// const user = "rrr";
// if (user === "mmc") {
//   console.log("Kullanıcı Bulundu");
// } else {
//   console.log("Kullanıcı Bulunamadı");
// }

// const process = "1";

// if (process === "1") {
//   console.log("işlem 1");
// } else if (process === "2") {
//   console.log("işlem 2");
// } else if (process === "3") {
//   console.log("işlem 3");
// } else if (process === "4") {
//   console.log("işlem 4");
// } else {
//   console.log("Geçersiz İşlem");
// }

// const number = 100;

// if (number === 100) {
//   console.log("Sayi 100'e eşittir.");
// } else {
//   console.log("Sayi 100'e eşit değil.");
// }

// //Ternary Operatörü
// console.log(number === 100 ? "Sayi 100'e eşit." : "Sayi 100'eşit değil.");

// if (number === 100) {
//   console.log("Sayi 100");
// }

const number = 100;
if (number === 100) console.log("Sayi 100");
else console.log("Sayi 100 değil");
