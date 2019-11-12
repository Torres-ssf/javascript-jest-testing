import analyse from '../lib/analysis';

describe('Analyse an array and returns an object with information about it', () => {
	test('return the smaller element from the array', () => {
		expect(analyse([1, 2, 3, 4, 5, 6]).min).toBe(1);
	});
	test('return the biggest element from the array', () => {
		expect(analyse([1, 2, 3, 4, 5, 6]).max).toBe(6);
	});
	test('return the average element from the array', () => {
		expect(analyse([1, 2, 3, 4, 5, 6]).average).toBe(3.5);
	});
	test('return the length element from the array', () => {
		expect(analyse([1, 2, 3, 4, 5, 6]).length).toBe(6);
	});
	test('return the smaller element from the array', () => {
		expect(analyse([5, 6, 7, 8, 9, 10]).min).toBe(5);
	});
	test('return the biggest element from the array', () => {
		expect(analyse([5, 6, 7, 8, 9, 10]).max).toBe(10);
	});
	test('return the average element from the array', () => {
		expect(analyse([5, 6, 7, 8, 9, 10]).average).toBe(7.5);
	});
	test('return the length element from the array', () => {
		expect(analyse([5, 6, 7, 8, 9, 10]).length).toBe(6);
	});
})