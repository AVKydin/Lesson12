
//  Завдання 1. forEach
// Заданий масив з числами. Знайдіть суму цих чисел.
//   let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

let arr1 = [5, 6, 7, 8, 9];
let sum = arr1.reduce((suma, elem) => suma + elem, 0);
console.log(sum);

let sum2 = 0;
  arr1.forEach(function (value) {
  sum2 += value;
  // console.log(value);
}
);
console.log(sum2);



// 👉 Завдання 2. Map
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

let arr2 = [5, 6, 7, 8, 9];
let square1 = arr2.map(num => {
  return num * num;
})
console.log(square1);

const square2 = Array.from(arr2, (num) => num * num);
console.log(square2);

// 👉 Завдання 3. Every
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.

let arr3 = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' }
];

let audit = arr3.every((cntr) => cntr.country.toLowerCase() == "ukraine");
console.log(audit);


// 👉 Завдання 4. Some
// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.

let arr4 = [
  { name: 'Ivan', country: 'Ukraine' },
  {name: 'Petro', country: 'Ukraine'},
  { name: 'Miguel', country: 'Cuba' }
]

let audit2 = arr4.some((cntr) => cntr.country.toLowerCase() == "cuba");
console.log(audit2);

// 👉 Завдання 5. Filter
// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
//     let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.

let arr5 = [1, "string", [3, 4], 5, [6, 7]];

let subarray = arr5.filter((elem) => Array.isArray(elem) );
console.log(subarray);

// 👉 Завдання 6. Reduce
// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля.
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.
// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.

let arr6 = [1, 2, 5, 0, 4, 5, 6];
let sum6 = arr6.reduce(function (sum, elem) {
  if (elem == 0) {
    let newArr = arr6.splice(0, arr6.indexOf(elem));
       return newArr.reduce((suma, element) => suma + element,0);
  }
});
console.log(sum6);

let arr7 = [1, 2, 3, 0, 4, 5, 6];

let sum7 = arr7.reduce((sum, elem) => {
  if (sum + elem >10) {
    return arr7.indexOf(elem);
  } else {
    return sum + elem;
  }
}, 0);
console.log(sum7);

// 👉 Завдання 7. Будь яким методом
// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел.
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

let arr8 = [1, -2, 3, 0, 4, -5, 6, -11];
let newArr8 = arr8.filter((num => num > 0));
let sqrt = newArr8.map((elem) => Math.sqrt(elem))

console.log(newArr8);
console.log(sqrt);
