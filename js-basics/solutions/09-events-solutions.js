// ===========================================
// РІШЕННЯ ДО УРОКУ 9: EVENTS
// ===========================================

// ЗАВДАННЯ 1
const btn = document.querySelector('#hello-btn');
if (btn) {
    btn.addEventListener('click', () => {
        console.log('Привіт!');
    });
}

// ЗАВДАННЯ 2
const search = document.querySelector('#search');
if (search) {
    search.addEventListener('input', (event) => {
        console.log(event.target.value);
    });
}

// ЗАВДАННЯ 3
const form = document.querySelector('#login-form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Форма відправлена без reload');
    });
}

// ЗАВДАННЯ 4
const todoList = document.querySelector('#todo-list');
if (todoList) {
    todoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log(event.target.textContent);
        }
    });
}

console.log('Рішення уроку 9 підключено');
