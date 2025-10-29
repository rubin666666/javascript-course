// ===========================================
// 🏗️ УРОК 7: ОБ'ЄКТИ В JAVASCRIPT (OBJECTS)
// ===========================================

/*
📚 ЩО ВИВЧИМО В ЦЬОМУ УРОЦІ:
- Створення об'єктів різними способами
- Доступ до властивостей та методів
- Методи роботи з об'єктами
- Деструктуризація об'єктів
- Практичні приклади використання
*/

console.log("=== 🏗️ СТВОРЕННЯ ОБ'ЄКТІВ ===");

// 📖 ОБ'ЄКТ - структура даних для зберігання пов'язаних властивостей і методів

// 🎯 Спосіб 1: Літеральна нотація (найпоширеніший)
let userProfile = {
    name: "Анна Коваль",
    age: 28,
    city: "Київ",
    isStudent: false,
    skills: ["HTML", "CSS", "JavaScript"]
};

// 🎯 Спосіб 2: Конструктор Object
let vehicleInfo = new Object();
vehicleInfo.brand = "🚗 Toyota";
vehicleInfo.model = "Camry";
vehicleInfo.year = 2020;
vehicleInfo.isElectric = false;

console.log("👤 Профіль користувача:", userProfile);
console.log("🚗 Інформація про авто:", vehicleInfo);

console.log("\n=== ДОСТУП ДО ВЛАСТИВОСТЕЙ ===");

// Крапкова нотація
console.log("Ім'я:", person.name);
console.log("Вік:", person.age);

// Квадратні дужки
console.log("Місто:", person["city"]);
console.log("Студент:", person["isStudent"]);

// Динамічний доступ
let property = "age";
console.log(`Властивість ${property}:`, person[property]);

// Додавання нових властивостей
person.profession = "дизайнер";
person["hobby"] = "малювання";

console.log("Оновлений person:", person);

console.log("\n=== МЕТОДИ ОБ'ЄКТА ===");

let calculator = {
    result: 0,
    
    add: function(x) {
        this.result += x;
        return this; // Для ланцюжкових викликів
    },
    
    subtract: function(x) {
        this.result -= x;
        return this;
    },
    
    multiply: function(x) {
        this.result *= x;
        return this;
    },
    
    divide: function(x) {
        if (x !== 0) {
            this.result /= x;
        }
        return this;
    },
    
    clear: function() {
        this.result = 0;
        return this;
    },
    
    getValue: function() {
        return this.result;
    }
};

// Ланцюжкові виклики
let result = calculator.add(10).multiply(2).subtract(5).getValue();
console.log("Результат обчислень:", result);

console.log("\n=== ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ ===");

let user = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    profile: {
        firstName: "John",
        lastName: "Doe",
        avatar: "avatar.jpg"
    }
};

// Проста деструктуризація
let {username, email} = user;
console.log("Username:", username);
console.log("Email:", email);

// Деструктуризація з перейменуванням
let {id: userId, username: login} = user;
console.log("User ID:", userId);
console.log("Login:", login);

// Вкладена деструктуризація
let {profile: {firstName, lastName}} = user;
console.log(`Повне ім'я: ${firstName} ${lastName}`);

// Деструктуризація з значеннями за замовчуванням
let {phone = "Не вказано", address = "Не вказано"} = user;
console.log("Телефон:", phone);
console.log("Адреса:", address);

console.log("\n=== КОПІЮВАННЯ ОБ'ЄКТІВ ===");

// Поверхнева копія (shallow copy)
let originalObject = {
    name: "Test",
    numbers: [1, 2, 3],
    nested: {value: 42}
};

// Spread operator
let shallowCopy1 = {...originalObject};

// Object.assign()
let shallowCopy2 = Object.assign({}, originalObject);

console.log("Оригінал:", originalObject);
console.log("Копія 1:", shallowCopy1);

// Зміна вкладених об'єктів впливає на всі копії
shallowCopy1.nested.value = 100;
console.log("Після зміни вкладеного об'єкта:");
console.log("Оригінал:", originalObject.nested.value);
console.log("Копія:", shallowCopy1.nested.value);

// Глибока копія (deep copy)
let deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.nested.value = 200;
console.log("Після глибокої копії:");
console.log("Оригінал:", originalObject.nested.value);
console.log("Глибока копія:", deepCopy.nested.value);

console.log("\n=== МЕТОДИ Object ===");

let product = {
    name: "Ноутбук",
    price: 25000,
    brand: "Apple",
    inStock: true
};

// Object.keys() - масив ключів
let keys = Object.keys(product);
console.log("Ключі:", keys);

// Object.values() - масив значень
let values = Object.values(product);
console.log("Значення:", values);

// Object.entries() - масив пар [ключ, значення]
let entries = Object.entries(product);
console.log("Пари ключ-значення:", entries);

// Object.hasOwnProperty() - перевірка існування властивості
console.log("Має властивість 'price':", product.hasOwnProperty('price'));
console.log("Має властивість 'color':", product.hasOwnProperty('color'));

// Object.freeze() - заморожування об'єкта
let frozenObj = Object.freeze({name: "Frozen", value: 123});
frozenObj.name = "Changed"; // Не спрацює
console.log("Заморожений об'єкт:", frozenObj);

console.log("\n=== ПЕРЕБІР ОБ'ЄКТІВ ===");

let scores = {
    математика: 95,
    фізика: 87,
    хімія: 92,
    історія: 89
};

// for...in
console.log("Оцінки (for...in):");
for (let subject in scores) {
    console.log(`${subject}: ${scores[subject]}`);
}

// Object.entries() з for...of
console.log("\nОцінки (Object.entries):");
for (let [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// forEach з Object.entries
console.log("\nОцінки (forEach):");
Object.entries(scores).forEach(([subject, score]) => {
    console.log(`${subject}: ${score}`);
});

console.log("\n=== ГЕТТЕРИ І СЕТТЕРИ ===");

let rectangle = {
    width: 10,
    height: 5,
    
    get area() {
        return this.width * this.height;
    },
    
    get perimeter() {
        return 2 * (this.width + this.height);
    },
    
    set dimensions(value) {
        [this.width, this.height] = value;
    }
};

console.log("Ширина:", rectangle.width);
console.log("Висота:", rectangle.height);
console.log("Площа:", rectangle.area);
console.log("Периметр:", rectangle.perimeter);

rectangle.dimensions = [15, 8];
console.log("Нові розміри:");
console.log("Площа:", rectangle.area);
console.log("Периметр:", rectangle.perimeter);

console.log("\n=== ПРАКТИЧНІ ПРИКЛАДИ ===");

// Приклад 1: Система управління користувачами
let userManager = {
    users: [],
    
    addUser: function(userData) {
        let user = {
            id: this.users.length + 1,
            ...userData,
            createdAt: new Date().toISOString()
        };
        this.users.push(user);
        return user;
    },
    
    findUser: function(id) {
        return this.users.find(user => user.id === id);
    },
    
    updateUser: function(id, updates) {
        let user = this.findUser(id);
        if (user) {
            Object.assign(user, updates);
            user.updatedAt = new Date().toISOString();
        }
        return user;
    },
    
    deleteUser: function(id) {
        let index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    },
    
    getAllUsers: function() {
        return [...this.users];
    }
};

// Використання системи
userManager.addUser({name: "Анна", email: "anna@example.com"});
userManager.addUser({name: "Петро", email: "petro@example.com"});

console.log("Всі користувачі:", userManager.getAllUsers());

userManager.updateUser(1, {name: "Анна Петрівна"});
console.log("Оновлений користувач:", userManager.findUser(1));

// Приклад 2: Конфігурація додатку
let appConfig = {
    api: {
        baseUrl: "https://api.example.com",
        version: "v1",
        timeout: 5000
    },
    
    ui: {
        theme: "dark",
        language: "uk",
        showNotifications: true
    },
    
    features: {
        enableAnalytics: true,
        enableChat: false,
        maxFileSize: 1024 * 1024 * 5 // 5MB
    },
    
    get apiUrl() {
        return `${this.api.baseUrl}/${this.api.version}`;
    },
    
    updateConfig: function(path, value) {
        let keys = path.split('.');
        let obj = this;
        
        for (let i = 0; i < keys.length - 1; i++) {
            obj = obj[keys[i]];
        }
        
        obj[keys[keys.length - 1]] = value;
    }
};

console.log("API URL:", appConfig.apiUrl);
appConfig.updateConfig('ui.theme', 'light');
console.log("Нова тема:", appConfig.ui.theme);

// Приклад 3: Простий кеш
let cache = {
    data: {},
    
    set: function(key, value, ttl = 60000) { // TTL в мілісекундах
        this.data[key] = {
            value: value,
            expires: Date.now() + ttl
        };
    },
    
    get: function(key) {
        let item = this.data[key];
        if (!item) return null;
        
        if (Date.now() > item.expires) {
            delete this.data[key];
            return null;
        }
        
        return item.value;
    },
    
    has: function(key) {
        return this.get(key) !== null;
    },
    
    clear: function() {
        this.data = {};
    },
    
    size: function() {
        // Очищаємо застарілі записи
        let now = Date.now();
        Object.keys(this.data).forEach(key => {
            if (now > this.data[key].expires) {
                delete this.data[key];
            }
        });
        return Object.keys(this.data).length;
    }
};

// Використання кешу
cache.set('user:1', {name: 'John', email: 'john@example.com'}, 2000);
console.log("💾 З кешу:", cache.get('user:1'));
console.log("📊 Розмір кешу:", cache.size());

// 🏁 ПІДСУМОК КУРСУ
console.log("\n=== 🎓 ВІТАЄМО! ВИ ЗАВЕРШИЛИ КУРС JAVASCRIPT! ===");
console.log("✅ УРОК 1: Змінні та типи даних - освоєно!");
console.log("✅ УРОК 2: Оператори та вирази - освоєно!");
console.log("✅ УРОК 3: Умовні конструкції - освоєно!");
console.log("✅ УРОК 4: Цикли - освоєно!");
console.log("✅ УРОК 5: Функції - освоєно!");
console.log("✅ УРОК 6: Масиви - освоєно!");
console.log("✅ УРОК 7: Об'єкти - освоєно!");

console.log("\n🚀 ВИ ТЕПЕР ЗНАЄТЕ:");
console.log("🔹 Основи синтаксису JavaScript");
console.log("🔹 Як працювати з даними різних типів");
console.log("🔹 Як приймати рішення в коді");
console.log("🔹 Як повторювати дії за допомогою циклів");
console.log("🔹 Як організувати код за допомогою функцій");
console.log("🔹 Як працювати з масивами та об'єктами");
console.log("🔹 Як створювати інтерактивні програми");

console.log("\n🎯 НАСТУПНІ КРОКИ:");
console.log("📚 Вивчайте DOM для роботи з веб-сторінками");
console.log("🌐 Досліджуйте асинхронне програмування");
console.log("⚙️ Вивчайте сучасний JavaScript (ES6+)");
console.log("🛠️ Пробуйте фреймворки: React, Vue, Angular");
console.log("💼 Створюйте власні проекти!");

console.log("\n💪 Продовжуйте практикуватися і створювати!");
console.log("🌟 JavaScript - це тільки початок вашої подорожі у програмування!");

// setTimeout(() => {
//     console.log("Через 3 секунди:", cache.get('user:1')); // null - застарілий
// }, 3000);