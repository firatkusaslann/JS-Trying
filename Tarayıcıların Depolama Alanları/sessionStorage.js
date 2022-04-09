// Session Storoge - Key ve Value

// Butonları Seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// İnputları Seçmek

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const delKey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", delItem);
clear.addEventListener("click", clearItem);

function addItem(e) {
  sessionStorage.setItem(addkey.value, addvalue.value);
}

function delItem(e) {
  sessionStorage.removeItem(delKey.value);
}

function clearItem(e) {
  sessionStorage.clear();
}

// console.log(add, del, clear, addKey, addValue, delKey);
