// .filter(callback(value, index, array))

// let ages = [17, 16, 18, 19, 22, 25, 17];
// let filterAges = ages.filter(function (age) {
//     if (age >= 18) {
//         return age;
//     }
// })

// let filterAges = ages.filter(age => age >= 18)
// console.log(filterAges);

// let names = ['ivan', 'petro', 'pavlo'];

// let newNames = names.filter(name => name.length >= 5)
// console.log(newNames);

// let users = [
//     {
//         name: 'ivan',
//         age: 25,
//         city: 'Lviv'
//     },
//     {
//         name: 'petro',
//         age: 17,
//         city: 'Kyiv'
//     },
//     {
//         name: 'pavlo',
//         age: 33,
//         city: 'Stryi'
//     }
// ]

// const newUsers = users.filter(user => user.age >= 18);
// console.log(newUsers);

// const newUsers = users.filter((user) => user.age >= 18&&user.city.toLowerCase() == 'lviv');
// console.log(newUsers);


// .map(callback(value,index,array))

// const price = [699, 999, 1299];
// const dollars = price.map(value => '$' + value);
// console.log(price);
// console.log(dollars);

// const dollars = price.map(function (value) {
//     if (value >= 900) {
//         return "$" + value;
//     } else {
//         return value;
//     }
// });

// const dollars = price.map(value => value >= 900 ? "$" + value : value)
// console.log(dollars);



// const price = [
//   {
//     name: "iPhone XI",
//     price: "699$",
//   },
//   {
//     name: "iPhone XI Pro",
//     price: "999$",
//   },
//   {
//     name: "iPhone XI Pro Max",
//     price: "1299$",
//   },
// ];

// const priceHryvnia = price.map(phone => {
//     phone.price = parseInt(phone.price) * 40 + 'грн';
//     return phone;
// });

// console.log(priceHryvnia);



// .reduce(callback(treviousValue, currentValue, currebtIndex, array))

// const numbers = [10, 20, 30];

// const suma = numbers.reduce((total, elem) => total + elem, 0)
// console.log(suma);

// const price = [
//   {
//     name: "iPhone XI",
//     price: "699$",
//   },
//   {
//     name: "iPhone XI Pro",
//     price: "999$",
//   },
//   {
//     name: "iPhone XI Pro Max",
//     price: "1299$",
//   },
// ];

// const sum = price.reduce((accum, phone) => accum + parseFloat(phone.price), 0);
// console.log(sum);


// const price = [
//   {
//     name: "iPhone XI",
//     price: "699$",
//     count: 4,
//   },
//   {
//     name: "iPhone XI Pro",
//     price: "999$",
//     count: 2,
//   },
//   {
//     name: "iPhone XI Pro Max",
//     price: "1299$",
//     count: 1,
//   },
// ];

// const sum = price.reduce((accum, phone) => accum + parseFloat(phone.price) * phone.count, 0);
// console.log(sum);

// const sumGrn = price.reduce((accum, phone) => accum + parseFloat(phone.price) * phone.count*40, 0);
// console.log(sumGrn);


// [].reduceRight();

// .some(callback(value, index, array));

// const users = ["user", "user", 'admin', 'user'];
// const check = users.some(us => us === 'admin');
// console.log(check);

// .every(callback(value, index, array));

// const users = ["user", "user", 'admin', 'user'];
// const check = users.every((us) => us === "user");
// console.log(check);

// .includes(searchElement, fromIndex?)

// const users = ["user", "user", 'admin', 'user'];
// const check = users.includes("admin");
// console.log(check);

// Array.from();

// const newArray = Array.from('hello');
// console.log(newArray);

// console.log(new Array(5));
// const newArray = Array.from([5]);
// console.log(newArray);

// const newArray = Array.from([5,10,20], num => num*2);
// console.log(newArray);

// spred ...

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// // let all = arr1.concat(arr2);
// // let all = [...arr1, ...arr2];
// let all = [...arr1, ...arr2.map(num=>num*2)];
// console.log(all);

// 'use strict';

// const user = {
//     name: 'Ivan',
//     age: 25,
// };

// Object.freeze(user);
// user.age = 18;
// user.cyti = 'Lviv';
// delete user.name;


// Object.seal(user);
// user.age = 18;
// user.cyti = 'Lviv';
// delete user.name;
// console.log(user);

// let obj1 = {
//     firstName: 'Ivan'
// }

// let obj2 = {
//   lastName: "Ivanov",
// };

// const newObj = Object.assign({}, obj1, obj2);
// console.log(newObj);

// const newObj = {
//     ...obj1,
//     ...obj2,
// };
// console.log(newObj);

// const user = {
//     name: 'Ivan',
//     age: 25,
// };

// let val = Object.values(user);
// console.log(val);

// let key = Object.keys(user);
// console.log(key);

// let enr = Object.entries(user);
// console.log(enr);

// const user = {
//     name: 'Ivan',
//     age: 25,
//     phone: '+380935553355',
//     email: 'ivanne@gmail.com',
// };

// let { name, age } = user;
// console.log(name, age);

// let { name: userName, age: userAge, email } = user;
// console.log(userName, userAge, email);

// let users = ['Ivan', 'Petro', 'Pavlo'];
// let [a, b, c] = users;
// console.log(a,b,c);

// let users = ['Ivan', 'Petro', 'Pavlo', 'Alina', 'Oksana'];
// let [first,,, fifth] = users;
// console.log(first, fifth);

// function showData({name:userName, age:userAge}) {
//     console.log(userName, userAge);
// }
// const user = {
//     name: 'Ivan',
//     age: 25,
//     phone: '+380935553355',
//     email: 'ivanne@gmail.com',
// };

// showData(user);

// function sum([a, b, c]) {
//     let suma = a + b + c;
//     console.log(suma);
// }

// sum([1,2,3])

// function post(url, { data: { name, sname }, cache }) {
//     console.log(url, name, sname, cache);
// }

// const person = {
//     name: 'Ivan',
//     sname: 'Ivanov',
// }

// let body = {
//   data: {
//     name: "Ivan",
//     sname: 'Ivanov',
//     },
//     cache: false
// };

// post("postUrl", body);

//Ітератор

// let users = ['Ivan', 'Petro', 'Pavlo'];
// let names = users.entries();
// console.log(names);
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next().value);

// for (const iterator of users) {
//   console.log(iterator);
// }

// for (const iterator of users.entries()) {
//   console.log(iterator[0], iterator[1]);
// }

//Генератори

// function* getNumbers() {
//   for (let i = 1; i <= 5; i++){
//     yield i
//   }
// }

// let numbers = getNumbers();
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());

//Множина Set

// let mySet = new Set();

// let ages = [17, 16, 18, 19, 22, 25, 17];

// let numbers = new Set(ages);
// console.log(numbers.size);

// let mySet = new Set();
// mySet.add(1).add(2).add(3).add(1);
// console.log(mySet);

// let mySet = new Set();
// mySet.add(10).add(20).add(30).add(50);
// mySet.delete(30)
// console.log(mySet);
// mySet.clear()
// console.log(mySet);

// let mySet = new Set();
// mySet.add(10).add(20).add(30).add(50);
// console.log(mySet.has(30));
// console.log(mySet.has(31));

// mySet.forEach(function (value1, values2, set){
//   console.log(value1, values2, set);
// })

// for (const n of mySet) {
//   console.log(n);
// }

// MAP
// let myMap = new Map();

// let arr = [
//   [1, "a"],
//   [2, "b"],
//   [3, "a"],
// ];

// let myMap = new Map(arr);
// console.log(myMap);

// let arr = [
//   [1, "a"],
//   ["b", 2],
//   [3, true],
// ];

// let myMap = new Map(arr);
// console.log(myMap);

// myMap.set(4, "d");
// myMap.set(5, "qqqq");
// console.log(myMap);
// console.log(myMap.get("b"));
// console.log(myMap.get(5));
// console.log(myMap.has(6));
// if (myMap.has(6)) {
//   console.log(myMap.get(6));
// }

// myMap.delete('b')
// myMap.clear()
// console.log(myMap);

// myMap.forEach(function (value1, values2, map) {
//   console.log(values2, value1);
// })

// for (const elem of myMap.entries()) {
  // console.log(elem);
  // console.log(elem[0], elem[1]);
// }