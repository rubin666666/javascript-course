// ===========================================
// УРОК 3: УМОВНІ КОНСТРУКЦІЇ
// ===========================================

console.log("=== IF/ELSE ===");

let temperature = 25;

if (temperature > 30) {
    console.log("Дуже спекотно! 🔥");
} else if (temperature > 20) {
    console.log("Приємна погода! ☀️");
} else if (temperature > 10) {
    console.log("Прохолодно 🌤️");
} else {
    console.log("Холодно! ❄️");
}

// Приклад з складними умовами
let age = 22;
let hasJob = true;
let salary = 15000;

if (age >= 18 && hasJob && salary > 10000) {
    console.log("Можна взяти кредит");
} else if (age >= 18 && hasJob) {
    console.log("Можна взяти невеликий кредит");
} else if (age >= 18) {
    console.log("Потрібно знайти роботу");
} else {
    console.log("Занадто молодий для кредиту");
}

console.log("\n=== SWITCH/CASE ===");

let dayOfWeek = "понеділок";

switch (dayOfWeek) {
    case "понеділок":
        console.log("Початок робочого тижня 😴");
        break;
    case "вівторок":
    case "середа":
    case "четвер":
        console.log("Робочий день 💼");
        break;
    case "п'ятниця":
        console.log("П'ятниця! Майже вихідні! 🎉");
        break;
    case "субота":
    case "неділя":
        console.log("Вихідні! 🎊");
        break;
    default:
        console.log("Невідомий день тижня");
}

// Switch без break (fallthrough)
let month = "грудень";

switch (month) {
    case "грудень":
    case "січень":
    case "лютий":
        console.log("Зима ❄️");
        break;
    case "березень":
    case "квітень":
    case "травень":
        console.log("Весна 🌸");
        break;
    case "червень":
    case "липень":
    case "серпень":
        console.log("Літо ☀️");
        break;
    case "вересень":
    case "жовтень":
    case "листопад":
        console.log("Осінь 🍂");
        break;
    default:
        console.log("Невідомий місяць");
}

console.log("\n=== ПРАКТИЧНІ ПРИКЛАДИ ===");

// Приклад 1: Калькулятор оцінок
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Бали: ${score}, Оцінка: ${grade}`);

// Приклад 2: Валідація паролю
let password = "MyPass123!";
let isValid = true;
let errors = [];

if (password.length < 8) {
    isValid = false;
    errors.push("Пароль повинен містити мінімум 8 символів");
}

if (!/[A-Z]/.test(password)) {
    isValid = false;
    errors.push("Пароль повинен містити великі літери");
}

if (!/[0-9]/.test(password)) {
    isValid = false;
    errors.push("Пароль повинен містити цифри");
}

if (!/[!@#$%^&*]/.test(password)) {
    isValid = false;
    errors.push("Пароль повинен містити спеціальні символи");
}

if (isValid) {
    console.log("✅ Пароль валідний!");
} else {
    console.log("❌ Помилки в паролі:");
    errors.forEach(error => console.log("  -", error));
}

// Приклад 3: Система знижок
let customerType = "VIP";
let purchaseAmount = 1000;
let discount = 0;

switch (customerType) {
    case "VIP":
        discount = 0.20; // 20%
        break;
    case "Gold":
        discount = 0.15; // 15%
        break;
    case "Silver":
        discount = 0.10; // 10%
        break;
    case "Regular":
        discount = 0.05; // 5%
        break;
    default:
        discount = 0;
}

// Додаткова знижка для великих покупок
if (purchaseAmount > 500) {
    discount += 0.05; // +5%
}

let finalAmount = purchaseAmount * (1 - discount);
console.log(`Тип клієнта: ${customerType}`);
console.log(`Сума покупки: ${purchaseAmount} грн`);
console.log(`Знижка: ${(discount * 100).toFixed(1)}%`);
console.log(`До сплати: ${finalAmount.toFixed(2)} грн`);