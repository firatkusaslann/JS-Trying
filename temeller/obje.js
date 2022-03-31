let value;

const programmer = {
  name: "Mustafa Murat Çoşkun",
  age: "25",
  email: "forexample@gmail.com",
  langs: ["Python", "Java", "Javascript"],

  adress: {
    city: "Ankara",
    street: "Bahçalievler",
  },

  work: function () {
    console.log("Programci Çalişiyor...");
  },
};

value = programmer;

value = programmer.email;

value = programmer["email"]; //fazla kullanılmayan bir yöntem

value = programmer.langs;

value = programmer.adress.city;

programmer.work();

const programmers = [
  { name: "Mustafa Murat", age: 25 },
  { name: "oğuz", age: 25 },
];

value = programmers[0].name;

console.log(value);
