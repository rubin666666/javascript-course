// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 5: ФУНКЦІЇ
// ===========================================

console.log("=== ЗАВДАННЯ 1: FUNCTION DECLARATION ===");

// Завдання 1.1: Прості функції
function greet(name) {
    return `Привіт, ${name}!`;
}

function calculateArea(width, height) {
    return width * height;
}

function isEven(number) {
    return number % 2 === 0;
}

// Тестування
console.log(greet("Анна"));                    // Привіт, Анна!
console.log(`Площа: ${calculateArea(5, 3)} м²`); // Площа: 15 м²
console.log(`10 парне: ${isEven(10)}`);         // 10 парне: true
console.log(`7 парне: ${isEven(7)}`);           // 7 парне: false

// Завдання 1.2: Функція з множинними параметрами
function calculateTotal(price, quantity, taxRate = 0.2) {
    let subtotal = price * quantity;
    let tax = subtotal * taxRate;
    return subtotal + tax;
}

console.log(`\nЗагальна сума: ${calculateTotal(100, 2)} грн`);      // з ПДВ 20%
console.log(`Загальна сума: ${calculateTotal(100, 2, 0.1)} грн`);   // з ПДВ 10%

console.log("\n=== ЗАВДАННЯ 2: ARROW FUNCTIONS ===");

// Завдання 2.1: Прості стрілкові функції
const square = (x) => x * x;
const cube = x => x * x * x;  // можна без дужок для одного параметра
const add = (a, b) => a + b;

console.log(`5² = ${square(5)}`);      // 25
console.log(`3³ = ${cube(3)}`);        // 27
console.log(`10 + 7 = ${add(10, 7)}`); // 17

// Завдання 2.2: Стрілкові функції з блоком коду
const getGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
};

const formatCurrency = (amount, currency = "UAH") => {
    return `${amount.toFixed(2)} ${currency}`;
};

console.log(`\nОцінка 85 балів: ${getGrade(85)}`);
console.log(`Сума: ${formatCurrency(1234.567)}`);

console.log("\n=== ЗАВДАННЯ 3: ПАРАМЕТРИ ЗА ЗАМОВЧУВАННЯМ ===");

// Завдання 3.1: Функція привітання з часом
function greetWithTime(name = "Друже", timeOfDay = "день") {
    return `Добрий ${timeOfDay}, ${name}!`;
}

console.log(greetWithTime());                        // Добрий день, Друже!
console.log(greetWithTime("Марія"));                 // Добрий день, Марія!
console.log(greetWithTime("Петро", "ранок"));        // Добрий ранок, Петро!

// Завдання 3.2: Конфігурація користувача
function createUser(name, age = 18, role = "user", isActive = true) {
    return {
        name: name,
        age: age,
        role: role,
        isActive: isActive,
        createdAt: new Date().toLocaleDateString()
    };
}

console.log("\nСтворення користувачів:");
console.log(createUser("Іван"));
console.log(createUser("Анна", 25, "admin"));

console.log("\n=== ЗАВДАННЯ 4: CALLBACK ФУНКЦІЇ ===");

// Завдання 4.1: Базові колбеки
function processNumber(num, callback) {
    console.log(`Обробляємо число: ${num}`);
    let result = callback(num);
    console.log(`Результат: ${result}`);
    return result;
}

// Різні колбеки
const double = x => x * 2;
const makePositive = x => Math.abs(x);
const addTen = x => x + 10;

console.log("Колбек функції:");
processNumber(5, double);        // 10
processNumber(-7, makePositive); // 7
processNumber(15, addTen);       // 25

// Завдання 4.2: Обробка масиву з колбеком
function processArray(array, callback) {
    let result = [];
    for (let item of array) {
        result.push(callback(item));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(`\nВихідний масив: ${numbers}`);
console.log(`Подвоєні: ${processArray(numbers, x => x * 2)}`);
console.log(`Квадрати: ${processArray(numbers, x => x * x)}`);

console.log("\n=== ЗАВДАННЯ 5: ЗАМИКАННЯ (CLOSURES) ===");

// Завдання 5.1: Лічильник з замиканням
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log("Лічильники:");
console.log(`Counter1: ${counter1()}`); // 1
console.log(`Counter1: ${counter1()}`); // 2
console.log(`Counter2: ${counter2()}`); // 1 (окремий лічильник)
console.log(`Counter1: ${counter1()}`); // 3

// Завдання 5.2: Фабрика функцій
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let multiplyBy2 = createMultiplier(2);
let multiplyBy10 = createMultiplier(10);

console.log(`\n5 × 2 = ${multiplyBy2(5)}`);   // 10
console.log(`5 × 10 = ${multiplyBy10(5)}`);   // 50

// Завдання 5.3: Приватні змінні
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return `Поповнено на ${amount}. Баланс: ${balance}`;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return `Знято ${amount}. Баланс: ${balance}`;
            } else {
                return "Недостатньо коштів";
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

let account = createBankAccount(100);
console.log("\nБанківський рахунок:");
console.log(account.deposit(50));   // Поповнено на 50. Баланс: 150
console.log(account.withdraw(30));  // Знято 30. Баланс: 120
console.log(account.withdraw(200)); // Недостатньо коштів

console.log("\n=== ЗАВДАННЯ 6: РЕКУРСІЯ ===");

// Завдання 6.1: Факторіал
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(`5! = ${factorial(5)}`); // 120

// Завдання 6.2: Сума цифр числа
function sumOfDigits(num) {
    if (num < 10) return num;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(`Сума цифр 1234: ${sumOfDigits(1234)}`); // 10

// Завдання 6.3: Числа Фібоначчі
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Числа Фібоначчі:");
for (let i = 0; i < 8; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
}

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 7.1: Система управління завданнями
function createTaskManager() {
    let tasks = [];
    let nextId = 1;
    
    return {
        addTask: function(title, priority = "medium") {
            let task = {
                id: nextId++,
                title: title,
                priority: priority,
                completed: false,
                createdAt: new Date().toLocaleString()
            };
            tasks.push(task);
            return `Завдання додано: "${title}"`;
        },
        
        completeTask: function(id) {
            let task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = true;
                return `Завдання "${task.title}" виконано!`;
            }
            return "Завдання не знайдено";
        },
        
        getTasks: function(filter = "all") {
            switch(filter) {
                case "completed":
                    return tasks.filter(t => t.completed);
                case "pending":
                    return tasks.filter(t => !t.completed);
                default:
                    return tasks;
            }
        },
        
        getTaskCount: function() {
            let completed = tasks.filter(t => t.completed).length;
            let total = tasks.length;
            return { completed, pending: total - completed, total };
        }
    };
}

// Тестування системи завдань
let taskManager = createTaskManager();

console.log("--- СИСТЕМА ЗАВДАНЬ ---");
console.log(taskManager.addTask("Вивчити JavaScript", "high"));
console.log(taskManager.addTask("Зробити вправи"));
console.log(taskManager.addTask("Прочитати документацію", "low"));

console.log(taskManager.completeTask(1));

let stats = taskManager.getTaskCount();
console.log(`\nСтатистика: ${stats.completed} виконано, ${stats.pending} в очікуванні`);

console.log("\nВсі завдання:");
taskManager.getTasks().forEach(task => {
    let status = task.completed ? "✅" : "❌";
    console.log(`${status} [${task.priority}] ${task.title}`);
});

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. FUNCTION DECLARATION vs ARROW FUNCTIONS:
   - function name() {} - можна викликати до оголошення (hoisting)
   - const name = () => {} - не можна викликати до оголошення
   - Arrow functions не мають власного 'this'

2. ПАРАМЕТРИ:
   - function(a, b = 5) - параметри за замовчуванням
   - function(...args) - rest параметри (масив)
   - function(a, b, c) - фіксована кількість

3. КОЛБЕКИ:
   - Функція як аргумент іншої функції
   - Виклик функції в потрібний момент
   - Основа для асинхронного програмування

4. ЗАМИКАННЯ:
   - Функція має доступ до змінних зовнішньої області
   - Дозволяє створювати приватні змінні
   - Основа для модульних патернів

5. РЕКУРСІЯ:
   - Функція викликає сама себе
   - Потрібна умова виходу (base case)
   - Корисна для роботи з деревовидними структурами

🚫 НАЙЧАСТІШІ ПОМИЛКИ:
- Забування return в функціях
- Плутання this в arrow functions
- Безкінечна рекурсія (немає умови виходу)
- Неправильне використання замикань

🏆 КРАЩІ ПРАКТИКИ:
- Використовуй описові назви функцій
- Одна функція - одна відповідальність
- Уникай глибокої вкладеності
- Документуй складні функції коментарями
- Використовуй const для функцій, що не переприсвоюються
*/