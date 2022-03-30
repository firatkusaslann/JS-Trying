// // FONKSİYON TANIMLAMA
// function merhaba(name, age) {
//   console.log(`İsim ${name} Yaş ${age}`);
// }

// merhaba("Murat", 25); //FONKSİYON ÇAĞRISI (Function Call)

// merhaba("Ayşe", 30);

// merhaba();

// // koşullu fonsyiyonlar
// function merhaba(name, age) {
//   if (typeof name === "undefined") name = "Bilgi Yok";

//   if (typeof age === "undefined") age = "Bilgi Yok";

//   console.log(`İsim ${name} Yaş ${age}`);
// }

// // merhaba("Murat", 25);

// // merhaba("Ayşe", 30);

merhaba();

//if için kısa yol
function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
  // if (typeof name === "undefined") name = "Bilgi Yok";

  // if (typeof age === "undefined") age = "Bilgi Yok";

  console.log(`İsim ${name} Yaş ${age}`);
}

// merhaba("Murat", 25);

// merhaba("Ayşe", 30);

merhaba();

merhaba("Kadir");
