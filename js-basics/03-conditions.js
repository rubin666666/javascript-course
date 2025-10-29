// ===========================================
// 📋 УРОК 3: УМОВНІ КОНСТРУКЦІЇ (CONDITIONS)
// ===========================================

/*
📚 ЩО ВИВЧИМО В ЦЬОМУ УРОЦІ:
- Конструкція if/else (якщо/інакше)
- Багаторівневі умовні конструкції
- Логічні оператори в умовах
- Конструкція switch/case для множинного вибору
- Практичні приклади використання умов
- Найкращі практики написання умовних конструкцій
*/

console.log("=== 🎯 БАЗОВА КОНСТРУКЦІЯ IF/ELSE ===");

// 📖 УМОВНІ КОНСТРУКЦІЇ - це спосіб виконувати різні дії залежно від умов
// Синтаксис: if (умова) { код } else { інший код }

let temperature = 25; // Температура в градусах

// 🌡️ Простий приклад з перевіркою температури
if (temperature > 30) {
    console.log("Дуже спекотно! 🔥");
} else if (temperature > 20) {
    console.log("Приємна погода! ☀️");    // Ця умова спрацює для temperature = 25
} else if (temperature > 10) {
    console.log("Прохолодно 🌤️");
} else {
    console.log("Холодно! ❄️");
}

// 💡 ПОЯСНЕННЯ:
// - JavaScript перевіряє умови зверху вниз
// - Коли знаходить TRUE умову - виконує її і зупиняється
// - else виконується, якщо жодна умова не була TRUE

console.log("\n=== 🔗 СКЛАДНІ УМОВИ З ЛОГІЧНИМИ ОПЕРАТОРАМИ ===");

// 🏦 Приклад: система оцінки кредитоспроможності
let clientAge = 22;
let hasJobStatus = true;
let monthlySalary = 15000;

// 💰 Перевіряємо кредитоспроможність з кількома умовами одночасно
if (clientAge >= 18 && hasJobStatus && monthlySalary > 10000) {
    console.log("✅ Схвалено великий кредит (всі умови виконані)");
} else if (clientAge >= 18 && hasJobStatus) {
    console.log("⚠️ Схвалено малий кредит (є робота, але мала зарплата)");
} else if (clientAge >= 18) {
    console.log("❌ Відмовлено: потрібно знайти роботу");
} else {
    console.log("❌ Відмовлено: занадто молодий");
}

// 📝 ПОЯСНЕННЯ ЛОГІЧНИХ ОПЕРАТОРІВ:
// && (AND) - всі умови повинні бути true
// || (OR) - принаймні одна умова повинна бути true
// ! (NOT) - інвертує результат (true стає false)

// 🧪 Приклад з оператором OR
let weatherCondition = "дощ";
let hasUmbrella = false;

if (weatherCondition === "сонце" || hasUmbrella) {
    console.log("Можна йти гуляти! ☀️");
} else {
    console.log("Краще залишитися вдома 🏠");
}

console.log("\n=== 🎛️ КОНСТРУКЦІЯ SWITCH/CASE ===");

// 📖 SWITCH/CASE - зручний спосіб перевіряти одну змінну на багато значень
// Використовується замість довгих if/else if конструкцій

let dayOfWeek = "понеділок";

// 📅 Приклад: визначення типу дня тижня
switch (dayOfWeek) {
    case "понеділок":
        console.log("Початок робочого тижня 😴");
        break; // break зупиняє виконання switch
    
    // 🔄 Групування кількох випадків (fallthrough)
    case "вівторок":
    case "середа":
    case "четвер":
        console.log("Звичайний робочий день 💼");
        break;
    
    case "п'ятниця":
        console.log("П'ятниця! Майже вихідні! 🎉");
        break;
    
    case "субота":
    case "неділя":
        console.log("Вихідні! Відпочиваємо! 🎊");
        break;
    
    default: // виконується, якщо жоден case не підійшов
        console.log("❓ Невідомий день тижня");
}

// ⚠️ ВАЖЛИВО: без break код "провалюється" до наступного case!

console.log("\n=== 🌍 ПРИКЛАД: ВИЗНАЧЕННЯ ПОРИ РОКУ ===");

// 🗓️ Використання fallthrough для групування місяців
let currentMonth = "грудень";

switch (currentMonth) {
    case "грудень":
    case "січень": 
    case "лютий":
        console.log("❄️ Зима - час для гарячого чаю!");
        break;
    
    case "березень":
    case "квітень":
    case "травень":  
        console.log("🌸 Весна - природа прокидається!");
        break;
    
    case "червень":
    case "липень":
    case "серпень":
        console.log("☀️ Літо - час відпусток!");
        break;
    
    case "вересень":
    case "жовтень":
    case "листопад":
        console.log("🍂 Осінь - листя жовтіє!");
        break;
    
    default:
        console.log("❓ Невідомий місяць");
}

// 💡 КОЛИ ВИКОРИСТОВУВАТИ SWITCH VS IF:
// ✅ Switch: коли перевіряємо одну змінну на багато точних значень
// ✅ If/else: коли потрібні складні умови з діапазонами, логічними операторами

console.log("\n=== 🎯 ПРАКТИЧНІ ПРИКЛАДИ ВИКОРИСТАННЯ ===");

// 📊 ПРИКЛАД 1: Система оцінювання
console.log("📚 Приклад 1: Калькулятор оцінок");

let studentScore = 85;
let letterGrade;

// 🎓 Визначаємо літерну оцінку за числовими балами
if (studentScore >= 90) {      // 90-100 балів
    letterGrade = "A (Відмінно)";
} else if (studentScore >= 80) { // 80-89 балів
    letterGrade = "B (Добре)";
} else if (studentScore >= 70) { // 70-79 балів
    letterGrade = "C (Задовільно)";
} else if (studentScore >= 60) { // 60-69 балів
    letterGrade = "D (Низько)";
} else {                        // 0-59 балів
    letterGrade = "F (Незадовільно)";
}

console.log(`🎯 Результат: ${studentScore} балів = ${letterGrade}`);

// 💡 АЛЬТЕРНАТИВНИЙ СПОСІБ через тернарний оператор (складніший):
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";

// 🔐 ПРИКЛАД 2: Система валідації паролю
console.log("\n🔒 Приклад 2: Перевірка надійності пароля");

let userPassword = "MyPass123!";
let isPasswordValid = true;
let validationErrors = [];

// 📏 Перевіряємо довжину паролю
if (userPassword.length < 8) {
    isPasswordValid = false;
    validationErrors.push("Пароль повинен містити мінімум 8 символів");
}

// 🔤 Перевіряємо наявність великих літер (регулярний вираз)
if (!/[A-Z]/.test(userPassword)) {
    isPasswordValid = false;
    validationErrors.push("Пароль повинен містити великі літери (A-Z)");
}

// 🔢 Перевіряємо наявність цифр
if (!/[0-9]/.test(userPassword)) {
    isPasswordValid = false;
    validationErrors.push("Пароль повинен містити цифри (0-9)");
}

// ⚡ Перевіряємо наявність спеціальних символів
if (!/[!@#$%^&*]/.test(userPassword)) {
    isPasswordValid = false;
    validationErrors.push("Пароль повинен містити спеціальні символи (!@#$%^&*)");
}

// 📋 Виводимо результат перевірки
if (isPasswordValid) {
    console.log("✅ Пароль надійний і відповідає всім вимогам!");
} else {
    console.log("❌ Пароль не відповідає вимогам:");
    validationErrors.forEach(error => console.log("   • " + error));
}

// 💡 ПОЯСНЕННЯ РЕГУЛЯРНИХ ВИРАЗІВ:
// /[A-Z]/ - шукає великі літери від A до Z
// /[0-9]/ - шукає цифри від 0 до 9  
// .test() - повертає true/false чи знайдено збіг

// 🛍️ ПРИКЛАД 3: Система знижок в інтернет-магазині
console.log("\n💰 Приклад 3: Розрахунок знижки для покупця");

let customerCategory = "VIP";
let orderAmount = 1000;
let totalDiscount = 0;

// 🏆 Базова знижка залежно від статусу клієнта
switch (customerCategory) {
    case "VIP":
        totalDiscount = 0.20; // 20% знижки для VIP
        console.log("🌟 VIP клієнт: базова знижка 20%");
        break;
    case "Gold":
        totalDiscount = 0.15; // 15% знижки для Gold
        console.log("🥇 Gold клієнт: базова знижка 15%");
        break;
    case "Silver":
        totalDiscount = 0.10; // 10% знижки для Silver
        console.log("🥈 Silver клієнт: базова знижка 10%");
        break;
    case "Regular":
        totalDiscount = 0.05; // 5% знижки для Regular
        console.log("👤 Звичайний клієнт: базова знижка 5%");
        break;
    default:
        totalDiscount = 0; // Без знижки для нових клієнтів
        console.log("🆕 Новий клієнт: без базової знижки");
}

// 🎁 Додаткова знижка за велику покупку (акція)
if (orderAmount > 500) {
    totalDiscount += 0.05; // +5% за покупку понад 500 грн
    console.log("🎉 Бонус: +5% за покупку понад 500 грн!");
}

// 📊 Розрахунок фінальної суми
let discountAmount = orderAmount * totalDiscount;
let finalPrice = orderAmount - discountAmount;

// 🧾 Виводимо чек
console.log("--- 🧾 ЧЕК ---");
console.log(`👤 Категорія клієнта: ${customerCategory}`);
console.log(`🛒 Сума замовлення: ${orderAmount} грн`);
console.log(`💸 Загальна знижка: ${(totalDiscount * 100).toFixed(1)}%`);
console.log(`💰 Економія: ${discountAmount.toFixed(2)} грн`);
console.log(`✅ До сплати: ${finalPrice.toFixed(2)} грн`);

// 🎯 ДОДАТКОВИЙ ПРИКЛАД: Комбінування switch і if
console.log("\n🎮 Додатковий приклад: Система досягнень в грі");

let playerLevel = 25;
let playerClass = "warrior";
let achievement = "";

// Визначаємо досягнення за рівнем
if (playerLevel >= 50) {
    achievement = "Майстер";
} else if (playerLevel >= 25) {
    achievement = "Експерт";
} else if (playerLevel >= 10) {
    achievement = "Досвідчений";
} else {
    achievement = "Новачок";
}

// Додаємо бонус за клас персонажа
switch (playerClass) {
    case "warrior":
        console.log(`⚔️ Воїн ${achievement} (рівень ${playerLevel})`);
        console.log("💪 Бонус: +10% до атаки");
        break;
    case "mage":
        console.log(`🔮 Маг ${achievement} (рівень ${playerLevel})`);
        console.log("✨ Бонус: +10% до мани");
        break;
    case "archer":
        console.log(`🏹 Лучник ${achievement} (рівень ${playerLevel})`);
        console.log("🎯 Бонус: +10% до точності");
        break;
    default:
        console.log(`🎭 Невідомий клас ${achievement} (рівень ${playerLevel})`);
}

// 🏁 ПІДСУМОК УРОКУ
console.log("\n=== 📚 ПІДСУМОК УРОКУ 3 ===");
console.log("✅ Вивчили конструкції if/else для прийняття рішень");
console.log("✅ Розібрали логічні оператори &&, ||, !");
console.log("✅ Опанували switch/case для множинного вибору");
console.log("✅ Побачили практичні приклади застосування");
console.log("🎯 Наступний крок: вивчення циклів для повторення дій!");