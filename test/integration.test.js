'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { greet, add } = require('../src/index.js');

test('integration: greeting and arithmetic work together', () => {
  const greeting = greet('CI pipeline');
  const result = add(20, 22);

  assert.equal(greeting, 'Hello, CI pipeline!');
  assert.equal(result, 42);
});
