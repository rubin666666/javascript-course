// ===========================================
// РІШЕННЯ ДО УРОКУ 8: DOM BASICS
// ===========================================

// ЗАВДАННЯ 1
const app = document.getElementById('app');
if (app) app.textContent = 'DOM працює!';

// ЗАВДАННЯ 2
const card = document.querySelector('.card');
if (card) card.classList.add('active');

// ЗАВДАННЯ 3
const li = document.createElement('li');
li.textContent = 'Новий пункт';
const list = document.getElementById('list');
if (list) list.appendChild(li);

// ЗАВДАННЯ 4
const oldItem = document.querySelector('.old-item');
if (oldItem) oldItem.remove();

// ЗАВДАННЯ 5
const themeBox = document.getElementById('theme-box');
if (themeBox) themeBox.classList.toggle('dark');

console.log('Рішення уроку 8 виконано');
