/*
 * JavaScript
 * Урок №2
 * Типы данных, операторы, методы и свойства
 */

let myVar;

myVar = 10; // Число
myVar = 1454856464656785571282646856464n; // Больше число
myVar = "Hello world"; // Строка
myVar = true; // Булевое значение
myVar = null; // Ничего значение не известно
myVar = undefined; // Значение не задано
myVar = Symbol();

console.log(typeof myVar); // показывает тип переменной

// объект
myVar = {};
muVar = [];
let regExp = /w+/g;
let func = function () {};
let error = Error("error message");

// boolean
let myTrue = true;
let myFalse = false;

console.log(myTrue); // true
console.log(myFalse); // false
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 === 2); // false

// || - оператор ИЛИ, && - оператор И, ! - оператор отрицание.addEventListener('type', listener, options)

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(!true); // false
console.log(!false); // true

// Number
console.log(50); // 50
console.log(8.5); // 8.5
console.log(0.5); // 0.5
console.log(0xff); // Шестнадцатеричная система === 255
console.log(0b11111111); // Бинарная система === 255
console.log(0o377); // Восьмеричная система === 255
console.log(Infinity); // Математическая бесконечность и оно больше любого другого числа и может быть отрицательным
console.log(NaN); // Неправильная математическая операция
console.log("string" / 2); // NaN
console.log(Infinity / Infinity); // NaN
console.log(2 / 0); // Не будет ошибкой а будет Infinity

// Унарные и бинарные арифметические операторы
// Унарные
console.log(+5);
console.log(-5);
let i = 5;
console.log(++i); // Префиксная форма инкремента
console.log(i++); // Постфиксная форма инкремента
console.log(--i); // Префиксная форма декремента
console.log(i--); // Постфиксная форма декремента

// Бинарные
console.log(2 + 1); // Сложение
console.log(2 - 1); // Вычитание
console.log(4 * 1); // Умножение
console.log(4 / 1); // Деление

console.log(9 % 2); // Получение остатка от деления
console.log(4 ** 3); // Возведение в степень

// Сокращенные операции
let n = 2;
n = n + 5;
n += 5;
n = n * 2;
n *= 2;

// Операторы сравнения
console.log(3 > 2); // Больше true
console.log(3 < 2); // Меньше false
console.log(7 >= 4); // Больше или равно true
console.log(7 <= 4); // Меньше или равно false

console.log(10 == 10); // Нестрогое равенство true
console.log(10 == "10"); // Нестрогое равенство true
console.log(10 != 10); // Нестрогое неравенство false
console.log(10 != 11); // Нестрогое неравенство true
console.log(10 != "11"); // Нестрогое неравенство true

console.log(10 === 10); // Строгое равенство true
console.log(10 === "10"); // Строгое равенство false
console.log(10 !== 10); // Строгое неравенство false
console.log(10 !== 11); // Строгое неравенство true
console.log(10 !== "11"); // Строгое неравенство true

console.log(Math.floor(3.456)); // округление в меньшую 3
console.log(Math.ceil(3.456)); // округление в большую 4
console.log(Math.round(3.556)); // округление до ближайшего 4
console.log(Math.trunc(3.456)); // удаление дробной части 3

console.log(Math.random()); // случайное число от 0 до 1
console.log(Math.max(3, 5, 8)); // большее число
console.log(Math.sqrt(25)); // корень числа
console.log(Math.pow(5, 2)); // возводит в степень

// String строка
let myString = "Hello world!";
let myStr = "Hello world!";
// Экранирование символов
let mySomeStr = '\t Hello \"my\" \n friends';
console.log(mySomeStr);
// Конкатенация строк
let conc = "Hello" + " " + "world!";
console.log(conc);

// Свойства и методы строк
let str = "Hello my Friends!";

console.log(str.length); // Свойство длина строки
console.log(str.toUpperCase()); // Метод переводит все в верхний регистр
console.log(str.toLowerCase()); // Метод переводит все в нижний регистр
console.log(str.charAt(0)); // Выводит символ строки индекс которого пишется в скобках начинается с 0 (устаревший)
console.log(str[2]); // современный

console.log(str.substring(6)); // отрезает строку оставляя от индекса 6 и до конца
console.log(str.substring(6, 15)); // отрезает строку в промежутке между 6(включает) и 15(невключительно) индексом
console.log(str.slice(6, 15)); // тоже что и substring
console.log(str.slice(-8)); // при отрицательном значении индекс отсчитывает с конца строки
console.log(str.substr(6, 2)); // первое значение с какого индекса будем резать и второй сколько будем резать

// Поиск в строке
console.log(str.indexOf("my")); //проходит по строке и ищет совпадения если найдет вернет первый индекс совпадения (6)
console.log(str.includes("my5")); // проходит по всей строке и вернет либо false либо true (false)
console.log(str.includes("my", "your")); // ищет совпадения в строке с первым параметром если найдет
// заменит вторым параметром
console.log(str.split()); // Переводит строку в массив принимая параметр разделитель
