// ===========================================
// 🔄 УРОК 4: ЦИКЛИ В JAVASCRIPT (LOOPS)
// ===========================================

/*
📚 ЩО ВИВЧИМО В ЦЬОМУ УРОЦІ:
- Цикл for - для відомої кількості повторень
- Цикл while - для умовних повторень
- Цикл do-while - виконується мінімум 1 раз
- Цикли for-in і for-of для перебору даних
- Керування циклами: break і continue
- Вкладені цикли та практичні приклади
*/

console.log("=== 🔄 БАЗОВИЙ FOR ЦИКЛ ===");

// 📖 FOR ЦИКЛ - найпоширеніший тип циклу
// Синтаксис: for (початкове значення; умова; зміна) { код }

console.log("🔢 Приклад 1: Числа від 1 до 5");
for (let i = 1; i <= 5; i++) {
    console.log(`Число: ${i}`);
}

// 💡 ПОЯСНЕННЯ ЧАСТИН FOR:
// let i = 1  - ініціалізація (виконується 1 раз на початку)
// i <= 5     - умова (перевіряється перед кожною ітерацією)
// i++        - інкремент (виконується після кожної ітерації)

console.log("\n⏪ Приклад 2: Зворотний відлік");
for (let countdown = 5; countdown >= 1; countdown--) {
    console.log(`⏰ ${countdown}...`);
}
console.log("🚀 Пуск ракети!");

console.log("\n⚡ Приклад 3: Цикл з кроком 2 (парні числа)");
for (let evenNum = 0; evenNum <= 10; evenNum += 2) {
    console.log(`📈 Парне число: ${evenNum}`);
}

// 🎯 ПРАКТИЧНИЙ ПРИКЛАД: генерація HTML списку
console.log("\n📝 Генерація списку завдань:");
let tasks = ["Вивчити цикли", "Написати код", "Протестувати програму"];
let htmlList = "<ul>";
for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
    htmlList += `<li>Завдання ${taskIndex + 1}: ${tasks[taskIndex]}</li>`;
}
htmlList += "</ul>";
console.log(htmlList);

console.log("\n=== ⏳ WHILE ЦИКЛ ===");

// 📖 WHILE ЦИКЛ - виконується поки умова TRUE
// Використовується, коли не знаємо точну кількість ітерацій

let counter = 1;
console.log("🔄 Простий while цикл:");
while (counter <= 5) {
    console.log(`🔁 Ітерація номер ${counter}`);
    counter++; // ⚠️ ВАЖЛИВО: не забути збільшити лічильник!
}

// 🎰 ПРАКТИЧНИЙ ПРИКЛАД: гра "вгадай число"
console.log("\n🎯 Приклад: симуляція гри в кості");
let diceRoll;
let rollCount = 0;
let targetNumber = 6;

console.log(`🎲 Кидаємо кубик поки не випаде ${targetNumber}:`);
while (diceRoll !== targetNumber) {
    diceRoll = Math.floor(Math.random() * 6) + 1; // Випадкове число 1-6
    rollCount++;
    console.log(`🎲 Кидок ${rollCount}: випало ${diceRoll}`);
    
    if (rollCount > 10) { // Захист від нескінченного циклу
        console.log("⏰ Занадто багато спроб, зупиняємо гру");
        break;
    }
}

if (diceRoll === targetNumber) {
    console.log(`🎉 Виграш! Випала ${targetNumber} за ${rollCount} кидків!`);
}

console.log("\n=== 🔁 DO-WHILE ЦИКЛ ===");

// 📖 DO-WHILE - спочатку виконує код, потім перевіряє умову
// Гарантує мінімум 1 виконання навіть якщо умова відразу false

let simulatedInput = 0;
console.log("📋 Приклад do-while: збираємо дані");

do {
    console.log(`📊 Поточна сума: ${simulatedInput} грн`);
    simulatedInput += 10; // Додаємо по 10 грн кожну ітерацію
} while (simulatedInput < 30);

console.log(`✅ Зібрано достатньо: ${simulatedInput} грн`);

// 🎮 ПРАКТИЧНИЙ ПРИКЛАД: система меню
console.log("\n🎮 Приклад: симуляція меню програми");
let menuChoice = 0;
let menuIteration = 0;

do {
    menuIteration++;
    // Симулюємо вибір користувача (випадково)
    menuChoice = Math.floor(Math.random() * 5) + 1;
    
    console.log(`\n--- 📋 МЕНЮ (ітерація ${menuIteration}) ---`);
    console.log("1. 📁 Відкрити файл");
    console.log("2. 💾 Зберегти файл");
    console.log("3. ⚙️ Налаштування");
    console.log("4. ❓ Довідка");
    console.log("5. ❌ Вихід");
    console.log(`👆 Користувач вибрав: ${menuChoice}`);
    
    switch (menuChoice) {
        case 1: console.log("📂 Відкриваємо файл..."); break;
        case 2: console.log("💾 Зберігаємо файл..."); break;
        case 3: console.log("⚙️ Відкриваємо налаштування..."); break;
        case 4: console.log("❓ Показуємо довідку..."); break;
        case 5: console.log("👋 До побачення!"); break;
    }
    
} while (menuChoice !== 5 && menuIteration < 3); // Обмежуємо кількість ітерацій

console.log("\n=== 🔍 СПЕЦІАЛЬНІ ЦИКЛИ: FOR-IN і FOR-OF ===");

// 🗝️ FOR-IN - для перебору КЛЮЧІВ об'єкта
let student = {
    firstName: "Марія",
    lastName: "Петренко", 
    age: 20,
    university: "КНУ",
    course: 3,
    specialty: "Інформатика"
};

console.log("👤 Інформація про студента (for-in для об'єктів):");
for (let property in student) {
    console.log(`🔑 ${property}: ${student[property]}`);
}

// 📊 Практичний приклад: підрахунок властивостей
let propertyCount = 0;
for (let key in student) {
    propertyCount++;
}
console.log(`📈 Загалом властивостей в об'єкті: ${propertyCount}`);

// 🎯 FOR-OF - для перебору ЗНАЧЕНЬ масивів та інших ітерованих об'єктів
let favoriteBooks = [
    "Гаррі Поттер", 
    "Володар Перснів", 
    "1984", 
    "Кобзар",
    "JavaScript для чайників"
];

console.log("\n📚 Улюблені книги (for-of для масивів):");
for (let book of favoriteBooks) {
    console.log(`📖 "${book}"`);
}

// 🔤 FOR-OF також працює з рядками
let programmingLanguage = "JavaScript";
console.log(`\n🔤 Розбираємо слово "${programmingLanguage}" по літерах:`);
let letterIndex = 1;
for (let char of programmingLanguage) {
    console.log(`${letterIndex}. Літера: "${char}"`);
    letterIndex++;
}

// 🆚 ПОРІВНЯННЯ: for-in vs for-of з масивом
console.log("\n🆚 Різниця між for-in і for-of:");
let colors = ["червоний", "зелений", "синій"];

console.log("🔢 for-in (показує ІНДЕКСИ):");
for (let index in colors) {
    console.log(`  Індекс ${index}: ${colors[index]}`);
}

console.log("🎨 for-of (показує ЗНАЧЕННЯ):");
for (let color of colors) {
    console.log(`  Колір: ${color}`);
}

console.log("\n=== 🛑 КЕРУВАННЯ ЦИКЛАМИ: BREAK і CONTINUE ===");

// 🛑 BREAK - повністю зупиняє цикл і виходить з нього
console.log("🔍 Приклад BREAK: пошук першого числа, що ділиться на 7");

for (let number = 1; number <= 50; number++) {
    console.log(`🔎 Перевіряємо число ${number}...`);
    
    if (number % 7 === 0) {
        console.log(`✅ Знайдено! ${number} ділиться на 7 без остачі`);
        break; // 🛑 Зупиняємо цикл, коли знайшли результат
    }
}
console.log("🏁 Пошук завершено (break спрацював)");

// ⏭️ CONTINUE - пропускає поточну ітерацію і переходить до наступної
console.log("\n⏭️ Приклад CONTINUE: показуємо тільки непарні числа");

for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(`⏭️ Число ${num} парне - пропускаємо (continue)`);
        continue; // Пропускаємо решту коду в циклі для парних чисел
    }
    console.log(`✨ Непарне число: ${num}`);
}

// 🎮 ПРАКТИЧНИЙ ПРИКЛАД: обробка списку користувачів
console.log("\n👥 Практичний приклад: модерація користувачів");

let users = [
    { name: "Олександр", age: 25, isBlocked: false },
    { name: "Марія", age: 17, isBlocked: false },      // неповнолітня
    { name: "Петро", age: 30, isBlocked: true },       // заблокований
    { name: "Анна", age: 22, isBlocked: false },
    { name: "Іван", age: 16, isBlocked: false }        // неповнолітній
];

console.log("📋 Перевіряємо список користувачів:");
let approvedUsers = 0;

for (let user of users) {
    // Пропускаємо заблокованих користувачів
    if (user.isBlocked) {
        console.log(`🚫 ${user.name} заблокований - пропускаємо`);
        continue;
    }
    
    // Перевіряємо вік
    if (user.age < 18) {
        console.log(`⚠️ ${user.name} неповнолітній (${user.age} років) - пропускаємо`);
        continue;
    }
    
    // Користувач пройшов всі перевірки
    console.log(`✅ ${user.name} схвалений (${user.age} років)`);
    approvedUsers++;
    
    // Зупиняємося після 2 схвалених користувачів
    if (approvedUsers >= 2) {
        console.log("🎯 Досягнуто ліміт - зупиняємо обробку");
        break;
    }
}

console.log(`📊 Результат: схвалено ${approvedUsers} користувачів`);

console.log("\n=== 🎯 ВКЛАДЕНІ ЦИКЛИ (NESTED LOOPS) ===");

// 🔢 ПРИКЛАД 1: Таблиця множення
console.log("📊 Таблиця множення (фрагмент):");
console.log("─".repeat(40)); // Розділювач

for (let multiplicand = 1; multiplicand <= 3; multiplicand++) {
    let tableRow = `${multiplicand}: `;
    
    for (let multiplier = 1; multiplier <= 5; multiplier++) {
        let product = multiplicand * multiplier;
        tableRow += `${multiplicand}×${multiplier}=${product}\t`;
    }
    
    console.log(tableRow);
}
console.log("─".repeat(40));

// ⭐ ПРИКЛАД 2: Створення візуального трикутника
console.log("\n⭐ Малюємо трикутник зірочками:");

for (let row = 1; row <= 5; row++) {
    let starLine = "";
    
    // Додаємо зірочки для поточного рядка
    for (let star = 1; star <= row; star++) {
        starLine += "★ ";
    }
    
    console.log(`Ряд ${row}: ${starLine}`);
}

// 🎨 ПРИКЛАД 3: Створення шахової дошки (pattern)
console.log("\n♟️ Фрагмент шахової дошки (4x4):");

for (let rowNum = 1; rowNum <= 4; rowNum++) {
    let chessRow = "";
    
    for (let col = 1; col <= 4; col++) {
        // Чергуємо чорні (■) та білі (□) клітинки
        if ((rowNum + col) % 2 === 0) {
            chessRow += "■ ";  // Чорна клітинка
        } else {
            chessRow += "□ ";  // Біла клітинка
        }
    }
    
    console.log(chessRow);
}

// 🏢 ПРИКЛАД 4: Структура будівлі (практичне застосування)
console.log("\n🏢 Інвентаризація офісної будівлі:");

let building = {
    floors: 3,
    roomsPerFloor: 4
};

let totalRooms = 0;
let roomDetails = [];

for (let floor = 1; floor <= building.floors; floor++) {
    console.log(`\n🏢 Поверх ${floor}:`);
    
    for (let room = 1; room <= building.roomsPerFloor; room++) {
        let roomNumber = floor * 100 + room; // 101, 102, 201, 202...
        console.log(`  🚪 Кімната ${roomNumber}`);
        
        roomDetails.push({
            floor: floor,
            roomNumber: roomNumber,
            isOccupied: Math.random() > 0.3 // 70% кімнат зайняті
        });
        
        totalRooms++;
    }
}

console.log(`\n📊 Загальна статистика:`);
console.log(`🏠 Всього кімнат: ${totalRooms}`);
let occupiedRooms = roomDetails.filter(room => room.isOccupied).length;
console.log(`👥 Зайнятих: ${occupiedRooms}`);
console.log(`🏃 Вільних: ${totalRooms - occupiedRooms}`);

console.log("\n=== 🎯 ПРАКТИЧНІ ПРИКЛАДИ ВИКОРИСТАННЯ ЦИКЛІВ ===");

// 🧮 ПРИКЛАД 1: Розрахунок суми арифметичної прогресії
console.log("🧮 Задача 1: Сума чисел від 1 до 100");

let totalSum = 0;
let calculation = "1";

for (let num = 1; num <= 100; num++) {
    totalSum += num;
    if (num <= 5) { // Показуємо тільки перші кілька доданків
        calculation += ` + ${num + 1}`;
    } else if (num === 6) {
        calculation += " + ... + 100";
    }
}

console.log(`📈 ${calculation} = ${totalSum}`);
console.log(`💡 Формула: n(n+1)/2 = 100(101)/2 = ${100*101/2} ✓`);

// 🔍 ПРИКЛАД 2: Пошук максимального і мінімального значень
console.log("\n🔍 Задача 2: Аналіз температури за тиждень");

let weeklyTemperatures = [18, 22, 25, 19, 21, 26, 23];
let maxTemp = weeklyTemperatures[0];
let minTemp = weeklyTemperatures[0];
let maxDay = 0;
let minDay = 0;
let tempSum = 0;

console.log("🌡️ Температура по днях:");
for (let day = 0; day < weeklyTemperatures.length; day++) {
    let temp = weeklyTemperatures[day];
    let dayName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'][day];
    
    console.log(`  ${dayName}: ${temp}°C`);
    tempSum += temp;
    
    if (temp > maxTemp) {
        maxTemp = temp;
        maxDay = day;
    }
    
    if (temp < minTemp) {
        minTemp = temp;
        minDay = day;
    }
}

let avgTemp = (tempSum / weeklyTemperatures.length).toFixed(1);
let maxDayName = ['понеділок', 'вівторок', 'середу', 'четвер', 'п\'ятницю', 'суботу', 'неділю'][maxDay];
let minDayName = ['понеділок', 'вівторок', 'середу', 'четвер', 'п\'ятницю', 'суботу', 'неділю'][minDay];

console.log(`📊 Статистика тижня:`);
console.log(`🔥 Найтепліший день: ${maxDayName} (${maxTemp}°C)`);
console.log(`❄️ Найхолодніший день: ${minDayName} (${minTemp}°C)`);
console.log(`📈 Середня температура: ${avgTemp}°C`);

// 🔤 ПРИКЛАД 3: Аналіз тексту
console.log("\n🔤 Задача 3: Аналіз літературного тексту");

let literaryText = "JavaScript - це потужна мова програмування для веб-розробки!";
let ukrainianVowels = "аеиіоуюяїє";
let englishVowels = "aeiou";
let vowelCount = 0;
let consonantCount = 0;
let digitCount = 0;
let spaceCount = 0;

console.log(`📝 Аналізуємо текст: "${literaryText}"`);
console.log("🔍 Детальний розбір:");

for (let position = 0; position < literaryText.length; position++) {
    let character = literaryText[position].toLowerCase();
    
    if (character === ' ') {
        spaceCount++;
        console.log(`[${position}] Пробіл`);
    } else if (/[0-9]/.test(character)) {
        digitCount++;
        console.log(`[${position}] Цифра: "${character}"`);
    } else if (ukrainianVowels.includes(character) || englishVowels.includes(character)) {
        vowelCount++;
        console.log(`[${position}] Голосна: "${character}"`);
    } else if (/[a-zA-Zа-яА-ЯіїєІЇЄ]/.test(character)) {
        consonantCount++;
        console.log(`[${position}] Приголосна: "${character}"`);
    }
}

console.log(`\n📊 Результати аналізу:`);
console.log(`🔤 Голосних літер: ${vowelCount}`);
console.log(`🔤 Приголосних літер: ${consonantCount}`);
console.log(`🔢 Цифр: ${digitCount}`);
console.log(`⭐ Пробілів: ${spaceCount}`);
console.log(`📏 Загальна довжина: ${literaryText.length} символів`);

// 🔢 ПРИКЛАД 4: Обчислення факторіалу з поясненням
console.log("\n🔢 Задача 4: Обчислення факторіалу");

let factorialNumber = 6;
let factorialResult = 1;
let factorialSteps = [];

console.log(`🎯 Обчислюємо ${factorialNumber}! (факторіал ${factorialNumber})`);
console.log(`📖 Факторіал - це добуток всіх натуральних чисел від 1 до n`);

for (let factor = 1; factor <= factorialNumber; factor++) {
    factorialResult *= factor;
    factorialSteps.push(factor);
    console.log(`Крок ${factor}: ${factorialSteps.join(' × ')} = ${factorialResult}`);
}

console.log(`✅ Результат: ${factorialNumber}! = ${factorialResult}`);

// 🔍 ПРИКЛАД 5: Перевірка на просте число з оптимізацією
console.log("\n🔍 Задача 5: Визначення простих чисел");

function checkPrimeNumber(numberToTest) {
    console.log(`\n🔎 Перевіряємо чи число ${numberToTest} є простим:`);
    
    if (numberToTest <= 1) {
        console.log(`❌ ${numberToTest} не є простим (менше або дорівнює 1)`);
        return false;
    }
    
    if (numberToTest === 2) {
        console.log(`✅ ${numberToTest} є простим (єдине парне просте число)`);
        return true;
    }
    
    if (numberToTest % 2 === 0) {
        console.log(`❌ ${numberToTest} не є простим (ділиться на 2)`);
        return false;
    }
    
    // Перевіряємо тільки до квадратного кореня (оптимізація)
    let maxDivisor = Math.sqrt(numberToTest);
    console.log(`🧮 Перевіряємо дільники до ${Math.floor(maxDivisor)}:`);
    
    for (let divisor = 3; divisor <= maxDivisor; divisor += 2) {
        console.log(`  Перевіряємо дільник ${divisor}...`);
        if (numberToTest % divisor === 0) {
            console.log(`❌ ${numberToTest} не є простим (ділиться на ${divisor})`);
            return false;
        }
    }
    
    console.log(`✅ ${numberToTest} є простим числом!`);
    return true;
}

// Тестуємо кілька чисел
let testNumbers = [17, 25, 29];
testNumbers.forEach(num => checkPrimeNumber(num));

// 🏁 ПІДСУМОК УРОКУ
console.log("\n=== 📚 ПІДСУМОК УРОКУ 4 ===");
console.log("✅ Опанували всі типи циклів: for, while, do-while");
console.log("✅ Вивчили спеціальні цикли: for-in, for-of");
console.log("✅ Розібрали керування циклами: break, continue");
console.log("✅ Попрактикувалися з вкладеними циклами");
console.log("✅ Вирішили практичні задачі з обробки даних");
console.log("🎯 Наступний крок: вивчення функцій для організації коду!");