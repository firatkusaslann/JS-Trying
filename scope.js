// // Skope Kavramı

// // Global Scope // java script dökümanı içinde olan

// function a (); {
//     //function scope
// }

// if(){ // if for while
//     //block scope
// }

//global scope örneği
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func() {
//   var value1 = 40;
//   let value2 = 50;
//   const value = 60;

//   console.log(value1, value2, value3);
// }
// Func();

// console.log(value1, value2, value3);

// block scope örneği

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// if (true) {
//   var value1 = 40;
//   let value2 = 50;
//   const value3 = 60;
//   console.log(value1, value2, value3);
// }

// console.log(value1, value2, value3);

var databese = "12345"; // eğer çok önemli ve değişmemesini değiştirilmemesini istediğimiz bir değişkenimiz varsa bunu var ile tanımlamamalıyız.

if (true) {
  var database = "123456789"; //çünkü ekipten birisi gelip bir if for while döngüsü içinde var kullanarak aynı isimle bir değişken verdiğinde yukarıda verilen değişir ve mutsuz son.
}

const database = "4237846236"; // bu durumda const değiştirilemez ve yeniden atama yapılamaz bir değişken türü

if (true) {
  const database = "2344623756"; // bu const da buradaki if block scope'una özel olmuş oluyor. yani mutlu son
}

let database = "64525"; // burada let yanlızca scopelar arasında değiştirilemez
if (true) {
  let database = "64220392"; // yine bu if block scope'una özel bir değişken olmuş oluyor. yyani mutlu son
}
