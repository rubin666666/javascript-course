// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 2: ОПЕРАТОРИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: АРИФМЕТИЧНІ ОПЕРАТОРИ ===");

// Завдання 1.1: Калькулятор базових операцій
let a = 15;
let b = 4;

console.log(`a = ${a}, b = ${b}`);
console.log(`Додавання: ${a} + ${b} = ${a + b}`);       // 19
console.log(`Віднімання: ${a} - ${b} = ${a - b}`);      // 11
console.log(`Множення: ${a} * ${b} = ${a * b}`);        // 60
console.log(`Ділення: ${a} / ${b} = ${a / b}`);         // 3.75
console.log(`Остача: ${a} % ${b} = ${a % b}`);          // 3
console.log(`Степінь: ${a} ** ${b} = ${a ** b}`);       // 50625

// Завдання 1.2: Інкремент та декремент
let counter = 10;
console.log(`\nПочаткове значення: ${counter}`);

console.log(`Pre-increment: ${++counter}`);    // 11 (спочатку збільшили, потім вивели)
console.log(`Post-increment: ${counter++}`);   // 11 (спочатку вивели, потім збільшили)
console.log(`Поточне значення: ${counter}`);   // 12

console.log(`Pre-decrement: ${--counter}`);    // 11 (спочатку зменшили, потім вивели)
console.log(`Post-decrement: ${counter--}`);   // 11 (спочатку вивели, потім зменшили)
console.log(`Фінальне значення: ${counter}`);  // 10

console.log("\n=== ЗАВДАННЯ 2: ОПЕРАТОРИ ПОРІВНЯННЯ ===");

// Завдання 2.1: Строге та нестроге порівняння
let num1 = 5;
let num2 = "5";
let num3 = 5;

console.log(`num1 = ${num1} (${typeof num1})`);
console.log(`num2 = ${num2} (${typeof num2})`);
console.log(`num3 = ${num3} (${typeof num3})`);

console.log(`\nНестроге порівняння (==):`);
console.log(`${num1} == ${num2}: ${num1 == num2}`);     // true (перетворення типів)
console.log(`${num1} == ${num3}: ${num1 == num3}`);     // true

console.log(`\nСтроге порівняння (===):`);
console.log(`${num1} === ${num2}: ${num1 === num2}`);   // false (різні типи)
console.log(`${num1} === ${num3}: ${num1 === num3}`);   // true

console.log(`\nІнші порівняння:`);
console.log(`${num1} > 3: ${num1 > 3}`);                // true
console.log(`${num1} <= 5: ${num1 <= 5}`);              // true
console.log(`${num1} != ${num2}: ${num1 != num2}`);     // false
console.log(`${num1} !== ${num2}: ${num1 !== num2}`);   // true

console.log("\n=== ЗАВДАННЯ 3: ЛОГІЧНІ ОПЕРАТОРИ ===");

// Завдання 3.1: Перевірка доступу до системи
let age = 22;
let hasLicense = true;
let hasExperience = false;

console.log(`Вік: ${age}`);
console.log(`Має права: ${hasLicense}`);
console.log(`Має досвід: ${hasExperience}`);

// Логічне І (&&) - всі умови мають бути true
let canDrive = age >= 18 && hasLicense;
console.log(`\nМоже водити (вік >= 18 І має права): ${canDrive}`); // true

// Логічне АБО (||) - хоча б одна умова має бути true
let isQualified = hasLicense || hasExperience;
console.log(`Кваліфікований (має права АБО досвід): ${isQualified}`); // true

// Логічне НЕ (!) - інвертує значення
let isYoung = !hasExperience;
console.log(`Новачок (НЕ має досвіду): ${isYoung}`); // true

// Складна логіка
let canRentCar = age >= 21 && hasLicense && (hasExperience || age >= 25);
console.log(`Може орендувати авто: ${canRentCar}`); // false (немає досвіду і < 25)

console.log("\n=== ЗАВДАННЯ 4: ОПЕРАТОРИ ПРИСВОЄННЯ ===");

// Завдання 4.1: Скорочені оператори присвоєння
let balance = 1000;
console.log(`Початковий баланс: ${balance} грн`);

balance += 500;    // balance = balance + 500
console.log(`Після поповнення (+500): ${balance} грн`);

balance -= 200;    // balance = balance - 200
console.log(`Після витрати (-200): ${balance} грн`);

balance *= 1.05;   // balance = balance * 1.05 (5% бонус)
console.log(`Після бонусу (*1.05): ${balance.toFixed(2)} грн`);

balance /= 2;      // balance = balance / 2
console.log(`Після поділу (/2): ${balance.toFixed(2)} грн`);

let remainder = 17;
remainder %= 5;    // remainder = remainder % 5
console.log(`17 % 5 = ${remainder}`); // 2

console.log("\n=== ЗАВДАННЯ 5: ТЕРНАРНИЙ ОПЕРАТОР ===");

// Завдання 5.1: Визначення категорії користувача
let userAge = 16;
let userType = userAge >= 18 ? "дорослий" : "неповнолітній";
console.log(`Користувач ${userAge} років - ${userType}`);

// Завдання 5.2: Визначення знижки
let orderAmount = 1500;
let discount = orderAmount >= 1000 ? 0.1 : 0.05; // 10% або 5%
let finalAmount = orderAmount * (1 - discount);
console.log(`Сума замовлення: ${orderAmount} грн`);
console.log(`Знижка: ${discount * 100}%`);
console.log(`До сплати: ${finalAmount} грн`);

// Завдання 5.3: Вкладений тернарний оператор
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : 
            score >= 60 ? "D" : "F";
console.log(`Оцінка ${score} балів = "${grade}"`);

console.log("\n=== ЗАВДАННЯ 6: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 6.1: Система бонусних балів
let purchaseAmount = 2500;
let isVIP = true;
let yearsCustomer = 3;

console.log("--- РОЗРАХУНОК БОНУСНИХ БАЛІВ ---");
console.log(`Сума покупки: ${purchaseAmount} грн`);
console.log(`VIP статус: ${isVIP ? "Так" : "Ні"}`);
console.log(`Років з нами: ${yearsCustomer}`);

// Базові бали (1 бал за кожні 10 грн)
let basePoints = Math.floor(purchaseAmount / 10);

// Бонус за VIP статус
let vipBonus = isVIP ? basePoints * 0.5 : 0;

// Бонус за лояльність
let loyaltyBonus = yearsCustomer >= 2 ? basePoints * 0.2 : 0;

// Підсумкові бали
let totalPoints = Math.floor(basePoints + vipBonus + loyaltyBonus);

console.log(`Базові бали: ${basePoints}`);
console.log(`VIP бонус: ${Math.floor(vipBonus)}`);
console.log(`Бонус лояльності: ${Math.floor(loyaltyBonus)}`);
console.log(`Загалом балів: ${totalPoints}`);

// Завдання 6.2: Валідація форми реєстрації
let username = "john_doe";
let password = "MyPass123!";
let email = "john@example.com";
let agreedToTerms = true;

console.log("\n--- ВАЛІДАЦІЯ ФОРМИ ---");

// Перевірка імені користувача
let isUsernameValid = username.length >= 3 && username.length <= 20;
console.log(`Ім'я користувача "${username}": ${isUsernameValid ? "✅ Валідне" : "❌ Невалідне"}`);

// Перевірка пароля
let hasMinLength = password.length >= 8;
let hasUpperCase = /[A-Z]/.test(password);
let hasLowerCase = /[a-z]/.test(password);
let hasNumber = /\d/.test(password);
let hasSpecialChar = /[!@#$%^&*]/.test(password);

let isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
console.log(`Пароль: ${isPasswordValid ? "✅ Надійний" : "❌ Слабкий"}`);

// Перевірка email
let isEmailValid = email.includes("@") && email.includes(".");
console.log(`Email "${email}": ${isEmailValid ? "✅ Валідний" : "❌ Невалідний"}`);

// Загальна валідація
let isFormValid = isUsernameValid && isPasswordValid && isEmailValid && agreedToTerms;
console.log(`\nФорма готова до відправки: ${isFormValid ? "✅ Так" : "❌ Ні"}`);

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. АРИФМЕТИЧНІ ОПЕРАТОРИ:
   - + - * / % ** (степінь)
   - ++ (інкремент), -- (декремент)
   - Різниця між ++i (pre) та i++ (post)

2. ПОРІВНЯННЯ:
   - == vs === (нестроге vs строге)
   - Завжди використовуйте === для порівняння
   - > < >= <= != !==

3. ЛОГІЧНІ ОПЕРАТОРИ:
   - && (І): всі умови true
   - || (АБО): хоча б одна true
   - ! (НЕ): інвертує boolean
   - Короткі замикання: false && ... не виконає друге

4. ПРИСВОЄННЯ:
   - += -= *= /= %= 
   - Скорочений запис: x += 5 замість x = x + 5

5. ТЕРНАРНИЙ ОПЕРАТОР:
   - умова ? значення1 : значення2
   - Заміна простих if-else
   - Можна вкладати, але обережно

🏆 НАЙЧАСТІШІ ПОМИЛКИ:
- Плутання = та ==
- Використання == замість ===
- Неправильний порядок операцій
- Забування дужок в складних виразах
- Плутання && та ||

🔧 ПРАКТИЧНІ ПОРАДИ:
- Використовуйте дужки для ясності
- Розбивайте складні вирази на частини
- Тестуйте граничні випадки
- Пам'ятайте про пріоритет операторів
*/