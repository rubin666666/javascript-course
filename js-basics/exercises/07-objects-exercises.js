// ===========================================
// ПРАКТІЧНІ ЗАВДАННЯ - УРОК 7: ОБ'ЄКТИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: СТВОРЕННЯ ТА ДОСТУП ДО ВЛАСТИВОСТЕЙ ===");

// TODO: Створіть об'єкти та працюйте з їх властивостями

// Завдання 1.1: Створіть об'єкт студента
// const student = {
//     ???: "Олександра",
//     ???: 21,
//     ???: "Комп'ютерні науки",
//     ???: 3,
//     ???: {
//         math: 95,
//         physics: 87,
//         programming: 98
//     }
// };

// Завдання 1.2: Додайте нові властивості
// student.??? = "oleksandra@university.edu";
// student["???"] = "067-123-4567";

// Завдання 1.3: Отримайте доступ до вкладених властивостей
// const mathGrade = student.???.???;
// const programmingGrade = student["???"]["???"];

// console.log("Студент:", student);
// console.log("Ім'я студента:", student.name);
// console.log("Оцінка з математики:", mathGrade);
// console.log("Оцінка з програмування:", programmingGrade);

console.log("Розкоментуйте код вище для роботи з об'єктом студента!");

console.log("\n=== ЗАВДАННЯ 2: МЕТОДИ ОБ'ЄКТА ===");

// TODO: Створіть об'єкт з методами

// Завдання 2.1: Створіть об'єкт "Банківський рахунок"
// const bankAccount = {
//     ???: 1000,
//     ???: "Іван Петренко",
//     
//     deposit: function(???) {
//         if (??? > 0) {
//             this.??? += ???;
//             return `Поповнено на ${???} грн. Баланс: ${this.???} грн`;
//         }
//         return "Сума повинна бути позитивною";
//     },
//     
//     withdraw: function(???) {
//         if (??? > 0 && ??? <= this.???) {
//             this.??? -= ???;
//             return `Знято ${???} грн. Баланс: ${this.???} грн`;
//         }
//         return "Недостатньо коштів або невірна сума";
//     },
//     
//     getBalance: function() {
//         return `Баланс рахунку ${this.???}: ${this.???} грн`;
//     },
//     
//     transfer: function(???, ???) {
//         if (??? > 0 && ??? <= this.???) {
//             this.??? -= ???;
//             ???.??? += ???;
//             return `Переказано ${???} грн для ${???.???}`;
//         }
//         return "Неможливо виконати переказ";
//     }
// };

// Завдання 2.2: Створіть другий рахунок
// const account2 = {
//     balance: 500,
//     owner: "Марія Іванова"
// };

// Тестування методів:
// console.log(bankAccount.getBalance());
// console.log(bankAccount.deposit(200));
// console.log(bankAccount.withdraw(150));
// console.log(bankAccount.transfer(100, account2));
// console.log("Рахунок 2:", account2);

console.log("Розкоментуйте код вище для роботи з методами!");

console.log("\n=== ЗАВДАННЯ 3: ДЕСТРУКТУРИЗАЦІЯ ===");

// TODO: Використайте деструктуризацію об'єктів

const user = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    profile: {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        address: {
            city: "Київ",
            street: "Хрещатик",
            building: 15
        }
    },
    preferences: {
        theme: "dark",
        language: "uk",
        notifications: true
    }
};

// Завдання 3.1: Базова деструктуризація
// const {???, ???} = user;

// Завдання 3.2: Деструктуризація з перейменуванням
// const {id: ???, username: ???} = user;

// Завдання 3.3: Вкладена деструктуризація
// const {profile: {???, ???}} = user;

// Завдання 3.4: Глибока вкладена деструктуризація
// const {profile: {address: {???, ???}}} = user;

// Завдання 3.5: Деструктуризація з значеннями за замовчуванням
// const {phone = "Не вказано", website = "Немає"} = user;

// Завдання 3.6: Деструктуризація в параметрах функції
// function displayUserInfo({username, email, profile: {firstName, lastName}}) {
//     return `${firstName} ${lastName} (${username}) - ${email}`;
// }

// console.log("Користувач:", user);
// console.log("Email та username:", email, username);
// console.log("ID та логін:", userId, login);
// console.log("Ім'я та прізвище:", firstName, lastName);
// console.log("Місто та вулиця:", city, street);
// console.log("Телефон:", phone, "Сайт:", website);
// console.log("Інфо:", displayUserInfo(user));

console.log("Розкоментуйте код вище для деструктуризації!");

console.log("\n=== ЗАВДАННЯ 4: КОПІЮВАННЯ ОБ'ЄКТІВ ===");

// TODO: Дослідіть різні способи копіювання

const originalProduct = {
    name: "Ноутбук",
    price: 25000,
    specs: {
        cpu: "Intel i5",
        ram: "8GB",
        storage: "256GB SSD"
    },
    features: ["WiFi", "Bluetooth", "USB-C"]
};

// Завдання 4.1: Поверхнева копія через spread
// const shallowCopy1 = {...???};

// Завдання 4.2: Поверхнева копія через Object.assign
// const shallowCopy2 = Object.assign({}, ???);

// Завдання 4.3: Спробуйте змінити вкладений об'єкт
// shallowCopy1.specs.cpu = "Intel i7";
// shallowCopy1.features.push("Webcam");

// Завдання 4.4: Глибока копія (простий спосіб)
// const deepCopy = JSON.parse(JSON.stringify(???));
// deepCopy.specs.ram = "16GB";
// deepCopy.features.push("Backlit keyboard");

// console.log("Оригінал:", originalProduct);
// console.log("Поверхнева копія 1:", shallowCopy1);
// console.log("Поверхнева копія 2:", shallowCopy2);
// console.log("Глибока копія:", deepCopy);

console.log("Розкоментуйте код вище для копіювання об'єктів!");

console.log("\n=== ЗАВДАННЯ 5: МЕТОДИ Object ===");

// TODO: Використайте вбудовані методи Object

const inventory = {
    laptop: 15,
    phone: 30,
    tablet: 8,
    headphones: 25,
    keyboard: 40
};

const productInfo = {
    laptop: { price: 25000, category: "Електроніка" },
    phone: { price: 15000, category: "Електроніка" },
    tablet: { price: 12000, category: "Електроніка" },
    headphones: { price: 2000, category: "Аксесуари" },
    keyboard: { price: 1500, category: "Аксесуари" }
};

// Завдання 5.1: Отримайте масив ключів
// const productNames = Object.???(???);

// Завдання 5.2: Отримайте масив значень (кількості)
// const quantities = Object.???(???);

// Завдання 5.3: Отримайте масив пар [ключ, значення]
// const inventoryEntries = Object.???(???);

// Завдання 5.4: Перевірте наявність властивості
// const hasLaptop = inventory.???(???);
// const hasCamera = inventory.???(???);

// Завдання 5.5: Створіть новий об'єкт з entries
// const doubledInventory = Object.???(
//     inventoryEntries.???(([???, ???]) => [???, ??? * 2])
// );

// Завдання 5.6: Об'єднайте об'єкти
// const combinedData = {};
// for (let product of productNames) {
//     combinedData[product] = {
//         quantity: inventory[???],
//         ...productInfo[???]
//     };
// }

// console.log("Інвентар:", inventory);
// console.log("Назви товарів:", productNames);
// console.log("Кількості:", quantities);
// console.log("Записи інвентарю:", inventoryEntries);
// console.log("Є ноутбук:", hasLaptop);
// console.log("Є камера:", hasCamera);
// console.log("Подвоєний інвентар:", doubledInventory);
// console.log("Об'єднані дані:", combinedData);

console.log("Розкоментуйте код вище для роботи з методами Object!");

console.log("\n=== ЗАВДАННЯ 6: ГЕТТЕРИ ТА СЕТТЕРИ ===");

// TODO: Створіть об'єкт з геттерами та сеттерами

// Завдання 6.1: Створіть об'єкт "Прямокутник"
// const rectangle = {
//     _width: 10,
//     _height: 5,
//     
//     get width() {
//         return this.???;
//     },
//     
//     set width(???) {
//         if (??? > 0) {
//             this.??? = ???;
//         } else {
//             console.log("Ширина повинна бути позитивною");
//         }
//     },
//     
//     get height() {
//         return this.???;
//     },
//     
//     set height(???) {
//         if (??? > 0) {
//             this.??? = ???;
//         } else {
//             console.log("Висота повинна бути позитивною");
//         }
//     },
//     
//     get area() {
//         return this.??? * this.???;
//     },
//     
//     get perimeter() {
//         return 2 * (this.??? + this.???);
//     },
//     
//     set dimensions(???) {
//         [this._width, this._height] = ???;
//     }
// };

// Тестування геттерів і сеттерів:
// console.log("Початкові розміри:", rectangle.width, "x", rectangle.height);
// console.log("Площа:", rectangle.area);
// console.log("Периметр:", rectangle.perimeter);

// rectangle.width = 15;
// rectangle.height = 8;
// console.log("Нові розміри:", rectangle.width, "x", rectangle.height);
// console.log("Нова площа:", rectangle.area);

// rectangle.dimensions = [20, 12];
// console.log("Розміри через setter:", rectangle.width, "x", rectangle.height);

// rectangle.width = -5; // Помилка

console.log("Розкоментуйте код вище для роботи з геттерами/сеттерами!");

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРОЕКТ - СИСТЕМА УПРАВЛІННЯ ЗАВДАННЯМИ ===");

// TODO: Створіть повноцінну систему управління завданнями

// Завдання 7.1: Створіть об'єкт TaskManager
// const taskManager = {
//     tasks: [],
//     nextId: 1,
//     
//     addTask: function({???, ???, ??? = "medium", ??? = new Date()}) {
//         const task = {
//             id: this.nextId++,
//             title: ???,
//             description: ???,
//             priority: ???,
//             dueDate: ???,
//             completed: false,
//             createdAt: new Date(),
//             tags: []
//         };
//         this.tasks.push(task);
//         return task;
//     },
//     
//     completeTask: function(???) {
//         const task = this.tasks.find(t => t.id === ???);
//         if (task) {
//             task.completed = true;
//             task.completedAt = new Date();
//             return task;
//         }
//         return null;
//     },
//     
//     deleteTask: function(???) {
//         const index = this.tasks.findIndex(t => t.id === ???);
//         if (index !== -1) {
//             return this.tasks.splice(index, 1)[0];
//         }
//         return null;
//     },
//     
//     updateTask: function(???, ???) {
//         const task = this.tasks.find(t => t.id === ???);
//         if (task) {
//             Object.assign(task, ???);
//             task.updatedAt = new Date();
//             return task;
//         }
//         return null;
//     },
//     
//     getTasks: function(??? = {}) {
//         let filteredTasks = [...this.tasks];
//         
//         if (???.completed !== undefined) {
//             filteredTasks = filteredTasks.filter(t => t.completed === ???.completed);
//         }
//         
//         if (???.priority) {
//             filteredTasks = filteredTasks.filter(t => t.priority === ???.priority);
//         }
//         
//         if (???.tag) {
//             filteredTasks = filteredTasks.filter(t => t.tags.includes(???.tag));
//         }
//         
//         return filteredTasks;
//     },
//     
//     getTasksByDueDate: function(???) {
//         const today = new Date();
//         const dueDate = new Date(today);
//         dueDate.setDate(today.getDate() + ???);
//         
//         return this.tasks.filter(task => 
//             !task.completed && 
//             new Date(task.dueDate) <= dueDate
//         );
//     },
//     
//     addTagToTask: function(???, ???) {
//         const task = this.tasks.find(t => t.id === ???);
//         if (task && !task.tags.includes(???)) {
//             task.tags.push(???);
//             return task;
//         }
//         return null;
//     },
//     
//     getStatistics: function() {
//         const total = this.tasks.length;
//         const completed = this.tasks.filter(t => t.completed).length;
//         const pending = total - completed;
//         
//         const byPriority = this.tasks.reduce((stats, task) => {
//             stats[task.priority] = (stats[task.priority] || 0) + 1;
//             return stats;
//         }, {});
//         
//         const overdue = this.tasks.filter(task => 
//             !task.completed && new Date(task.dueDate) < new Date()
//         ).length;
//         
//         return {
//             total,
//             completed,
//             pending,
//             overdue,
//             byPriority,
//             completionRate: total > 0 ? (completed / total * 100).toFixed(1) : 0
//         };
//     }
// };

// Тестування системи:
// console.log("=== ТЕСТУВАННЯ СИСТЕМИ ЗАВДАНЬ ===");

// Додавання завдань
// const task1 = taskManager.addTask({
//     title: "Вивчити JavaScript",
//     description: "Пройти курс по основам JavaScript",
//     priority: "high",
//     dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Через тиждень
// });

// const task2 = taskManager.addTask({
//     title: "Купити продукти",
//     description: "Молоко, хліб, яйця",
//     priority: "medium",
//     dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) // Завтра
// });

// const task3 = taskManager.addTask({
//     title: "Прибрати квартиру",
//     description: "Генеральне прибирання",
//     priority: "low",
//     dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // Через 3 дні
// });

// Додавання тегів
// taskManager.addTagToTask(1, "навчання");
// taskManager.addTagToTask(1, "програмування");
// taskManager.addTagToTask(2, "дім");
// taskManager.addTagToTask(3, "дім");

// Виконання завдання
// taskManager.completeTask(2);

// Оновлення завдання
// taskManager.updateTask(3, { priority: "medium", description: "Прибрати кухню та ванну" });

// Отримання завдань
// console.log("Всі завдання:", taskManager.getTasks());
// console.log("Не виконані завдання:", taskManager.getTasks({ completed: false }));
// console.log("Високі пріоритети:", taskManager.getTasks({ priority: "high" }));
// console.log("Завдання з тегом 'дім':", taskManager.getTasks({ tag: "дім" }));

// Завдання що мають вичерпатись найближчим часом
// console.log("Завдання на найближчі 2 дні:", taskManager.getTasksByDueDate(2));

// Статистика
// console.log("Статистика:", taskManager.getStatistics());

console.log("Розкоментуйте код вище для тестування системи завдань!");

console.log("\n=== БОНУСНІ ЗАВДАННЯ ===");

// Бонус 1: Створіть власну реалізацію Object.assign
// function customObjectAssign(target, ...sources) {
//     // TODO: Реалізуйте логіку Object.assign
// }

// Бонус 2: Створіть функцію глибокого порівняння об'єктів
// function deepEqual(obj1, obj2) {
//     // TODO: Порівняйте об'єкти рекурсивно
// }

// Бонус 3: Реалізуйте паттерн Observer
// function createObservable() {
//     // TODO: Створіть об'єкт з можливістю підписки на зміни
// }

// Бонус 4: Створіть валідатор об'єктів
// function createValidator(schema) {
//     // TODO: Створіть функцію для валідації об'єктів за схемою
// }

console.log("\n=== ПЕРЕВІРКА ЗНАНЬ ===");
console.log("1. Яка різниця між крапковою нотацією та квадратними дужками?");
console.log("2. Що таке 'this' в методах об'єкта?");
console.log("3. Як працює деструктуризація об'єктів?");
console.log("4. Яка різниця між поверхневою та глибокою копією?");
console.log("5. Для чого потрібні геттери та сеттери?");
console.log("6. Які методи Object найкорисніші?");

console.log("\n💡 Підказка: Об'єкти - це основа JavaScript!");
console.log("🎯 Використовуйте деструктуризацію для читабельного коду!");
console.log("🔧 Методи об'єктів дозволяють інкапсулювати логіку!");