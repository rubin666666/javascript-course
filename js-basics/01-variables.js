// ===========================================
// УРОК 1: ЗМІННІ В JAVASCRIPT
// ===========================================
/*
  ЩО ТАКЕ ЗМІННІ?
  Змінні - це "коробки" для зберігання даних в пам'яті комп'ютера.
  Уяви, що у тебе є коробки з наклейками (назвами), і в кожну коробку
  ти можеш покласти щось: число, текст, true/false тощо.
*/

console.log("=== ЗМІННІ: 3 СПОСОБИ СТВОРЕННЯ ===");

// 1. var (СТАРИЙ СПОСІБ - краще не використовувати!)
// Проблеми: складна область видимості, можна оголосити двічі
var oldVariable = "Стара змінна";
console.log("var (старий спосіб):", oldVariable);

// 2. let (РЕКОМЕНДУЄТЬСЯ - для змінних значень)
// Використовуй let коли значення може змінюватися
let name = "Максим";           // Рядок (текст)
let age = 25;                  // Число  
let isStudent = true;          // Булевий тип (true/false)

console.log("Початкові значення:");
console.log("├─ Ім'я:", name);
console.log("├─ Вік:", age);
console.log("└─ Студент:", isStudent);

// ✅ let МОЖНА змінювати (тому він і називається змінна)
name = "Анна";                 // Змінюємо ім'я
age = 22;                      // Змінюємо вік
isStudent = false;             // Тепер не студент

console.log("\nПісля зміни:");
console.log("├─ Нове ім'я:", name);
console.log("├─ Новий вік:", age);
console.log("└─ Студент:", isStudent);

// 3. const (РЕКОМЕНДУЄТЬСЯ - для незмінних значень)
// Використовуй const коли значення НЕ повинно змінюватися
const PI = 3.14159;            // Математична константа
const COUNTRY = "Україна";     // Назва країни
const MAX_USERS = 1000;        // Максимальна кількість користувачів

console.log("\nКонстанти (незмінні значення):");
console.log("├─ PI:", PI);
console.log("├─ Країна:", COUNTRY);
console.log("└─ Макс. користувачів:", MAX_USERS);

// ❌ const НЕ МОЖНА перепризначити (буде помилка!)
// PI = 3.14;              // TypeError: Assignment to constant variable
// COUNTRY = "Польща";     // TypeError: Assignment to constant variable

/*
  💡 ПРАВИЛО ВИБОРУ:
  - const → коли значення не змінюється (99% випадків)
  - let → коли значення може змінюватися  
  - var → ніколи не використовуй (застарілий)
*/

// ===========================================
// ТИПИ ДАНИХ В JAVASCRIPT
// ===========================================
/*
  У JavaScript є 7 основних типів даних:
  1. Number (числа)
  2. String (рядки/текст) 
  3. Boolean (true/false)
  4. Null (свідомо пусте значення)
  5. Undefined (невизначене значення)
  6. Object (об'єкти) - вивчимо пізніше
  7. Symbol (символи) - рідко використовується
*/

console.log("\n=== ТИПИ ДАНИХ: ПРИКЛАДИ ===");

// 📊 1. ЧИСЛА (Number) - можуть бути цілі та дробові
let wholeNumber = 42;           // Ціле число
let decimalNumber = 3.14;       // Дробове число 
let negativeNumber = -10;       // Від'ємне число
let bigNumber = 1000000;        // Велике число
let scientificNumber = 2e5;     // Наукова нотація (2 * 10^5 = 200000)

console.log("Числа:");
console.log("├─ Ціле число:", wholeNumber);
console.log("├─ Дробове число:", decimalNumber);  
console.log("├─ Від'ємне число:", negativeNumber);
console.log("├─ Велике число:", bigNumber);
console.log("└─ Наукова нотація:", scientificNumber);

// 📝 2. РЯДКИ (String) - текстова інформація
let singleQuotes = 'Привіт';                    // Одинарні лапки
let doubleQuotes = "Світ";                      // Подвійні лапки  
let templateLiteral = `Привіт, ${name}!`;       // Шаблонні рядки (з ${})
let multilineString = `Це
багаторядковий  
рядок`;                                         // Кілька рядків

console.log("\nРядки (текст):");
console.log("├─ Одинарні лапки:", singleQuotes);
console.log("├─ Подвійні лापки:", doubleQuotes);
console.log("├─ Шаблонний рядок:", templateLiteral);
console.log("└─ Багаторядковий:\n" + multilineString);

// ✅ 3. БУЛЕВІ ЗНАЧЕННЯ (Boolean) - тільки true або false
let isAdult = true;             // Дорослий
let isEmployed = false;         // Не працює
let hasLicense = true;          // Має права
let isRaining = false;          // Не дощить

console.log("\nБулеві значення (true/false):");
console.log("├─ Дорослий:", isAdult);
console.log("├─ Працює:", isEmployed);
console.log("├─ Має права:", hasLicense);
console.log("└─ Дощить:", isRaining);

// 🚫 4. NULL та UNDEFINED - "пустота"
let emptyValue = null;          // null = свідомо порожнє значення
let undefinedValue;             // undefined = змінна без значення
let notAssigned = undefined;    // можна явно присвоїти undefined

console.log("\n'Пусті' значення:");
console.log("├─ null (свідомо пусто):", emptyValue);
console.log("├─ undefined (не присвоєно):", undefinedValue);
console.log("└─ undefined (явно):", notAssigned);

/*
  🤔 РІЗНИЦЯ МІЖ null ТА undefined:
  - null: "Я знаю що тут нічого немає" (свідома пустота)
  - undefined: "Не знаю що тут має бути" (невизначеність)
  
  Приклад: 
  let userPhoto = null;        // Користувач не завантажив фото
  let userName;                // Ще не ввели ім'я
*/

// ===========================================
// ПЕРЕВІРКА ТИПІВ ДАНИХ
// ===========================================
/*
  Оператор typeof показує тип змінної.
  Це корисно для перевірки що у змінній зберігається.
*/

console.log("\n=== ПЕРЕВІРКА ТИПІВ (typeof) ===");

console.log("Типи наших змінних:");
console.log("├─ typeof 42:", typeof wholeNumber);           // "number"
console.log("├─ typeof 'Привіт':", typeof singleQuotes);   // "string"  
console.log("├─ typeof true:", typeof isAdult);            // "boolean"
console.log("├─ typeof null:", typeof emptyValue);         // "object" (помилка в JS!)
console.log("└─ typeof undefined:", typeof undefinedValue); // "undefined"

/*
  ⚠️ УВАГА: typeof null повертає "object" - це помилка в JavaScript,
  яка існує з 1995 року і не виправляється для сумісності.
*/

// 📚 5. МАСИВИ (Array) - списки значень
let numbers = [1, 2, 3, 4, 5];                    // Список чисел
let fruits = ["яблуко", "банан", "апельсин"];     // Список рядків
let mixed = [1, "текст", true, null];             // Змішаний список
let emptyArray = [];                               // Порожній масив

console.log("\nМасиви (списки):");
console.log("├─ Числа:", numbers);
console.log("├─ Фрукти:", fruits);
console.log("├─ Змішаний:", mixed);
console.log("└─ Порожній:", emptyArray);

// Доступ до елементів масиву (починаємо з 0!)
console.log("\nДоступ до елементів масиву:");
console.log("├─ Перший фрукт (індекс 0):", fruits[0]);     // "яблуко"
console.log("├─ Другий фрукт (індекс 1):", fruits[1]);     // "банан"  
console.log("└─ Кількість фруктів:", fruits.length);       // 3

// 📦 6. ОБ'ЄКТИ (Object) - групування пов'язаних даних
let personObject = {
    name: "Іван",              // Властивість: ім'я
    age: 30,                   // Властивість: вік  
    city: "Київ",             // Властивість: місто
    isMarried: false          // Властивість: одружений
};

console.log("\nОб'єкти (групування даних):");
console.log("├─ Весь об'єкт:", personObject);
console.log("├─ Ім'я особи:", personObject.name);        // Доступ через крапку
console.log("├─ Вік особи:", personObject["age"]);       // Доступ через дужки  
console.log("└─ Кількість властивостей:", Object.keys(personObject).length);

// ===========================================
// ПРАКТИЧНИЙ ПРИКЛАД: ІНФОРМАЦІЯ ПРО СТУДЕНТА
// ===========================================

console.log("\n=== ПРАКТИЧНИЙ ПРИКЛАД ===");

// Створюємо інформацію про студента
const studentName = "Олександра Петренко";    // const - ім'я не змінюється
let currentGrade = 4.2;                       // let - оцінка може змінюватися
let currentCourse = 2;                        // let - курс збільшується кожен рік
const university = "КНУ імені Шевченка";      // const - університет не змінюється
let hasScholarship = currentGrade >= 4.0;    // let - залежить від оцінки

// Виводимо інформацію
console.log("📚 КАРТКА СТУДЕНТА:");
console.log("├─ ПІБ:", studentName);
console.log("├─ Поточна оцінка:", currentGrade);
console.log("├─ Курс:", currentCourse);
console.log("├─ Університет:", university);
console.log("└─ Стипендія:", hasScholarship ? "Є" : "Немає");

// Змінюємо оцінку та перевіряємо стипендію  
currentGrade = 3.8;                           // Оцінка впала
hasScholarship = currentGrade >= 4.0;         // Перерахунок стипендії

console.log("\n📉 ПІСЛЯ ЗМІНИ ОЦІНКИ:");
console.log("├─ Нова оцінка:", currentGrade);
console.log("└─ Стипендія:", hasScholarship ? "Є" : "Немає");

// ===========================================
// ПІДСУМОК УРОКУ
// ===========================================

console.log("\n🎯 ЩО МИ ВИВЧИЛИ:");
console.log("✅ Як створювати змінні (const, let)");
console.log("✅ Основні типи даних (number, string, boolean, null, undefined)");
console.log("✅ Як перевіряти тип змінної (typeof)");  
console.log("✅ Базове використання масивів та об'єктів");
console.log("✅ Практичний приклад з реальними даними");

/*
  🚀 НАСТУПНІ КРОКИ:
  1. Відкрий tester.html і експериментуй з кодом
  2. Спробуй створити свою картку студента
  3. Змінюй значення змінних і дивись результат
  4. Переходь до уроку 2 - Оператори
  
  💡 ЗАПАМ'ЯТАЙ:
  - const для незмінних значень (99% випадків)
  - let тільки коли значення справді змінюється
  - var не використовуй взагалі
*/