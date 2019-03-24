// no AbortController at all
if ( ! self.AbortController) {
	self.AbortSignal = class AbortSignal extends EventTarget {
		constructor() {
			super();
			Object.defineProperty(this, 'aborted', {value: false, writable: true, configurable: true});
			Object.defineProperty(this, 'onabort', {value: null, writable: true, configurable: true});
		}

		toString() {
			return '[object AbortSignal]';
		}

		dispatchEvent(event) {
			if (event.type === 'abort') {
				this.aborted = true;
				if (typeof this.onabort === 'function') {
					this.onabort.call(this, event);
				}
			}

			super.dispatchEvent(event);
		}
	};

	self.AbortController = class AbortController {
		constructor() {
			Object.defineProperty(this, 'signal', {value: new AbortSignal(), writable: true, configurable: true});
		}

		toString() {
			return '[object AbortController]';
		}

		abort() {
			const event = new Event('abort');
			this.signal.dispatchEvent(event);
		}
	};
}


// no abortable fetch
if ( ! self.Request.prototype.hasOwnProperty('signal')) {
	const OriginalRequest = self.Request;
	self.Request = function Request(input, init) {
		let signal;
		if (init && init.signal) {
			signal = init.signal;
			delete init.signal;
		}

		const request = new OriginalRequest(input, init);
		if (signal) {
			Object.defineProperty(request, 'signal', {
				writable: false,
				enumerable: false,
				configurable: true,
				value: signal,
			});
		}

		return request;
	};
	self.Request.prototype = OriginalRequest.prototype;

	const originalFetch = self.fetch;
	self.fetch = (input, init) => {
		const signal = Request.prototype.isPrototypeOf(input) ? input.signal : (init ? init.signal : undefined);
		if ( ! signal) {
			return originalFetch(input, init);
		}

		const abortError = new DOMException('Aborted', 'AbortError');
		if (signal.aborted) {
			return Promise.reject(abortError);
		}

		const abortion = new Promise((resolve, reject) => {
			signal.addEventListener('abort', () => reject(abortError), {once: true});
		});

		if (init && init.signal) {
			delete init.signal;
		}

		return Promise.race([abortion, originalFetch(input, init)]);
	};
}
