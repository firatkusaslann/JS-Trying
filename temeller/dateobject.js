let value;

const now = new Date(); // şu anki zamanı almamızı sağlar // new Date tarih komutu
//console.log(now);

//Özel Tarig girme
const date1 = new Date("04-05-1998 06:15:02"); // belirlenen zamanı almamızı sağlar
const date2 = new Date("April 05 1998 06:15:02");
const date3 = new Date("5/4 06:15:02");

// tarih bilgilerini yazdırma
value = date1;
value = date1.getMonth(); // Ay bilgisi
value = date1.getDate(); // Gün bilgisi
value = date1.getFullYear(); // Yıl bilgisi
value = date1.getDay(); // Günün o ay içindeki kaçıncı indexte olduğunun bilgisi

value = date1.getHours(); // Saat bilgisini verir
value = date1.getMinutes(); // Dakikayı verir
value = date1.getSeconds(); // Saniye bilgisini verir
value = date1.getMilliseconds(); // Milisaniye bilgisini verir

//verilen tarih değerlerini değiştrime
date1.setMonth(7); // Ay indexi 0 sıfırdan başladığı için ağustos yazdırmak için 7yi kullandıkk
date1.setDate(15);
date1.setFullYear(2059);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);

value = date1;

console.log(value);
