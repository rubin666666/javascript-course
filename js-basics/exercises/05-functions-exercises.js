// ===========================================
// ПРАКТИЧНІ ЗАВДАННЯ - УРОК 5: ФУНКЦІЇ
// ===========================================

console.log("=== ЗАВДАННЯ 1: ОГОЛОШЕННЯ ФУНКЦІЙ ===");

// TODO: Створіть функції різними способами

// Завдання 1.1: Function Declaration - функція привітання
// function greetUser(???) {
//     return `Привіт, ${???}! Як справи?`;
// }

// Завдання 1.2: Function Expression - функція обчислення площі прямокутника
// const calculateArea = function(???, ???) {
//     return ??? * ???;
// };

// Завдання 1.3: Arrow Function - функція перевірки парності числа
// const isEven = ??? => ???;

// Завдання 1.4: Arrow Function з блоком коду - функція форматування імені
// const formatName = (???) => {
//     return ???.charAt(0).toUpperCase() + ???.slice(1).toLowerCase();
// };

// Тестування функцій:
// console.log(greetUser("Анна"));
// console.log(`Площа прямокутника 5x3: ${calculateArea(5, 3)}`);
// console.log(`Число 8 парне: ${isEven(8)}`);
// console.log(`Число 7 парне: ${isEven(7)}`);
// console.log(formatName("іВАН"));

console.log("Розкоментуйте код вище для тестування функцій!");

console.log("\n=== ЗАВДАННЯ 2: ПАРАМЕТРИ ФУНКЦІЙ ===");

// TODO: Створіть функції з різними типами параметрів

// Завдання 2.1: Функція з параметрами за замовчуванням
// function createUser(name, age = 18, city = "Київ", isActive = true) {
//     return {
//         name: ???,
//         age: ???,
//         city: ???,
//         isActive: ???,
//         id: Math.floor(Math.random() * 1000)
//     };
// }

// Завдання 2.2: Функція з rest параметрами - сума чисел
// function calculateSum(...???) {
//     let total = 0;
//     for (let ??? of ???) {
//         total += ???;
//     }
//     return total;
// }

// Завдання 2.3: Функція з деструктуризацією параметрів
// function displayProduct({name, price, category, inStock = true}) {
//     return `${???} (${???}) - ${???} грн ${??? ? "✅" : "❌"}`;
// }

// Тестування:
// console.log(createUser("Марія"));
// console.log(createUser("Петро", 25));
// console.log(createUser("Ольга", 30, "Львів"));

// console.log(`Сума 1,2,3: ${calculateSum(1, 2, 3)}`);
// console.log(`Сума 10,20,30,40: ${calculateSum(10, 20, 30, 40)}`);

// const product = {name: "Телефон", price: 15000, category: "Електроніка"};
// console.log(displayProduct(product));

console.log("Розкоментуйте код вище для тестування параметрів!");

console.log("\n=== ЗАВДАННЯ 3: ОБЛАСТЬ ВИДИМОСТІ ТА ЗАМИКАННЯ ===");

// TODO: Дослідіть область видимості та створіть замикання

// Завдання 3.1: Створіть лічильник з замиканням
// function createCounter(???) {
//     let count = ??? || 0;
//     
//     return function() {
//         ???++;
//         return ???;
//     };
// }

// Завдання 3.2: Створіть приватні змінні з замиканням
// function createBankAccount(???) {
//     let balance = ??? || 0;
//     
//     return {
//         deposit: function(???) {
//             if (??? > 0) {
//                 balance += ???;
//                 return `Поповнено на ${???} грн. Баланс: ${balance} грн`;
//             }
//             return "Сума повинна бути позитивною";
//         },
//         
//         withdraw: function(???) {
//             if (??? > 0 && ??? <= balance) {
//                 balance -= ???;
//                 return `Знято ${???} грн. Баланс: ${balance} грн`;
//             }
//             return "Недостатньо коштів або невірна сума";
//         },
//         
//         getBalance: function() {
//             return `Поточний баланс: ${balance} грн`;
//         }
//     };
// }

// Тестування:
// const counter1 = createCounter();
// const counter2 = createCounter(10);

// console.log("Лічильник 1:", counter1()); // 1
// console.log("Лічильник 1:", counter1()); // 2
// console.log("Лічильник 2:", counter2()); // 11
// console.log("Лічильник 1:", counter1()); // 3

// const account = createBankAccount(1000);
// console.log(account.getBalance());
// console.log(account.deposit(500));
// console.log(account.withdraw(200));
// console.log(account.withdraw(2000)); // Помилка

console.log("Розкоментуйте код вище для тестування замикань!");

console.log("\n=== ЗАВДАННЯ 4: CALLBACK ФУНКЦІЇ ===");

// TODO: Створіть функції, які приймають callback

// Завдання 4.1: Функція обробки масиву
// function processArray(array, callback) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(???, ???));
//     }
//     return result;
// }

// Завдання 4.2: Функція фільтрації
// function filterArray(array, callback) {
//     let result = [];
//     for (let ??? of ???) {
//         if (callback(???)) {
//             result.push(???);
//         }
//     }
//     return result;
// }

// Завдання 4.3: Функція редукції (зведення)
// function reduceArray(array, callback, initialValue) {
//     let accumulator = ???;
//     for (let ??? of ???) {
//         accumulator = callback(???, ???);
//     }
//     return accumulator;
// }

// Тестування з різними callback функціями:
const numbers = [1, 2, 3, 4, 5];

// console.log("Оригінальний масив:", numbers);
// console.log("Подвоєні числа:", processArray(numbers, (item, index) => item * 2));
// console.log("З індексами:", processArray(numbers, (item, index) => `${item}[${index}]`));

// console.log("Парні числа:", filterArray(numbers, num => num % 2 === 0));
// console.log("Числа > 3:", filterArray(numbers, num => num > 3));

// console.log("Сума:", reduceArray(numbers, (sum, num) => sum + num, 0));
// console.log("Добуток:", reduceArray(numbers, (product, num) => product * num, 1));

console.log("Розкоментуйте код вище для тестування callback!");

console.log("\n=== ЗАВДАННЯ 5: РЕКУРСІЯ ===");

// TODO: Створіть рекурсивні функції

// Завдання 5.1: Рекурсивний факторіал
// function factorial(???) {
//     // Базовий випадок
//     if (??? <= 1) {
//         return 1;
//     }
//     // Рекурсивний виклик
//     return ??? * factorial(??? - 1);
// }

// Завдання 5.2: Рекурсивна функція Фібоначчі
// function fibonacci(???) {
//     if (??? <= 1) {
//         return ???;
//     }
//     return fibonacci(??? - 1) + fibonacci(??? - 2);
// }

// Завдання 5.3: Рекурсивна сума масиву
// function sumArray(???) {
//     // Базовий випадок - порожній масив
//     if (???.length === 0) {
//         return 0;
//     }
//     // Перший елемент + сума решти
//     return ???[0] + sumArray(???.slice(1));
// }

// Завдання 5.4: Рекурсивна перевірка паліндрома
// function isPalindrome(???) {
//     // Прибираємо пробіли та переводимо в нижній регістр
//     let cleaned = str.replace(/\s+/g, '').toLowerCase();
//     
//     function checkPalindrome(???) {
//         if (???.length <= 1) {
//             return true;
//         }
//         if (???[0] !== ???[???.length - 1]) {
//             return false;
//         }
//         return checkPalindrome(???.slice(1, -1));
//     }
//     
//     return checkPalindrome(cleaned);
// }

// Тестування рекурсивних функцій:
// console.log(`Факторіал 5: ${factorial(5)}`);
// console.log(`Факторіал 0: ${factorial(0)}`);

// console.log("Перші 8 чисел Фібоначчі:");
// for (let i = 0; i < 8; i++) {
//     console.log(`fibonacci(${i}) = ${fibonacci(i)}`);
// }

// console.log(`Сума [1,2,3,4,5]: ${sumArray([1,2,3,4,5])}`);
// console.log(`Сума []: ${sumArray([])}`);

// console.log(`"racecar" паліндром: ${isPalindrome("racecar")}`);
// console.log(`"A man a plan a canal Panama" паліндром: ${isPalindrome("A man a plan a canal Panama")}`);
// console.log(`"hello" паліндром: ${isPalindrome("hello")}`);

console.log("Розкоментуйте код вище для тестування рекурсії!");

console.log("\n=== ЗАВДАННЯ 6: ПРАКТИЧНИЙ ПРОЕКТ - СИСТЕМА УПРАВЛІННЯ ЗАВДАННЯМИ ===");

// TODO: Створіть повноцінну систему управління завданнями

// Завдання 6.1: Основні функції для роботи із завданнями
// let tasks = [];
// let nextId = 1;

// function addTask(???, ???, ??? = "medium") {
//     const task = {
//         id: nextId++,
//         title: ???,
//         description: ???,
//         priority: ???,
//         completed: false,
//         createdAt: new Date().toISOString()
//     };
//     tasks.push(task);
//     return `Завдання "${???}" додано з ID: ${task.id}`;
// }

// function completeTask(???) {
//     const task = tasks.find(t => t.id === ???);
//     if (task) {
//         task.completed = true;
//         task.completedAt = new Date().toISOString();
//         return `Завдання "${task.title}" виконано!`;
//     }
//     return "Завдання не знайдено";
// }

// function deleteTask(???) {
//     const index = tasks.findIndex(t => t.id === ???);
//     if (index !== -1) {
//         const deleted = tasks.splice(index, 1)[0];
//         return `Завдання "${deleted.title}" видалено`;
//     }
//     return "Завдання не знайдено";
// }

// function getTasks(??? = null) {
//     let filteredTasks = tasks;
//     if (filter === "completed") {
//         filteredTasks = tasks.filter(t => t.completed);
//     } else if (filter === "pending") {
//         filteredTasks = tasks.filter(t => !t.completed);
//     } else if (filter) {
//         filteredTasks = tasks.filter(t => t.priority === filter);
//     }
//     return filteredTasks;
// }

// function getTaskStats() {
//     const total = tasks.length;
//     const completed = tasks.filter(t => t.completed).length;
//     const pending = total - completed;
//     const byPriority = tasks.reduce((stats, task) => {
//         stats[task.priority] = (stats[task.priority] || 0) + 1;
//         return stats;
//     }, {});
    
//     return {
//         total,
//         completed,
//         pending,
//         byPriority
//     };
// }

// Тестування системи:
// console.log(addTask("Вивчити JavaScript", "Пройти курс по основам JS", "high"));
// console.log(addTask("Купити продукти", "Молоко, хліб, яйця", "medium"));
// console.log(addTask("Прибрати квартиру", "Пилосос та вологе прибирання", "low"));

// console.log("\nВсі завдання:");
// getTasks().forEach(task => {
//     const status = task.completed ? "✅" : "⏳";
//     console.log(`${status} [${task.priority}] ${task.title} - ${task.description}`);
// });

// console.log(completeTask(1));

// console.log("\nСтатистика:");
// const stats = getTaskStats();
// console.log(`Всього: ${stats.total}, Виконано: ${stats.completed}, Очікує: ${stats.pending}`);
// console.log("По пріоритетах:", stats.byPriority);

console.log("Розкоментуйте код вище для тестування системи завдань!");

console.log("\n=== БОНУСНІ ЗАВДАННЯ ===");

// Бонус 1: Створіть калькулятор з історією операцій
// function createCalculator() {
//     let history = [];
//     
//     return {
//         add: (a, b) => { /* TODO */ },
//         subtract: (a, b) => { /* TODO */ },
//         multiply: (a, b) => { /* TODO */ },
//         divide: (a, b) => { /* TODO */ },
//         getHistory: () => history,
//         clearHistory: () => history = []
//     };
// }

// Бонус 2: Функція для глибокого копіювання об'єктів
// function deepClone(obj) {
//     // TODO: Реалізуйте рекурсивне копіювання
// }

// Бонус 3: Створіть функцію throttle (обмеження частоти викликів)
// function throttle(func, delay) {
//     // TODO: Обмежте частоту викликів функції
// }

// Бонус 4: Функція композиції (combine functions)
// function compose(...functions) {
//     // TODO: Створіть функцію, яка комбінує інші функції
// }

console.log("\n=== ПЕРЕВІРКА ЗНАНЬ ===");
console.log("1. Яка різниця між Function Declaration та Function Expression?");
console.log("2. Що таке замикання і як воно працює?");
console.log("3. Коли використовувати стрілкові функції?");
console.log("4. Що таке callback і для чого він потрібен?");
console.log("5. Як працює рекурсія і коли її використовувати?");
console.log("6. Що таке hoisting і як він впливає на функції?");

console.log("\n💡 Підказка: Функції - це основа JavaScript програмування!");
console.log("🎯 Експериментуйте з різними типами функцій!");
console.log("🔄 Замикання дозволяють створювати приватні змінні!");