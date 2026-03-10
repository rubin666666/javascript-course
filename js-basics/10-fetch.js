// ===========================================
// УРОК 10: FETCH API (ЗАПИТИ ДО СЕРВЕРА)
// ===========================================

/*
fetch() - вбудований спосіб робити HTTP-запити з браузера.
Найчастіше використовується з async/await.
*/

console.log("=== 1. GET ЗАПИТ ===");

async function getPostsDemo() {
    // Приклад для браузера/Node 18+:
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    // const posts = await response.json();
    // console.log(posts);
    return "GET demo: отримаємо список постів";
}

getPostsDemo().then(console.log);

console.log("\n=== 2. ПЕРЕВІРКА ПОМИЛОК ===");

async function safeFetchSimulation(isOk) {
    if (!isOk) {
        throw new Error("HTTP помилка: 500");
    }
    return { ok: true, data: [1, 2, 3] };
}

safeFetchSimulation(true)
    .then((result) => console.log("Успіх:", result))
    .catch((error) => console.log("Помилка:", error.message));

console.log("\n=== 3. POST ЗАПИТ ===");

async function createPostDemo() {
    // Приклад:
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'Новий пост', body: 'Текст', userId: 1 })
    // });
    // const created = await response.json();
    // console.log(created);

    return "POST demo: створення нового ресурсу";
}

createPostDemo().then(console.log);

console.log("\n=== 4. TRY/CATCH + ASYNC/AWAIT ===");

async function loadUserProfile() {
    try {
        // const response = await fetch('/api/user/1');
        // if (!response.ok) throw new Error('Не вдалося завантажити профіль');
        // const user = await response.json();
        // return user;
        return { id: 1, name: "Demo User" };
    } catch (error) {
        console.log("loadUserProfile error:", error.message);
        return null;
    }
}

loadUserProfile().then((user) => console.log("Користувач:", user));

console.log("\n=== ПІДСУМОК УРОКУ 10 ===");
console.log("fetch() використовується для API-запитів у веб-додатках.");
console.log("Після цього блоку можна переходити до міні-проектів.");
