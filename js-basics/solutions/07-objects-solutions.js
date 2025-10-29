// ===========================================
// РІШЕННЯ ЗАВДАНЬ - УРОК 7: ОБ'ЄКТИ
// ===========================================

console.log("=== ЗАВДАННЯ 1: СТВОРЕННЯ ТА ОСНОВИ ===");

// Завдання 1.1: Створення об'єктів різними способами
// Літеральний синтаксис (найпоширеніший)
let person = {
    name: "Іван Петренко",
    age: 25,
    city: "Київ",
    isStudent: true
};

// Через конструктор Object
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2020;
car.color = "сірий";

// Через Object.create()
let animal = Object.create(null);
animal.species = "Кіт";
animal.name = "Мурчик";
animal.age = 3;

console.log("Особа:", person);
console.log("Автомобіль:", car);
console.log("Тварина:", animal);

// Завдання 1.2: Доступ до властивостей
console.log(`\nІм'я: ${person.name}`);           // через крапку
console.log(`Вік: ${person["age"]}`);            // через квадратні дужки
console.log(`Студент: ${person.isStudent ? "Так" : "Ні"}`);

// Динамічний доступ до властивостей
let property = "city";
console.log(`Місто: ${person[property]}`);

console.log("\n=== ЗАВДАННЯ 2: МЕТОДИ ОБ'ЄКТІВ ===");

// Завдання 2.1: Додавання методів до об'єкта
let calculator = {
    result: 0,
    
    add: function(number) {
        this.result += number;
        return this;  // повертаємо this для ланцюжка викликів
    },
    
    subtract: function(number) {
        this.result -= number;
        return this;
    },
    
    multiply: function(number) {
        this.result *= number;
        return this;
    },
    
    divide: function(number) {
        if (number !== 0) {
            this.result /= number;
        } else {
            console.log("Помилка: ділення на нуль");
        }
        return this;
    },
    
    clear: function() {
        this.result = 0;
        return this;
    },
    
    getResult: function() {
        return this.result;
    }
};

// Тестування калькулятора з ланцюжком викликів
console.log("Калькулятор:");
let finalResult = calculator
    .clear()
    .add(10)
    .multiply(5)
    .subtract(15)
    .divide(5)
    .getResult();

console.log(`Результат: (10 * 5 - 15) / 5 = ${finalResult}`);

// Завдання 2.2: Об'єкт користувача з методами
let user = {
    firstName: "Анна",
    lastName: "Коваль",
    email: "anna.koval@email.com",
    loginCount: 0,
    
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    login: function() {
        this.loginCount++;
        console.log(`${this.getFullName()} увійшов в систему. Кількість входів: ${this.loginCount}`);
    },
    
    updateEmail: function(newEmail) {
        let oldEmail = this.email;
        this.email = newEmail;
        console.log(`Email змінено з ${oldEmail} на ${newEmail}`);
    },
    
    getInfo: function() {
        return {
            fullName: this.getFullName(),
            email: this.email,
            loginCount: this.loginCount
        };
    }
};

console.log(`\nКористувач: ${user.getFullName()}`);
user.login();
user.login();
user.updateEmail("anna.new@email.com");
console.log("Інформація про користувача:", user.getInfo());

console.log("\n=== ЗАВДАННЯ 3: ДЕСТРУКТУРИЗАЦІЯ ===");

// Завдання 3.1: Основна деструктуризація
let product = {
    name: "iPhone 14",
    price: 35000,
    category: "electronics",
    inStock: true,
    specs: {
        screen: "6.1 inch",
        memory: "128GB",
        color: "Space Gray"
    }
};

// Проста деструктуризація
let {name, price, inStock} = product;
console.log(`Товар: ${name}, Ціна: ${price}, В наявності: ${inStock}`);

// Деструктуризація з перейменуванням
let {name: productName, price: productPrice} = product;
console.log(`${productName} коштує ${productPrice} грн`);

// Деструктуризація з значеннями за замовчуванням
let {discount = 0, warranty = "1 рік"} = product;
console.log(`Знижка: ${discount}%, Гарантія: ${warranty}`);

// Вкладена деструктуризація
let {specs: {screen, memory, color}} = product;
console.log(`Характеристики: ${screen}, ${memory}, ${color}`);

// Завдання 3.2: Деструктуризація в параметрах функції
function displayProduct({name, price, specs: {memory}}) {
    return `📱 ${name} (${memory}) - ${price} грн`;
}

console.log(`\n${displayProduct(product)}`);

function createOrderSummary({name, price, inStock, discount = 0}) {
    let finalPrice = price * (1 - discount / 100);
    return {
        productName: name,
        originalPrice: price,
        finalPrice: finalPrice,
        available: inStock,
        savings: price - finalPrice
    };
}

let orderInfo = createOrderSummary({...product, discount: 10});
console.log("Інформація про замовлення:", orderInfo);

console.log("\n=== ЗАВДАННЯ 4: КОПІЮВАННЯ ОБ'ЄКТІВ ===");

// Завдання 4.1: Поверхневе копіювання
let originalBook = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    pages: 176,
    publisher: {
        name: "O'Reilly",
        year: 2008
    }
};

// Поверхневе копіювання через spread operator
let bookCopy1 = {...originalBook};
bookCopy1.title = "JavaScript: The Definitive Guide";
bookCopy1.publisher.year = 2020;  // це змінить і оригінал!

console.log("Оригінальна книга:", originalBook);
console.log("Копія книги:", bookCopy1);

// Поверхневе копіювання через Object.assign()
let bookCopy2 = Object.assign({}, originalBook);
bookCopy2.pages = 200;

console.log("Друга копія:", bookCopy2);

// Завдання 4.2: Глибоке копіювання (для простих об'єктів)
let deepCopy = JSON.parse(JSON.stringify(originalBook));
deepCopy.publisher.name = "Manning";
deepCopy.publisher.year = 2021;

console.log("\nПісля глибокого копіювання:");
console.log("Оригінал:", originalBook);
console.log("Глибока копія:", deepCopy);

console.log("\n=== ЗАВДАННЯ 5: РОБОТА З КЛЮЧАМИ ТА ЗНАЧЕННЯМИ ===");

// Завдання 5.1: Object.keys(), Object.values(), Object.entries()
let restaurant = {
    name: "Смачна кухня",
    cuisine: "Українська",
    rating: 4.5,
    priceRange: "$$",
    openHours: "9:00-22:00"
};

console.log("Ключі:", Object.keys(restaurant));
console.log("Значення:", Object.values(restaurant));
console.log("Пари ключ-значення:", Object.entries(restaurant));

// Завдання 5.2: Ітерація через об'єкт
console.log("\nІнформація про ресторан:");
for (let [key, value] of Object.entries(restaurant)) {
    console.log(`${key}: ${value}`);
}

// Завдання 5.3: Фільтрація властивостей об'єкта
let scores = {
    mathematics: 95,
    physics: 87,  
    chemistry: 92,
    biology: 78,
    english: 89
};

// Знаходимо предмети з оцінкою >= 90
let excellentSubjects = Object.entries(scores)
    .filter(([subject, score]) => score >= 90)
    .reduce((result, [subject, score]) => {
        result[subject] = score;
        return result;
    }, {});

console.log("\nПредмети з відмінними оцінками:", excellentSubjects);

console.log("\n=== ЗАВДАННЯ 6: МАСИВИ ОБ'ЄКТІВ ===");

// Завдання 6.1: Створення та робота з масивом об'єктів
let employees = [
    {
        id: 1,
        name: "Іван Петров",
        position: "Developer",
        salary: 45000,
        department: "IT",
        experience: 3
    },
    {
        id: 2,
        name: "Анна Коваль",
        position: "Designer",
        salary: 35000,
        department: "Marketing",
        experience: 2
    },
    {
        id: 3,
        name: "Петро Сидоров",
        position: "Manager",
        salary: 55000,
        department: "Sales",
        experience: 5
    },
    {
        id: 4,
        name: "Марія Іванова",
        position: "Developer", 
        salary: 50000,
        department: "IT",
        experience: 4
    }
];

// Знаходження співробітника за ID
let employee = employees.find(emp => emp.id === 2);
console.log("Співробітник з ID 2:", employee);

// Фільтрація за відділом
let itEmployees = employees.filter(emp => emp.department === "IT");
console.log("\nIT співробітники:");
itEmployees.forEach(emp => console.log(`- ${emp.name} (${emp.position})`));

// Розрахунок середньої зарплати
let averageSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
console.log(`\nСередня зарплата: ${averageSalary.toLocaleString()} грн`);

// Сортування за зарплатою
let sortedBySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log("\nСпівробітники за зарплатою (спадання):");
sortedBySalary.forEach(emp => {
    console.log(`${emp.name}: ${emp.salary.toLocaleString()} грн`);
});

console.log("\n=== ЗАВДАННЯ 7: ПРАКТИЧНИЙ ПРИКЛАД ===");

// Завдання 7.1: Система управління бібліотекою
let library = {
    name: "Центральна міська бібліотека",
    books: [],
    readers: [],
    
    // Додавання книги
    addBook: function({title, author, isbn, year, copies = 1}) {
        let existingBook = this.books.find(book => book.isbn === isbn);
        
        if (existingBook) {
            existingBook.copies += copies;
            console.log(`Додано ${copies} копій книги "${title}". Всього: ${existingBook.copies}`);
        } else {
            let newBook = {
                id: this.books.length + 1,
                title,
                author,
                isbn,
                year,
                copies,
                borrowed: 0
            };
            this.books.push(newBook);
            console.log(`Додано нову книгу: "${title}" (${copies} копій)`);
        }
    },
    
    // Реєстрація читача
    registerReader: function({name, email, phone}) {
        let reader = {
            id: this.readers.length + 1,
            name,
            email,
            phone,
            borrowedBooks: [],
            registrationDate: new Date().toLocaleDateString()
        };
        this.readers.push(reader);
        console.log(`Зареєстровано читача: ${name}`);
        return reader.id;
    },
    
    // Видача книги
    borrowBook: function(readerId, bookId) {
        let reader = this.readers.find(r => r.id === readerId);
        let book = this.books.find(b => b.id === bookId);
        
        if (!reader) {
            console.log("Читач не знайдений");
            return false;
        }
        
        if (!book) {
            console.log("Книга не знайдена");
            return false;
        }
        
        if (book.copies <= book.borrowed) {
            console.log(`Книга "${book.title}" недоступна (всі копії видані)`);
            return false;
        }
        
        book.borrowed++;
        reader.borrowedBooks.push({
            bookId: book.id,
            title: book.title,
            borrowDate: new Date().toLocaleDateString()
        });
        
        console.log(`📚 ${reader.name} взяв книгу "${book.title}"`);
        return true;
    },
    
    // Повернення книги
    returnBook: function(readerId, bookId) {
        let reader = this.readers.find(r => r.id === readerId);
        let book = this.books.find(b => b.id === bookId);
        
        if (!reader || !book) {
            console.log("Читач або книга не знайдені");
            return false;
        }
        
        let borrowedIndex = reader.borrowedBooks.findIndex(b => b.bookId === bookId);
        if (borrowedIndex === -1) {
            console.log(`${reader.name} не брав цю книгу`);
            return false;
        }
        
        book.borrowed--;
        reader.borrowedBooks.splice(borrowedIndex, 1);
        
        console.log(`📖 ${reader.name} повернув книгу "${book.title}"`);
        return true;
    },
    
    // Статистика бібліотеки
    getStatistics: function() {
        let totalBooks = this.books.reduce((sum, book) => sum + book.copies, 0);
        let borrowedBooks = this.books.reduce((sum, book) => sum + book.borrowed, 0);
        let availableBooks = totalBooks - borrowedBooks;
        
        return {
            totalBooks,
            borrowedBooks,
            availableBooks,
            totalReaders: this.readers.length,
            uniqueTitles: this.books.length
        };
    },
    
    // Топ популярних книг
    getPopularBooks: function(limit = 5) {
        return [...this.books]
            .sort((a, b) => b.borrowed - a.borrowed)
            .slice(0, limit)
            .map(book => ({
                title: book.title,
                author: book.author,
                timesBorrowed: book.borrowed
            }));
    }
};

// Тестування системи бібліотеки
console.log(`--- ${library.name.toUpperCase()} ---`);

// Додавання книг
library.addBook({
    title: "Кобзар", 
    author: "Тарас Шевченко", 
    isbn: "978-966-03-4455-1", 
    year: 1840, 
    copies: 5
});

library.addBook({
    title: "Лісова пісня", 
    author: "Леся Українка", 
    isbn: "978-966-03-3344-2", 
    year: 1911, 
    copies: 3
});

library.addBook({
    title: "Тіні забутих предків", 
    author: "Михайло Коцюбинський", 
    isbn: "978-966-03-2233-3", 
    year: 1911, 
    copies: 2
});

// Реєстрація читачів
let reader1 = library.registerReader({
    name: "Олександр Петренко",
    email: "alex@email.com",
    phone: "+380501234567"
});

let reader2 = library.registerReader({
    name: "Катерина Іванова", 
    email: "kate@email.com",
    phone: "+380507654321"
});

// Видача книг
library.borrowBook(reader1, 1);  // Олександр бере Кобзар
library.borrowBook(reader2, 2);  // Катерина бере Лісову пісню
library.borrowBook(reader1, 2);  // Олександр також бере Лісову пісню

// Статистика
console.log("\n📊 СТАТИСТИКА БІБЛІОТЕКИ:");
let stats = library.getStatistics();
console.log(`Всього книг: ${stats.totalBooks}`);
console.log(`Видано: ${stats.borrowedBooks}`);
console.log(`Доступно: ${stats.availableBooks}`);
console.log(`Читачів: ${stats.totalReaders}`);
console.log(`Унікальних назв: ${stats.uniqueTitles}`);

// Популярні книги
console.log("\n🏆 ПОПУЛЯРНІ КНИГИ:");
library.getPopularBooks().forEach((book, index) => {
    console.log(`${index + 1}. "${book.title}" - ${book.timesBorrowed} раз`);
});

// Повернення книги
library.returnBook(reader1, 1);

// Оновлена статистика
console.log("\n📊 СТАТИСТИКА ПІСЛЯ ПОВЕРНЕННЯ:");
let updatedStats = library.getStatistics();
console.log(`Доступно книг: ${updatedStats.availableBooks}`);

// ===========================================
// ПОРАДИ ЩОДО ВИКОНАННЯ:
// ===========================================

/*
💡 КЛЮЧОВІ МОМЕНТИ:

1. СТВОРЕННЯ ОБ'ЄКТІВ:
   - Літеральний синтаксис: {key: value}
   - new Object() - рідко використовується
   - Object.create() - для прототипного наслідування

2. ДОСТУП ДО ВЛАСТИВОСТЕЙ:
   - obj.property - через крапку (статичний)
   - obj["property"] - через дужки (динамічний)
   - obj[variable] - коли ключ у змінній

3. МЕТОДИ:
   - function() {} - має власний this
   - () => {} - не має власного this
   - this вказує на об'єкт, що викликає метод

4. ДЕСТРУКТУРИЗАЦІЯ:
   - {a, b} = obj - витягуємо властивості
   - {a: newName} - перейменування
   - {a = default} - значення за замовчуванням

5. КОПІЮВАННЯ:
   - {...obj} - поверхневе копіювання
   - JSON.parse(JSON.stringify(obj)) - глибоке (обмежене)

6. КОРИСНІ МЕТОДИ:
   - Object.keys/values/entries - робота з властивостями
   - hasOwnProperty - перевірка наявності властивості

🚫 НАЙЧАСТІШІ ПОМИЛКИ:
- Плутання this в стрілкових функціях
- Зміна об'єкта замість створення копії
- Неправильна деструктуризація вкладених об'єктів
- Забування про мутабельність об'єктів

🏆 КРАЩІ ПРАКТИКИ:
- Використовуй const для об'єктів
- Деструктуризуй параметри функцій
- Створюй копії замість мутації оригіналу
- Використовуй описові назви властивостей
- Групуй пов'язані дані та методи в об'єкти
- Додавай методи валідації для складних об'єктів
*/