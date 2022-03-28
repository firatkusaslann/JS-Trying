let value;
const value1 = 10;
const value2 = 4;

//Aritmatik Operatörler

// value = value1 + value2;    // Toplama operatörü
// value = value1 - value2;    // Çıkartma operatörü
// value = value1 * value2;    // Çarpma operatörü
// value = value1 / value2;    // Bölme operatörü
// value = value1 % value2;    // Kalan Sonuç operatörü

value = Math.PI;

value = Math.round(3.6); //sayıyı yuvarlama
value = Math.round(3.5);
value = Math.round(3.3);

value = Math.ceil(3.2); //sayıyı tavana yuvarlama
value = Math.ceil(3.7);

value = Math.floor(3.2); //sayıyı tabana yuvarlma
value = Math.floor(3.7);

value = Math.sqrt(16); //karekök alma
value = Math.sqrt(100);

value = Math.abs(-10); // Mutlak değeri bulma

value = Math.pow(8, 3); // sayının üssünü alma (8'in 3. kuvveti)
value = Math.pow(4, 2);

value = Math.max(10, -1, 100, 32);
value = Math.min(10, -1, 100, 32);

value = Math.random(); // 0 ile bir arasında 1 hariç 0 dahil olmak şartıyla random sayı üretir.

value = Math.floor(Math.random() * 20 + 1); //sıfır ile 20 arasında 0 ve 20 dahil random sayı üretir

console.log(value);
