// ===========================================
// ПРАКТИЧНІ ЗАВДАННЯ - УРОК 1: ЗМІННІ
// ===========================================

console.log("=== ЗАВДАННЯ 1: СТВОРЕННЯ ЗМІННИХ ===");

// TODO: Створіть змінні для збереження інформації про студента
// Використайте відповідні типи змінних (let/const)

// Завдання 1.1: Створіть константу для імені студента
const studentName = "Євгеній";

// Завдання 1.2: Створіть змінну для віку студента (може змінюватися)
let studentAge = 33; // Замініть на ваш вік

// Завдання 1.3: Створіть константу для університету
const university = "ДДТУ";

// Завдання 1.4: Створіть змінну для курсу навчання
let currentCourse = 1; // Замініть на ваш курс

// Завдання 1.5: Створіть змінну для статусу стипендії (true/false)
let hasScholarship = false; // true або false

// Тестування змінних:
console.log(`Студент: ${studentName}`);
console.log(`Вік: ${studentAge} років`);
console.log(`Університет: ${university}`);
console.log(`Курс: ${currentCourse}`);
console.log(`Стипендія: ${hasScholarship ? "Є" : "Немає"}`);

console.log("\n=== ЗАВДАННЯ 2: РОБОТА З ТИПАМИ ДАНИХ ===");

// TODO: Створіть змінні різних типів і перевірте їх типи

// Завдання 2.1: Створіть число з плаваючою комою
let price = 99.99; // Змініть на вашу ціну

// Завдання 2.2: Створіть рядок з описом товару
let productDescription = "Опис вашого товару тут";

// Завдання 2.3: Створіть булеву змінну для наявності товару
let inStock = true; // true або false

// Завдання 2.4: Створіть змінну зі значенням null
let discountCode = null;

// Завдання 2.5: Створіть неініціалізовану змінну
let category;

// Тестування типів даних:
console.log(`price: ${price} (тип: ${typeof price})`);
console.log(`productDescription: ${productDescription} (тип: ${typeof productDescription})`);
console.log(`inStock: ${inStock} (тип: ${typeof inStock})`);
console.log(`discountCode: ${discountCode} (тип: ${typeof discountCode})`);
console.log(`category: ${category} (тип: ${typeof category})`);

console.log("\n=== ЗАВДАННЯ 3: ШАБЛОННІ РЯДКИ ===");

// TODO: Використайте шаблонні рядки для створення повідомлень

// Дані для роботи:
const userName = "Анна";
const userAge = 25;
const userCity = "Київ";
const currentYear = 2023;

// Завдання 3.1: Створіть привітальне повідомлення
// let greeting = ``;

// Завдання 3.2: Розрахуйте рік народження і створіть повідомлення
// let birthYear = currentYear - userAge;
// let birthMessage = ``;

// Завдання 3.3: Створіть повне представлення користувача
// let userProfile = ``;

// Розкоментуйте і заповніть код вище, потім запустіть:

/*
console.log(greeting);
console.log(birthMessage);
console.log(userProfile);
*/

console.log("\n=== ЗАВДАННЯ 4: МАСИВИ ===");

// TODO: Створіть масиви для різних категорій даних

// Завдання 4.1: Створіть масив з назвами міст України
// let ukrainianCities = [];

// Завдання 4.2: Створіть масив з числами від 1 до 10
// let numbers = [];

// Завдання 4.3: Створіть змішаний масив з різними типами даних
// let mixedData = [];

// Розкоментуйте і заповніть масиви, потім запустіть:

/*
console.log("Міста України:", ukrainianCities);
console.log("Перше місто:", ukrainianCities[0]);
console.log("Кількість міст:", ukrainianCities.length);

console.log("Числа:", numbers);
console.log("Останнє число:", numbers[numbers.length - 1]);

console.log("Змішані дані:", mixedData);
console.log("Типи даних у масиві:");
mixedData.forEach((item, index) => {
    console.log(`  [${index}]: ${item} (${typeof item})`);
});
*/

console.log("\n=== ЗАВДАННЯ 5: ОБ'ЄКТИ ===");

// TODO: Створіть об'єкт з інформацією про книгу

// Завдання 5.1: Створіть об'єкт book з властивостями:
// - title (назва)
// - author (автор)  
// - year (рік видання)
// - pages (кількість сторінок)
// - isRead (чи прочитана)

// let book = {};

// Завдання 5.2: Створіть об'єкт автомобіля з вкладеними об'єктами
// let car = {
//     brand: "",
//     model: "",
//     year: 0,
//     specs: {
//         engine: "",
//         fuelType: "",
//         transmission: ""
//     },
//     features: []
// };

// Розкоментуйте і заповніть об'єкти, потім запустіть:

/*
console.log("Інформація про книгу:");
console.log(`Назва: ${book.title}`);
console.log(`Автор: ${book.author}`);
console.log(`Рік: ${book.year}`);
console.log(`Сторінок: ${book.pages}`);
console.log(`Прочитана: ${book.isRead ? "Так" : "Ні"}`);

console.log("\nІнформація про автомобіль:");
console.log(`Марка: ${car.brand} ${car.model}`);
console.log(`Рік: ${car.year}`);
console.log(`Двигун: ${car.specs.engine}`);
console.log(`Паливо: ${car.specs.fuelType}`);
console.log(`Коробка: ${car.specs.transmission}`);
console.log(`Особливості: ${car.features.join(", ")}`);
*/

console.log("\n=== ЗАВДАННЯ 6: ПРАКТИЧНИЙ ПРОЕКТ ===");

// TODO: Створіть систему управління студентами

// Завдання 6.1: Створіть масив об'єктів студентів
// Кожен студент повинен мати: ім'я, вік, курс, спеціальність, оцінки (масив)

// let students = [
//     {
//         name: "",
//         age: 0,
//         course: 0,
//         specialty: "",
//         grades: []
//     }
//     // Додайте ще 2-3 студентів
// ];

// Завдання 6.2: Виведіть інформацію про кожного студента

/*
console.log("=== СПИСОК СТУДЕНТІВ ===");
students.forEach((student, index) => {
    console.log(`\n${index + 1}. ${student.name}`);
    console.log(`   Вік: ${student.age} років`);
    console.log(`   Курс: ${student.course}`);
    console.log(`   Спеціальність: ${student.specialty}`);
    console.log(`   Оцінки: ${student.grades.join(", ")}`);
    
    // Обчислюємо середню оцінку
    if (student.grades.length > 0) {
        let averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
        console.log(`   Середня оцінка: ${averageGrade.toFixed(2)}`);
    }
});
*/

// ===========================================
// БОНУСНІ ЗАВДАННЯ (СКЛАДНІШІ)
// ===========================================

console.log("\n=== БОНУСНІ ЗАВДАННЯ ===");

// Бонус 1: Створіть об'єкт "Калькулятор" з методами
// let calculator = {
//     result: 0,
//     // TODO: Додайте методи add, subtract, multiply, divide, clear
// };

// Бонус 2: Створіть функцію для валідації email
// function isValidEmail(email) {
//     // TODO: Перевірте чи містить @ та крапку
//     return false;  // Замініть на логіку
// }

// Бонус 3: Створіть об'єкт для роботи з температурою
// let temperatureConverter = {
//     // TODO: Додайте методи для конвертації між Цельсієм, Фаренгейтом та Кельвіном
// };

console.log("\n💡 Підказка: Змініть значення змінних на власні!");
console.log("🎯 Експериментуйте з різними типами даних!");
console.log("📝 Додайте власні змінні та протестуйте їх!");

// ===========================================
// ПЕРЕВІРКА ЗНАНЬ
// ===========================================

console.log("\n=== ПИТАННЯ ДЛЯ САМОПЕРЕВІРКИ ===");
console.log("1. Яка різниця між let, const та var?");
console.log("2. Які основні типи даних є в JavaScript?");
console.log("3. Як перевірити тип змінної?");
console.log("4. Що таке шаблонні рядки і як їх використовувати?");
console.log("5. Як звертатися до властивостей об'єкта?");
console.log("\n🤔 Можете відповісти на всі питання? Якщо ні - перегляньте урок ще раз!");