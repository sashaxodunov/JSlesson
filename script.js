// console.dir(document.childNodes); // выводит весь список узлов

const title = document.getElementById("title"); // поиск по id элементу
console.log(title.title); // увидим элемент нашей верстки
console.dir((title.textContent = "DOM!")); // увидим содержимое тега
console.log(title.style); // увидим элемент нашей верстки

const listItem = document.getElementsByTagName("li"); // Выводит коллекцию элементов по тегу (псевдомассив)

console.log(listItem[0]); // Для получения отдельного элемента обращаемся к нему по индексу или с помощью цикла выводить все возможные элементы
console.log(listItem);

const links = document.getElementsByClassName("link"); // Выводит коллекцию элементов по классу (псевдомассив)

console.log(links);

const title1 = document.querySelector("h1"); // получаем первый элемент с тегом h1
const title2 = document.querySelector(".title"); // получаем первый элемент с классом title
const title3 = document.querySelector('[title="Document Object Model"]'); // получаем первый элемент по атрибуту
const title4 = document.querySelector("header > ul"); // получаем первый элемент по вложенности тегов

console.log(title1);
console.log(title2);
console.log(title3);
console.log(title4);

const title5 = document.querySelectorAll("h1"); // получаем коллекцию элементов
const title6 = document.querySelectorAll(".link"); // получаем коллекцию элементов
console.log(title5);

title6.forEach(function (a, item) {
  console.log(a, item);
});

console.log("-----------------------------------");

const head = document.getElementById("title");

// работа с классами
head.classList.add("green-color"); // добавляет элементу новый класс
head.classList.remove("title"); // удаляет указанный класс у элемента

head.classList.toggle("title"); // проверит есть ли этот класс у элемента если есть то удалит если нет до добавит
head.classList.toggle("title"); // проверит есть ли этот класс у элемента если есть то удалит если нет до добавит
head.classList.toggle("title"); // проверит есть ли этот класс у элемента если есть то удалит если нет до добавит

console.log(title.classList.contains("title")); // возвращает true если такой тег есть или false если такого тега нет
console.log(title);
console.log("-----------------------------------");

// работа с атрибутами
console.log(title.getAttribute("title")); // выводит содержимое атрибута в консоль
title.setAttribute("title", "new value title"); // меняет значение атрибута первый параметр название атрибута который меняем, второй параметр на что меняем
title.setAttribute("id", "title2"); // также меняем значение идентификатора
console.log(title.getAttribute("title")); // выводит содержимое атрибута в консоль
console.log(title.hasAttribute("title")); // возвращает true если такой атрибут есть или false если такого атрибута нет

console.log(title);
console.dir(title);
console.log("-----------------------------------");

// работа со стилями

title.style.backgroundColor = "green"; // эти стили будут более приоритетными

console.dir(getComputedStyle(title)); // получаем список всех стилей
console.dir(getComputedStyle(title).backgroundColor); // получаем значение этого стиля
console.dir(getComputedStyle(title).fontSize); // получаем значение этого стиля

console.log(title);
