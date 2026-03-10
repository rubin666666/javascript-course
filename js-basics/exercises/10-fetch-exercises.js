// ===========================================
// ВПРАВИ ДО УРОКУ 10: FETCH API
// ===========================================

// ========== ЗАВДАННЯ 1 ==========
// Напишіть async функцію loadPosts, яка робить GET-запит до:
// https://jsonplaceholder.typicode.com/posts?_limit=5
// і повертає масив постів.

// async function loadPosts() {
//     const response = await fetch(???);
//     const posts = await response.???();
//     return posts;
// }

// ========== ЗАВДАННЯ 2 ==========
// Додайте перевірку response.ok і кидайте помилку, якщо false.

// if (!response.???) {
//     throw new Error('Помилка завантаження постів');
// }

// ========== ЗАВДАННЯ 3 ==========
// Напишіть createPost(title, body), яка робить POST-запит на:
// https://jsonplaceholder.typicode.com/posts

// async function createPost(title, body) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: ???,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title, body, userId: 1 })
//     });
//
//     return response.json();
// }

// ========== ЗАВДАННЯ 4 ==========
// Обгорніть виклик loadPosts() у try/catch і виведіть помилку в консоль.
