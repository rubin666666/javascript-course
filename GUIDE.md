# 📖 JavaScript Довідник - Все що потрібно знати

*Компактний довідник з теорією, синтаксисом та прикладами для всіх 7 уроків курсу*

---

## 🚀 Швидкий старт для новачків

### 1. Встановлення
- Клонуй репозиторій: `git clone https://github.com/rubin666666/javascript-course.git`
- Відкрий `js-basics/tester.html` у браузері
- Почни з файлу `01-variables.js`

### 2. Як навчатися
- **Читай код** в файлах уроків (01-variables.js, 02-operators.js, ...)
- **Тестуй код** в browser tester (`tester.html`)
- **Роби завдання** з папки `exercises/`
- **Перевіряй себе** з папки `solutions/`

### 3. План навчання (2 тижні)
- **Тиждень 1:** Змінні → Оператори → Умови → Цикли
- **Тиждень 2:** Функції → Масиви → Об'єкти
- **Щодня:** 30-45 хвилин, 1 урок на день

---

## 📋 Урок 1: Змінні та типи даних

### Основний синтаксис:
```javascript
// Оголошення змінних
const name = "Іван";        // Константа (не змінюється)
let age = 25;               // Змінна (може змінюватися)
var oldWay = "deprecated";  // Старий спосіб (не використовуй)

// Типи даних
let number = 42;            // Number
let text = "Привіт";        // String  
let isActive = true;        // Boolean
let empty = null;           // Null
let notDefined;             // Undefined
```

### Практичний приклад:
```javascript
const studentName = "Анна";
let currentGrade = 4.5;
let hasScholarship = currentGrade >= 4.0;
console.log(`${studentName} має стипендію: ${hasScholarship}`);
```

---

## ➕ Урок 2: Оператори

### Арифметичні:
```javascript
let a = 10, b = 3;
console.log(a + b);  // 13 (додавання)
console.log(a - b);  // 7  (віднімання)
console.log(a * b);  // 30 (множення)
console.log(a / b);  // 3.33 (ділення)
console.log(a % b);  // 1  (остача)
console.log(a ** b); // 1000 (степінь)
```

### Порівняння:
```javascript
console.log(5 == "5");   // true (нестроге)
console.log(5 === "5");  // false (строге) ← використовуй це!
console.log(10 > 5);     // true
console.log(10 <= 10);   // true
```

### Логічні:
```javascript
let age = 20, hasLicense = true;
console.log(age >= 18 && hasLicense);  // true (І)
console.log(age < 18 || hasLicense);   // true (АБО)
console.log(!hasLicense);              // false (НЕ)
```

### Тернарний оператор:
```javascript
let status = age >= 18 ? "дорослий" : "дитина";
```

---

## ❓ Урок 3: Умовні конструкції

### If-else:
```javascript
let score = 85;
if (score >= 90) {
    console.log("Відмінно!");
} else if (score >= 70) {
    console.log("Добре!");
} else {
    console.log("Треба вчитися більше");
}
```

### Switch-case:
```javascript
let day = 3;
switch (day) {
    case 1: console.log("Понеділок"); break;
    case 2: console.log("Вівторок"); break;
    case 3: console.log("Середа"); break;
    default: console.log("Інший день");
}
```

---

## 🔄 Урок 4: Цикли

### For цикл:
```javascript
// Класичний for
for (let i = 1; i <= 5; i++) {
    console.log(`Число: ${i}`);
}

// For-of (для масивів)
let fruits = ["яблуко", "банан"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For-in (для об'єктів)
let person = {name: "Іван", age: 25};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### While цикл:
```javascript
let count = 0;
while (count < 3) {
    console.log(`Лічильник: ${count}`);
    count++;
}
```

---

## ⚡ Урок 5: Функції

### Основні типи:
```javascript
// Function declaration
function greet(name) {
    return `Привіт, ${name}!`;
}

// Arrow function
const multiply = (a, b) => a * b;

// Функція з параметрами за замовчуванням
const welcome = (name = "Гість") => `Ласкаво просимо, ${name}!`;
```

### Callback функції:
```javascript
function processData(data, callback) {
    let result = data * 2;
    callback(result);
}

processData(5, (result) => console.log(`Результат: ${result}`));
```

---

## 📚 Урок 6: Масиви

### Створення та базові операції:
```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);        // Додати в кінець
numbers.unshift(0);     // Додати на початок
let last = numbers.pop(); // Видалити останній
console.log(numbers);   // [0, 1, 2, 3, 4, 5]
```

### Корисні методи:
```javascript
let nums = [1, 2, 3, 4, 5];

// Map - перетворює кожен елемент
let doubled = nums.map(x => x * 2);  // [2, 4, 6, 8, 10]

// Filter - фільтрує елементи
let evens = nums.filter(x => x % 2 === 0);  // [2, 4]

// Reduce - зводить до одного значення
let sum = nums.reduce((total, x) => total + x, 0);  // 15

// Find - знаходить перший елемент
let found = nums.find(x => x > 3);  // 4

// Includes - перевіряє наявність
let hasThree = nums.includes(3);  // true
```

---

## 📦 Урок 7: Об'єкти

### Створення та використання:
```javascript
// Створення об'єкта
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    
    // Метод об'єкта
    getInfo() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
};

// Доступ до властивостей
console.log(car.brand);        // "Toyota"
console.log(car["model"]);     // "Camry"
console.log(car.getInfo());    // "Toyota Camry 2020"
```

### Деструктуризація:
```javascript
let {brand, model} = car;
console.log(`Авто: ${brand} ${model}`);
```

### Масив об'єктів:
```javascript
let students = [
    {name: "Іван", grade: 85},
    {name: "Анна", grade: 92},
    {name: "Петро", grade: 78}
];

// Знайти студента з найкращою оцінкою
let best = students.reduce((max, student) => 
    student.grade > max.grade ? student : max
);
```

---

## 🔥 Найважливіші концепції

### 1. Типи даних
- **Примітивні:** number, string, boolean, null, undefined
- **Об'єкти:** arrays, objects, functions

### 2. Порівняння
- Завжди використовуй `===` замість `==`
- `null` і `undefined` - різні речі

### 3. Функції
- Arrow functions не мають власного `this`
- Callbacks - функції як аргументи

### 4. Масиви
- `map/filter/reduce` краще за звичайні цикли
- Масиви - це об'єкти з числовими ключами

### 5. Об'єкти
- Властивості доступні через `.` або `[]`
- `this` вказує на поточний об'єкт

---

## 🚫 Найчастіші помилки

1. **Плутання `=` та `==`** - перший присвоює, другий порівнює
2. **Використання `var`** - завжди використовуй `let` або `const`
3. **Забування `break` в switch** - виконається весь код до кінця
4. **Безкінечні цикли** - перевіряй умову виходу
5. **Мутація масивів** - краще створювати нові з `map/filter`

---

## 🏆 Контрольні питання

**Після кожного уроку запитай себе:**
1. Можу пояснити концепцію простими словами?
2. Можу написати приклад з пам'яті?
3. Розумію, де це використовується в реальних проектах?

**Якщо всі відповіді "Так" - переходь далі! ✅**

---

## 🔗 Корисні посилання

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript (безкоштовна книга)](https://eloquentjavascript.net/)

---

*💡 Підказка: Тримай цей файл відкритим під час навчання як швидкий довідник!*