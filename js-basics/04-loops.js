// ===========================================
// УРОК 4: ЦИКЛИ В JAVASCRIPT
// ===========================================

console.log("=== FOR ЦИКЛ ===");

// Простий for цикл
console.log("Числа від 1 до 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Цикл у зворотному порядку
console.log("\nЗворотний відлік:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Пуск! 🚀");

// Цикл з кроком
console.log("\nПарні числа від 0 до 10:");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log("\n=== WHILE ЦИКЛ ===");

// While цикл
let count = 1;
console.log("While цикл:");
while (count <= 5) {
    console.log(`Ітерація ${count}`);
    count++;
}

// Приклад з умовою
let randomNum;
let attempts = 0;
console.log("\nГенеруємо числа поки не отримаємо число більше 0.8:");
do {
    randomNum = Math.random();
    attempts++;
    console.log(`Спроба ${attempts}: ${randomNum.toFixed(3)}`);
} while (randomNum <= 0.8);

console.log("\n=== DO-WHILE ЦИКЛ ===");

let userInput = 0;
do {
    console.log(`Поточне значення: ${userInput}`);
    userInput += 10;
} while (userInput < 30);

console.log("\n=== FOR-IN і FOR-OF ===");

// For-in для об'єктів (ключі)
let person = {
    name: "Олексій",
    age: 28,
    city: "Львів",
    profession: "програміст"
};

console.log("Інформація про особу (for-in):");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// For-of для масивів (значення)
let fruits = ["яблуко", "банан", "вишня", "диня"];

console.log("\nФрукти (for-of):");
for (let fruit of fruits) {
    console.log(`🍎 ${fruit}`);
}

// For-of для рядків
let word = "JavaScript";
console.log("\nЛітери в слові 'JavaScript':");
for (let letter of word) {
    console.log(letter);
}

console.log("\n=== BREAK і CONTINUE ===");

// Break - виходимо з циклу
console.log("Пошук першого числа, що ділиться на 7:");
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(`Знайдено: ${i}`);
        break; // Виходимо з циклу
    }
}

// Continue - пропускаємо ітерацію
console.log("\nНепарні числа від 1 до 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Пропускаємо парні числа
    }
    console.log(i);
}

console.log("\n=== ВКЛАДЕНІ ЦИКЛИ ===");

// Таблиця множення
console.log("Таблиця множення (частина):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += `${i}×${j}=${i*j}\t`;
    }
    console.log(row);
}

// Малювання трикутника
console.log("\nТрикутник із зірочок:");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "★";
    }
    console.log(stars);
}

console.log("\n=== ПРАКТИЧНІ ПРИКЛАДИ ===");

// Приклад 1: Сума чисел
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Сума чисел від 1 до 100: ${sum}`);

// Приклад 2: Пошук максимального значення
let numbers = [3, 67, 23, 89, 12, 45, 78];
let maxNumber = numbers[0];

for (let number of numbers) {
    if (number > maxNumber) {
        maxNumber = number;
    }
}
console.log(`Максимальне число в масиві: ${maxNumber}`);

// Приклад 3: Підрахунок символів
let text = "JavaScript - це чудова мова програмування!";
let vowels = "aeiouаеиіоуюяїє";
let vowelCount = 0;

for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log(`У тексті "${text}" знайдено ${vowelCount} голосних`);

// Приклад 4: Факторіал
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Факторіал ${n} = ${factorial}`);

// Приклад 5: Перевірка на просте число
let numberToCheck = 17;
let isPrime = true;

if (numberToCheck <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`${numberToCheck} ${isPrime ? 'є' : 'не є'} простим числом`);