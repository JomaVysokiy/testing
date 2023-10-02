// @ts-check
// import { strict as assert } from 'node:assert';
// import assert from 'power-assert';
import { test, expect } from '@jest/globals';
import reverse from "../src/index.js";

test('reverse', () => {
    expect(reverse('artem')).toEqual('metra')
})
// JEST JEST JEST JEST JEST JEST JEST JEST JEST JEST
// Проверка равенства по ссылке
// assert.equal([1, 2], [1, 2])
// expect([1, 2]).toBe([1, 2]); // false
// для вычисления длины toHaveLength
// expect(null).toBeNull();

// Проверяет значение на truthy (любое значение, которое приводится к true)
// expect(true).toBeTruthy();
// Точное сравнение с true
// expect(true).toBe(true);

// expect(undefined).toBeUndefined();

// Проверка, что массив содержит элемент
// expect([1, 2, 3]).toContain(2);

// Проверка, что строка содержит подстроку
// expect('hello, world').toMatch('hello');

// Проверяет, что в объекте есть свойство с определённым значением
// expect({ key: 'value' }).toHaveProperty('key', 'value');

// примеры с отрицанием этих матчеров
// expect(null).not.toBeNull(); // not null
// expect(undefined).not.toBeUndefined(); // not undefined
// expect([1, 2, 3]).not.toContain(2); // not contain 2
// expect('hello, world').not.toMatch('hello'); // not match hello

// При тестировании определенного значения объекта(не всего объекта)
// используется toMatchObject
// const user = {
//     firstName: 'tolya',
//     lastName: 'petrov',
//     age: '33',
//   };
  
//   // Тест пройдёт успешно, так как проверяется только firstName
//   expect(user).toMatchObject({ firstName: 'tolya' });

// пример исключения (проверки функции pop на пустое значение)
// test('pop in empty stack', () => {
//     const stack = makeStack();
//     // Вызов метода pop обернут в функцию
//     // Иначе матчер не сможет перехватить исключение
//     expect(() => stack.pop()).toThrow();
//   });

// функция beforeAll позволяет нам работать с динамичесскими переменными
// чтобы каждый тест опирался именно на ту переменную которая будет
// в данный момент актуальна
// функция принимает в себя ФУНКИЦИЮ!
// let now;
// beforeEach(() => {
//   now = Date();
// })
// если нужно выполнить код один раз передм всеми тестами то
// beforeAll(() => {
//   fileData = fs.readFileSync('path/to/file');
// });

// test("reverse", () => {
//   expect(reverse("hello")).toEqual("olleh");
//   expect(reverse("")).toEqual("");
// });
// console.log("yesssssssss");
