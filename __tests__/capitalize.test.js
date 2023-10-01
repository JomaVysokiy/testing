import capitalize from '../src/capitalize.js';
// import { strict as assert } from 'node:assert';
// import assert from 'power-assert';
import { test, expect, beforeEach } from '@jest/globals';

// let str;
// beforeEach(() => {
//   str = 'hello';
// })

test('capitalize', () => {
  expect(capitalize(str).toEqual('Hello'));
  expect(capitalize('hello')).toEqual('Hello');
})

// let text = 'hello';
// assert(capitalize(text) === 'Hello')
// console.log('completed')

// console.log('Все тесты пройдены!');  
// assert.equal(capitalize('hello'), 'Hello');
// assert.equal(capitalize(''), '');
// assert.strictEqual(isPrime(3),true) - тестирование со значением

// с проверкой содержимого
// assert.deepStrictEqual({ key: 'value' }, { key: 'value' }); // всё ок
// assert.deepStrictEqual({ key: 'value' }, { key: 'another value' }); // Бум!
// assert.deepStrictEqual(getDividors(9),[1 ,2 3] ); // УСПЕХ!

// для болшинства ситуаций подойдет как раз power-assert


// const array = [1, 2, 3];
// const zero = 0;
// const two = 2;
// assert(array.indexOf(zero) === two);

// let str;
// beforeAll(() => {
//   str = 'hello'
// })


