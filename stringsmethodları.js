let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Python, C++";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Mustafa Murat ";
value += "Çoşkun"; //value = value + "Çoskun";

value = firstName.length; //belirtilen değişkendeki karakter sayısını yazdıırır

value = firstName.concat(" ", lastName, " ", "Caz"); // firstName + " " + lastName + " " + "Caz" Kullanımının daha kısa hali

value = firstName.toLowerCase(); //Tüm harfler küçük yazılır.
value = lastName.toUpperCase(); //Tüm harfler büyük yazılır.

value = firstName[0]; // 0. indexi yani ilk harfi alır
value = firstName[02]; // 2. indexi yani 3 harfi alır
value = firstName[04]; // 4. indexi yani 5 harfi alır
value = firstName[firstName.length - 1]; // index sayısını bilmediğimiz durumlarda her zamna son karakteri alır

// index of
value = firstName.indexOf("L"); //index numarasını bilmediğimiz durumlarda hangi harfin kaçıncı indexte olduğunu söyler bulur..
value = firstName.indexOf("o");
value = firstName.indexOf("l"); //belirtilen karakter olmadığı için her zaman -1 olarak gösterecek

// Char At
value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

// Split
value = langs.split(",");

// Replace
value = langs.replace("Python", "Css");

// Includes
value = langs.includes("Java");
value = langs.includes("Html");

console.log(value);
