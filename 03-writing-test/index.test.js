import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Testing sum function', () => {
	// Arange
	const num1 = 99;
	const num2 = 10;

	// Action
	const realValue = sum(num1, num2);

	// Assert
	const shouldValue = 109;

	assert.strictEqual(realValue, shouldValue);
});