//////////Döngüler - While, Do While , For Döngüleri
//  belli koşullarda kendi bloklarını sürekli çalıştıran yapılardır

//  WHİLE DÖNGÜSÜ

// let i = 0;

// // while (i < 10) { //sonsuz döngü
// //   console.log(i);
// // }

// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }

// while (i <= 10) {
//   console.log(i);
//   i++; // genel kullanım
// }

// let a = 10;
// while (a > 0) {
//   console.log(a);
//   // i -= 1;
//   a -= 2;
// }

////////////////////////////////////////// Break ve Continue

////////// Break belli bir ara koşul sağlandığında döngüyü kapatır ve kalan işlemleri yapmaz.

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }

// while (i <= 50) {
//   console.log(i);
//   if (i == 27) {
//     break;
//   }
//   i++;
// }

////////////Continue

// let a = 0;   SONSUZ DÖNGÜ
// while (a < 10) {
//   if (a == 3 || a == 5) {
//     continue;
//   }
//   console.log(a);
//   i++;
// }

// let a = 0;
// while (a < 10) {
//   if (a == 4 || a == 7) {
//     a++;
//     continue;
//   }
//   console.log(a);
//   a++;
// }

/////////////// do while döngüleri
// let i = 0;
// do {
//     console.log(i);
//     i++;

// } while (i < 10);

///////////////////////////////////////////////For Döngüleri

// const langs = ["Python", "Javascript", "Java"];

// let index = 0;
// while (index < langs.length) {
//   console.log(langs[index]);
//   index++;
// }

// for (let index = 0; index < langs.length; index++) {
//   console.log(1++ + langs[index]);
// }

// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

// map özzeliği
// const users = [
//   { name: "Mustafa", age: 25 },
//   { name: "Zeynep", age: 40 },
//   { name: "Ali", age: 12 },
// ];

// const names = users.map(function (user) {
//   return user.name;
// });

// const ages = users.map(function (user) {
//   return user.age;
// });

// console.log(names);
// console.log(ages);

const user = {
  name: "Mustafa",
  age: 25,
};

for (let key in user) {
  console.log(key, user[key]);
}
