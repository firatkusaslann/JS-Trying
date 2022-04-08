let people = {
  name: "Burak Öğretiyor",
  job: "coder",
  age: 22,
  salary: 1000,
  langs: ["Javascript", "Python", "Go"],

  adress: {
    city: "Bursa",
    street: "Görükle",
  },
};

let people2 = {
  name: "Fırat öğrniyor",
  job: "UI",
  age: 23,
  salary: 50,
  langs: ["Javascript", "Python", "Go"],

  adress: {
    city: "Bursa",
    street: "Görükle",
  },
};

let a = [people, people2];

a.forEach(function (i) {
  console.log(i.name);
});

// console.log(a[0]);

// console.log(people.name);

let data = [
  {
    _id: "623e2521295a2ad88ed2afe1",
    name: "Kadir",
    avatar: "default.jpg",
    surname: "Celikoglu",
    email: "kadirc@gmail.com",
    phone: "5340315621",
    title: "owner",
    role: "admin",
    __v: 0,
  },
  {
    _id: "62401668aeee40fe68065e8d",
    name: "gwen",
    avatar: "default.jpg",
    surname: "stacy",
    email: "gwen@gmail.com",
    phone: "05345698798",
    title: "owner",
    role: "admin",
    acceptedAgreement: true,
    __v: 0,
  },
  {
    _id: "624180720a033257f7aa3024",
    name: "Agreementa",
    avatar: "default.jpg",
    surname: "aaaaa",
    email: "agreement@gmail.com",
    phone: "5555555555",
    title: "Owner",
    role: "superuser",
    acceptedAgreement: true,
    __v: 0,
  },
  {
    _id: "624180e50a033257f7aa302d",
    name: "Fatih",
    avatar:
      "/uploads/profile_images/profile_image_624180e50a033257f7aa302d.png",
    surname: "Sultan",
    email: "fatih@gmail.com",
    phone: "05395698798",
    title: "owner",
    role: "superuser",
    acceptedAgreement: true,
    __v: 0,
  },
  {
    _id: "6241966f0a033257f7aa3049",
    name: "kadirx",
    avatar: "default.jpg",
    surname: "celikx",
    email: "kadirx@gmail.com",
    phone: "05363698798",
    title: "owner",
    role: "admin",
    acceptedAgreement: true,
    __v: 0,
  },
  {
    _id: "6243fe72816de3720232c1e7",
    name: "Zeki",
    avatar: "default.jpg",
    surname: "Çelik",
    email: "zeki@gmail.com",
    phone: "5312653497",
    title: "Owner",
    role: "superuser",
    acceptedAgreement: true,
    __v: 0,
  },
  {
    _id: "624459aaf1de4cad218bf355",
    name: "Kadir",
    avatar:
      "/uploads/profile_images/profile_image_624459aaf1de4cad218bf355.png",
    surname: "Çelikoğlu",
    email: "kadircelikogluu@gmail.com",
    phone: "05340315621",
    title: "Owner",
    role: "user",
    acceptedAgreement: true,
    __v: 0,
  },
  {
    _id: "6245eaba5a48c3a0a70d7c1f",
    name: "Shun",
    avatar: "default.jpg",
    surname: "Kazami",
    email: "shun@gmail.com",
    phone: "5489789465",
    title: "Owner",
    role: "user",
    acceptedAgreement: true,
    __v: 0,
  },
];

let human = {
  _id: "623e2521295a2ad88ed2afe1",
  name: "Kadir",
  avatar: "default.jpg",
  surname: "Celikoglu",
  email: "kadirc@gmail.com",
  phone: "5340315621",
  title: "owner",
  role: "admin",
  __v: 0,
};

human.name = "Fırat"; // objedeki name key'inin değerini değiştirdik

human.age = 25; // objeye ekstra bir elemen ekledik

console.log(data);
data.push(human);
console.log(data);

let portfolyo = [
  {
    img: "https://www.google.com",
    title: "Karaburun’da Yazlık Bahçesi",
    content:
      "Karaburun’da Yazlık Bahçesinde bulunan veranda için yaptığımız sineklik perdesi.",
    isDetayları: ["asd", "dsa", "dgf"],
  },

  {
    img: "https://www.google.com",
    title: "Karaburun’da Yazlık Bahçesi",
    content:
      "Karaburun’da Yazlık Bahçesinde bulunan veranda için yaptığımız sineklik perdesi.",
    isDetayları: ["asd", "dsa", "dgf"],
  },

  {
    img: "https://www.google.com",
    title: "Karaburun’da Yazlık Bahçesi",
    content:
      "Karaburun’da Yazlık Bahçesinde bulunan veranda için yaptığımız sineklik perdesi.",
    isDetayları: ["asd", "dsa", "dgf"],
  },

  {
    img: "https://www.google.com",
    title: "Karaburun’da Yazlık Bahçesi",
    content:
      "Karaburun’da Yazlık Bahçesinde bulunan veranda için yaptığımız sineklik perdesi.",
    isDetayları: ["asd", "dsa", "dgf"],
  },
];

let port = document.querySelector(".conteiner");

portfolyo.forEach(function (r) {
  let html = ` <div class="card">
    <div class="card__img">${r.img}<img src="" alt=""></div>
    <div class="card__title">${r.title}</div>
    <div class="card__content">${r.content}</div>
</div>`;

  port.innerHTML += html;
});

// let html = ` <div class="card">
//     <div class="card__img">${portfolyo[0].img}<img src="" alt=""></div>
//     <div class="card__title">${portfolyo[0].title}</div>
//     <div class="card__content">${portfolyo[0].content}</div>
// </div>`;

for (let i = 0; i < portfolyo.length; i++) {
  let html = ` <div class="card">
  <div class="card__img">${r.img}<img src="" alt=""></div>
  <div class="card__title">${r.title}</div>
  <div class="card__content">${r.content}</div>
</div>`;

  port.innerHTML += html;
}
