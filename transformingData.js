// let value;

// // veri tiplerini string'e çevirme

// value = 123;                                    //String
// value = String(123);                            //String
// value = String(3.14);                           //String
// value = String(true);                           //String
// value = String(false);                          //String
// value = String(function () { console.log() });  //String
// value = String([1, 2, 3, 4]);                   //String

// value = (10).toString();                        //String
// value = (3.14).toString();                      //String

// //veri tiplerini sayılara çevirme

// value = Number("123");                          //Number
// value = Number(null);                           //Number(0)     // değeri var ama boş veri tiplerine null diyoruz.
// value = Number(undefined);                      //NaN           // tanımsız demek. değişken var ama içinde bir değer yok demek.
// value = Number("Hello, World!");                //NaN           // Sayısal değer barındırmafdığı için number veri tipine dönğştürülemenez
// value = Number(function () { console.log() });  //NaN           // fonksiyonlar number veri tipine dönüştürülemez
// value = Number([1, 2, 3, 4]);                   //NaN           // array number veri tipine dönüştürülemez

// value = Number("3.14");                         //Number
// value = parseFloat("3.14");                     //Number

// value = parseInt("3");                          //Number
// // kısacası içinde sayı değeri bulunan stringler number dönüştürülebilir ve null veri tipleri dönüştürülebilir.

// console.log(value);
// console.log(typeof value);

const a = "Hello" + 34;      // bir string ve bir number varsa oto olarak stringe çevirir
console.log(a);
console.log(typeof a);
