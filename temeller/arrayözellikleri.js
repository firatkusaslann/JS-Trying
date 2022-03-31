let value;

const numbers = [34, 56, 23, 44, 35, 5];

// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

//uzunluk
value = numbers.length;

//indeksleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

//indeksteki değeri değiştirmek
numbers[2] = 1000;
value = numbers;

//index of
value = numbers.indexOf(1000);

//arrayin sonuna değer ekleme - Push metodu
numbers.push(2000);
value = numbers;

//arrayin başına değer ekleme - Unshift metodu
numbers.unshift(4000);
value = numbers;

//arrayin sonundan değer atma - Pop metodu
numbers.pop();
value = numbers;

//arrayin başından değer atma - shift metodu
numbers.shift();
value = numbers;

//arrayde belli indexten belli indexe kadar olan değerlei atma - Splice metodu
numbers.splice(0, 3);
value = numbers;

//arrayi ters yazdırma - reverse metodu
numbers.reverse();
value = numbers;

//arrayi küçükten büyüğe sıralama - sort metodu
numbers.sort(); //sayıları ilk rakamlarına göre sıralar
value = numbers;

numbers.sort(function (x, y) {
  //sayıları küçükten büyüğe sıralar
  return x - y;
});
value = numbers;

numbers.sort(function (x, y) {
    //sayıları büyükten küçüğe sıralar
    return y-x;
  });
  value = numbers;

console.log(value);
