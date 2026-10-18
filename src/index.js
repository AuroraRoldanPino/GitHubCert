'use strict';

/**
 * Returns a greeting for the supplied name.
 * @param {string} name
 * @returns {string}
 */
function greet(name = 'GitHub Actions') {
  const cleanName = String(name).trim();
  if (!cleanName) {
    throw new Error('name must not be empty');
  }
  return `Hello, ${cleanName}!`;
}

/**
 * Adds two finite numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a + b;
}

module.exports = { greet, add };
