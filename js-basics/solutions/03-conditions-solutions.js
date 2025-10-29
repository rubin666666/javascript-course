// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 3: УМОВНІ КОНСТРУКЦІЇ
// ===========================================

console.log("=== ЗАВДАННЯ 1: ПРОСТІ УМОВИ ===");

// Завдання 1.1: Перевірка віку для голосування
let age = 20;
if (age >= 18) {
    console.log("✅ Може голосувати");
} else {
    console.log("❌ Не може голосувати");
}

// Завдання 1.2: Перевірка оцінки
let grade = 85;
if (grade >= 90) {
    console.log("Відмінно! 🏆");
} else if (grade >= 80) {
    console.log("Добре! 👍");
} else if (grade >= 70) {
    console.log("Задовільно 📚");
} else {
    console.log("Потрібно більше вчитися 💪");
}

console.log("\n=== ЗАВДАННЯ 2: СКЛАДНІ УМОВИ ===");

// Завдання 2.1: Перевірка доступу до послуг
let userAge = 20;
let hasID = true;
let hasParentPermission = false;

// Логічне І (&&) - обидві умови мають бути true
if (userAge >= 21 || (userAge >= 18 && hasID)) {
    console.log("✅ Може купити алкоголь");
} else {
    console.log("❌ Не може купити алкоголь");
}

// Логічне АБО (||) - хоча б одна умова має бути true
if (userAge >= 16 && (hasID || hasParentPermission)) {
    console.log("✅ Може працювати");
} else {
    console.log("❌ Не може працювати");
}

// Завдання 2.2: Валідація паролю
let password = "MyPass123!";
let hasMinLength = password.length >= 8;
let hasUpperCase = /[A-Z]/.test(password);
let hasNumber = /\d/.test(password);
let hasSpecialChar = /[!@#$%^&*]/.test(password);

if (hasMinLength && hasUpperCase && hasNumber && hasSpecialChar) {
    console.log("✅ Пароль надійний");
} else {
    console.log("❌ Пароль слабкий");
    if (!hasMinLength) console.log("- Мінімум 8 символів");
    if (!hasUpperCase) console.log("- Потрібна велика літера");
    if (!hasNumber) console.log("- Потрібна цифра");
    if (!hasSpecialChar) console.log("- Потрібен спецсимвол");
}

console.log("\n=== ЗАВДАННЯ 3: SWITCH-CASE ===");

// Завдання 3.1: Дні тижня
let dayNumber = 3;
let dayName;
switch (dayNumber) {
    case 1: 
        dayName = "Понеділок"; 
        break;
    case 2: 
        dayName = "Вівторок"; 
        break;
    case 3: 
        dayName = "Середа"; 
        break;
    case 4: 
        dayName = "Четвер"; 
        break;
    case 5: 
        dayName = "П'ятниця"; 
        break;
    case 6: 
        dayName = "Субота"; 
        break;
    case 7: 
        dayName = "Неділя"; 
        break;
    default: 
        dayName = "Невідомий день";
}
console.log(`День ${dayNumber} - це ${dayName}`);

// Завдання 3.2: Калькулятор
let operation = "+";
let a = 10, b = 5;
let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } else {
            result = "Помилка: ділення на нуль";
        }
        break;
    default:
        result = "Невідома операція";
}
console.log(`${a} ${operation} ${b} = ${result}`);

console.log("\n=== ЗАВДАННЯ 4: ТЕРНАРНИЙ ОПЕРАТОР ===");

// Завдання 4.1: Визначення статусу
let studentAge = 19;
let status = studentAge >= 18 ? "дорослий" : "неповнолітній";
console.log(`Студент ${studentAge} років - ${status}`);

// Завдання 4.2: Визначення знижки
let orderAmount = 1200;
let discount = orderAmount >= 1000 ? 0.1 : orderAmount >= 500 ? 0.05 : 0;
let finalPrice = orderAmount * (1 - discount);
console.log(`Сума: ${orderAmount} грн, знижка: ${discount * 100}%, до сплати: ${finalPrice} грн`);

// Завдання 4.3: Вкладений тернарний оператор
let testScore = 87;
let letterGrade = testScore >= 90 ? "A" : 
                  testScore >= 80 ? "B" : 
                  testScore >= 70 ? "C" : 
                  testScore >= 60 ? "D" : "F";
console.log(`Оцінка ${testScore} балів = "${letterGrade}"`);

console.log("\n=== ЗАВДАННЯ 5: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 5.1: Система доступу до банку
let cardType = "premium";
let balance = 5000;
let transactionAmount = 2000;
let isWorkingHours = true;

console.log("--- БАНКІВСЬКА СИСТЕМА ---");
console.log(`Тип картки: ${cardType}`);
console.log(`Баланс: ${balance} грн`);
console.log(`Сума операції: ${transactionAmount} грн`);

// Перевірка можливості операції
let dailyLimit;
switch (cardType.toLowerCase()) {
    case "basic":
        dailyLimit = 1000;
        break;
    case "standard":
        dailyLimit = 3000;
        break;
    case "premium":
        dailyLimit = 10000;
        break;
    default:
        dailyLimit = 500;
}

if (balance >= transactionAmount) {
    if (transactionAmount <= dailyLimit) {
        if (isWorkingHours || cardType === "premium") {
            console.log("✅ Операція схвалена");
            console.log(`Новий баланс: ${balance - transactionAmount} грн`);
        } else {
            console.log("❌ Операція відхилена: поза робочим часом");
        }
    } else {
        console.log(`❌ Операція відхилена: перевищено денний ліміт (${dailyLimit} грн)`);
    }
} else {
    console.log("❌ Операція відхилена: недостатньо коштів");
}

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. IF-ELSE:
   - Використовуй для простих перевірок
   - Комбінуй з && (І) та || (АБО)
   - Не забувай про else if для множинних умов

2. SWITCH-CASE:
   - Ідеально для перевірки одного значення на різні варіанти
   - ЗАВЖДИ додавай break; після кожного case
   - Використовуй default для непередбачених випадків

3. ТЕРНАРНИЙ ОПЕРАТОР:
   - Зручний для простих умов: умова ? true_значення : false_значення
   - Можна вкладати, але не перестарайся з читабельністю

4. ЛОГІЧНІ ОПЕРАТОРИ:
   - && (І): ВСІ умови мають бути true
   - || (АБО): ХОЧА Б ОДНА умова має бути true
   - ! (НЕ): інвертує boolean значення

🚫 НАЙЧАСТІШІ ПОМИЛКИ:
- Забування break в switch-case
- Плутання = (присвоєння) та == (порівняння)
- Неправильна логіка з && та ||
- Занадто складні вкладені умови

🏆 КРАЩІ ПРАКТИКИ:
- Використовуй === замість == для строгого порівняння
- Виноси складні умови в змінні для читабельності
- Додавай коментарі до складної логіки
- Тестуй граничні випадки
*/