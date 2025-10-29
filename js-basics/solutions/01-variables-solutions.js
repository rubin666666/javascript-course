// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 1: ЗМІННІ
// ===========================================

console.log("=== ЗАВДАННЯ 1: СТВОРЕННЯ ЗМІННИХ ===");

// Завдання 1.1: Створіть константу для імені студента
const studentName = "Іван"; // Використовуємо const, бо ім'я не змінюється

// Завдання 1.2: Створіть змінну для віку студента (може змінюватися)
let studentAge = 20; // Використовуємо let, бо вік може змінюватися

// Завдання 1.3: Створіть константу для університету
const university = "КНУ"; // Використовуємо const, бо університет не міняємо

// Завдання 1.4: Створіть змінну для курсу навчання
let currentCourse = 2; // Використовуємо let, бо курс змінюється кожен рік

// Завдання 1.5: Створіть змінну для статусу стипендії (true/false)
let hasScholarship = true; // Використовуємо let, бо статус може змінитися

// Тестування змінних:
console.log(`Студент: ${studentName}`);
console.log(`Вік: ${studentAge} років`);
console.log(`Університет: ${university}`);
console.log(`Курс: ${currentCourse}`);
console.log(`Стипендія: ${hasScholarship ? "Є" : "Немає"}`);

console.log("\n=== ЗАВДАННЯ 2: РОБОТА З ТИПАМИ ДАНИХ ===");

// Завдання 2.1: Створіть число з плаваючою комою
let price = 299.50; // number - ціна товару

// Завдання 2.2: Створіть рядок з описом товару
let productDescription = "Навушники безпровідні з шумодавом"; // string

// Завдання 2.3: Створіть булеву змінну для наявності товару
let inStock = true; // boolean - товар є в наявності

// Завдання 2.4: Створіть змінну зі значенням null
let discountCode = null; // null - знижки немає

// Завдання 2.5: Створіть неініціалізовану змінну
let category; // undefined - категорію ще не вибрали

// Перевірка типів:
console.log(`Ціна (${typeof price}):`, price);
console.log(`Опис (${typeof productDescription}):`, productDescription);
console.log(`В наявності (${typeof inStock}):`, inStock);
console.log(`Код знижки (${typeof discountCode}):`, discountCode);
console.log(`Категорія (${typeof category}):`, category);

console.log("\n=== ЗАВДАННЯ 3: МАТЕМАТИЧНІ ОПЕРАЦІЇ ===");

// Завдання 3.1: Розрахуйте загальну вартість з ПДВ
const priceWithoutTax = 100;
const taxRate = 0.20; // 20% ПДВ
const totalPrice = priceWithoutTax + (priceWithoutTax * taxRate);
console.log(`Ціна без ПДВ: ${priceWithoutTax} грн`);
console.log(`ПДВ (20%): ${priceWithoutTax * taxRate} грн`);
console.log(`Загальна ціна: ${totalPrice} грн`);

// Завдання 3.2: Розрахуйте знижку
const originalPrice = 500;
const discountPercent = 15; // 15% знижка
const discountAmount = originalPrice * (discountPercent / 100);
const finalPrice = originalPrice - discountAmount;
console.log(`Первісна ціна: ${originalPrice} грн`);
console.log(`Знижка ${discountPercent}%: ${discountAmount} грн`);
console.log(`Ціна зі знижкою: ${finalPrice} грн`);

console.log("\n=== ЗАВДАННЯ 4: РОБОТА З РЯДКАМИ ===");

// Завдання 4.1: Створіть повне ім'я
const firstName = "Олександр";
const lastName = "Петренко";
const fullName = firstName + " " + lastName; // Конкатенація
const fullNameTemplate = `${firstName} ${lastName}`; // Шаблонний рядок
console.log("Повне ім'я (конкатенація):", fullName);
console.log("Повне ім'я (шаблон):", fullNameTemplate);

// Завдання 4.2: Створіть привітання
const greeting = `Привіт, ${fullName}! Тобі ${studentAge} років.`;
console.log(greeting);

// Завдання 4.3: Довжина рядка
console.log(`Довжина імені "${fullName}": ${fullName.length} символів`);

console.log("\n=== ЗАВДАННЯ 5: ЛОГІЧНІ ОПЕРАЦІЇ ===");

// Завдання 5.1: Перевірте умови для отримання стипендії
const minAge = 18;
const maxAge = 25;
const minGrade = 4.0;
const currentGrade = 4.5;

const ageRequirement = studentAge >= minAge && studentAge <= maxAge;
const gradeRequirement = currentGrade >= minGrade;
const eligibleForScholarship = ageRequirement && gradeRequirement;

console.log(`Вік підходить (18-25): ${ageRequirement}`);
console.log(`Оцінка підходить (≥4.0): ${gradeRequirement}`);
console.log(`Має право на стипендію: ${eligibleForScholarship}`);

console.log("\n=== ЗАВДАННЯ 6: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 6.1: Калькулятор для кафе
const coffeePrice = 35;
const cakePrice = 50;
const coffeeQuantity = 2;
const cakeQuantity = 1;

const coffeeTotal = coffeePrice * coffeeQuantity;
const cakeTotal = cakePrice * cakeQuantity;
const subtotal = coffeeTotal + cakeTotal;
const tip = subtotal * 0.1; // 10% чайових
const total = subtotal + tip;

console.log("--- ЧЕК З КАФЕ ---");
console.log(`Кава x${coffeeQuantity}: ${coffeeTotal} грн`);
console.log(`Тортик x${cakeQuantity}: ${cakeTotal} грн`);
console.log(`Підсумок: ${subtotal} грн`);
console.log(`Чайові (10%): ${tip} грн`);
console.log(`До сплати: ${total} грн`);

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. CONST vs LET:
   - const - для значень, що не змінюються (ім'я, університет)
   - let - для значень, що можуть змінюватися (вік, курс)

2. ТИПИ ДАНИХ:
   - number: 123, 45.67
   - string: "текст", 'текст', `шаблон ${змінна}`
   - boolean: true, false
   - null: явно пусте значення
   - undefined: неініціалізована змінна

3. МАТЕМАТИЧНІ ОПЕРАЦІЇ:
   - Завжди перевіряйте порядок операцій
   - Використовуйте дужки для ясності
   - Пам'ятайте про типи (число + рядок = рядок!)

4. РЯДКИ:
   - Конкатенація: "a" + "b"
   - Шаблонні рядки: `привіт, ${ім'я}!`
   - Довжина: string.length

5. ЛОГІЧНІ ОПЕРАЦІЇ:
   - && (І): всі умови мають бути true
   - || (АБО): хоча б одна умова має бути true
   - ! (НЕ): інвертує значення

🏆 НАЙЧАСТІШІ ПОМИЛКИ:
- Плутання const/let
- Забувати кавички в рядках
- Неправильний порядок математичних операцій
- Плутання == і ===
*/