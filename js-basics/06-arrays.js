// ===========================================
// УРОК 6: МАСИВИ В JAVASCRIPT
// ===========================================

console.log("=== СТВОРЕННЯ МАСИВІВ ===");

// Різні способи створення масивів
let fruits = ["яблуко", "банан", "апельсин"];
let numbers = new Array(1, 2, 3, 4, 5);
let mixed = [1, "текст", true, null, {name: "об'єкт"}];
let empty = [];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);
console.log("Empty length:", empty.length);

console.log("\n=== ДОСТУП ДО ЕЛЕМЕНТІВ ===");

let colors = ["червоний", "зелений", "синій", "жовтий"];

console.log("Перший колір:", colors[0]);
console.log("Останній колір:", colors[colors.length - 1]);
console.log("Довжина масиву:", colors.length);

// Зміна елементів
colors[1] = "фіолетовий";
console.log("Змінений масив:", colors);

console.log("\n=== МЕТОДИ ДОДАВАННЯ/ВИДАЛЕННЯ ===");

let animals = ["кіт", "собака"];
console.log("Початковий масив:", animals);

// Додавання в кінець
animals.push("хом'як");
console.log("Після push:", animals);

// Додавання на початок
animals.unshift("папуга");
console.log("Після unshift:", animals);

// Видалення з кінця
let lastAnimal = animals.pop();
console.log("Видалений:", lastAnimal);
console.log("Після pop:", animals);

// Видалення з початку
let firstAnimal = animals.shift();
console.log("Видалений:", firstAnimal);
console.log("Після shift:", animals);

console.log("\n=== МЕТОДИ ПОШУКУ ===");

let cities = ["Київ", "Львів", "Одеса", "Харків", "Дніпро"];

// indexOf - індекс першого входження
console.log("Індекс 'Одеса':", cities.indexOf("Одеса"));
console.log("Індекс 'Запоріжжя':", cities.indexOf("Запоріжжя")); // -1 якщо не знайдено

// includes - чи містить елемент
console.log("Чи є 'Львів':", cities.includes("Львів"));
console.log("Чи є 'Луцьк':", cities.includes("Луцьк"));

// find - знаходить перший елемент за умовою
let longCityName = cities.find(city => city.length > 5);
console.log("Перше місто з назвою > 5 символів:", longCityName);

// findIndex - індекс першого елемента за умовою
let longCityIndex = cities.findIndex(city => city.length > 5);
console.log("Індекс першого міста з назвою > 5 символів:", longCityIndex);

console.log("\n=== МЕТОДИ ПЕРЕТВОРЕННЯ ===");

let nums = [1, 2, 3, 4, 5];

// map - створює новий масив з перетвореними елементами
let doubled = nums.map(num => num * 2);
let squares = nums.map(num => num * num);

console.log("Оригінал:", nums);
console.log("Подвоєні:", doubled);
console.log("У квадраті:", squares);

// filter - фільтрує елементи за умовою
let evenNumbers = nums.filter(num => num % 2 === 0);
let bigNumbers = nums.filter(num => num > 3);

console.log("Парні числа:", evenNumbers);
console.log("Числа > 3:", bigNumbers);

// reduce - зводить масив до одного значення
let sum = nums.reduce((total, num) => total + num, 0);
let product = nums.reduce((total, num) => total * num, 1);

console.log("Сума:", sum);
console.log("Добуток:", product);

console.log("\n=== МЕТОДИ СОРТУВАННЯ ===");

let randomNumbers = [64, 34, 25, 12, 22, 11, 90];
let names = ["Анна", "Василь", "Богдан", "Дарина"];

// sort - сортує масив (змінює оригінал!)
console.log("До сортування:", [...randomNumbers]); // Копія для показу

randomNumbers.sort((a, b) => a - b); // За зростанням
console.log("За зростанням:", randomNumbers);

randomNumbers.sort((a, b) => b - a); // За спаданням
console.log("За спаданням:", randomNumbers);

names.sort(); // Алфавітне сортування
console.log("Імена за алфавітом:", names);

// reverse - обертає масив
let reversedNames = [...names].reverse();
console.log("Імена у зворотному порядку:", reversedNames);

console.log("\n=== ІНШІ КОРИСНІ МЕТОДИ ===");

let testNumbers = [1, 2, 3, 4, 5, 6];

// every - чи всі елементи відповідають умові
let allPositive = testNumbers.every(num => num > 0);
console.log("Всі числа позитивні:", allPositive);

// some - чи хоча б один елемент відповідає умові
let hasEven = testNumbers.some(num => num % 2 === 0);
console.log("Є парні числа:", hasEven);

// slice - копіює частину масиву
let firstThree = testNumbers.slice(0, 3);
let lastTwo = testNumbers.slice(-2);
console.log("Перші 3:", firstThree);
console.log("Останні 2:", lastTwo);

// splice - видаляє/додає елементи (змінює оригінал!)
let spliceTest = [1, 2, 3, 4, 5];
let removed = spliceTest.splice(2, 2, "a", "b"); // З індексу 2, видалити 2, додати "a", "b"
console.log("Видалені:", removed);
console.log("Після splice:", spliceTest);

// join - об'єднує елементи в рядок
let joined = colors.join(" - ");
console.log("Об'єднані кольори:", joined);

console.log("\n=== БАГАТОВИМІРНІ МАСИВИ ===");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Матриця:");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

console.log("Елемент [1][2]:", matrix[1][2]); // 6

console.log("\n=== ПРАКТИЧНІ ПРИКЛАДИ ===");

// Приклад 1: Робота з масивом об'єктів
let students = [
    {name: "Олена", grade: 85, subject: "Математика"},
    {name: "Максим", grade: 92, subject: "Фізика"},
    {name: "Софія", grade: 78, subject: "Математика"},
    {name: "Данило", grade: 88, subject: "Хімія"}
];

// Знайти студентів з оцінкою > 80
let goodStudents = students.filter(student => student.grade > 80);
console.log("Студенти з оцінкою > 80:", goodStudents);

// Середня оцінка
let averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Середня оцінка:", averageGrade.toFixed(2));

// Приклад 2: Унікальні значення
let numbersWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
let uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log("З дублікатами:", numbersWithDuplicates);
console.log("Унікальні:", uniqueNumbers);

// Приклад 3: Групування даних
let products = [
    {name: "Хліб", category: "Випічка", price: 25},
    {name: "Молоко", category: "Молочні", price: 35},
    {name: "Булочка", category: "Випічка", price: 15},
    {name: "Сир", category: "Молочні", price: 120}
];

let groupedByCategory = products.reduce((groups, product) => {
    if (!groups[product.category]) {
        groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
}, {});

console.log("Згруповані товари:", groupedByCategory);

// Приклад 4: Пошук найдорожчого товару
let mostExpensive = products.reduce((max, product) => 
    product.price > max.price ? product : max
);
console.log("Найдорожчий товар:", mostExpensive);

// Приклад 5: Створення користувацького методу фільтрації
Array.prototype.filterBy = function(property, value) {
    return this.filter(item => item[property] === value);
};

let bakeryProducts = products.filterBy('category', 'Випічка');
console.log("Випічка:", bakeryProducts);