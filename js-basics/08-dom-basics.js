// ===========================================
// УРОК 8: DOM BASICS (РОБОТА З HTML)
// ===========================================

/*
DOM (Document Object Model) - це об'єктна модель сторінки.
JavaScript через DOM може:
1) знаходити елементи HTML
2) змінювати текст, стилі, атрибути
3) створювати/видаляти елементи
*/

console.log("=== 1. ПОШУК ЕЛЕМЕНТІВ ===");

// Найчастіші способи пошуку (приклади для браузера):
console.log("document.getElementById('title')");
console.log("document.querySelector('.card')");
console.log("document.querySelectorAll('li')");

console.log("\n=== 2. ЗМІНА ТЕКСТУ ТА HTML ===");

// Приклад для браузера:
// const title = document.querySelector('#main-title');
// title.textContent = 'Новий заголовок';
// title.innerHTML = '<span style="color:green">Змінений HTML</span>';

console.log("textContent - безпечно змінює текст");
console.log("innerHTML - вставляє HTML (обережно)");

console.log("\n=== 3. РОБОТА З АТРИБУТАМИ ===");

// const link = document.querySelector('a');
// link.setAttribute('href', 'https://developer.mozilla.org');
// console.log(link.getAttribute('href'));
// link.removeAttribute('target');

console.log("setAttribute / getAttribute / removeAttribute");

console.log("\n=== 4. РОБОТА З CSS-КЛАСАМИ ===");

// const box = document.querySelector('.box');
// box.classList.add('active');
// box.classList.remove('hidden');
// box.classList.toggle('dark');
// console.log(box.classList.contains('active'));

console.log("classList: add/remove/toggle/contains");

console.log("\n=== 5. СТВОРЕННЯ ЕЛЕМЕНТІВ ===");

// const list = document.querySelector('#todo-list');
// const item = document.createElement('li');
// item.textContent = 'Купити молоко';
// list.appendChild(item);

console.log("createElement + appendChild");

console.log("\n=== 6. ВИДАЛЕННЯ ЕЛЕМЕНТІВ ===");

// const oldItem = document.querySelector('.old-item');
// oldItem.remove();

console.log("remove() - видаляє елемент зі сторінки");

console.log("\n=== 7. МІНІ-ПРИКЛАД (ПСЕВДО) ===");

function demoToggleState(currentState) {
    // Симуляція зміни стану кнопки
    const nextState = currentState === "OFF" ? "ON" : "OFF";
    return `Стан перемкнено: ${currentState} -> ${nextState}`;
}

console.log(demoToggleState("OFF"));
console.log(demoToggleState("ON"));

console.log("\n=== ПІДСУМОК УРОКУ 8 ===");
console.log("DOM дозволяє керувати HTML/CSS через JavaScript.");
console.log("Далі: події користувача (click, input, submit).");
