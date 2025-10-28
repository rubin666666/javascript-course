// ===========================================
// ПРАКТИЧНІ ЗАВДАННЯ - УРОК 3: УМОВНІ КОНСТРУКЦІЇ
// ===========================================

console.log("=== ЗАВДАННЯ 1: БАЗОВІ IF/ELSE КОНСТРУКЦІЇ ===");

// TODO: Створіть систему визначення пори року

const month = "березень"; // Змініть на різні місяці для тестування

// Завдання 1.1: Визначте пору року
// if (???) {
//     console.log("Зима ❄️");
// } else if (???) {
//     console.log("Весна 🌸");
// } else if (???) {
//     console.log("Літо ☀️");
// } else if (???) {
//     console.log("Осінь 🍂");
// } else {
//     console.log("Невідомий місяць");
// }

console.log(`Місяць: ${month}`);
console.log("Розкоментуйте код вище щоб побачити пору року!");

console.log("\n=== ЗАВДАННЯ 2: ВКЛАДЕНІ IF КОНСТРУКЦІЇ ===");

// TODO: Створіть систему доступу до будівлі

const userAge = 25;
const hasKeyCard = true;
const isBusinessHours = true;
const isEmployee = false;
const isVIP = true;

console.log("Дані користувача:");
console.log("Вік:", userAge);
console.log("Має ключ-карту:", hasKeyCard);
console.log("Робочий час:", isBusinessHours);
console.log("Співробітник:", isEmployee);
console.log("VIP статус:", isVIP);

// Завдання 2.1: Створіть систему доступу
// Умови доступу:
// - Вік >= 18
// - Має ключ-карту АБО є VIP
// - Якщо не робочий час, то тільки співробітники або VIP
// - Якщо робочий час, то всі хто відповідає попереднім умовам

// if (???) {
//     if (???) {
//         if (???) {
//             console.log("✅ Доступ дозволено!");
//         } else {
//             console.log("❌ Доступ заборонено: не робочий час");
//         }
//     } else {
//         console.log("❌ Доступ заборонено: немає ключ-карти або VIP статусу");
//     }
// } else {
//     console.log("❌ Доступ заборонено: вік менше 18 років");
// }

console.log("\nРозкоментуйте код вище для перевірки доступу!");

console.log("\n=== ЗАВДАННЯ 3: SWITCH/CASE КОНСТРУКЦІЇ ===");

// TODO: Створіть меню ресторану з цінами

const dishNumber = 3; // Змініть число для тестування різних страв

console.log(`Вибрана страва номер: ${dishNumber}`);

// Завдання 3.1: Створіть меню з використанням switch
// switch (???) {
//     case 1:
//         console.log("🍕 Піца Маргарита - 250 грн");
//         break;
//     case 2:
//         console.log("🍝 Паста Карбонара - 180 грн");
//         break;
//     case 3:
//         console.log("🥗 Цезар салат - 150 грн");
//         break;
//     case 4:
//         console.log("🍖 Стейк з телятини - 450 грн");
//         break;
//     case 5:
//         console.log("🍰 Тірамісу - 120 грн");
//         break;
//     default:
//         console.log("❌ Такої страви немає в меню");
// }

console.log("\nРозкоментуйте код вище для відображення меню!");

console.log("\n=== ЗАВДАННЯ 4: СИСТЕМА ОЦІНЮВАННЯ ===");

// TODO: Створіть детальну систему оцінювання

const studentScore = 87; // Змініть для тестування

console.log(`Бали студента: ${studentScore}`);

// Завдання 4.1: Визначте оцінку та коментар
// let grade, comment;

// if (???) {
//     grade = "A+";
//     comment = "Відмінно! Ви показали винятковий результат!";
// } else if (???) {
//     grade = "A";
//     comment = "Відмінно! Дуже гарна робота!";
// } else if (???) {
//     grade = "B";
//     comment = "Добре! Хороший результат!";
// } else if (???) {
//     grade = "C";
//     comment = "Задовільно. Можна краще!";
// } else if (???) {
//     grade = "D";
//     comment = "Слабо. Потрібно підтягнути знання.";
// } else {
//     grade = "F";
//     comment = "Незадовільно. Необхідно перездати.";
// }

// console.log(`Оцінка: ${grade}`);
// console.log(`Коментар: ${comment}`);

console.log("\nРозкоментуйте код вище для визначення оцінки!");

console.log("\n=== ЗАВДАННЯ 5: ВАЛІДАТОР ФОРМИ ===");

// TODO: Створіть валідатор реєстраційної форми

const username = "john_doe";
const email = "john@gmail.com";
const password = "MyPass123!";
const confirmPassword = "MyPass123!";
const age = 20;
const agreeToTerms = true;

console.log("Дані форми:");
console.log("Логін:", username);
console.log("Email:", email);
console.log("Пароль:", password);
console.log("Підтвердження:", confirmPassword);
console.log("Вік:", age);
console.log("Згода з умовами:", agreeToTerms);

// Завдання 5.1: Створіть повну валідацію
// let isValid = true;
// let errors = [];

// Перевірка логіна (довжина 3-20 символів, тільки літери, цифри, підкреслення)
// if (???) {
//     isValid = false;
//     errors.push("Логін повинен містити 3-20 символів");
// }

// Перевірка email (має містити @ та крапку)
// if (???) {
//     isValid = false;
//     errors.push("Невірний формат email");
// }

// Перевірка паролю (мінімум 8 символів, великі/малі літери, цифри, спецсимволи)
// if (???) {
//     isValid = false;
//     errors.push("Пароль занадто короткий (мінімум 8 символів)");
// }

// Перевірка підтвердження паролю
// if (???) {
//     isValid = false;
//     errors.push("Паролі не співпадають");
// }

// Перевірка віку
// if (???) {
//     isValid = false;
//     errors.push("Вік повинен бути 18+ років");
// }

// Перевірка згоди з умовами
// if (???) {
//     isValid = false;
//     errors.push("Необхідно погодитися з умовами");
// }

// if (isValid) {
//     console.log("✅ Форма валідна! Реєстрація успішна!");
// } else {
//     console.log("❌ Помилки валідації:");
//     errors.forEach(error => console.log(`  • ${error}`));
// }

console.log("\nРозкоментуйте код вище для валідації форми!");

console.log("\n=== ЗАВДАННЯ 6: ІГРОВИЙ СЦЕНАРІЙ ===");

// TODO: Створіть текстову пригодницьку гру

const playerClass = "warrior"; // "warrior", "mage", "archer"
const playerLevel = 5;
const hasWeapon = true;
const hasArmor = false;
const enemyType = "dragon"; // "goblin", "orc", "dragon"

console.log("Характеристики гравця:");
console.log("Клас:", playerClass);
console.log("Рівень:", playerLevel);
console.log("Має зброю:", hasWeapon);
console.log("Має броню:", hasArmor);
console.log("Ворог:", enemyType);

// Завдання 6.1: Створіть бойову систему
// let canFight = false;
// let winChance = 0;
// let strategy = "";

// Визначення можливості битви
// if (???) {
//     canFight = true;
//     
//     // Розрахунок шансів на перемогу залежно від класу та ворога
//     switch (playerClass) {
//         case "warrior":
//             switch (enemyType) {
//                 case "goblin":
//                     winChance = 90;
//                     strategy = "Атакуй мечем напряму!";
//                     break;
//                 case "orc":
//                     winChance = 70;
//                     strategy = "Використай щит для захисту!";
//                     break;
//                 case "dragon":
//                     winChance = 30;
//                     strategy = "Тримайся на відстані!";
//                     break;
//             }
//             break;
//         // TODO: Додайте випадки для "mage" та "archer"
//     }
//     
//     // Бонуси за екіпіровку
//     if (hasWeapon) winChance += 10;
//     if (hasArmor) winChance += 15;
//     
//     console.log(`\n⚔️ Битва почалася!`);
//     console.log(`Шанс на перемогу: ${winChance}%`);
//     console.log(`Стратегія: ${strategy}`);
//     
//     if (winChance >= 70) {
//         console.log("💪 Висока ймовірність перемоги!");
//     } else if (winChance >= 50) {
//         console.log("⚖️ Рівні шанси. Будь обережний!");
//     } else {
//         console.log("💀 Небезпечна битва! Краще втекти!");
//     }
// } else {
//     console.log("❌ Ви не готові до битви! Потрібна зброя та вищий рівень!");
// }

console.log("\nРозкоментуйте код вище для початку пригоди!");

console.log("\n=== БОНУСНІ ЗАВДАННЯ ===");

// Бонус 1: Калькулятор податків
// const income = 50000;
// const maritalStatus = "single"; // "single", "married"
// const hasChildren = false;

// TODO: Розрахуйте податок за прогресивною шкалою
// 0-10000: 0%
// 10001-30000: 10%
// 30001-60000: 20%
// 60000+: 30%
// Знижки: одружені -5%, з дітьми -10%

// Бонус 2: Система рекомендацій фільмів
// const userAge = 25;
// const favoriteGenre = "action";
// const watchTime = "evening";
// const mood = "excited";

// TODO: Створіть систему рекомендацій на основі всіх параметрів

// Бонус 3: Інтелектуальний термостат
// const currentTemp = 22;
// const targetTemp = 24;
// const timeOfDay = "morning";
// const isHome = true;
// const energySaveMode = false;

// TODO: Визначте дії термостата (нагрівати/охолоджувати/нічого не робити)

console.log("\n=== ПЕРЕВІРКА ЗНАНЬ ===");
console.log("1. Коли використовувати if/else, а коли switch/case?");
console.log("2. Як правильно структурувати складні умови?");
console.log("3. Що таке fallthrough в switch і коли це корисно?");
console.log("4. Як оптимізувати вкладені if конструкції?");
console.log("5. Яка різниця між if(a == b) та if(a === b)?");

console.log("\n💡 Підказка: Замініть ??? на потрібні умови!");
console.log("🎯 Експериментуйте зі змінними для тестування різних сценаріїв!");