// ===========================================
// ПРАКТИЧНІ ЗАВДАННЯ - УРОК 2: ОПЕРАТОРИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: АРИФМЕТИЧНІ ОПЕРАТОРИ ===");

// TODO: Створіть простий калькулятор

// Дані для роботи:
const num1 = 15;
const num2 = 4;

// Завдання 1.1: Виконайте всі арифметичні операції
// let sum = ;
// let difference = ;
// let product = ;
// let quotient = ;
// let remainder = ;
// let power = ;

console.log("Числа для обчислень:", num1, "та", num2);

// Розкоментуйте після виконання завдань:
/*
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${remainder}`);
console.log(`${num1} ** ${num2} = ${power}`);
*/

console.log("\n=== ЗАВДАННЯ 2: ОПЕРАТОРИ ПОРІВНЯННЯ ===");

// TODO: Порівняйте різні значення

const value1 = "10";
const value2 = 10;
const value3 = 15;

// Завдання 2.1: Зробіть порівняння
// let loosEquality = ;        // "10" == 10
// let strictEquality = ;      // "10" === 10
// let notEqual = ;            // "10" != 10
// let strictNotEqual = ;      // "10" !== 10
// let greaterThan = ;         // 15 > 10
// let lessOrEqual = ;         // 10 <= 15

console.log("Значення для порівняння:", value1, value2, value3);

// Розкоментуйте після виконання:
/*
console.log(`"${value1}" == ${value2}:`, loosEquality);
console.log(`"${value1}" === ${value2}:`, strictEquality);
console.log(`"${value1}" != ${value2}:`, notEqual);
console.log(`"${value1}" !== ${value2}:`, strictNotEqual);
console.log(`${value3} > ${value2}:`, greaterThan);
console.log(`${value2} <= ${value3}:`, lessOrEqual);
*/

console.log("\n=== ЗАВДАННЯ 3: ЛОГІЧНІ ОПЕРАТОРИ ===");

// TODO: Створіть систему перевірки доступу

const userAge = 20;
const hasLicense = true;
const hasExperience = false;
const isVIP = true;

// Завдання 3.1: Створіть умови для різних перевірок
// let canDrive = ;           // вік >= 18 І має права
// let canRentCar = ;         // може водити І має досвід
// let getDiscount = ;        // VIP АБО має досвід
// let restrictedAccess = ;   // НЕ має досвіду

console.log("Дані користувача:");
console.log("Вік:", userAge);
console.log("Має права:", hasLicense);
console.log("Має досвід:", hasExperience);
console.log("VIP статус:", isVIP);

// Розкоментуйте після виконання:
/*
console.log("\nПеревірки доступу:");
console.log("Може водити:", canDrive);
console.log("Може взяти авто в оренду:", canRentCar);
console.log("Має знижку:", getDiscount);
console.log("Обмежений доступ:", restrictedAccess);
*/

console.log("\n=== ЗАВДАННЯ 4: ТЕРНАРНИЙ ОПЕРАТОР ===");

// TODO: Використайте тернарний оператор для різних ситуацій

const temperature = 25;
const isRaining = false;
const money = 500;
const itemPrice = 300;

// Завдання 4.1: Створіть рекомендації за допомогою тернарного оператора
// let weatherAdvice = ;      // temperature > 20 ? "Тепло" : "Холодно"
// let umbrellaNeeded = ;     // isRaining ? "Візьми парасольку" : "Парасолька не потрібна"
// let canBuy = ;             // money >= itemPrice ? "Можна купити" : "Недостатньо коштів"

// Завдання 4.2: Складний тернарний оператор
// let clothingAdvice = ;     // temperature > 30 ? "Шорти" : temperature > 15 ? "Джинси" : "Теплий одяг"

console.log("Умови:");
console.log("Температура:", temperature + "°C");
console.log("Дощ:", isRaining);
console.log("Гроші:", money + " грн");
console.log("Ціна товару:", itemPrice + " грн");

// Розкоментуйте після виконання:
/*
console.log("\nРекомендації:");
console.log("Погода:", weatherAdvice);
console.log("Парасолька:", umbrellaNeeded);
console.log("Покупка:", canBuy);
console.log("Одяг:", clothingAdvice);
*/

console.log("\n=== ЗАВДАННЯ 5: ОПЕРАТОРИ ПРИСВОЄННЯ ===");

// TODO: Використайте скорочені оператори присвоєння

let score = 100;
let lives = 3;
let coins = 50;

console.log("Початкові значення:");
console.log("Очки:", score);
console.log("Життя:", lives);
console.log("Монети:", coins);

// Завдання 5.1: Симулюйте гру
// TODO: Додайте 50 очок за перемогу
// score ??? 50;

// TODO: Відніміть 1 життя за поразку
// lives ??? 1;

// TODO: Помножте монети на 2 за бонус
// coins ??? 2;

// TODO: Поділіть очки на 2 за штраф
// score ??? 2;

// Розкоментуйте після виконання операцій:
/*
console.log("\nПісля гри:");
console.log("Очки:", score);
console.log("Життя:", lives);
console.log("Монети:", coins);
*/

console.log("\n=== ЗАВДАННЯ 6: ІНКРЕМЕНТ І ДЕКРЕМЕНТ ===");

// TODO: Дослідіте різницю між ++i та i++

let counter1 = 5;
let counter2 = 5;

console.log("Початкові лічильники:", counter1, counter2);

// Завдання 6.1: Використайте pre-increment та post-increment
// let preIncrement = ;    // ++counter1
// let postIncrement = ;   // counter2++

// Розкоментуйте і порівняйте результати:
/*
console.log("Pre-increment результат:", preIncrement, "counter1 після:", counter1);
console.log("Post-increment результат:", postIncrement, "counter2 після:", counter2);
*/

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРОЕКТ - СИСТЕМА ОЦІНЮВАННЯ ===");

// TODO: Створіть систему оцінювання студентів

const mathScore = 85;
const physicsScore = 78;
const chemistryScore = 92;
const minPassingScore = 60;
const excellentScore = 90;

// Завдання 7.1: Розрахуйте середню оцінку
// let averageScore = ;

// Завдання 7.2: Визначте статус студента
// let isPassing = ;          // середня >= мінімальної
// let isExcellent = ;        // середня >= відмінної
// let needsHelp = ;          // будь-яка оцінка < мінімальної

// Завдання 7.3: Створіть підсумкове повідомлення
// let status = ;             // Використайте тернарний оператор

console.log("Оцінки студента:");
console.log("Математика:", mathScore);
console.log("Фізика:", physicsScore);
console.log("Хімія:", chemistryScore);

// Розкоментуйте після виконання:
/*
console.log("\nРезультати:");
console.log("Середня оцінка:", averageScore.toFixed(1));
console.log("Проходить:", isPassing ? "Так" : "Ні");
console.log("Відмінник:", isExcellent ? "Так" : "Ні");
console.log("Потребує допомоги:", needsHelp ? "Так" : "Ні");
console.log("Статус:", status);
*/

console.log("\n=== БОНУСНІ ЗАВДАННЯ ===");

// Бонус 1: Створіть калькулятор знижок
// const originalPrice = 1000;
// const customerType = "VIP"; // "Regular", "Silver", "Gold", "VIP"
// const isFirstPurchase = true;

// TODO: Розрахуйте знижку залежно від типу клієнта та чи це перша покупка
// let discount = 0;
// Використайте логічні оператори та тернарний оператор

// Бонус 2: Створіть валідатор паролю
// const password = "MyPass123!";
// TODO: Перевірте довжину, наявність цифр, великих літер та спецсимволів
// Використайте логічні оператори

// Бонус 3: Гра "Вгадай число"
// const secretNumber = 42;
// const userGuess = 35;
// TODO: Створіть підказки "більше", "менше", "правильно"

console.log("\n=== ПЕРЕВІРКА ЗНАНЬ ===");
console.log("1. Яка різниця між == та ===?");
console.log("2. Що таке короткочасна оцінка (short-circuit evaluation)?");
console.log("3. Коли використовувати логічний оператор && а коли ||?");
console.log("4. Яка різниця між ++i та i++?");
console.log("5. Як працює тернарний оператор?");

console.log("\n💡 Підказка: Замініть ??? на потрібні оператори!");
console.log("🎯 Розкоментуйте код після виконання завдань!");