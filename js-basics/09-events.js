// ===========================================
// УРОК 9: EVENTS (ПОДІЇ У БРАУЗЕРІ)
// ===========================================

/*
Подія (event) - це дія користувача або браузера:
- click, input, submit, keydown, change, load тощо.
*/

console.log("=== 1. addEventListener ===");

// Приклад для браузера:
// const button = document.querySelector('#save-btn');
// button.addEventListener('click', () => {
//     console.log('Клік по кнопці');
// });

console.log("Елементи слухають події через addEventListener");

console.log("\n=== 2. ОБ'ЄКТ EVENT ===");

// button.addEventListener('click', (event) => {
//     console.log(event.type);       // click
//     console.log(event.target);     // елемент, по якому клікнули
// });

console.log("event.type, event.target - найчастіше потрібні поля");

console.log("\n=== 3. ПОДІЯ INPUT ===");

// const search = document.querySelector('#search');
// search.addEventListener('input', (event) => {
//     console.log('Введено:', event.target.value);
// });

console.log("input - спрацьовує на кожну зміну поля");

console.log("\n=== 4. ПОДІЯ SUBMIT ===");

// const form = document.querySelector('#login-form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // не перезавантажувати сторінку
//     console.log('Форма відправлена');
// });

console.log("submit + preventDefault() - база для форм");

console.log("\n=== 5. EVENT BUBBLING (СПЛИВАННЯ) ===");

// Подія піднімається від дочірнього елемента до батьківського.
// event.stopPropagation() зупиняє це спливання.

console.log("Події можуть спливати вгору по DOM дереву");

console.log("\n=== 6. EVENT DELEGATION ===");

// Делегування: вішаємо 1 обробник на контейнер, а не на кожен item.
// Це корисно для динамічних списків.

function handleListClick(clickedTagName) {
    if (clickedTagName === "LI") {
        return "Клік по пункту списку";
    }
    return "Клік не по пункту";
}

console.log(handleListClick("LI"));
console.log(handleListClick("DIV"));

console.log("\n=== ПІДСУМОК УРОКУ 9 ===");
console.log("Події роблять сторінку інтерактивною.");
console.log("Далі: робота з API через fetch().");
