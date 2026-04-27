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

// Методы перебора массивов

const books = [
  { id: 0, name: "Дорога домой", author: "Виталий Зыков", price: 1200 },
  { id: 1, name: "Война за выживание", author: "Виталий Зыков", price: 1500 },
  {
    id: 2,
    name: "Мир бесчисленны островов",
    author: "Виталий Зыков",
    price: 1300,
  },
  { id: 3, name: "Далекая страна", author: "Алекс Кош", price: 950 },
  { id: 4, name: "Адреналин", author: "Алекс Кош", price: 1650 },
];

// Добавление и удаление элементов

// concat arr.concat(arg1, arg2...) конкат - данный метод возвращает новый
// массив который будет состоять из всех элементов исходного массива
// и новых добавленных элементов

const newArr = books.concat({
  id: 5,
  name: "Школа Пепла",
  author: "Виталий Зыков",
  price: 1980,
});

console.log(newArr);

// arr.clice([start], [end]) слайс - возвращает новый массив который копирует
// элементы исходного массива начиная с индекса [start]
// и заканчивая индексов [end] не включая его

const newArr1 = books.slice(0, 3);
console.log(newArr1);

//arr.splice(index, deleteCount, elements) сплайс - часто называют универсальным ножиком может как удалять
// так и добавлять новые элементы, не возвращает новый массив а изменяет исходный массив
// указывается индекс удаляемого элемента, указывается количество удаляемых элементов
books.splice(2, 3);
console.log(books);
// третьим параметром идет элемент который мы хотим добавить
books.splice(2, 3, {
  id: 5,
  name: "Школа Пепла",
  author: "Виталий Зыков",
  price: 1980,
});
console.log(books);

// поиск элементов в массиве
// let result = arr.find(function(item, index, array) {
// если true - возвращается текущий элемент и перебор прерывается
// если все итерации оказались ложными, возвращается undefined
// });
// item - очередной элемент
// index - его индекс
// array - сам массив
const result = books.find(function (item, index, array) {
  return item.name === "Война за выживание";
});

console.log(result);

const result1 = books.findIndex(function (item, index, array) {
  return item.name === "Война за выживание";
});

console.log(result1);
// findIndex возвращает индекс

// Методы перебора/преобразования

/*
 *  forEach()
 *  arr.forEach(function(item, index, array) {
 *     ... делать что-то с item
 *  });
 *  переберет поочереди все элементы массива и применяет к ним функцию колбек
 */

books.forEach(function (item) {
  item.price = item.price + "руб";
});

console.log(books);

/*
 *  map()
 *  let result arr.map(function(item, index, array) {
 *     возвращается новое значение вместо элемента
 *  });
 */

const newArr2 = books.map(function (item) {
  item.price = item.price + "руб";
  return item;
});

console.log(newArr2);

const newArr3 = books.map(function (item) {
  const newObj = {
    id: item.id,
    name: item.name,
  };
  return newObj;
});

console.log(newArr3);

/*
 *  filter()
 *  let result arr.filter(function(item, index, array) {
 *     если true - элемент добавляется к результату, и перебор продолжается
 *     возвращается пустой массив в случае, если ничего не найдено
 *  });
 */

const newArr4 = books.filter(function (item) {
  return item.author === "Виталий Зыков";
});
console.log(newArr4);

// Последовательная обработка

/*
 * let value = arr.reduce(function(previousValue, item, index, array) {
 *   // ...
 * }, [initial]);
 */

const result2 = books.reduce(function (sum, item) {
  return sum + item.price;
}, 0);

console.log(result2);
