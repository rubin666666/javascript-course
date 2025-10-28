// ===========================================
// ПРАКТИЧНІ ЗАВДАННЯ - УРОК 6: МАСИВИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: СТВОРЕННЯ ТА БАЗОВІ ОПЕРАЦІЇ ===");

// TODO: Створіть масиви та виконайте базові операції

// Завдання 1.1: Створіть масив міст України
// const ukrainianCities = [???];

// Завдання 1.2: Додайте нове місто в кінець
// ukrainianCities.???(???);

// Завдання 1.3: Додайте місто на початок
// ukrainianCities.???(???);

// Завдання 1.4: Видаліть останнє місто
// const lastCity = ukrainianCities.???();

// Завдання 1.5: Видаліть перше місто
// const firstCity = ukrainianCities.???();

// console.log("Міста України:", ukrainianCities);
// console.log("Видалено останнє:", lastCity);
// console.log("Видалено перше:", firstCity);
// console.log("Кількість міст:", ukrainianCities.length);

console.log("Розкоментуйте код вище для роботи з містами!");

console.log("\n=== ЗАВДАННЯ 2: МЕТОДИ ПОШУКУ ===");

// TODO: Використайте методи пошуку в масивах

const numbers = [10, 25, 30, 45, 60, 75, 30, 90];
const names = ["Анна", "Богдан", "Валентина", "Григорій", "Дарина"];

// Завдання 2.1: Знайдіть індекс числа 30
// const index30 = numbers.???(???);

// Завдання 2.2: Знайдіть останній індекс числа 30
// const lastIndex30 = numbers.???(???);

// Завдання 2.3: Перевірте чи є число 45
// const hasNumber45 = numbers.???(???);

// Завдання 2.4: Знайдіть перше число більше 50
// const firstBigNumber = numbers.???(??? => ??? > 50);

// Завдання 2.5: Знайдіть індекс імені, що починається з "В"
// const vNameIndex = names.???(??? => ???.startsWith("В"));

// console.log("Числа:", numbers);
// console.log("Перший індекс 30:", index30);
// console.log("Останній індекс 30:", lastIndex30);
// console.log("Чи є 45:", hasNumber45);
// console.log("Перше число > 50:", firstBigNumber);
// console.log("Імена:", names);
// console.log("Індекс імені на 'В':", vNameIndex);

console.log("Розкоментуйте код вище для пошуку в масивах!");

console.log("\n=== ЗАВДАННЯ 3: МЕТОДИ ПЕРЕТВОРЕННЯ ===");

// TODO: Використайте map, filter, reduce

const prices = [100, 250, 75, 300, 150, 200];
const students = [
    { name: "Олексій", grade: 85 },
    { name: "Марія", grade: 92 },
    { name: "Іван", grade: 78 },
    { name: "Софія", grade: 96 },
    { name: "Данило", grade: 84 }
];

// Завдання 3.1: Застосуйте знижку 20% до всіх цін
// const discountedPrices = prices.???(??? => ??? * 0.8);

// Завдання 3.2: Знайдіть товари дорожче 150 грн
// const expensiveItems = prices.???(??? => ??? > 150);

// Завдання 3.3: Розрахуйте загальну суму
// const totalPrice = prices.???((??, ??) => ?? + ??, 0);

// Завдання 3.4: Створіть масив імен студентів
// const studentNames = students.???(??? => ???.name);

// Завдання 3.5: Знайдіть студентів з оцінкою > 85
// const excellentStudents = students.???(??? => ???.grade > 85);

// Завдання 3.6: Розрахуйте середню оцінку всіх студентів
// const totalGrades = students.???((??, ??) => ?? + ??.grade, 0);
// const averageGrade = totalGrades / students.length;

// console.log("Оригінальні ціни:", prices);
// console.log("Зі знижкою 20%:", discountedPrices);
// console.log("Дорожче 150 грн:", expensiveItems);
// console.log("Загальна сума:", totalPrice);

// console.log("Студенти:", students);
// console.log("Імена студентів:", studentNames);
// console.log("Відмінники (>85):", excellentStudents);
// console.log("Середня оцінка:", averageGrade.toFixed(2));

console.log("Розкоментуйте код вище для перетворення масивів!");

console.log("\n=== ЗАВДАННЯ 4: СОРТУВАННЯ ===");

// TODO: Відсортуйте масиви різними способами

const randomNumbers = [64, 34, 25, 12, 22, 11, 90, 3];
const products = [
    { name: "Телефон", price: 15000, rating: 4.5 },
    { name: "Ноутбук", price: 25000, rating: 4.8 },
    { name: "Планшет", price: 8000, rating: 4.2 },
    { name: "Навушники", price: 2000, rating: 4.7 }
];

// Завдання 4.1: Відсортуйте числа за зростанням
// const sortedAsc = [...randomNumbers].???((??, ??) => ?? - ??);

// Завдання 4.2: Відсортуйте числа за спаданням
// const sortedDesc = [...randomNumbers].???((??, ??) => ?? - ??);

// Завдання 4.3: Відсортуйте товари за ціною (за зростанням)
// const sortedByPrice = [...products].???((??, ??) => ??.price - ??.price);

// Завдання 4.4: Відсортуйте товари за рейтингом (за спаданням)
// const sortedByRating = [...products].???((??, ??) => ??.rating - ??.rating);

// Завдання 4.5: Відсортуйте товари за назвою (алфавітно)
// const sortedByName = [...products].???((??, ??) => ??.name.localeCompare(??.name));

// console.log("Оригінальні числа:", randomNumbers);
// console.log("За зростанням:", sortedAsc);
// console.log("За спаданням:", sortedDesc);

// console.log("\nТовари за ціною:", sortedByPrice);
// console.log("Товари за рейтингом:", sortedByRating);
// console.log("Товари за назвою:", sortedByName);

console.log("Розкоментуйте код вище для сортування!");

console.log("\n=== ЗАВДАННЯ 5: ПЕРЕВІРКА УМОВ ===");

// TODO: Використайте every, some для перевірки умов

const ages = [18, 25, 30, 17, 22, 19];
const words = ["JavaScript", "Python", "Java", "C++", "Go"];
const scores = [85, 92, 78, 96, 84, 88];

// Завдання 5.1: Перевірте чи всі вікові категорії >= 18
// const allAdults = ages.???(??? => ??? >= 18);

// Завдання 5.2: Перевірте чи є хоча б один неповнолітній
// const hasMinor = ages.???(??? => ??? < 18);

// Завдання 5.3: Перевірте чи всі слова починаються з великої літери
// const allCapitalized = words.???(??? => ???[0] === ???[0].toUpperCase());

// Завдання 5.4: Перевірте чи є хоча б одна оцінка > 90
// const hasExcellentScore = scores.???(??? => ??? > 90);

// Завдання 5.5: Перевірте чи всі оцінки >= 70 (прохідний бал)
// const allPassing = scores.???(??? => ??? >= 70);

// console.log("Віки:", ages);
// console.log("Всі дорослі (>=18):", allAdults);
// console.log("Є неповнолітні:", hasMinor);

// console.log("Слова:", words);
// console.log("Всі з великої літери:", allCapitalized);

// console.log("Оцінки:", scores);
// console.log("Є відмінні (>90):", hasExcellentScore);
// console.log("Всі прохідні (>=70):", allPassing);

console.log("Розкоментуйте код вище для перевірки умов!");

console.log("\n=== ЗАВДАННЯ 6: РОБОТА З ЧАСТИНАМИ МАСИВУ ===");

// TODO: Використайте slice, splice, join

const fruits = ["яблуко", "банан", "апельсин", "виноград", "ківі", "манго"];
const letters = ["a", "b", "c", "d", "e", "f", "g"];

// Завдання 6.1: Отримайте перші 3 фрукти
// const firstThreeFruits = fruits.???(0, 3);

// Завдання 6.2: Отримайте останні 2 фрукти
// const lastTwoFruits = fruits.???(???);

// Завдання 6.3: Отримайте фрукти з індексу 1 до 4 (не включно)
// const middleFruits = fruits.???(1, 4);

// Завдання 6.4: Видаліть елементи з індексу 2, кількістю 2, та додайте "лимон", "грейпфрут"
// const modifiedFruits = [...fruits];
// const removed = modifiedFruits.???(2, 2, "лимон", "грейпфрут");

// Завдання 6.5: Об'єднайте літери в рядок через дефіс
// const letterString = letters.???("-");

// Завдання 6.6: Об'єднайте фрукти в речення
// const fruitSentence = fruits.???(", ");

// console.log("Оригінальні фрукти:", fruits);
// console.log("Перші 3:", firstThreeFruits);
// console.log("Останні 2:", lastTwoFruits);
// console.log("Середні (1-4):", middleFruits);
// console.log("Видалені:", removed);
// console.log("Модифіковані:", modifiedFruits);

// console.log("Літери:", letters);
// console.log("Рядок через дефіс:", letterString);
// console.log("Фрукти в реченні:", fruitSentence);

console.log("Розкоментуйте код вище для роботи з частинами!");

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРОЕКТ - АНАЛІЗАТОР ПРОДАЖІВ ===");

// TODO: Створіть систему аналізу продажів

const salesData = [
    { id: 1, product: "Ноутбук", category: "Електроніка", price: 25000, quantity: 2, date: "2023-10-01" },
    { id: 2, product: "Телефон", category: "Електроніка", price: 15000, quantity: 3, date: "2023-10-02" },
    { id: 3, product: "Стіл", category: "Меблі", price: 5000, quantity: 1, date: "2023-10-01" },
    { id: 4, product: "Стілець", category: "Меблі", price: 2000, quantity: 4, date: "2023-10-03" },
    { id: 5, product: "Книга", category: "Освіта", price: 300, quantity: 10, date: "2023-10-02" },
    { id: 6, product: "Планшет", category: "Електроніка", price: 12000, quantity: 1, date: "2023-10-03" }
];

console.log("Дані продажів:", salesData);

// Завдання 7.1: Розрахуйте загальну виручку для кожного продажу
// const salesWithRevenue = salesData.???(??? => ({
//     ...???,
//     revenue: ???.price * ???.quantity
// }));

// Завдання 7.2: Знайдіть продажі з виручкою більше 20000
// const bigSales = salesWithRevenue.???(??? => ???.revenue > 20000);

// Завдання 7.3: Розрахуйте загальну виручку
// const totalRevenue = salesWithRevenue.???((??, ??) => ?? + ??.revenue, 0);

// Завдання 7.4: Згрупуйте продажі за категоріями
// const salesByCategory = salesData.???((??, ??) => {
//     if (!??[??.category]) {
//         ??[??.category] = [];
//     }
//     ??[??.category].push(??);
//     return ??;
// }, {});

// Завдання 7.5: Розрахуйте середню ціну товарів
// const averagePrice = salesData.???((??, ??) => ?? + ??.price, 0) / salesData.length;

// Завдання 7.6: Знайдіть найдорожчий товар
// const mostExpensive = salesData.???((??, ??) => ??.price > ??.price ? ?? : ??);

// Завдання 7.7: Отримайте унікальні категорії
// const categories = [...new Set(salesData.???(??? => ???.category))];

// Завдання 7.8: Відсортуйте продажі за датою
// const sortedByDate = [...salesData].???((??, ??) => new Date(??.date) - new Date(??.date));

// console.log("\n=== АНАЛІЗ ПРОДАЖІВ ===");
// console.log("Продажі з виручкою:", salesWithRevenue);
// console.log("Великі продажі (>20000):", bigSales);
// console.log("Загальна виручка:", totalRevenue, "грн");
// console.log("Продажі за категоріями:", salesByCategory);
// console.log("Середня ціна:", averagePrice.toFixed(2), "грн");
// console.log("Найдорожчий товар:", mostExpensive);
// console.log("Категорії:", categories);
// console.log("Продажі за датою:", sortedByDate);

console.log("Розкоментуйте код вище для аналізу продажів!");

console.log("\n=== БОНУСНІ ЗАВДАННЯ ===");

// Бонус 1: Створіть функцію для пагінації масиву
// function paginate(array, pageSize, pageNumber) {
//     // TODO: Поверніть частину масиву для конкретної сторінки
// }

// Бонус 2: Реалізуйте власний метод map
// Array.prototype.myMap = function(callback) {
//     // TODO: Створіть власну реалізацію map
// };

// Бонус 3: Знайдіть другий найбільший елемент в масиві
// function findSecondLargest(arr) {
//     // TODO: Знайдіть другий за величиною елемент
// }

// Бонус 4: Створіть функцію для глибокого об'єднання масивів
// function deepFlatten(arr) {
//     // TODO: Розплющіть багатовимірний масив
// }

// Бонус 5: Реалізуйте алгоритм shuffle (перемішування)
// function shuffleArray(arr) {
//     // TODO: Перемішайте елементи масиву випадково
// }

console.log("\n=== ПЕРЕВІРКА ЗНАНЬ ===");
console.log("1. Яка різниця між методами map, filter та reduce?");
console.log("2. Коли використовувати every, а коли some?");
console.log("3. Яка різниця між slice та splice?");
console.log("4. Як правильно сортувати масив об'єктів?");
console.log("5. Що таке мутуючі та немутуючі методи масивів?");
console.log("6. Як створити копію масиву?");

console.log("\n💡 Підказка: Масиви - це потужний інструмент для роботи з даними!");
console.log("🎯 Використовуйте методи ланцюжком для складних операцій!");
console.log("🔍 Завжди перевіряйте, чи змінює метод оригінальний масив!");