"use strict";

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
let func = function () { };
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

/*
 * JavaScript
 * Урок №3
 * Динамическая типизация данных в Javascript. Условия, ветвления.
 */

alert("Привет JS!!"); // выводит окно с информацией для пользователя блокирует отработку всего
// дальнейшего скрипта пока не нажата кнопка ок
console.log("Привет консоль!"); // Выводит информацию в консоль

let answer = confirm("Тебе есть 18 лет?"); // Выводит модальное окно в браузере с текстом в круглых скобках
// при нажатии ОК будет true, а при нажатии Отмена будет false
console.log(answer);

let answer2 = prompt("Сколько вам лет?", "18 лет"); // Выводит модальное окно в браузере с текстом в круглых скобках и
// ожидает ввод данных от пользователя. Ответ всегда приходит в виде строки
// Второй параметр значение по умолчанию
// При нажатии Отмена prompt возвращает null
console.log(answer2);

// Приведение типа данных

console.log(5 + "5"); // 55 при конкатенации преобразует число в строку

console.log(5 - "5"); // 0 при вычитании преобразует в число
console.log(5 * "5"); // 25 при умножении преобразует в число
console.log(5 / "5"); // 1 при делении преобразует в число
console.log(5 / "5ty"); // NaN выведет если не сможет перевести строку в число

console.log(5 == "5"); // true сравнит два числа
console.log(5 === "5"); // false сравнит число и строку

// Глобальный метод String переводит все переданное в него в строку
console.log(typeof String(true)); // string
console.log(typeof String(undefined)); // string
console.log(typeof String(null)); // string
console.log(typeof String("123")); // string
console.log(typeof String(123)); // string

// Глобальный метод Number переводит все переданное в него в число
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number("123")); // 123
console.log(Number("123dvf")); // NaN
console.log(Number(123)); // 123

// Глобальный метод Boolean
console.log(Boolean("")); // Вернет false
console.log(Boolean(null)); // Вернет false
console.log(Boolean(undefined)); // Вернет false
console.log(Boolean(NaN)); // Вернет false
console.log(Boolean(false)); // Вернет false
// В остальных случаях вернет true
let a = 10;
console.log(!!"dfjvvoerj"); // двойное отрицание работает также как метод Boolean
console.log(10 + ""); //переводит число в строку
console.log(a.toString()); // метод переводит переменную в строку
console.log(+"10"); // Переводит строку в число (которую можно перевести)

// Пример

let str = +prompt("Сколько тебе лет?"); // Переводит строку в число если число. если ввели строку будут NaN
let result = str + 10;
console.log(result);

console.log(parseInt(str)); // Забирает целое число если начинается с числа. иначе NaN
console.log(parseFloat(str)); // Забирает целое число c плавающей точкой если начинается с числа. иначе NaN
//Второй параметр задает систему счисления
console.log(parseInt("10ff", 2)); // двоичная
console.log(parseInt("10ff", 16)); // шестнадцатеричная

// Ветвление

/*
    Если (выходной) {
      радуемся и спим;
      потягиваемся;
    } иначе {
      умываемся;
      одеваемся;
      работаем;
    }
*/

if (true) console.log("Истина");
if (false) console.log("Ложь");

let n = 10;
if (n == 10) {
  console.log("Команда 1");
  console.log("Команда 2");
  console.log("Команда 3");
} else if (n == 12) {
  console.log("Команда 3");
  console.log("Команда 4");
  console.log("Команда 5");
}

switch (n) {
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  case 10:
    console.log(10);
    break;
  case 11:
    console.log(11);
    break;
  default:
    console.log("Не верно ни одно значение");
}

switch (n) {
  case 3:
    console.log(3);
    break;
  case 4:
  case 10:
  case 11:
    console.log(11);
    break;
  default:
    console.log("Не верно ни одно значение");
}
// Кейсы всегда проверяются на строгое соответствие

const n = +prompt("Введите число");

switch (true) {
  case n > 10:
    console.log("n > 10");
    break;
  case n <= 5:
    console.log("n <= 10");
  default:
    console.log("Не верно ни одно значение");
}

// Тернарный оператор

let result = n === 10 ? 1 : 2; // Если истина до вернется 1 ели ложь то 2

/*
 * JavaScript
 * Урок №4
 * Функции, анонимные функции, callback - функции, чистые функции
 */

function getMessage() {
  alert("Hello world!");
}

getMessage();
getMessage();
getMessage();

// function cleanMandesOperation() {
//    function dirtyHands() {
//       console.log('Испачкать руки');
//    }
//    function goToTheBathromm() {
//       console.log('Пойти в ванную комнату');
//    }
//    function cleanMands() {
//       console.log('Помыть руки');
//    }

//    dirtyHands()
//    goToTheBathromm()
//    cleanMands()
//    dirtyHands()
//    goToTheBathromm()
//    cleanMands()
// }

// cleanMandesOperation()

function cleanMandesOperation() {
  function step(index, str) {
    console.log(index + " " + str);
  }

  step(1, "Испачкать руки");
  step(2, "Пойти в ванную комнату");
  step(3, "Помыть руки");
}

cleanMandesOperation();

// переменные созданные в функции не видны за ее приделами
const countSum = function (a, b) {
  let res = a + b;
  console.log(res);
};
console.log(res); //вызовит ошибку нет такой переменной
countSum(3, 5);

// переменная res будет undefined пока функция не будет объявлена

let res;

const countSum = function (a, b) {
  res = a + b;
};

console.log(res);
countSum(3, 5);
console.log(res);

/*
* Урок 5
* Циклы. Рекурсия. 
*/

// Рекурсия
let potate = 10;

const peelPotato = function (potatoIndex) {
  if (potatoIndex > 0) {
    console.log("Картошка № " + potatoIndex + " почищена");
    potatoIndex--;
    peelPotato(potatoIndex);
  }
}

peelPotato(potatoIndex);

// Циклический оператор 1 for 

for (let i = 10; i > 0; i--) {
  console.log('Кортошка №' + i + ' почищена');
}
// меняем направление счета
for (let i = 1; i < 11; i++) {
  if (i === 5) continue; // Пропуск при значении 5 не выполняется
  if (i === 8) break; // Выход из цикла после значения 8
  console.log('Кортошка №' + i + ' почищена');
}
// выводим всегда пока индекс не будет равен 5
for (let i = 1; i < 11; i++) {
  if (i !== 5) console.log('Кортошка №' + i + ' почищена');
}

// Циклический оператор 2 while
while (potato > 0) {
  console.log('Кортошка №' + i + ' почищена');
  potato--;
}

// Циклический оператор 2 do while
do {
  console.log('Кортошка №' + i + ' почищена');
  potato--;
} while (potato > 0)


/*
* Урок 6
* Функции. Область видимости и замыкание.
*/

let a = 5; // переменная находится в глобальной области видимости

function one() {
  let b = 10;
  console.log(b); // переменная в логальной области видимости 
}
one();
console.log(b); // в глобальной области видимости она не видна

// если убрать слова let const и var те переменная видится глобально
a = 5; // переменная находится в глобальной области видимости

function one() {
  b = 10;
  console.log(b); // переменная в логальной области видимости 
}
one();
console.log(b); // в глобальной области видимости она видна

function one() {
  let a = 10;
  function one() {
    let a = 15; // локальная переменная
    console.log(а); // используется ближайшая переменная a = 15 
  }

  one();
}

one();

function one(c, d) {
  // LexicalEnvironment = {c: 3, d: undefined}
  let a = 10;
  // LexicalEnvironment = {a: 10, c: 3, d: undefined}
  console.log(а, c, d);
  function two() {
    // LexicalEnvironment = {}
    // Scdope = {a: 10, c: 3, d: undefined}
    console.log(а, c);
  }

  one();
}
one();

let y = 5;
function one(x) {
  console.log(x + y);
}
function two() {
  let y = 15;
  one(3)
}
two()

// Замыкание это функция внутри функции

function one(x) {
  function two() {
    const a = +prompt("Введите число")
    x--

    console.log(a);
    console.log(x);

    if (a !== x) {
      two()
    }
  }
  two()
}
one(10)

function counter(n) { // 1 которая попадает в параметр n замкнути внутри функции counter вмести с ананимной функцией
  return function(x) {
    return x + n
  }
}

let sum = counter(1)
console.log(sum(15));
console.log(sum(20));

function counter(url) {
  return function(imageName) {
    return url + imageName
  }
}

let urlToIcons = pathGenerator('http://mydomain.ru/assets/icons/')
let urlToImages = pathGenerator('http://mydomain.ru/assets/images/')

console.log(urlToIcons('clock.svg'));
console.log(urlToImages('man.png'));