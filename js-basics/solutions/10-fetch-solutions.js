// ===========================================
// РІШЕННЯ ДО УРОКУ 10: FETCH API
// ===========================================

async function loadPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
        throw new Error('Помилка завантаження постів');
    }

    const posts = await response.json();
    return posts;
}

async function createPost(title, body) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId: 1 })
    });

    if (!response.ok) {
        throw new Error('Помилка створення поста');
    }

    return response.json();
}

(async () => {
    try {
        const posts = await loadPosts();
        console.log('Пости:', posts);

        const created = await createPost('Новий пост', 'Тестовий текст');
        console.log('Створено:', created);
    } catch (error) {
        console.error('Помилка:', error.message);
    }
})();
