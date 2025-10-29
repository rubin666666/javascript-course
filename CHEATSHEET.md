# 📝 JavaScript Шпаргалка - Швидкий довідник

*Швидкий доступ до найважливішого синтаксису JavaScript*

---

## 📦 Змінні

```javascript
// Оголошення змінних
let name = "Іван";        // змінна (може змінюватися)
const age = 25;           // константа (не змінюється)
var oldStyle = "старий";  // застарілий стиль (не використовуй)

// Типи даних
let number = 42;          // число
let text = "привіт";      // рядок
let isTrue = true;        // boolean
let empty = null;         // порожнє значення
let notDefined;           // undefined
```

## 🔢 Оператори

```javascript
// Арифметичні
let sum = 5 + 3;          // додавання: 8
let diff = 10 - 4;        // віднімання: 6
let product = 6 * 7;      // множення: 42
let quotient = 20 / 4;    // ділення: 5
let remainder = 15 % 4;   // остача: 3

// Порівняння
5 === 5    // true (строга рівність)
5 == "5"   // true (нестрога рівність)
5 !== "5"  // true (строга нерівність)
5 > 3      // true
5 >= 5     // true

// Логічні
true && false   // false (І)
true || false   // true (АБО)
!true          // false (НЕ)
```

## 🔀 Умовні конструкції

```javascript
// if/else
if (age >= 18) {
    console.log("Дорослий");
} else if (age >= 13) {
    console.log("Підліток");
} else {
    console.log("Дитина");
}

// Тернарний оператор
let status = age >= 18 ? "дорослий" : "неповнолітній";

// switch
switch (day) {
    case "понеділок":
        console.log("Початок тижня");
        break;
    case "п'ятниця":
        console.log("Кінець тижня");
        break;
    default:
        console.log("Звичайний день");
}
```

## 🔄 Цикли

```javascript
// for цикл
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while цикл
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// for...of (для масивів)
let fruits = ["яблуко", "банан"];
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in (для об'єктів)
let person = {name: "Анна", age: 25};
for (let key in person) {
    console.log(key, person[key]);
}
```

## ⚙️ Функції

```javascript
// Звичайна функція
function greet(name) {
    return "Привіт, " + name;
}

// Стрілкова функція
const add = (a, b) => a + b;

// Функція з параметрами за замовчуванням
function createUser(name, age = 18) {
    return {name, age};
}

// Виклик функції
let message = greet("Іван");
let sum = add(5, 3);
```

## 📚 Масиви

```javascript
// Створення
let numbers = [1, 2, 3, 4, 5];
let fruits = ["яблуко", "банан"];

// Доступ до елементів
console.log(numbers[0]);        // перший елемент: 1
console.log(numbers.length);    // довжина: 5

// Додавання/видалення
numbers.push(6);                // додати в кінець
numbers.unshift(0);             // додати на початок
let last = numbers.pop();       // видалити останній
let first = numbers.shift();    // видалити перший

// Корисні методи
let doubled = numbers.map(x => x * 2);           // перетворення
let evens = numbers.filter(x => x % 2 === 0);   // фільтрація
let sum = numbers.reduce((a, b) => a + b, 0);   // зведення
```

## 🏗️ Об'єкти

```javascript
// Створення об'єкта
let person = {
    name: "Анна",
    age: 25,
    city: "Київ",
    greet: function() {
        return "Привіт, я " + this.name;
    }
};

// Доступ до властивостей
console.log(person.name);       // крапкова нотація
console.log(person["age"]);     // квадратні дужки

// Додавання властивостей
person.email = "anna@email.com";

// Деструктуризація
let {name, age} = person;
console.log(name, age);         // "Анна" 25
```

## 🎯 Корисні методи

```javascript
// Рядки
let text = "JavaScript";
text.length                     // довжина: 10
text.toUpperCase()             // "JAVASCRIPT"
text.toLowerCase()             // "javascript"
text.includes("Script")        // true
text.slice(0, 4)              // "Java"

// Числа
let num = 3.14159;
num.toFixed(2)                 // "3.14"
Math.round(num)                // 3
Math.floor(num)                // 3
Math.ceil(num)                 // 4
Math.random()                  // випадкове 0-1

// Перевірки типів
typeof "hello"                 // "string"
typeof 42                      // "number"
typeof true                    // "boolean"
Array.isArray([1,2,3])        // true
```

## 💡 Часто використовувані патерни

```javascript
// Перевірка на undefined/null
if (variable !== undefined && variable !== null) {
    // variable існує
}

// Короткий запис
if (variable) {
    // variable truthy (не false, 0, "", null, undefined)
}

// Значення за замовчуванням
let name = inputName || "Безіменний";

// Перевірка масиву
if (Array.isArray(data) && data.length > 0) {
    // масив не порожній
}

// Копіювання масиву/об'єкта
let newArray = [...oldArray];
let newObject = {...oldObject};
```

---

**💡 Пам'ятай:**
- Завжди використовуй `===` замість `==`
- Називай змінні зрозуміло: `userName`, а не `u`
- Коментуй складний код
- Тестуй код у [JavaScript Тестері](js-basics/tester.html)

**🚀 Наступний крок:** Відкрий [START-HERE.md](START-HERE.md) для повного навчання!