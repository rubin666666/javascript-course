// ===========================================
// ⚙️ УРОК 5: ФУНКЦІЇ В JAVASCRIPT (FUNCTIONS)
// ===========================================

/*
📚 ЩО ВИВЧИМО В ЦЬОМУ УРОЦІ:
- Різні способи оголошення функцій
- Параметри за замовчуванням та rest-параметри
- Область видимості (scope) та замикання (closures)
- Callback функції та функції вищого порядку
- Рекурсія - функції що викликають себе
- Практичні приклади створення корисних функцій
*/

console.log("=== ⚙️ СПОСОБИ ОГОЛОШЕННЯ ФУНКЦІЙ ===");

// 📖 ФУНКЦІЯ - це блок коду що виконує конкретну задачу
// Функції роблять код більш організованим та повторно використовуваним

// 🎯 СПОСІБ 1: Function Declaration (Класичне оголошення)
function createGreeting(userName) {
    console.log(`🔧 Функція createGreeting викликана з параметром: ${userName}`);
    return `👋 Вітаю, ${userName}! Радий познайомитися!`;
}

// Викликаємо функцію і зберігаємо результат
let welcomeMessage = createGreeting("Марія");
console.log(`📤 Результат: ${welcomeMessage}`);

// 🎯 СПОСІБ 2: Function Expression (Функція як вираз)
const createFarewell = function(personName) {
    console.log(`🔧 Анонімна функція викликана для: ${personName}`);
    return `👋 До зустрічі, ${personName}! Гарного дня!`;
};

console.log(`📤 ${createFarewell("Петро")}`);

// 🎯 СПОСІБ 3: Arrow Function (Стрілкова функція ES6) - сучасний стиль
const calculateProduct = (firstNumber, secondNumber) => {
    console.log(`🔧 Стрілкова функція: ${firstNumber} × ${secondNumber}`);
    return firstNumber * secondNumber;
};

// ⚡ КОРОТКА ФОРМА стрілкових функцій (без фігурних дужок)
const getSquare = x => x * x;                    // Один параметр
const generateWelcome = () => "🌍 Привіт світ!"; // Без параметрів

console.log(`🧮 Результат множення: ${calculateProduct(5, 3)}`);
console.log(`📐 Квадрат числа 4: ${getSquare(4)}`);
console.log(`🎉 ${generateWelcome()}`);

// 💡 РІЗНИЦЯ МІЖ СПОСОБАМИ:
console.log("\n📋 Порівняння способів оголошення:");
console.log("✅ Function Declaration: доступна до оголошення (hoisting)");
console.log("✅ Function Expression: доступна тільки після оголошення");
console.log("✅ Arrow Function: компактний синтаксис, немає власного 'this'");

console.log("\n=== 📝 ПАРАМЕТРИ ФУНКЦІЙ ===");

// 🎯 ПАРАМЕТРИ ЗА ЗАМОВЧУВАННЯМ - якщо параметр не передано
function buildUserProfile(fullName, userAge = 18, location = "Київ", isActive = true) {
    console.log(`👤 Створюємо профіль користувача:`);
    console.log(`   Ім'я: ${fullName} ${fullName ? '✅' : '❌'}`);
    console.log(`   Вік: ${userAge} (${userAge === 18 ? 'за замовчуванням' : 'вказано'})`);
    console.log(`   Місто: ${location} (${location === 'Київ' ? 'за замовчуванням' : 'вказано'})`);
    
    return {
        name: fullName,
        age: userAge,
        city: location,
        active: isActive
    };
}

console.log("\n🧪 Тестуємо параметри за замовчуванням:");
console.log("1️⃣ Тільки ім'я:", buildUserProfile("Анна"));
console.log("\n2️⃣ Ім'я + вік:", buildUserProfile("Іван", 25));
console.log("\n3️⃣ Всі параметри:", buildUserProfile("Ольга", 30, "Львів"));

// ⭐ REST ПАРАМЕТРИ (...args) - приймають необмежену кількість аргументів
function calculateSum(...inputNumbers) {
    console.log(`🧮 Отримано ${inputNumbers.length} чисел: [${inputNumbers.join(', ')}]`);
    
    let runningTotal = 0;
    let calculation = "";
    
    for (let i = 0; i < inputNumbers.length; i++) {
        runningTotal += inputNumbers[i];
        calculation += inputNumbers[i];
        if (i < inputNumbers.length - 1) calculation += " + ";
    }
    
    console.log(`🔍 Обчислення: ${calculation} = ${runningTotal}`);
    return runningTotal;
}

console.log("\n🧪 Тестуємо rest параметри:");
console.log(`📊 Результат 1: ${calculateSum(1, 2, 3)}`);
console.log(`📊 Результат 2: ${calculateSum(10, 20, 30, 40, 50)}`);
console.log(`📊 Результат 3: ${calculateSum(7)}`); // Один параметр

// 🎨 ДЕСТРУКТУРИЗАЦІЯ ПАРАМЕТРІВ - розпакування об'єкта
function showPersonInfo({name, age, city, profession = "не вказано"}) {
    console.log(`\n👨‍💼 === КАРТКА ОСОБИ ===`);
    console.log(`📛 Ім'я: ${name}`);
    console.log(`🎂 Вік: ${age} років`);
    console.log(`🏙️ Місто: ${city}`);
    console.log(`💼 Професія: ${profession}`);
    console.log(`==================`);
}

console.log("\n🧪 Тестуємо деструктуризацію:");
showPersonInfo({
    name: "Василь Петренко", 
    age: 32, 
    city: "Одеса",
    profession: "веб-розробник"
});

showPersonInfo({
    name: "Марія Коваль",
    age: 28,
    city: "Харків"
    // profession не вказано - буде "не вказано"
});

// 🔄 КОМБІНУВАННЯ РІЗНИХ ТИПІВ ПАРАМЕТРІВ
function advancedFunction(requiredParam, optionalParam = "default", ...extraParams) {
    console.log(`\n🔧 Аналіз параметрів функції:`);
    console.log(`📌 Обов'язковий: ${requiredParam}`);
    console.log(`⚙️ Опціональний: ${optionalParam}`);
    console.log(`📦 Додаткові (${extraParams.length}): [${extraParams.join(', ')}]`);
    
    return {
        required: requiredParam,
        optional: optionalParam,
        extras: extraParams
    };
}

console.log("🧪 Комбіновані параметри:");
advancedFunction("головний", "власний", "додатковий1", "додатковий2", "додатковий3");

console.log("\n=== 🌍 ОБЛАСТЬ ВИДИМОСТІ (SCOPE) ===");

// 🌐 ГЛОБАЛЬНА ОБЛАСТЬ - доступна у всьому коді
let globalMessage = "Я доступна у всьому коді! 🌍";

function demonstrateScope() {
    // 🏠 ЛОКАЛЬНА ОБЛАСТЬ - доступна тільки в цій функції
    let localMessage = "Я доступна тільки в цій функції 🏠";
    
    function nestedFunction() {
        // 🪆 ВКЛАДЕНА ОБЛАСТЬ - має доступ до всіх зовнішніх областей
        let nestedMessage = "Я у вкладеній функції 🪆";
        
        console.log("✅", globalMessage);  // Доступна
        console.log("✅", localMessage);   // Доступна  
        console.log("✅", nestedMessage);  // Доступна
    }
    
    nestedFunction();
    // ❌ console.log(nestedMessage); // Помилка! Не доступна тут
}

demonstrateScope();

// 🔒 ЗАМИКАННЯ (CLOSURES) - функція "запам'ятовує" свої змінні
console.log("\n🔒 Приклад замикання: лічильники");

function createPersonalCounter(initialValue = 0) {
    let privateCount = initialValue; // Приватна змінна
    
    return function() {
        privateCount++; // Змінюємо приватну змінну
        return privateCount;
    };
}

const userCounter = createPersonalCounter(0);
const adminCounter = createPersonalCounter(100);

console.log("👤 Користувач:", userCounter()); // 1
console.log("👤 Користувач:", userCounter()); // 2
console.log("👨‍💼 Адмін:", adminCounter());      // 101
console.log("👤 Користувач:", userCounter()); // 3
console.log("👨‍💼 Адмін:", adminCounter());      // 102

// Кожна функція має свою приватну змінну!

console.log("\n=== 📞 CALLBACK ФУНКЦІЇ ===");

// 📖 CALLBACK - функція що передається як параметр іншій функції
function transformArray(inputArray, transformFunction) {
    console.log(`🔄 Обробляємо масив: [${inputArray.join(', ')}]`);
    let resultArray = [];
    
    for (let element of inputArray) {
        let transformed = transformFunction(element);
        resultArray.push(transformed);
        console.log(`  ${element} → ${transformed}`);
    }
    
    return resultArray;
}

const testNumbers = [1, 2, 3, 4, 5];

console.log("🧪 Тестуємо callback функції:");
const doubledResults = transformArray(testNumbers, x => x * 2);
const squaredResults = transformArray(testNumbers, x => x * x);

console.log(`📊 Подвоєні: [${doubledResults.join(', ')}]`);
console.log(`📊 У квадраті: [${squaredResults.join(', ')}]`);

console.log("\n=== 🔄 РЕКУРСІЯ - ФУНКЦІЯ ВИКЛИКАЄ СЕБЕ ===");

// 🧮 ФАКТОРІАЛ: n! = n × (n-1) × (n-2) × ... × 1
function calculateFactorial(number) {
    console.log(`🔄 Викликано calculateFactorial(${number})`);
    
    // 🛑 БАЗОВИЙ ВИПАДОК - умова зупинки рекурсії
    if (number <= 1) {
        console.log(`✅ Базовий випадок: ${number}! = 1`);
        return 1;
    }
    
    // 🔄 РЕКУРСИВНИЙ ВИКЛИК
    let result = number * calculateFactorial(number - 1);
    console.log(`📊 ${number}! = ${number} × ${number-1}! = ${result}`);
    return result;
}

console.log(`🎯 Результат: 5! = ${calculateFactorial(5)}`);

// 🌟 ЧИСЛА ФІБОНАЧЧІ: F(n) = F(n-1) + F(n-2)
function fibonacciNumber(position) {
    if (position <= 1) return position;
    return fibonacciNumber(position - 1) + fibonacciNumber(position - 2);
}

console.log("\n🌟 Перші числа Фібоначчі:");
for (let i = 0; i < 7; i++) {
    console.log(`F(${i}) = ${fibonacciNumber(i)}`);
}

console.log("\n=== 🎯 ПРАКТИЧНІ ПРИКЛАДИ ФУНКЦІЙ ===");

// ✉️ ПРИКЛАД 1: Валідатор електронної пошти
function validateEmail(emailAddress) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = emailPattern.test(emailAddress);
    console.log(`📧 ${emailAddress}: ${isValid ? "✅ валідний" : "❌ невалідний"}`);
    return isValid;
}

console.log("📧 Перевірка email адрес:");
["ivan@gmail.com", "invalid-email", "maria@domain.co.uk"].forEach(validateEmail);

// 🎨 ПРИКЛАД 2: Набір функцій для роботи з текстом
const textProcessor = {
    toTitleCase: text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
    reverseText: text => text.split('').reverse().join(''),
    removeAllSpaces: text => text.replace(/\s+/g, ''),
    countWords: text => text.trim().split(/\s+/).filter(word => word.length > 0).length
};

const testString = "  привіт чудовий світ  ";
console.log(`\n🎨 Обробка тексту: "${testString}"`);
console.log(`📝 Заголовок: "${textProcessor.toTitleCase(testString)}"`);
console.log(`🔄 Реверс: "${textProcessor.reverseText(testString.trim())}"`);
console.log(`🚫 Без пробілів: "${textProcessor.removeAllSpaces(testString)}"`);
console.log(`🔢 Кількість слів: ${textProcessor.countWords(testString)}`);

// 🧮 ПРИКЛАД 3: Універсальний калькулятор
const smartCalculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => y !== 0 ? x / y : "⚠️ Ділення на нуль неможливе!",
    power: (base, exponent) => Math.pow(base, exponent),
    percentage: (value, percent) => (value * percent) / 100
};

console.log("\n🧮 Демонстрація калькулятора:");
console.log(`➕ 15 + 7 = ${smartCalculator.add(15, 7)}`);
console.log(`➖ 15 - 7 = ${smartCalculator.subtract(15, 7)}`);
console.log(`✖️ 15 × 7 = ${smartCalculator.multiply(15, 7)}`);
console.log(`➗ 15 ÷ 3 = ${smartCalculator.divide(15, 3)}`);
console.log(`⚡ 2³ = ${smartCalculator.power(2, 3)}`);
console.log(`📊 20% від 250 = ${smartCalculator.percentage(250, 20)}`);

// 🔍 ПРИКЛАД 4: Функції пошуку та фільтрації
function findFirstMatch(dataArray, testFunction) {
    for (let item of dataArray) {
        if (testFunction(item)) return item;
    }
    return null;
}

function filterItems(dataArray, testFunction) {
    return dataArray.filter(testFunction); // Використовуємо вбудований метод
}

const employees = [
    { name: "Анна Коваль", age: 25, department: "IT", salary: 25000 },
    { name: "Петро Мельник", age: 30, department: "HR", salary: 22000 },
    { name: "Марія Петренко", age: 22, department: "IT", salary: 27000 },
    { name: "Іван Шевченко", age: 28, department: "Finance", salary: 30000 }
];

console.log("\n👥 Пошук та фільтрація співробітників:");

const youngEmployee = findFirstMatch(employees, emp => emp.age < 25);
const itEmployees = filterItems(employees, emp => emp.department === "IT");
const highPaidEmployees = filterItems(employees, emp => emp.salary > 25000);

console.log("🔍 Наймолодший співробітник:", youngEmployee?.name || "не знайдено");
console.log("💻 IT відділ:", itEmployees.map(emp => emp.name).join(", "));
console.log("💰 Високооплачувані:", highPaidEmployees.map(emp => emp.name).join(", "));

// 🏁 ПІДСУМОК УРОКУ
console.log("\n=== 📚 ПІДСУМОК УРОКУ 5 ===");
console.log("✅ Опанували різні способи створення функцій");
console.log("✅ Вивчили параметри за замовчуванням та rest-параметри");
console.log("✅ Розібрали область видимості та замикання");
console.log("✅ Попрактикувалися з callback функціями та рекурсією");
console.log("✅ Створили корисні функції для реальних задач");
console.log("🎯 Наступний крок: масиви та методи роботи з ними!");