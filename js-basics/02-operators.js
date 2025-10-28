// ===========================================
// УРОК 2: ОПЕРАТОРИ В JAVASCRIPT
// ===========================================

console.log("=== АРИФМЕТИЧНІ ОПЕРАТОРИ ===");

let a = 10;
let b = 3;

console.log("a + b =", a + b);  // Додавання: 13
console.log("a - b =", a - b);  // Віднімання: 7
console.log("a * b =", a * b);  // Множення: 30
console.log("a / b =", a / b);  // Ділення: 3.333...
console.log("a % b =", a % b);  // Остача від ділення: 1
console.log("a ** b =", a ** b); // Піднесення до степеня: 1000

// Інкремент і декремент
let counter = 5;
console.log("counter:", counter);        // 5
console.log("++counter:", ++counter);    // 6 (спочатку збільшити, потім використати)
console.log("counter++:", counter++);    // 6 (спочатку використати, потім збільшити)
console.log("counter:", counter);        // 7

console.log("\n=== ОПЕРАТОРИ ПОРІВНЯННЯ ===");

let x = 5;
let y = "5";

console.log("x == y:", x == y);   // true (порівняння значень)
console.log("x === y:", x === y); // false (строге порівняння: значення + тип)
console.log("x != y:", x != y);   // false
console.log("x !== y:", x !== y); // true (різні типи)

console.log("x > 3:", x > 3);     // true
console.log("x < 10:", x < 10);   // true
console.log("x >= 5:", x >= 5);   // true
console.log("x <= 4:", x <= 4);   // false

console.log("\n=== ЛОГІЧНІ ОПЕРАТОРИ ===");

let isAdult = true;
let hasLicense = false;

console.log("isAdult && hasLicense:", isAdult && hasLicense); // AND: false
console.log("isAdult || hasLicense:", isAdult || hasLicense); // OR: true
console.log("!isAdult:", !isAdult);                          // NOT: false

// Короткочасна оцінка (short-circuit evaluation)
let result1 = true && "Виконається";   // "Виконається"
let result2 = false && "Не виконається"; // false
let result3 = false || "За замовчуванням"; // "За замовчуванням"

console.log("result1:", result1);
console.log("result2:", result2);
console.log("result3:", result3);

console.log("\n=== ОПЕРАТОРИ ПРИСВОЄННЯ ===");

let num = 10;
console.log("Початкове значення:", num);

num += 5;  // num = num + 5
console.log("Після +=5:", num);

num -= 3;  // num = num - 3
console.log("Після -=3:", num);

num *= 2;  // num = num * 2
console.log("Після *=2:", num);

num /= 4;  // num = num / 4
console.log("Після /=4:", num);

console.log("\n=== ТЕРНАРНИЙ ОПЕРАТОР ===");

let age = 20;
let status = age >= 18 ? "дорослий" : "неповнолітній";
console.log(`Вік ${age}: ${status}`);

// Складніший приклад
let weather = "сонячно";
let activity = weather === "дощ" ? "читати вдома" : 
               weather === "сонячно" ? "йти гуляти" : 
               "дивитися фільм";
console.log(`Сьогодні ${weather}, тому будемо: ${activity}`);