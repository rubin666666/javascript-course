// ===========================================
// УРОК 5: ФУНКЦІЇ В JAVASCRIPT
// ===========================================

console.log("=== ОГОЛОШЕННЯ ФУНКЦІЙ ===");

// 1. Function Declaration (Оголошення функції)
function greet(name) {
    return `Привіт, ${name}!`;
}

console.log(greet("Марія"));

// 2. Function Expression (Вираз функції)
const goodbye = function(name) {
    return `До побачення, ${name}!`;
};

console.log(goodbye("Петро"));

// 3. Arrow Function (Стрілкова функція) - ES6
const multiply = (a, b) => {
    return a * b;
};

// Коротка форма для простих функцій
const square = x => x * x;
const sayHello = () => "Привіт світ!";

console.log(`multiply(5, 3) = ${multiply(5, 3)}`);
console.log(`square(4) = ${square(4)}`);
console.log(sayHello());

console.log("\n=== ПАРАМЕТРИ ФУНКЦІЙ ===");

// Параметри за замовчуванням
function createUser(name, age = 18, city = "Київ") {
    return {
        name: name,
        age: age,
        city: city
    };
}

console.log(createUser("Анна"));
console.log(createUser("Іван", 25));
console.log(createUser("Ольга", 30, "Львів"));

// Rest параметри (...args)
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(`sum(1, 2, 3) = ${sum(1, 2, 3)}`);
console.log(`sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}`);

// Деструктуризація параметрів
function displayPerson({name, age, city}) {
    console.log(`${name}, ${age} років, з міста ${city}`);
}

displayPerson({name: "Василь", age: 32, city: "Одеса"});

console.log("\n=== ОБЛАСТЬ ВИДИМОСТІ (SCOPE) ===");

let globalVar = "Глобальна змінна";

function outerFunction() {
    let outerVar = "Зовнішня змінна";
    
    function innerFunction() {
        let innerVar = "Внутрішня змінна";
        console.log(globalVar);  // Доступна
        console.log(outerVar);   // Доступна
        console.log(innerVar);   // Доступна
    }
    
    innerFunction();
    // console.log(innerVar); // Помилка! Не доступна
}

outerFunction();

// Замикання (Closures)
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("\nЗамикання:");
console.log("counter1:", counter1()); // 1
console.log("counter1:", counter1()); // 2
console.log("counter2:", counter2()); // 1
console.log("counter1:", counter1()); // 3

console.log("\n=== CALLBACK ФУНКЦІЇ ===");

function processArray(array, callback) {
    let result = [];
    for (let item of array) {
        result.push(callback(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, x => x * 2);
const squared = processArray(numbers, x => x * x);

console.log("Оригінал:", numbers);
console.log("Подвоєні:", doubled);
console.log("У квадраті:", squared);

// Приклад з setTimeout
console.log("Зараз");
setTimeout(() => {
    console.log("Це виконається через 2 секунди");
}, 2000);
console.log("Це виконається одразу");

console.log("\n=== РЕКУРСІЯ ===");

// Факторіал через рекурсію
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(`Факторіал 5 = ${factorial(5)}`);

// Числа Фібоначчі
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Перші 8 чисел Фібоначчі:");
for (let i = 0; i < 8; i++) {
    console.log(`fibonacci(${i}) = ${fibonacci(i)}`);
}

console.log("\n=== PRACTICAL EXAMPLES ===");

// Приклад 1: Валідатор email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const emails = ["test@gmail.com", "invalid-email", "user@domain.co.uk"];
emails.forEach(email => {
    console.log(`${email}: ${isValidEmail(email) ? "✅" : "❌"}`);
});

// Приклад 2: Форматування тексту
const formatText = {
    capitalize: text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
    reverse: text => text.split('').reverse().join(''),
    removeSpaces: text => text.replace(/\s+/g, ''),
    wordCount: text => text.trim().split(/\s+/).length
};

const sampleText = "  привіт світ  ";
console.log(`\nОригінал: "${sampleText}"`);
console.log(`Capitalize: "${formatText.capitalize(sampleText)}"`);
console.log(`Reverse: "${formatText.reverse(sampleText.trim())}"`);
console.log(`Remove spaces: "${formatText.removeSpaces(sampleText)}"`);
console.log(`Word count: ${formatText.wordCount(sampleText)}`);

// Приклад 3: Калькулятор
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Ділення на нуль!",
    power: (a, b) => Math.pow(a, b)
};

console.log("\nКалькулятор:");
console.log(`10 + 5 = ${calculator.add(10, 5)}`);
console.log(`10 - 5 = ${calculator.subtract(10, 5)}`);
console.log(`10 * 5 = ${calculator.multiply(10, 5)}`);
console.log(`10 / 5 = ${calculator.divide(10, 5)}`);
console.log(`2^8 = ${calculator.power(2, 8)}`);

// Приклад 4: Пошук і фільтрація
function findInArray(array, predicate) {
    for (let item of array) {
        if (predicate(item)) {
            return item;
        }
    }
    return null;
}

function filterArray(array, predicate) {
    let result = [];
    for (let item of array) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const people = [
    { name: "Анна", age: 25, city: "Київ" },
    { name: "Петро", age: 30, city: "Львів" },
    { name: "Марія", age: 22, city: "Київ" },
    { name: "Іван", age: 28, city: "Одеса" }
];

const youngPerson = findInArray(people, person => person.age < 25);
const kyivPeople = filterArray(people, person => person.city === "Київ");

console.log("\nПошук особи молодше 25 років:", youngPerson);
console.log("Люди з Києва:", kyivPeople);