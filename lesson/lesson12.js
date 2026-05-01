
/*
 * Урок 11.
 * Обработка событий Особенности их работы
 */

const square = document.getElementById("square");
const text = document.getElementById("text");
const span = document.getElementById("text-span");
const range = document.getElementById("range");

const logger = function (event) {
  console.log(event.type);
  span.textContent = event.target.value;
};

// События при работы с мышью
// square.addEventListener("click", logger); // слушает событие клик и применяет функцию logger
// square.addEventListener("mouseup", logger); // отлавливаем событие отжатой кнопки мыши
// square.addEventListener("mousedown", logger); // отлавливаем событие зажатой кнопки мыши
// square.addEventListener("mousemove", logger); // отслеживает перемещение мышки по области
// square.addEventListener("mouseenter", logger); // отслеживает заход в область
// square.addEventListener("mouseleave", logger); // отслеживает выход из области
// square.addEventListener("mouseover", logger); // отслеживает выход из области внутри области реагируют на вложенные элементы
// square.addEventListener("mouseout", logger); // отслеживает выход из области внутри области реагируют на вложенные элементы
// square.removeEventListener("click", logger); // удаляет слушатель события клик с функцией logger

// События при работе с формами

text.addEventListener("input", logger);
text.addEventListener("focus", logger); // отрабатывает при установке курсора в input
text.addEventListener("blur", logger); // отрабатывает в момент потери фокуса с input
text.addEventListener("change", logger); // отрабатывает при вводе текста в input и увода фокуса с input

text.addEventListener("keyup", logger); // срабатывает в момент нажатия клавиши
text.addEventListener("keydown", logger); // срабатывает в момент отпускания клавиши

// Отрабатывает когда ДОМ дерево построено
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM построен");
});
