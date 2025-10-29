// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 4: ЦИКЛИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: FOR ЦИКЛ ===");

// Завдання 1.1: Таблиця множення
console.log("Таблиця множення на 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}

// Завдання 1.2: Сума чисел від 1 до 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`\nСума чисел від 1 до 100: ${sum}`);

// Завдання 1.3: Парні числа від 2 до 20
console.log("\nПарні числа від 2 до 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Завдання 1.4: Зворотний відлік
console.log("\nЗворотний відлік від 10 до 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Пуск! 🚀");

console.log("\n=== ЗАВДАННЯ 2: WHILE ЦИКЛ ===");

// Завдання 2.1: Знаходження першого числа >= 50
let current = 1;
while (current < 50) {
    current *= 2; // 1, 2, 4, 8, 16, 32, 64
}
console.log(`Перше число >= 50 при подвоєнні: ${current}`);

// Завдання 2.2: Гра "Вгадай число"
let secretNumber = 7;
let guess = 1;
let attempts = 0;

console.log("\nГра 'Вгадай число' (загадане: 7):");
while (guess !== secretNumber) {
    attempts++;
    console.log(`Спроба ${attempts}: ${guess}`);
    if (guess < secretNumber) {
        console.log("Занадто мало!");
        guess++;
    } else if (guess > secretNumber) {
        console.log("Занадто багато!");
        guess--;
    }
}
console.log(`🎉 Вгадали! Число ${secretNumber} за ${attempts} спроб`);

// Завдання 2.3: Факторіал числа
let number = 5;
let factorial = 1;
let temp = number;

while (temp > 0) {
    factorial *= temp;
    temp--;
}
console.log(`\nФакторіал ${number}! = ${factorial}`);

console.log("\n=== ЗАВДАННЯ 3: DO-WHILE ЦИКЛ ===");

// Завдання 3.1: Валідація вводу (імітація)
let userInput;
let validInputs = ["так", "ні", "можливо"];
let inputAttempts = 0;

do {
    inputAttempts++;
    // Імітуємо різні вводи користувача
    let possibleInputs = ["може", "так", "нівроде", "ні"];
    userInput = possibleInputs[inputAttempts - 1] || "так";
    
    console.log(`Спроба ${inputAttempts}: введено "${userInput}"`);
    
    if (!validInputs.includes(userInput)) {
        console.log("❌ Невірний ввід! Введіть 'так', 'ні' або 'можливо'");
    }
} while (!validInputs.includes(userInput) && inputAttempts < 4);

if (validInputs.includes(userInput)) {
    console.log(`✅ Прийнято: "${userInput}"`);
}

console.log("\n=== ЗАВДАННЯ 4: FOR-OF ЦИКЛ (МАСИВИ) ===");

// Завдання 4.1: Перебір фруктів
let fruits = ["яблуко", "банан", "апельсин", "груша", "виноград"];
console.log("Список фруктів:");
for (let fruit of fruits) {
    console.log(`🍎 ${fruit}`);
}

// Завдання 4.2: Обчислення середньої оцінки
let grades = [85, 92, 78, 96, 88, 73, 91];
let total = 0;
let count = 0;

for (let grade of grades) {
    total += grade;
    count++;
}
let average = total / count;
console.log(`\nОцінки: ${grades.join(", ")}`);
console.log(`Середня оцінка: ${average.toFixed(1)}`);

// Завдання 4.3: Пошук найбільшого числа
let numbers = [23, 45, 12, 67, 34, 89, 15];
let max = numbers[0];

for (let num of numbers) {
    if (num > max) {
        max = num;
    }
}
console.log(`\nЧисла: ${numbers.join(", ")}`);
console.log(`Найбільше число: ${max}`);

console.log("\n=== ЗАВДАННЯ 5: FOR-IN ЦИКЛ (ОБ'ЄКТИ) ===");

// Завдання 5.1: Інформація про студента
let student = {
    name: "Анна Петренко",
    age: 20,
    course: 2,
    faculty: "Інформатика",
    gpa: 4.2
};

console.log("Інформація про студента:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// Завдання 5.2: Підрахунок товарів у кошику
let shoppingCart = {
    "молоко": 2,
    "хліб": 1,
    "яйця": 12,
    "масло": 1,
    "сир": 3
};

console.log("\nКошик покупок:");
let totalItems = 0;
for (let product in shoppingCart) {
    let quantity = shoppingCart[product];
    console.log(`${product}: ${quantity} шт.`);
    totalItems += quantity;
}
console.log(`Загалом товарів: ${totalItems}`);

// Завдання 5.3: Рейтинг фільмів
let movieRatings = {
    "Avengers": 8.4,
    "Inception": 8.8,
    "Interstellar": 8.6,
    "The Matrix": 8.7,
    "Pulp Fiction": 8.9
};

console.log("\nРейтинг фільмів:");
let bestMovie = "";
let highestRating = 0;

for (let movie in movieRatings) {
    let rating = movieRatings[movie];
    console.log(`${movie}: ⭐ ${rating}/10`);
    
    if (rating > highestRating) {
        highestRating = rating;
        bestMovie = movie;
    }
}
console.log(`🏆 Найкращий фільм: "${bestMovie}" (${highestRating}/10)`);

console.log("\n=== ЗАВДАННЯ 6: ВКЛАДЕНІ ЦИКЛИ ===");

// Завдання 6.1: Таблиця множення 5x5
console.log("Таблиця множення 5×5:");
console.log("   ", 1, 2, 3, 4, 5);
for (let i = 1; i <= 5; i++) {
    let row = `${i}: `;
    for (let j = 1; j <= 5; j++) {
        row += `${(i * j).toString().padStart(2)} `;
    }
    console.log(row);
}

// Завдання 6.2: Патерн зірочок
console.log("\nПатерн зірочок:");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "⭐";
    }
    console.log(stars);
}

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 7.1: Аналіз продажів по місяцях
let salesData = [
    { month: "Січень", sales: 15000, target: 12000 },
    { month: "Лютий", sales: 18000, target: 15000 },
    { month: "Березень", sales: 11000, target: 13000 },
    { month: "Квітень", sales: 22000, target: 16000 },
    { month: "Травень", sales: 19000, target: 18000 }
];

console.log("--- ЗВІТ ПО ПРОДАЖАХ ---");
let totalSales = 0;
let totalTarget = 0;
let successfulMonths = 0;

for (let data of salesData) {
    let { month, sales, target } = data;
    let achievement = ((sales / target) * 100).toFixed(1);
    let status = sales >= target ? "✅" : "❌";
    
    console.log(`${month}: ${sales} грн (план: ${target} грн) - ${achievement}% ${status}`);
    
    totalSales += sales;
    totalTarget += target;
    
    if (sales >= target) {
        successfulMonths++;
    }
}

let overallAchievement = ((totalSales / totalTarget) * 100).toFixed(1);
console.log(`\n📊 ПІДСУМОК:`);
console.log(`Загальні продажі: ${totalSales} грн`);
console.log(`Загальний план: ${totalTarget} грн`);
console.log(`Виконання плану: ${overallAchievement}%`);
console.log(`Успішних місяців: ${successfulMonths}/${salesData.length}`);

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. FOR ЦИКЛ:
   - for (ініціалізація; умова; крок) { код }
   - Найкращий для відомої кількості ітерацій
   - Можна змінювати крок (i++, i+=2, i--)

2. WHILE ЦИКЛ:
   - while (умова) { код }  
   - Перевіряє умову ПЕРЕД виконанням
   - Підходить для невідомої кількості ітерацій

3. DO-WHILE ЦИКЛ:
   - do { код } while (умова)
   - Виконується МІНІМУМ ОДИН РАЗ
   - Корисний для валідації вводу

4. FOR-OF ЦИКЛ:
   - for (element of array) { код }
   - Ідеальний для перебору масивів
   - Дає доступ до ЗНАЧЕНЬ елементів

5. FOR-IN ЦИКЛ:
   - for (key in object) { код }
   - Для перебору властивостей об'єктів
   - Дає доступ до КЛЮЧІВ (назв властивостей)

🚫 НАЙЧАСТІШІ ПОМИЛКИ:
- Безкінечні цикли (забувають змінювати умову)
- Плутання for-in та for-of
- Вихід за межі масиву
- Неправильна ініціалізація лічильника

🏆 КРАЩІ ПРАКТИКИ:
- Використовуй описові назви змінних (i, j, k тільки для простих циклів)
- Уникай вкладених циклів більше 2-3 рівнів
- Додавай break/continue для оптимізації
- Тестуй граничні випадки (порожні масиви, 0 ітерацій)
*/