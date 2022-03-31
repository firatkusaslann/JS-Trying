// Function Expression

const hello = function (name) {
  console.log("Hello " + name);
};

hello("Murat");

// Immediately Invoked Function Expression (IIFE) Tanımlandığı Yerde Çalışan Fonksiyon

(function (name) {
  console.log("Merhaba: " + name);
})("Murat");

/////////////////

const database = {
  host: "localost",
  add: function () {
    console.log("Eklendi");
  },
  get: function () {
    console.log("Elde Edildi");
  },
  update: function (id) {
    console.log(`Id:${id} Güncellendi`);
  },
  delete: function (id) {
    console.log(`Id: ${id} Silindi`);
  },
};

console.log(database.host);

database.add();
database.delete(10);
