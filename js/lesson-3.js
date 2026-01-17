// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map((num) => {
// return num ** 2;
// });
// const doubleNumbers = numbers.map((num) => num ** 2);

// console.log(doubleNumbers);


// const getDoubleNumbers = (array) => {
//     return array.map((num) => {
//         return num ** 2;
//     });
// };

// console.log(getDoubleNumbers(numbers))





// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const resultData = data.flatMap(num => num.values);

// console.log(resultData);


// const getValuesArray = (array) => {
//     return array.flatMap((num) => {
//         return num = num.values;
//     });
// };

// console.log(getValuesArray(data))





// Завдання 3:
// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const peopleAge = people.some(num => num.age < 20);

// console.log(peopleAge)


// const getPeopleAge = (array) => {
//     return array.some((num) => {
//         return num.age < 20;
//     });
// };

// console.log(getPeopleAge(people))





// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const everyNumbers = numbers.every(num => num % 2 === 0);

// console.log(everyNumbers);


// const getEveryNumbers = (array) => {
//     return array.every((num) => {
//         return num % 2 === 0;
//     });
// };

// console.log(getEveryNumbers(numbers))





// Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstOddNumber = numbers.find(num => num % 2 !== 0);

// // console.log(firstOddNumber);


// const getFirstOddNumber = (array) => {
//     return array.find((num) => {
//         return num % 2 !== 0;
//     });
// };

// console.log(getFirstOddNumber(numbers))





// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedNumbers = numbersArray.toSorted((a, b) => a - b);

// console.log(sortedNumbers);


// const getSortedNumber = (array) => {
//     return array.toSorted((a, b) => {
//         return a - b;
//     });
// };

// console.log(getSortedNumber(numbersArray))





// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const stringSorted = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(stringSorted);


// const getSortedString = (array) => {
//     return array.toSorted((a, b) => {
//         return a.localeCompare(b);
//     });
// };

// console.log(getSortedString(stringArray))





// Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const userAgeSorted = users.toSorted((a, b) => a.age - b.age);

// console.log(userAgeSorted);


// const getUserAgeSorted = (array) => {
//     return array.toSorted((a, b) => {
//         return a.age - b.age;
//     });
// };

// console.log(getUserAgeSorted(users))





// Завдання 9:
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const adultUser = user.filter(item => item.age > 20);

// console.log(adultUser);


// const getAdultUser = (array) => {
//     return array.filter((item) => {
//         return item.age > 20;
//     });
// };

// console.log(getAdultUser(user))





// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumNumbers = numbers.reduce((previousValue, number) => previousValue + number, 0);

// console.log(sumNumbers);


// const getSumNumbers = (array) => {
//     return array.reduce((previousValue, number) => {
//         return previousValue + number;
//     }, 0);
// }

// console.log(getSumNumbers(numbers))





// Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
 
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
 
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
// - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
// - метод multiply -Множить поточне значення на value. Повертає this.
 
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
// Приклад використання:
// const calc = new Calculator();

// class Calculator {
//     constructor(value = 0) {
//         this.value = value;
//     }
//     number(num) {
//         this.value = num;
//         return this;      
//     }

//     getResult() {
//         return this;
//     }

//     add(num) {
//         this.value += num;
//         return this;
//     }

//     subtract(num) {
//         this.value -= num;
//         return this;
//     }

//     divide(num) {
//         if (this === 0) {
//             return 'Error. Impossible to divide';
//         }
//         this.value /= num;
//         return this;
//     } 

//     multiply(num) {
//         this.value *= num;
//         return this;
//     }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


// console.log(result); // 24
  




// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
 
// class Client {
//     #login;
//     #email;

//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const client = new Client({ login: 'Serhii', email: 'tymoschuk.sergio@gmail.com'});
// // console.log(client.login);
// client.login = 'Serhii Tymoshchuk';
// console.log(client.login);
// // console.log(client.email);
// client.email = 'serhii.tymoshchuk@icloud.com';
// console.log(client.email);

// console.log(client);




// Завдання 13:

// Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
// - `name` - ім'я людини;
// - `age`- вік людини;
// - `gender` - стать людини;
// - `email`- електронна пошта людини.
  
// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю 
// та електронною поштою людини.
  
  
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
// - salary - зарплата співробітника;
// - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, 
// який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
 
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.gender = obj.gender;
        this.email = obj.email;
    }

    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email
        };
    };
};

class Employee extends Person {

    constructor(obj) {
        super(obj);
        this.salary = obj.salary;
        this.department = obj.department
    }

    getEmployeeDetails() {
        return {
            ...this.getDetails(),
            salary: this.salary,
            department: this.department
        };
    };
};

<<<<<<< HEAD
const employer = new Employee({
    name: 'Serhii',
    age: 32,
    gender: 'male',
    email: 'serhii.tymoshchuk@icloud.com',
    salary: 12000,
    department: 'Head Bartender'
})
=======
// const employee = new Employee({
//     name: 'Serhii',
//     age: 32,
//     gender: 'male',
//     email: 'serhii.tymoshchuk@icloud.com',
//     salary: 12000,
//     department: 'Head Bartender'
// })
>>>>>>> b54a22d34e52577acac0210e49fded27cb305616

console.log(employer.getDetails())
console.log(employer.getEmployeeDetails())
