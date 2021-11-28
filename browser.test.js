if (typeof importScripts === 'function') {
	importScripts('index.js');
	console.warn('worker callLate test');
} else {
	console.warn('callLate test');
}

function every(expect, toEqual) {
	for (var i = 0, length = toEqual.length; i < length; ++i) {
		if (expect[i] !== toEqual[i]) {
			return false;
		}
	}
	return true;
}

function test(expect, toEqual) {
	if (typeof toEqual === 'object' ? every(expect, toEqual) : expect === toEqual) {
		console.info('	passed');
	} else {
		console.error('	failed');
	}
}

testDemo1();

function testDemo1() {
	console.log('async');
	var i = 1;
	callLate(function () {
		i = 2;
	});
	test(i, 1);
	testDemo2();
}

function testDemo2() {
	console.log('defer parallel');
	var arr = [];
	callLate(function () {
		arr.push(1);
	});
	callLate(function () {
		arr.push(2);
	});
	callLate(function () {
		arr.push(3);
	});
	test(arr.length, 0);
	setTimeout(function () {
		test(arr, [1, 2, 3]);
		testDemo3();
	}, 100);
}

function testDemo3() {
	console.log('defer serial');
	var arr = [];
	callLate(function () {
		arr.push(0);
		callLate(function () {
			arr.push(2);
			callLate(function () {
				arr.push(3);
			});
		});
		arr.push(1);
	});
	test(arr.length, 0);
	setTimeout(function () {
		test(arr, [0, 1, 2, 3]);
	}, 100);
}
