// // Завдання 1:

// // 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector('body');
// console.log(bodyEl);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleEl = document.querySelector('#title')
// console.log(titleEl)

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const classEl = document.querySelector('.list')
// console.log(classEl)

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataEl = document.querySelectorAll('[data-topic]')
// console.log(dataEl)

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic 
// //     і виведи його в консоль;
// const firstDataEl1 = dataEl[0];
// console.log(firstDataEl1)
// const firstDataEl2 = classEl.firstElementChild;
// console.log(firstDataEl2)
// const firstDataEl3 = document.querySelector('[data-topic]');
// console.log(firstDataEl3)

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic 
// //     і виведи його в консоль;
// const lastDataEl = dataEl[dataEl.length - 1];
// console.log(lastDataEl);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const sibilingElH1 = titleEl.nextElementSibling;
// console.log(sibilingElH1)

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3 = document.querySelectorAll('h3')
// console.log(h3)
// h3.forEach(h => {
//     console.log(h.textContent);
//     h.classList.add('active'); // 9 - для кожного елмента h3 додай class="active",
//                                //     який змінить колір заголовка на червоний колір
// })

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation"
// //     і виведи його в консоль;
// const topicNavigation = document.querySelector("[data-topic='navigation']")
// console.log(topicNavigation)

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style 
// //     і зроби його backgroundColor жовтим
// topicNavigation.style.backgroundColor = 'yellow'

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на 
// //     "Я змінив тут текст!".
// topicNavigation.querySelector('p').textContent = 'Я змінив тут текст!'
// document.querySelector("[data-topic='navigation'] p").textContent = 'Я змінив тут текст!'

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент 
// //      у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic 
// //      і виведи його в консоль;
// const currentTopic = 'manipulation';
// const topicManipulation = document.querySelector(`[data-topic=${currentTopic}]`)
// console.log(topicManipulation)

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// topicManipulation.style.backgroundColor = 'blue'

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// titleCompleted = document.querySelector('.completed')
// console.log(titleCompleted)

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// titleCompleted.parentElement.remove();
// titleCompleted.closest('li').remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p 
// //      і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const markup = '<p>Document Object Model</p >'
// titleEl.insertAdjacentHTML('afterend', markup);
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'Document Object Model';
// titleEl.after(newParagraph);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це
// //      - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи 
// //      і помістити їх в дерево - це використовувати рядки з тегами 
// //      і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI
// //      потім наповнити H3 та P і готову LI закинути у кінець списку
// const newLI = document.createElement('li')
// const newH3 = document.createElement('h3')
// const newP = document.createElement('p')
// newH3.textContent = 'Властивість innerHTML'
// newP.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу'
// newLI.append(newH3, newP);
// classEl.append(newLI)

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const newMarkup = `<li>
//           <h3>Властивість innerHTML</h3>
//           <p>
//             Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
//             використовувати рядки з тегами і дозволити браузеру зробити всю
//             важку роботу
//           </p>
//         </li>`
// classEl.insertAdjacentHTML('beforeend', newMarkup)

// // 20 - очисти список
// classEl.innerHTML = '';



// Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.querySelector('.number-container')
// console.log(numberContainer)

// createDiv = []

// for (let i = 1; i <= 100; i += 1){
//     const div = document.createElement('div');
//     div.textContent = randomNumber();
//     div.classList.add('number');
//     createDiv.push(div);

//     if (div.textContent % 2 === 0) {
//         div.classList.add('even')
//     } else {
//         div.classList.add('odd')
//     }
// }

// numberContainer.append(...createDiv)



// Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`


// const inputEl = document.querySelector('.js-username-input')
// inputEl.addEventListener('input', (event) => {
//     if (event.target.value.length > 6) {
//         event.target.classList.add('succes')
//         event.target.classList.remove('error')
//     } else {
//         event.target.classList.add('error')
//         event.target.classList.remove('succes')
//     }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`


// inputEl.addEventListener('focus', ({ target }) => {
//     if (target.value.length === 0) {
//         target.style.outline = '3px solid red';
//     } else {
//         target.style.outline = '3px solid green';
//     }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


// inputEl.addEventListener('blur', ({ target }) => {
//     if (target.value.trim().length === 0) {
//         target.style.outline = '3px solid red';
//     } else {
//         target.style.outline = '3px solid lime';
//     }
// });

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


// const formEl = document.querySelector('.js-contact-form');
// const spanEl = document.querySelector('.js-username-output')

// formEl.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const { userName, accept } = event.target.elements;
//     const inputValue = userName.value.trim();
//     const checkboxValue = accept.checked;

//     if (inputValue === '' || !checkboxValue) {
//         alert('Fill all fields')
//         return;
//     }

//     spanEl.textContent = 'Anonymous'

//     console.log({ inputValue, checkboxValue });
//     formEl.reset();
// })

// formEl.addEventListener('input', (event) => {
//     if (inputEl.value.trim() === '') {
//         spanEl.textContent = 'Anonymous'
//     } else {
//         spanEl.textContent = inputEl.value.trim();
//     }
// })



// Завдання 4:
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const boxEl = document.querySelector('.box')
// const decreaseBtn = document.querySelector('.js-decrease')
// const increaseBtn = document.querySelector('.js-increase')

// decreaseBtn.addEventListener('click', (event) => {
//         boxEl.style.width = boxEl.offsetWidth - 20 + 'px';
//         boxEl.style.height = boxEl.offsetHeight - 20 + 'px';
// })

// increaseBtn.addEventListener('click', (event) => {
//         boxEl.style.width = boxEl.offsetWidth + 20 + 'px';
//         boxEl.style.height = boxEl.offsetHeight + 20 + 'px';
// })