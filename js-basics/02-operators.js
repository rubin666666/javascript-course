// ===========================================
// УРОК 2: ОПЕРАТОРИ В JAVASCRIPT
// ===========================================
/*
  ОПЕРАТОРИ - це спеціальні символи, що виконують операції з даними:
  📊 Арифметичні: +, -, *, /, % (математичні обчислення)
  🔍 Порівняння: ==, ===, >, < (порівнюємо значення)
  🧠 Логічні: &&, ||, ! (працюємо з true/false)
  📝 Присвоєння: =, +=, -= (зберігаємо результати)
*/

console.log("=== АРИФМЕТИЧНІ ОПЕРАТОРИ (МАТЕМАТИКА) ===");

// Базові математичні операції
let a = 10;                    // Перше число
let b = 3;                     // Друге число

console.log(`Працюємо з числами: a = ${a}, b = ${b}`);
console.log("┌─ Основні операції:");
console.log("├─ Додавання (a + b):", a + b);      // 10 + 3 = 13
console.log("├─ Віднімання (a - b):", a - b);     // 10 - 3 = 7  
console.log("├─ Множення (a * b):", a * b);       // 10 * 3 = 30
console.log("├─ Ділення (a / b):", a / b);        // 10 / 3 = 3.333...
console.log("├─ Остача (a % b):", a % b);         // 10 % 3 = 1 (залишок)
console.log("└─ Степінь (a ** b):", a ** b);      // 10³ = 1000

/*
  💡 КОРИСНО ЗНАТИ:
  - Остача (%) часто використовується для перевірки парності: num % 2 === 0
  - Ділення завжди дає число з комою, навіть якщо ділиться нацїло
  - Степінь (**) з'явився в ES2016, до цього використовували Math.pow()
*/

// Практичні приклади остачі
console.log("\n📊 Практичне використання остачі (%):");
console.log("├─ 8 парне?", 8 % 2 === 0 ? "Так" : "Ні");       // Так (остача 0)
console.log("├─ 7 парне?", 7 % 2 === 0 ? "Так" : "Ні");       // Ні (остача 1)
console.log("└─ Кожен 5-й елемент:", "позиції 5, 10, 15... мають остачу 0 при діленні на 5");

// Інкремент і декремент (збільшення/зменшення на 1)
console.log("\n🔢 ІНКРЕМЕНТ ТА ДЕКРЕМЕНТ (++, --):");

let counter = 5;
console.log("Початкове значення counter:", counter);           // 5

console.log("Pre-increment (++counter):", ++counter);          // 6 (спочатку +1, потім показати)
console.log("Значення counter після pre-increment:", counter); // 6

console.log("Post-increment (counter++):", counter++);         // 6 (спочатку показати, потім +1) 
console.log("Значення counter після post-increment:", counter);// 7

let countdown = 3;
console.log("Pre-decrement (--countdown):", --countdown);      // 2 (спочатку -1, потім показати)
console.log("Post-decrement (countdown--):", countdown--);     // 2 (спочатку показати, потім -1)
console.log("Фінальне значення countdown:", countdown);        // 1

/*
  🤔 РІЗНИЦЯ МІЖ ++i ТА i++:
  ++i: спочатку змінює значення, потім повертає нове
  i++: спочатку повертає старе значення, потім змінює
  
  На практиці найчастіше використовується i++ в циклах for
*/

console.log("\n=== ОПЕРАТОРИ ПОРІВНЯННЯ (ПЕРЕВІРЯЄМО РІВНІСТЬ) ===");

// Створюємо змінні різних типів для демонстрації  
let x = 5;                         // Число 5
let y = "5";                       // Рядок "5" 
let z = 5;                         // Ще одне число 5

console.log(`Порівнюємо: x = ${x} (${typeof x}), y = ${y} (${typeof y}), z = ${z} (${typeof z})`);

// Нестроге порівняння (== та !=) - порівнює тільки значення
console.log("\n🔄 НЕСТРОГЕ ПОРІВНЯННЯ (з перетворенням типів):");
console.log("├─ x == y (5 == '5'):", x == y);       // true - JavaScript перетворює '5' в 5
console.log("├─ x == z (5 == 5):", x == z);         // true - однакові значення і типи
console.log("└─ x != y (5 != '5'):", x != y);       // false - значення однакові після перетворення

// Строге порівняння (=== та !==) - порівнює значення І тип  
console.log("\n✅ СТРОГЕ ПОРІВНЯННЯ (без перетворення типів - РЕКОМЕНДУЄТЬСЯ!):");
console.log("├─ x === y (5 === '5'):", x === y);    // false - різні типи (number vs string)
console.log("├─ x === z (5 === 5):", x === z);      // true - однакові значення і типи
console.log("├─ x !== y (5 !== '5'):", x !== y);    // true - різні типи
console.log("└─ x !== z (5 !== 5):", x !== z);      // false - однакові значення і типи

// Оператори порівняння розміру
console.log("\n📏 ПОРІВНЯННЯ РОЗМІРУ (>, <, >=, <=):");
console.log("├─ x > 3 (5 > 3):", x > 3);           // true
console.log("├─ x < 10 (5 < 10):", x < 10);        // true  
console.log("├─ x >= 5 (5 >= 5):", x >= 5);        // true (більше АБО рівне)
console.log("├─ x <= 4 (5 <= 4):", x <= 4);        // false (менше АБО рівне)
console.log("└─ x <= 5 (5 <= 5):", x <= 5);        // true

// Практичні приклади порівняння
console.log("\n🎯 ПРАКТИЧНІ ПРИКЛАДИ:");

let userAge = 20;
let minAge = 18;
let maxAge = 65;

console.log(`Вік користувача: ${userAge}`);
console.log("├─ Дорослий (>= 18)?", userAge >= minAge ? "Так" : "Ні");
console.log("├─ Пенсіонер (>= 65)?", userAge >= maxAge ? "Так" : "Ні");
console.log("└─ Працездатний (18-64)?", userAge >= minAge && userAge < maxAge ? "Так" : "Ні");

/*
  ⚠️ ВАЖЛИВА ПОРАДА:
  ЗАВЖДИ використовуй строге порівняння (=== та !==)!
  
  Чому?
  5 == "5"     → true (JavaScript перетворює типи, може бути несподівано)
  5 === "5"    → false (перевіряє і значення, і тип - безпечніше)
  
  null == undefined    → true (несподівано!)
  null === undefined   → false (правильно!)
*/

console.log("\n=== ЛОГІЧНІ ОПЕРАТОРИ (ПРАЦЮЄМО З TRUE/FALSE) ===");

// Створюємо змінні для демонстрації логіки
let isAdult = true;              // Дорослий  
let hasLicense = false;          // Не має прав
let hasExperience = true;        // Має досвід
let hasInsurance = false;        // Немає страховки

console.log("Початкові дані:");
console.log(`├─ Дорослий: ${isAdult}`);
console.log(`├─ Має права: ${hasLicense}`);
console.log(`├─ Має досвід: ${hasExperience}`);
console.log(`└─ Має страховку: ${hasInsurance}`);

// Логічне І (&&) - ВСІ умови мають бути true
console.log("\n🔗 ЛОГІЧНЕ І (&&) - всі умови мають бути true:");
console.log("├─ Дорослий І має права:", isAdult && hasLicense);         // true && false = false
console.log("├─ Дорослий І має досвід:", isAdult && hasExperience);     // true && true = true  
console.log("└─ Має права І страховку:", hasLicense && hasInsurance);   // false && false = false

// Логічне АБО (||) - ХОЧА Б ОДНА умова має бути true
console.log("\n🔀 ЛОГІЧНЕ АБО (||) - хоча б одна умова має бути true:");
console.log("├─ Дорослий АБО має права:", isAdult || hasLicense);       // true || false = true
console.log("├─ Має права АБО досвід:", hasLicense || hasExperience);   // false || true = true
console.log("└─ Має права АБО страховку:", hasLicense || hasInsurance); // false || false = false

// Логічне НЕ (!) - інвертує значення
console.log("\n🔄 ЛОГІЧНЕ НЕ (!) - інвертує true/false:");
console.log("├─ НЕ дорослий:", !isAdult);              // !true = false
console.log("├─ НЕ має права:", !hasLicense);          // !false = true
console.log("└─ НЕ (НЕ дорослий):", !!isAdult);       // !!true = true (подвійне заперечення)

// Комбінування логічних операторів
console.log("\n🧩 КОМБІНУВАННЯ ОПЕРАТОРІВ:");
let canDrive = isAdult && hasLicense;
let canWork = isAdult && (hasLicense || hasExperience);  // Дужки для пріоритету!
let needsHelp = !isAdult || (!hasLicense && !hasExperience);

console.log("├─ Може водити (дорослий І права):", canDrive);
console.log("├─ Може працювати (дорослий І (права АБО досвід)):", canWork);
console.log("└─ Потребує допомоги:", needsHelp);

// Короткочасна оцінка (short-circuit evaluation)
console.log("\n⚡ КОРОТКОЧАСНА ОЦІНКА (важлива особливість!):");

let result1 = true && "Це виконається";          // true → перевіряє праву частину
let result2 = false && "Це НЕ виконається";      // false → не перевіряє праву частину
let result3 = true || "Це НЕ виконається";       // true → не перевіряє праву частину  
let result4 = false || "Це виконається";         // false → перевіряє праву частину

console.log("├─ true && 'текст':", result1);     // "Це виконається"
console.log("├─ false && 'текст':", result2);    // false
console.log("├─ true || '�ест':", result3);      // true
console.log("└─ false || 'текст':", result4);    // "Це виконається"

/*
  💡 КОРОТКОЧАСНА ОЦІНКА НА ПРАКТИЦІ:
  
  Замість:
  if (user && user.name) {
    console.log(user.name);
  }
  
  Можна писати:
  user && user.name && console.log(user.name);
  
  Або для значень за замовчуванням:
  let name = user.name || "Гість";  // Якщо user.name пустий, використай "Гість"
*/

console.log("\n=== ОПЕРАТОРИ ПРИСВОЄННЯ (СКОРОЧЕНІ ЗАПИСИ) ===");

// Звичайне присвоєння
let num = 10;
console.log("Початкове значення num:", num);

// Скорочені оператори присвоєння (зручніше писати)
console.log("\n📝 СКОРОЧЕНІ ОПЕРАТОРИ:");

num += 5;   // num = num + 5 (коротше писати)
console.log("├─ Після num += 5:", num);        // 15

num -= 3;   // num = num - 3  
console.log("├─ Після num -= 3:", num);        // 12

num *= 2;   // num = num * 2
console.log("├─ Після num *= 2:", num);        // 24

num /= 4;   // num = num / 4
console.log("├─ Після num /= 4:", num);        // 6

num %= 4;   // num = num % 4 (остача)
console.log("└─ Після num %= 4:", num);        // 2

// Практичний приклад: рахунок балансу
console.log("\n💰 ПРАКТИЧНИЙ ПРИКЛАД - БАНКІВСЬКИЙ РАХУНОК:");

let balance = 1000;                           // Початковий баланс
console.log("Початковий баланс:", balance, "грн");

balance += 500;                               // Поповнення
console.log("├─ Поповнення +500:", balance, "грн");

balance -= 200;                               // Зняття
console.log("├─ Зняття -200:", balance, "грн");  

balance *= 1.05;                              // Нарахування 5% річних
console.log("├─ Річні 5%:", balance.toFixed(2), "грн");

balance /= 1.2;                               // Вирахування 20% податку  
console.log("└─ Після податку:", balance.toFixed(2), "грн");

/*
  💡 ПЕРЕВАГИ СКОРОЧЕНИХ ОПЕРАТОРІВ:
  - Менше коду: x += 5 замість x = x + 5
  - Менше помилок: не можна переплутати назву змінної
  - Читабельніше: одразу зрозуміло що відбувається
  - Швидше: для програміста зручніше
*/

console.log("\n=== ТЕРНАРНИЙ ОПЕРАТОР (СКОРОЧЕНИЙ IF-ELSE) ===");

/*
  Тернарний оператор - це скорочений спосіб написання простих умов.
  Синтаксис: умова ? значення_якщо_true : значення_якщо_false
  
  Замість:
  if (age >= 18) {
    status = "дорослий";
  } else {
    status = "дитина";  
  }
  
  Можна писати:
  status = age >= 18 ? "дорослий" : "дитина";
*/

let personAge = 20;
let studentAge = 16;

// Простий приклад тернарного оператора
let adultStatus = personAge >= 18 ? "дорослий" : "неповнолітній";
let studentStatus = studentAge >= 18 ? "дорослий" : "неповнолітній";

console.log("🎯 ПРОСТІ ПРИКЛАДИ:");
console.log(`├─ Особа ${personAge} років: ${adultStatus}`);
console.log(`└─ Студент ${studentAge} років: ${studentStatus}`);

// Тернарний оператор для різних ситуацій
let temperature = 25;
let clothing = temperature > 20 ? "легкий одяг" : "теплий одяг";
console.log(`├─ Температура ${temperature}°C: ${clothing}`);

let walletBalance = 500;
let canBuy = walletBalance >= 300 ? "можна купити" : "недостатньо коштів";
console.log(`└─ Баланс ${walletBalance} грн: ${canBuy}`);

// Вкладений тернарний оператор (обережно - може бути важко читати!)
console.log("\n🔗 ВКЛАДЕНІ ТЕРНАРНІ ОПЕРАТОРИ:");

let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : 
            score >= 60 ? "D" : "F";

console.log(`├─ Оцінка ${score} балів: ${grade}`);

let weather = "сонячно";
let activity = weather === "дощ" ? "читати вдома" : 
               weather === "сонячно" ? "йти гуляти" : 
               weather === "хмарно" ? "йти в кафе" :
               "залишатися вдома";

console.log(`└─ Погода "${weather}": ${activity}`);

// ===========================================
// ПРАКТИЧНИЙ ПРИКЛАД: СИСТЕМА ЗНИЖОК
// ===========================================

console.log("\n=== ПРАКТИЧНИЙ ПРИКЛАД: МАГАЗИН З ЗНИЖКАМИ ===");

let orderAmount = 1500;                 // Сума замовлення
let customerType = "VIP";               // Тип клієнта
let isFirstOrder = false;               // Перше замовлення?

console.log("💳 Дані замовлення:");
console.log(`├─ Сума: ${orderAmount} грн`);
console.log(`├─ Тип клієнта: ${customerType}`);
console.log(`└─ Перше замовлення: ${isFirstOrder ? "Так" : "Ні"}`);

// Розрахунок знижки комбінуючи різні оператори
let baseDiscount = orderAmount >= 1000 ? 0.1 : 0.05;                    // 10% або 5%
let vipBonus = customerType === "VIP" ? 0.05 : 0;                       // +5% для VIP
let firstOrderBonus = isFirstOrder ? 0.1 : 0;                           // +10% за перше замовлення
let totalDiscount = baseDiscount + vipBonus + firstOrderBonus;

// Обмежуємо максимальну знижку 25%
totalDiscount = totalDiscount > 0.25 ? 0.25 : totalDiscount;

let discountAmount = orderAmount * totalDiscount;
let finalAmount = orderAmount - discountAmount;

console.log("\n💰 Розрахунок знижки:");
console.log(`├─ Базова знижка: ${(baseDiscount * 100).toFixed(0)}%`);
console.log(`├─ VIP бонус: ${(vipBonus * 100).toFixed(0)}%`);
console.log(`├─ Бонус за перше замовлення: ${(firstOrderBonus * 100).toFixed(0)}%`);
console.log(`├─ Загальна знижка: ${(totalDiscount * 100).toFixed(0)}%`);
console.log(`├─ Економія: ${discountAmount.toFixed(2)} грн`);
console.log(`└─ До сплати: ${finalAmount.toFixed(2)} грн`);

// Повідомлення користувачу з тернарним оператором
let message = finalAmount < 1000 ? 
              "🎉 Вітаємо з вигідною покупкою!" : 
              finalAmount < 2000 ? 
              "✨ Гарний вибір!" : 
              "💎 Дякуємо за великий заказ!";

console.log(`\n${message}`);

// ===========================================
// ПІДСУМОК УРОКУ
// ===========================================

console.log("\n🎯 ЩО МИ ВИВЧИЛИ В ЦЬОМУ УРОЦІ:");
console.log("✅ Арифметичні оператори: +, -, *, /, %, **");
console.log("✅ Інкремент та декремент: ++, --");  
console.log("✅ Порівняння: ==, ===, >, <, >=, <= (ЗАВЖДИ використовуй ===!)");
console.log("✅ Логічні оператори: &&, ||, ! та короткочасна оцінка");
console.log("✅ Присвоєння: =, +=, -=, *=, /=, %=");
console.log("✅ Тернарний оператор: умова ? true_значення : false_значення");
console.log("✅ Практичні приклади з реальними розрахунками");

/*
  🚀 НАСТУПНІ КРОКИ:
  1. Відкрий tester.html і поекспериментуй з операторами
  2. Спробуй створити свій калькулятор знижок
  3. Поверни до цього уроку, якщо забудеш синтаксис
  4. Переходь до уроку 3 - Умовні конструкції
  
  💡 ЗАПАМ'ЯТАЙ:
  - === замість == (завжди!)
  - Використовуй дужки в складних логічних виразах  
  - Тернарний оператор тільки для простих умов
  - Скорочені оператори (+=, -=) зручніші за довгі
*/