# 📖 JavaScript Довідник-Словник

Швидкий довідник по JavaScript синтаксису та функціям. Коли щось забув - заходиш сюди і швидко знаходиш приклад.

## 📋 Зміст

- [🔤 Змінні та типи](#-змінні-та-типи)
- [🧮 Оператори](#-оператори)
- [❓ Умовні конструкції](#-умовні-конструкції)
- [🔄 Цикли](#-цикли)
- [⚡ Функції](#-функції)
- [📊 Масиви](#-масиви)
- [🏗️ Об'єкти](#️-обєкти)
- [🎯 Методи рядків](#-методи-рядків)
- [🔢 Методи чисел](#-методи-чисел)
- [📅 Дата та час](#-дата-та-час)
- [🚨 Обробка помилок](#-обробка-помилок)

---

## 🔤 Змінні та типи

### Оголошення змінних
```javascript
let name = "Іван";           // Можна змінювати
const age = 25;              // Незмінна
var city = "Київ";           // Старий стиль (не рекомендується)
```

### Типи даних
```javascript
// Примітивні типи
let number = 42;             // Number
let text = "Привіт";         // String
let isTrue = true;           // Boolean
let nothing = null;          // Null
let undefined = undefined;   // Undefined

// Перевірка типу
typeof 42;                   // "number"
typeof "text";               // "string"
typeof true;                 // "boolean"
```

### Template literals (шаблонні рядки)
```javascript
let name = "Марія";
let age = 30;
let message = `Привіт, мене звати ${name} і мені ${age} років`;
// "Привіт, мене звати Марія і мені 30 років"
```

---

## 🧮 Оператори

### Арифметичні
```javascript
let a = 10, b = 3;

a + b;    // 13 (додавання)
a - b;    // 7  (віднімання)
a * b;    // 30 (множення)
a / b;    // 3.33 (ділення)
a % b;    // 1  (остача від ділення)
a ** b;   // 1000 (степінь)

// Скорочені оператори
a += 5;   // a = a + 5
a++;      // a = a + 1
++a;      // a = a + 1 (спочатку змінює, потім повертає)
```

### Порівняння
```javascript
5 == "5";     // true  (м'яке порівняння)
5 === "5";    // false (суворе порівняння)
5 != "5";     // false
5 !== "5";    // true
5 > 3;        // true
5 >= 5;       // true
```

### Логічні
```javascript
true && false;   // false (І)
true || false;   // true  (АБО)
!true;          // false (НЕ)

// Short-circuit evaluation
name || "Гість";           // Якщо name пустий, поверне "Гість"
user && user.name;         // Перевірить user перед зверненням до name
```

### Тернарний оператор
```javascript
let status = age >= 18 ? "дорослий" : "дитина";
```

---

## ❓ Умовні конструкції

### if/else
```javascript
if (age >= 18) {
    console.log("Дорослий");
} else if (age >= 13) {
    console.log("Підліток");
} else {
    console.log("Дитина");
}
```

### switch
```javascript
switch (day) {
    case "понеділок":
        console.log("Початок тижня");
        break;
    case "субота":
    case "неділя":
        console.log("Вихідний");
        break;
    default:
        console.log("Робочий день");
}
```

### Truthy/Falsy значення
```javascript
// Falsy значення (false в умовах):
false, 0, "", null, undefined, NaN

// Truthy значення (true в умовах):
true, 1, "text", [], {}, -1
```

---

## 🔄 Цикли

### for
```javascript
// Звичайний for
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// for...of (для масивів, рядків)
let arr = [1, 2, 3];
for (let item of arr) {
    console.log(item); // 1, 2, 3
}

// for...in (для об'єктів)
let obj = {a: 1, b: 2};
for (let key in obj) {
    console.log(key, obj[key]); // a 1, b 2
}
```

### while
```javascript
let i = 0;
while (i < 3) {
    console.log(i); // 0, 1, 2
    i++;
}

// do...while (виконується мінімум 1 раз)
do {
    console.log("Виконається хоча б раз");
} while (false);
```

### break та continue
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Пропустити 3
    if (i === 7) break;     // Зупинитися на 7
    console.log(i);         // 0, 1, 2, 4, 5, 6
}
```

---

## ⚡ Функції

### Різні способи створення
```javascript
// Function declaration
function greet(name) {
    return `Привіт, ${name}!`;
}

// Function expression
const greet2 = function(name) {
    return `Привіт, ${name}!`;
};

// Arrow function
const greet3 = (name) => `Привіт, ${name}!`;
const greet4 = name => `Привіт, ${name}!`;  // Одна параметр
const sayHi = () => "Привіт!";              // Без параметрів
```

### Параметри за замовчуванням
```javascript
function greet(name = "Гість", age = 0) {
    return `Привіт, ${name}! Тобі ${age} років.`;
}

greet();                    // "Привіт, Гість! Тобі 0 років."
greet("Іван", 25);          // "Привіт, Іван! Тобі 25 років."
```

### Rest параметри
```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10
```

### Callback функції
```javascript
function processData(data, callback) {
    let result = data * 2;
    callback(result);
}

processData(5, (result) => {
    console.log(result); // 10
});
```

### Замикання (Closures)
```javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
myCounter(); // 1
myCounter(); // 2
```

---

## 📊 Масиви

### Створення та основи
```javascript
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(3);           // [empty × 3]
let arr3 = Array.from("hello");    // ["h", "e", "l", "l", "o"]

arr.length;                        // 5
arr[0];                           // 1 (перший елемент)
arr[arr.length - 1];              // 5 (останній елемент)
```

### Додавання/видалення елементів
```javascript
let fruits = ["яблуко", "банан"];

// Додавання
fruits.push("апельсин");           // Додати в кінець
fruits.unshift("груша");           // Додати на початок
// ["груша", "яблуко", "банан", "апельсин"]

// Видалення
fruits.pop();                      // Видалити останній
fruits.shift();                    // Видалити перший
// ["яблуко", "банан"]

// Видалення по індексу
fruits.splice(1, 1);               // Видалити 1 елемент з індексу 1
```

### Пошук в масиві
```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.indexOf(3);                // 2 (індекс елемента)
numbers.includes(4);               // true
numbers.find(x => x > 3);          // 4 (перший елемент > 3)
numbers.findIndex(x => x > 3);     // 3 (індекс першого елемента > 3)
```

### Методи обробки масивів
```javascript
let numbers = [1, 2, 3, 4, 5];

// map - створює новий масив
let doubled = numbers.map(x => x * 2);      // [2, 4, 6, 8, 10]

// filter - фільтрує елементи
let even = numbers.filter(x => x % 2 === 0); // [2, 4]

// reduce - зводить до одного значення
let sum = numbers.reduce((acc, x) => acc + x, 0); // 15

// forEach - виконує функцію для кожного елемента
numbers.forEach(x => console.log(x));

// some/every - перевіряють умову
numbers.some(x => x > 4);          // true (є елементи > 4)
numbers.every(x => x > 0);         // true (всі елементи > 0)
```

### Сортування
```javascript
let fruits = ["банан", "яблуко", "апельсин"];
fruits.sort();                     // ["апельсин", "банан", "яблуко"]

let numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => a - b);     // [1, 1, 3, 4, 5] (по зростанню)
numbers.sort((a, b) => b - a);     // [5, 4, 3, 1, 1] (по спаданню)
```

### Об'єднання масивів
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];

// concat
let combined = arr1.concat(arr2);   // [1, 2, 3, 4]

// spread operator
let combined2 = [...arr1, ...arr2]; // [1, 2, 3, 4]

// join - перетворення в рядок
arr1.join(", ");                    // "1, 2"
```

---

## 🏗️ Об'єкти

### Створення об'єктів
```javascript
// Object literal
let person = {
    name: "Іван",
    age: 30,
    city: "Київ"
};

// Constructor
let person2 = new Object();
person2.name = "Марія";

// Object.create
let person3 = Object.create(person);
```

### Доступ до властивостей
```javascript
let person = {name: "Іван", age: 30};

// Dot notation
person.name;                    // "Іван"
person.age = 31;               // Змінити значення

// Bracket notation
person["name"];                // "Іван"
let prop = "age";
person[prop];                  // 30

// Додавання нових властивостей
person.city = "Львів";
person["country"] = "Україна";
```

### Методи об'єкта
```javascript
let calculator = {
    a: 5,
    b: 3,
    sum() {
        return this.a + this.b;
    },
    multiply: function() {
        return this.a * this.b;
    }
};

calculator.sum();              // 8
calculator.multiply();         // 15
```

### Деструктуризація
```javascript
let person = {name: "Іван", age: 30, city: "Київ"};

// Деструктуризація об'єкта
let {name, age} = person;
console.log(name, age);        // "Іван" 30

// З перейменуванням
let {name: fullName, age: years} = person;

// З значеннями за замовчуванням
let {name, height = 180} = person;
```

### Важливі методи Object
```javascript
let person = {name: "Іван", age: 30, city: "Київ"};

Object.keys(person);           // ["name", "age", "city"]
Object.values(person);         // ["Іван", 30, "Київ"]
Object.entries(person);        // [["name", "Іван"], ["age", 30], ["city", "Київ"]]

// Копіювання об'єкта
let copy = Object.assign({}, person);
let copy2 = {...person};       // Spread operator

// Перевірка властивостей
person.hasOwnProperty("name"); // true
"name" in person;              // true
```

---

## 🎯 Методи рядків

### Основні методи
```javascript
let text = "Привіт, світ!";

text.length;                   // 13
text.charAt(0);               // "П"
text.indexOf("світ");         // 8
text.includes("Привіт");      // true
text.startsWith("При");       // true
text.endsWith("!");           // true
```

### Зміна рядків
```javascript
let text = "Привіт, світ!";

text.toLowerCase();           // "привіт, світ!"
text.toUpperCase();          // "ПРИВІТ, СВІТ!"
text.trim();                 // Видаляє пробіли з початку і кінця
text.replace("світ", "Україна"); // "Привіт, Україна!"
text.slice(0, 6);            // "Привіт"
text.substring(8, 12);       // "світ"
```

### Розділення рядків
```javascript
let csv = "яблуко,банан,апельсин";
csv.split(",");              // ["яблуко", "банан", "апельсин"]

let text = "a-b-c";
text.split("-");             // ["a", "b", "c"]
text.split("");              // ["a", "-", "b", "-", "c"]
```

### Шаблонні рядки та спеціальні символи
```javascript
let multiline = `Перший рядок
Другий рядок
Третій рядок`;

let text = "Рядок з \"лапками\" та 'апострофами'";
let path = "C:\\Users\\Name\\file.txt";  // Екранування зворотної косої
```

---

## 🔢 Методи чисел

### Перетворення типів
```javascript
Number("123");               // 123
parseInt("123px");           // 123
parseFloat("123.45px");      // 123.45
String(123);                 // "123"
(123).toString();            // "123"
```

### Перевірка чисел
```javascript
Number.isInteger(123);       // true
Number.isNaN(NaN);          // true
isFinite(123);              // true
```

### Математичні функції
```javascript
Math.round(4.7);            // 5
Math.ceil(4.1);             // 5 (округлення вгору)
Math.floor(4.9);            // 4 (округлення вниз)
Math.abs(-5);               // 5
Math.max(1, 2, 3);          // 3
Math.min(1, 2, 3);          // 1
Math.random();              // Випадкове число 0-1
Math.pow(2, 3);             // 8 (2 в степені 3)
Math.sqrt(16);              // 4
```

### Форматування чисел
```javascript
let num = 123.456;

num.toFixed(2);             // "123.46"
num.toPrecision(4);         // "123.5"

// Випадкове число в діапазоні
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomBetween(1, 10);       // Число від 1 до 10
```

---

## 📅 Дата та час

### Створення дати
```javascript
let now = new Date();                    // Поточна дата
let specific = new Date("2023-12-25");   // Конкретна дата
let custom = new Date(2023, 11, 25);     // Рік, місяць (0-11), день
```

### Отримання інформації
```javascript
let date = new Date();

date.getFullYear();         // 2023
date.getMonth();            // 0-11 (0 = січень)
date.getDate();             // 1-31
date.getDay();              // 0-6 (0 = неділя)
date.getHours();            // 0-23
date.getMinutes();          // 0-59
date.getSeconds();          // 0-59
```

### Форматування дати
```javascript
let date = new Date();

date.toString();            // Повний рядок
date.toDateString();        // Тільки дата
date.toTimeString();        // Тільки час
date.toLocaleDateString("uk-UA"); // Українське форматування
```

---

## 🚨 Обробка помилок

### try/catch/finally
```javascript
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("Помилка:", error.message);
} finally {
    console.log("Цей блок виконається завжди");
}
```

### Створення власних помилок
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Ділення на нуль неможливе");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (error) {
    console.log(error.message); // "Ділення на нуль неможливе"
}
```

---

## 🎯 Корисні скорочення та трюки

### Перевірка на існування
```javascript
// Замість if (user !== null && user !== undefined)
if (user?.name) {
    console.log(user.name);
}

// Nullish coalescing
let name = user?.name ?? "Гість";
```

### Швидке копіювання масивів та об'єктів
```javascript
let arr = [1, 2, 3];
let arrCopy = [...arr];

let obj = {a: 1, b: 2};
let objCopy = {...obj};
```

### Перетворення NodeList в масив
```javascript
let elements = document.querySelectorAll(".item");
let elementsArray = [...elements];
// або
let elementsArray2 = Array.from(elements);
```

### Видалення дублікатів з масиву
```javascript
let numbers = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(numbers)]; // [1, 2, 3, 4]
```

---

**Цей довідник - твоя шпаргалка по JavaScript! Коли щось забув - просто знайди потрібний розділ і копіюй приклад! 🚀📖**