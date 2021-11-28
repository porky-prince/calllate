const callLater = require('./index');

describe('callLater test', () => {
	test('async', (done) => {
		let i = 1;
		callLater(() => {
			i = 2;
			done();
		});
		expect(i).toBe(1);
	});

	test('defer parallel', (done) => {
		let arr = [];
		callLater(() => {
			arr.push(1);
		});
		callLater(() => {
			arr.push(2);
		});
		callLater(() => {
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
		callLater(() => {
			arr.push(0);
			callLater(() => {
				arr.push(2);
				callLater(() => {
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
