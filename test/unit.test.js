'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { greet, add } = require('../src/index.js');

test('greet returns a greeting with the supplied name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('greet trims whitespace', () => {
  assert.equal(greet('  Ada  '), 'Hello, Ada!');
});

test('greet rejects an empty name', () => {
  assert.throws(() => greet('   '), /name must not be empty/);
});

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('add rejects non-finite values', () => {
  assert.throws(() => add(Number.NaN, 1), /finite numbers/);
});
