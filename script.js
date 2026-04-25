"use strict";

/*
 * Урок 7.
 * Знакомимся с объектами и массивами, методы переборов и псевдомассивы
 */

let name = "Alex";
let key = "city";
let city = "Minsk";

let person = {
  [key]: city, // динамическое добавление ключей из переменной
  name: "Alex",
  age: 33,
  job: {
    position: "middle-developer",
    salary: "1.000.000",
  },
  say: function (str) {
    console.log(str);
  },
};

let job = new Object();
job.position = "developer";
person.say("Hello world");

person.age = 33; // добавление в объект person ключ значение age = 33
person.job = job; // записывается ссылка на объект родителя
person[key] = city;

console.log(name);
console.log(person);
console.log(job);
console.log(person["age"]);

console.log(person.job === job);

// Массив 12:00
let array = [1, 2, 3, 4, 5];

array.length = 30; // Задаем длину массива
array.length = 0; // Массив будет полностью очищен

array[0] = "cat";
array[10] = "dog";
console.log(array);
console.log(array[0]); // Для чтения данных из массива используются квадратные скобки

// создание массива с помощью конструктора

let array2 = new Array(3); // Создастся пустой массив длиной 3
let array3 = new Array(3, 4, 5, 6); // Создастся массив с переданными значениями
console.log(array2);
console.log(array3);

console.log("--------------------------------");
let array4 = ["Apple", "Orange", "Banana"];

array4.push("Kiwi"); // метод добавляет значение в конец массива
array4.unshift("Papaya", "Mango"); // метод добавляет значение в начало массива

array4.pop(); // Удаляет значение в конце массива и возвращает это значение
array4.shift(); // Удаляет значение в начале массива и возвращает это значение
array4.sort(); // Сортирует массив по алфавиту
array4.reverse(); // Разворачивает массив

console.log(array4.join(", ")); // Возвращает строку из элементов массива в скобках добавляем разделитель, не изменяет исходный массив

console.log(array4);

console.log("--------------------------------");

let obj = {
  name: "Alex",
  age: 33,
  isStudent: false,
};

// цикл переборки объекта
for (let key in obj) {
  console.log("Ключ:" + key + " " + "Значение:" + obj[key]);
}

console.log(Object.keys(obj)); // создаем из объекта массив

let array5 = [1, 2, 3, 4];
// цикл переборки массива
for (let key of array5) {
  console.log(key);
}

delete array5[2]; // удаление элемента массива

console.log(array5);

// Удаление в объекте

let obj1 = {
  name: "Alex",
  age: 23,
};

delete obj1.age; // полностью удаляет свойство из объекта
console.log(obj1);

// Псевдомассов (у них нет методов для работы с массивами)

const func = function (a, b, c) {
  console.log(arguments);
  console.log(a + b + c);
};

func(3, 6, 9);
