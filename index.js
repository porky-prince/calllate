(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f()
	} else if (typeof define === "function" && define.amd) {
		define([], f)
	} else {
		var g;
		if (typeof window !== "undefined") {
			g = window
		} else if (typeof global !== "undefined") {
			g = global
		} else if (typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.callLate = f()
	}
})(function () {
	var len = 0;
	var queue = new Array(1024);

	function flush() {
		for (var i = 0; i < len; ++i) {
			queue[i]();
			queue[i] = undefined;
		}

		len = 0;
	}

	function usePromise() {
		var p = Promise.resolve();
		return function () {
			// catch in ie<=8 has syntax error
			p.then(flush, console.error);
		};
	}

	var MutationObserverCtor;
	if (typeof window !== 'undefined') {
		MutationObserverCtor = window.MutationObserver || window.WebKitMutationObserver;
	}

	function useMutationObserver() {
		var count = 1;
		var observer = new MutationObserverCtor(flush);
		var node = document.createTextNode(String(count));
		observer.observe(node, {characterData: true});

		return function () {
			count = (count + 1) % 2;
			node.data = String(count);
		};
	}

	function useMessageChannel() {
		var channel = new MessageChannel();
		channel.port1.onmessage = flush;
		return function () {
			channel.port2.postMessage(0);
		};
	}

	function useSetImmediate() {
		var _setImmediate = setImmediate;
		return function () {
			_setImmediate(flush);
		};
	}

	function useSetTimeout() {
		var _setTimeout = setTimeout;
		return function () {
			_setTimeout(flush, 0);
		};
	}

	var polyfill;
	if (typeof Promise === 'function' && typeof Promise.resolve === 'function') {
		polyfill = usePromise();
	} else if (MutationObserverCtor) {
		polyfill = useMutationObserver();
	} else if (typeof importScripts === 'function' && typeof MessageChannel === 'function') {
		// web worker
		polyfill = useMessageChannel();
	} else if (typeof setImmediate === 'function') {
		// only ie>=10
		polyfill = useSetImmediate();
	} else {
		polyfill = useSetTimeout();
	}

	return function (cb) {
		queue[len] = cb;
		++len;
		if (len === 1) {
			polyfill();
		}
	}
});
