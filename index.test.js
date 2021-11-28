const callLate = require('./index');

describe('callLate test', () => {
	test('async', (done) => {
		let i = 1;
		callLate(() => {
			i = 2;
			done();
		});
		expect(i).toBe(1);
	});

	test('defer parallel', (done) => {
		let arr = [];
		callLate(() => {
			arr.push(1);
		});
		callLate(() => {
			arr.push(2);
		});
		callLate(() => {
			arr.push(3);
		});
		expect(arr.length).toBe(0);
		setTimeout(() => {
			expect(arr).toEqual([1, 2, 3]);
			done();
		}, 100);
	});

	test('defer serial', (done) => {
		let arr = [];
		callLate(() => {
			arr.push(0);
			callLate(() => {
				arr.push(2);
				callLate(() => {
					arr.push(3);
				});
			});
			arr.push(1);
		});
		expect(arr.length).toBe(0);
		setTimeout(() => {
			expect(arr).toEqual([0, 1, 2, 3]);
			done();
		}, 100);
	});
});
