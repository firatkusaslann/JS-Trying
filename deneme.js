//console.log("bu yazı deneme.js den geldi")


// data types

/*console.log(typeof "UXShort")   //string veri tipi
console.log(typeof 5)           //number veri tipi
console.log(typeof true)        //boolen veri tipi
console.log(typeof null)        //object veri tipi
console.log(typeof undefined)   //undefined veri tipi*/

// Variables
// bir değişken tanımlamak için *** var, let, const anahtar kelimeleri kullanılır.
// değişkene daha sonra değer atamak istersek let, ama sabi değerli olanlarda const kullanılır.

// bazı kurallar
// javascript değişkenleri numara ile başlayamaz
// değişken isimleri dolar($) ve alt tire(_) hariç özel karakter içeremez.
// değişken isimlerinde boşluk kullanılamaz
// değişken isminden önce let ya da const adında bir anahtar kelime yazılmalıdır.
// isimden sonra (=)(assigned data) simgesi atama operatordür(assigment operator)

/*
let youtubeChannel = "UXShort", 
    channleAge = 11,
    isChannelSillActive = true,
    secondChannel = null,
    channelMoney = undefined

const gravity = 9.81
const pi = 3.14

console.log(youtubeChannel, channleAge, isChannelSillActive, secondChannel, channelMoney)*/


/*
veri ya da değerler veri türlerine/tiplerine sahiptirler 
-ikiye ayrılırlar
  primitive data types 
  non-primitive data types
*/

/*
PRİMİTİVE DATA TYPE - İLKEL VERİ TÜRLERİ
----değiştirilemez(immutable(non-modifiable)) veri tipleridir. bir kere primitive veri türü oluşturulduğunda
onu bir daha düzenleyemeyiz. 
değerlerine göre karşılaştırılır.
    1. number - integers, floats 
    2. strings - tek tırnak, çift tırnak, ya da kesme işareti ile olabilir.
    3. booleans - mantıksal değerler true false gibi
    4. null - boş değer veya değersiz 
    5. undefined - değersiz oluşturulmuş veri
*/


/*
//örnek: 
let word = "javascript"
    //word değişkenindeki javascript değeri değiştirilemez
    
word[0] = "y"
console.log(word)

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)

let js = "javascript"
let html = "html"
console.log(js==html)
*/


/*
NON - PRİMİTİVE DATA TYPE - İLKEL OLMAYAN VERİ TİPELRİ
İlkel olmayan veri türleri değiştirilebilir ya da düzenlenebilir.
**array veri dizisi demektir. içinde birden çok veri tutabilir.
köşeli parantez ile oluşturulur
diziler aynı ve ya farklı veri türlerini aynı anda içerebilir
ilk eleman (sıfrıdan)0'dan başlar
örnk: let nums = [1, 2, 3]
örnk: let nums = [1, "uxshort" true, null, undefined]
referanslarına göre karşılaştırılır.
    1. objects
    2. functions
    3. arrays
*/

/*
//örnek array
let nums = [1, 2, 3]
console.log(nums)
nums[0]="uxshort"
console.log(nums)


let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log(nums1 == nums2)

let nums3 = [1, 2, 3]
// let nums2 = [1, 2, 3]
let nums4 = nums3
console.log(nums3==nums4)

*/