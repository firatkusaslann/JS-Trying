const name = "Mustafa Murat Coşkun";
const department = "Bilişim";
const salary = 4000;

//const a = "isim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;

//const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;

// const html = "<ul>" +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";

const html = `
            <ul>
               <li>${name}</li>
               <li>${department}</li>
               <li>${salary}</li>
            </ul>
            `;

document.write(html);
