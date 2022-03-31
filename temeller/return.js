//Bu fonsiyonda NaN hatası alacağız çünkü; fonksiyonu dışarı döndürmesi için komut vermedik.
// function square(x) {
//   console.log(x*x);
// }

// function cube(x) {
//   console.log(x*x*x);
// }

// let a = square(12);

// a = cube(a);

// bu fonksiyon önce square'in karesini daha sonra daha sonra cube'ün küpünü verecek. return sayesinde fonsyonları dışarıya döndürebiliyoruz.
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

let a = square(12);

a = cube(a);

console.log(a);

//fonsiyonları bir den fazla yerde kullanmak istediğimizde return'ü mutlaka kullanmalıyız.

function square(x) {
  return x * x;
  console.log("Merhaba"); // bu satır hiç bir zaman çalışmayacak çünkü return aynı zamanda fonksiyonu sonlandırır.
}

function cube(x) {
  return x * x * x;
}

let b = cube(square(24)); //kısa kullanımı

console.log(b);

///Başka bir kullanım

function merhaba() {
  return "Merhaba";
}

console.log(merhaba());

