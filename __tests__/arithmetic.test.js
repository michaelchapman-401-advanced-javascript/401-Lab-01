'use strict';
const faker = require('faker/locale/de');
const arithmetic = require('../lib/arithmetic.js');
const greet = require('../lib/greet.js');

describe('arithmetic module\'s add function', () => {
  it('Should not take strings', () => {
    let add = arithmetic.add([faker.random.word(), faker.random.word()]);
    expect(add).toBeNull();
  });

  it('Should only take numbers', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let add = arithmetic.add([num1, num2]);
    expect(add).toEqual(num1 + num2);
  });
});

describe('arithmetic module\'s subtract function', () => {
  it('Should not take strings', () => {
    let subtract = arithmetic.subtract([faker.random.word(), faker.random.word()]);
    expect(subtract).toBeNull();
  });

  it('Should only take numbers', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let subtract = arithmetic.subtract([num1, num2]);
    expect(subtract).toEqual(num1 - num2);
  });
});

describe('arithmetic module\'s multiply function', () => {
  it('Should not take strings', () => {
    let multiply = arithmetic.multiply([faker.random.word(), faker.random.word()]);
    expect(multiply).toBeNull();
  });

  it('Should only take numbers', () => {
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let multiply = arithmetic.multiply([num1, num2]);
    expect(multiply).toEqual(num1 * num2);
  });
});

describe('arithmetic module\'s divide function', () => {
  it('Should not take strings', () => {
    let divide = arithmetic.divide([faker.random.word(), faker.random.word()]);
    expect(divide).toBeNull();
  });

  it('Should only take numbers', () => {
    let num1 = faker.random.number() + 1;
    let num2 = num1 + faker.random.number();
    let divide = arithmetic.divide(num1, num2);
    expect(divide).toEqual(num1 / num2);
  });
});

describe('Greet module', () => {
  it('Only allows string values as parameter', () => {
    let message = greet.greet(faker.random.number());
    expect(message).toBeNull();
  });

  it('Requires a string parameter', () => {
    let message = greet.greet('world');
    expect(message).toEqual(`Hello world!`);
  });
});
