// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 6: МАСИВИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: СТВОРЕННЯ ТА БАЗОВІ ОПЕРАЦІЇ ===");

// Завдання 1.1: Створення масивів
let fruits = ["яблуко", "банан", "апельсин", "груша"];
let numbers = [10, 25, 3, 47, 8, 92, 15];
let mixed = ["текст", 42, true, null, {name: "об'єкт"}];

console.log(`Фрукти: ${fruits}`);
console.log(`Числа: ${numbers}`);
console.log(`Змішаний масив:`, mixed);

// Завдання 1.2: Довжина масиву та доступ до елементів
console.log(`\nКількість фруктів: ${fruits.length}`);
console.log(`Перший фрукт: ${fruits[0]}`);
console.log(`Останній фрукт: ${fruits[fruits.length - 1]}`);
console.log(`Другий фрукт: ${fruits[1]}`);

console.log("\n=== ЗАВДАННЯ 2: ДОДАВАННЯ ТА ВИДАЛЕННЯ ЕЛЕМЕНТІВ ===");

// Завдання 2.1: push() та pop()
let students = ["Іван", "Анна", "Петро"];
console.log(`Початковий список: ${students}`);

students.push("Марія");      // Додаємо в кінець
console.log(`Після push: ${students}`);

let lastStudent = students.pop();  // Видаляємо останній
console.log(`Після pop: ${students}`);
console.log(`Видалений студент: ${lastStudent}`);

// Завдання 2.2: unshift() та shift()
students.unshift("Олексій");  // Додаємо на початок
console.log(`Після unshift: ${students}`);

let firstStudent = students.shift();  // Видаляємо перший
console.log(`Після shift: ${students}`);
console.log(`Видалений студент: ${firstStudent}`);

// Завдання 2.3: splice() - універсальний метод
let colors = ["червоний", "зелений", "синій"];
console.log(`\nПочаткові кольори: ${colors}`);

// Видалення елемента
colors.splice(1, 1);  // видалити 1 елемент з індексу 1
console.log(`Після видалення: ${colors}`);

// Додавання елементів
colors.splice(1, 0, "жовтий", "помаранчевий");  // додати на позицію 1
console.log(`Після додавання: ${colors}`);

// Заміна елементів
colors.splice(2, 1, "фіолетовий");  // замінити елемент на позиції 2
console.log(`Після заміни: ${colors}`);

console.log("\n=== ЗАВДАННЯ 3: ПОШУК ЕЛЕМЕНТІВ ===");

// Завдання 3.1: indexOf() та lastIndexOf()
let items = ["хліб", "молоко", "хліб", "масло", "хліб"];
console.log(`Товари: ${items}`);
console.log(`Перший хліб на позиції: ${items.indexOf("хліб")}`);
console.log(`Останній хліб на позиції: ${items.lastIndexOf("хліб")}`);
console.log(`Сир на позиції: ${items.indexOf("сир")}`); // -1 (не знайдено)

// Завдання 3.2: includes()
let availableFruits = ["яблуко", "банан", "киви", "манго"];
let wantedFruit = "банан";

if (availableFruits.includes(wantedFruit)) {
    console.log(`\n✅ ${wantedFruit} є в наявності`);
} else {
    console.log(`\n❌ ${wantedFruit} немає в наявності`);
}

// Завдання 3.3: find() та findIndex()
let products = [
    {name: "Ноутбук", price: 25000, category: "електроніка"},
    {name: "Телефон", price: 15000, category: "електроніка"},  
    {name: "Книга", price: 300, category: "освіта"},
    {name: "Стіл", price: 5000, category: "меблі"}
];

let expensiveProduct = products.find(product => product.price > 20000);
console.log(`\nДорогий товар:`, expensiveProduct);

let bookIndex = products.findIndex(product => product.category === "освіта");
console.log(`Книга на позиції: ${bookIndex}`);

console.log("\n=== ЗАВДАННЯ 4: МЕТОДИ ПЕРЕТВОРЕННЯ ===");

// Завдання 4.1: map() - перетворення кожного елемента
let prices = [100, 250, 80, 420, 150];
console.log(`Початкові ціни: ${prices}`);

let pricesWithTax = prices.map(price => price * 1.2);  // +20% ПДВ
console.log(`Ціни з ПДВ: ${pricesWithTax.map(p => p.toFixed(2))}`);

let priceLabels = prices.map(price => `${price} грн`);
console.log(`Підписи цін: ${priceLabels}`);

// Завдання 4.2: filter() - фільтрація елементів  
let ages = [15, 22, 17, 35, 19, 45, 16, 28];
console.log(`\nВсі віки: ${ages}`);

let adults = ages.filter(age => age >= 18);
console.log(`Дорослі: ${adults}`);

let teenagers = ages.filter(age => age >= 13 && age < 20);
console.log(`Підлітки: ${teenagers}`);

// Завдання 4.3: reduce() - зведення до одного значення
let orderAmounts = [150, 300, 75, 220, 180];
console.log(`\nСуми замовлень: ${orderAmounts}`);

let totalAmount = orderAmounts.reduce((sum, amount) => sum + amount, 0);
console.log(`Загальна сума: ${totalAmount} грн`);

let maxAmount = orderAmounts.reduce((max, amount) => amount > max ? amount : max);
console.log(`Найбільша сума: ${maxAmount} грн`);

// Рахунок кількості товарів по категоріях
let inventory = [
    {name: "iPhone", category: "phones"},
    {name: "Samsung", category: "phones"},
    {name: "MacBook", category: "laptops"},
    {name: "iPad", category: "tablets"},
    {name: "Dell", category: "laptops"}
];

let categoryCount = inventory.reduce((count, item) => {
    count[item.category] = (count[item.category] || 0) + 1;
    return count;
}, {});

console.log(`\nТовари по категоріях:`, categoryCount);

console.log("\n=== ЗАВДАННЯ 5: СОРТУВАННЯ ===");

// Завдання 5.1: sort() для рядків
let cities = ["Київ", "Харків", "Одеса", "Дніпро", "Львів"];
console.log(`Міста (оригінал): ${cities}`);

let sortedCities = [...cities].sort();  // копіюємо та сортуємо
console.log(`Міста (сортовані): ${sortedCities}`);

// Завдання 5.2: sort() для чисел
let scores = [85, 92, 78, 96, 88, 73, 91];
console.log(`\nОцінки (оригінал): ${scores}`);

let sortedScores = [...scores].sort((a, b) => a - b);  // за зростанням
console.log(`Оцінки (зростання): ${sortedScores}`);

let reverseSorted = [...scores].sort((a, b) => b - a);  // за спаданням
console.log(`Оцінки (спадання): ${reverseSorted}`);

// Завдання 5.3: sort() для об'єктів
let employees = [
    {name: "Анна", salary: 35000, experience: 3},
    {name: "Петро", salary: 45000, experience: 5},
    {name: "Марія", salary: 30000, experience: 2},
    {name: "Іван", salary: 50000, experience: 7}
];

console.log(`\nСпівробітники за зарплатою (зростання):`);
let bySalary = [...employees].sort((a, b) => a.salary - b.salary);
bySalary.forEach(emp => console.log(`${emp.name}: ${emp.salary} грн`));

console.log(`\nСпівробітники за досвідом (спадання):`);
let byExperience = [...employees].sort((a, b) => b.experience - a.experience);
byExperience.forEach(emp => console.log(`${emp.name}: ${emp.experience} років`));

console.log("\n=== ЗАВДАННЯ 6: КОМБІНУВАННЯ МЕТОДІВ ===");

// Завдання 6.1: Ланцюжок методів
let rawData = [
    {name: "Товар A", price: 120, inStock: true, category: "електроніка"},
    {name: "Товар B", price: 80, inStock: false, category: "одяг"},
    {name: "Товар C", price: 200, inStock: true, category: "електроніка"},
    {name: "Товар D", price: 50, inStock: true, category: "одяг"},
    {name: "Товар E", price: 300, inStock: false, category: "електроніка"}
];

console.log("Доступні товари електроніки дорожче 100 грн:");
let filteredProducts = rawData
    .filter(item => item.inStock)                    // тільки в наявності
    .filter(item => item.category === "електроніка") // тільки електроніка
    .filter(item => item.price > 100)                // дорожче 100 грн
    .map(item => `${item.name} - ${item.price} грн`) // форматування
    .sort();                                         // сортування

filteredProducts.forEach(product => console.log(`- ${product}`));

// Завдання 6.2: Статистика продажів
let salesData = [
    {product: "iPhone", amount: 50000, month: "січень"},
    {product: "Samsung", amount: 30000, month: "січень"},
    {product: "iPhone", amount: 60000, month: "лютий"},
    {product: "MacBook", amount: 80000, month: "лютий"},
    {product: "Samsung", amount: 25000, month: "березень"}
];

// Загальна сума по продуктах
let productTotals = salesData.reduce((totals, sale) => {
    totals[sale.product] = (totals[sale.product] || 0) + sale.amount;
    return totals;
}, {});

console.log(`\nЗагальні продажі по товарах:`);
Object.entries(productTotals)
    .sort(([,a], [,b]) => b - a)  // сортуємо по сумі (спадання)
    .forEach(([product, total]) => {
        console.log(`${product}: ${total.toLocaleString()} грн`);
    });

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 7.1: Система управління студентами
let studentsData = [
    {name: "Іван Петров", grades: [85, 90, 78, 92], course: 2, faculty: "IT"},
    {name: "Анна Коваль", grades: [95, 87, 91, 89], course: 1, faculty: "IT"},
    {name: "Петро Сидоров", grades: [70, 75, 68, 80], course: 3, faculty: "Економіка"},
    {name: "Марія Іванова", grades: [88, 85, 90, 87], course: 2, faculty: "IT"},
    {name: "Олексій Мельник", grades: [92, 94, 89, 96], course: 1, faculty: "Математика"}
];

// Додаємо середню оцінку кожному студенту
let studentsWithAverage = studentsData.map(student => ({
    ...student,
    average: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
}));

console.log("--- ЗВІТ ПО СТУДЕНТАХ ---");

// Кращі студенти IT факультету
console.log("\n🏆 ТОП IT студенти (середня >= 85):");
studentsWithAverage
    .filter(student => student.faculty === "IT")
    .filter(student => student.average >= 85)
    .sort((a, b) => b.average - a.average)
    .forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} - ${student.average.toFixed(1)} (${student.course} курс)`);
    });

// Статистика по факультетах
console.log("\n📊 Статистика по факультетах:");
let facultyStats = studentsWithAverage.reduce((stats, student) => {
    if (!stats[student.faculty]) {
        stats[student.faculty] = {
            count: 0,
            totalAverage: 0,
            students: []
        };
    }
    stats[student.faculty].count++;
    stats[student.faculty].totalAverage += student.average;
    stats[student.faculty].students.push(student);
    return stats;
}, {});

Object.entries(facultyStats).forEach(([faculty, data]) => {
    let avgGrade = (data.totalAverage / data.count).toFixed(1);
    console.log(`${faculty}: ${data.count} студентів, середня оцінка: ${avgGrade}`);
});

// Студенти які потребують допомоги (середня < 75)
console.log("\n⚠️ Студенти які потребують допомоги:");
let needHelp = studentsWithAverage
    .filter(student => student.average < 75)
    .map(student => `${student.name} (${student.average.toFixed(1)})`);

if (needHelp.length > 0) {
    needHelp.forEach(student => console.log(`- ${student}`));
} else {
    console.log("Всі студенти справляються добре! 🎉");
}

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. БАЗОВІ ОПЕРАЦІЇ:
   - push/pop - додавання/видалення в кінці
   - unshift/shift - додавання/видалення на початку
   - splice - універсальний метод для вставки/видалення

2. ПОШУК:
   - indexOf/lastIndexOf - індекс елемента
   - includes - чи є елемент в масиві
   - find/findIndex - пошук за умовою

3. ПЕРЕТВОРЕННЯ:
   - map - створює новий масив з перетвореними елементами
   - filter - відбирає елементи за умовою
   - reduce - зводить масив до одного значення

4. СОРТУВАННЯ:
   - sort() - сортує на місці (змінює оригінал)
   - [...array].sort() - створює копію перед сортуванням
   - sort((a, b) => a - b) - для чисел

5. ЛАНЦЮЖКИ МЕТОДІВ:
   - array.filter().map().sort()
   - Кожен метод повертає новий масив
   - Читається зліва направо

🚫 НАЙЧАСТІШІ ПОМИЛКИ:
- Плутання методів що змінюють оригінал (push, splice) та які створюють новий (map, filter)
- Забування return в callback функціях
- Неправильне сортування чисел (без функції порівняння)
- Мутація оригінального масиву замість створення копії

🏆 КРАЩІ ПРАКТИКИ:
- Використовуй const для масивів, що не переприсвоюються
- Віддавай перевагу методам map/filter/reduce над звичайними циклами
- Створюй копії перед сортуванням: [...array].sort()
- Комбінуй методи в ланцюжки для читабельності
- Використовуй описові назви змінних в callback функціях
*/