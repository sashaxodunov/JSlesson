// // localStorage["name"] = "Alex"; // можно так
// // localStorage.age = 23; // можно так

// // localStorage.setItem("name", "Alex"); // добавляет ключ значение
// // localStorage.getItem("name"); // метод для получения значения из хранилища
// // localStorage.removeItem("name"); // метод удаляет значение из хранилища
// // localStorage.clear(); // полностью очищает хранилище

// const input = document.getElementById("input");
// const btnSave = document.getElementById("btn_save");
// const btnRemove = document.getElementById("btn_remove");
// const text = document.getElementById("text");

// const showText = function () {
//   text.textContent = localStorage.getItem("text");
// };

// btnSave.addEventListener("click", function () {
//   localStorage.setItem("text", input.value);
// });

// showText();

// sessionStorage; // сохраняет значения пока открыта вкладка

document.cookie = "name=Alex; max-age=3600"; // устанавливаем время жизни куки

let date = new Date(2022, 11, 23, 14, 20, 22);
document.cookie = "age=23; expires=" + date.toUTCString();
