// ===========================================
// УРОК 1: ЗМІННІ В JAVASCRIPT
// ===========================================

console.log("=== ЗМІННІ ===");

// 1. var (старий спосіб, краще не використовувати)
var oldVariable = "Стара змінна";

// 2. let (для змінних, які можуть змінюватися)
let name = "Максим";
let age = 25;
let isStudent = true;

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Студент:", isStudent);

// Можемо змінити значення let
name = "Анна";
age = 22;
console.log("Нове ім'я:", name);
console.log("Новий вік:", age);

// 3. const (для констант, які не змінюються)
const PI = 3.14159;
const COUNTRY = "Україна";

console.log("PI:", PI);
console.log("Країна:", COUNTRY);

// const не можна перепризначити (видасть помилку)
// PI = 3.14; // Error!

// ===========================================
// ТИПИ ДАНИХ
// ===========================================

console.log("\n=== ТИПИ ДАНИХ ===");

// Числа (number)
let wholeNumber = 42;
let decimalNumber = 3.14;
let negativeNumber = -10;

// Рядки (string)
let singleQuotes = 'Привіт';
let doubleQuotes = "Світ";
let templateLiteral = `Привіт, ${name}!`; // Шаблонні рядки

// Булеві значення (boolean)
let isTrue = true;
let isFalse = false;

// null і undefined
let emptyValue = null;
let undefinedValue;

// Масиви (array)
let numbers = [1, 2, 3, 4, 5];
let fruits = ["яблуко", "банан", "апельсин"];
let mixed = [1, "текст", true, null];

// Об'єкти (object)
let person = {
    name: "Іван",
    age: 30,
    city: "Київ",
    isMarried: false
};

console.log("Число:", wholeNumber);
console.log("Рядок:", singleQuotes);
console.log("Шаблон:", templateLiteral);
console.log("Масив:", fruits);
console.log("Об'єкт:", person);

// Перевірка типу даних
console.log("\n=== ТИПИ ===");
console.log("typeof 42:", typeof 42);
console.log("typeof 'текст':", typeof 'текст');
console.log("typeof true:", typeof true);
console.log("typeof []:", typeof []);
console.log("typeof {}:", typeof {});