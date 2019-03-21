export default class RedirectHandler {
	constructor(naja) {
		this.naja = naja;

		naja.addEventListener('success', (evt) => {
			const {payload, options} = evt;
			if (payload.redirect) {
				this.makeRedirect(payload.redirect, payload.forceRedirect || options.forceRedirect);
				evt.stopImmediatePropagation();
			}
		});

		this.locationAdapter = {
			assign: (url) => window.location.assign(url),
		};
	}

	makeRedirect(url, force) {
		// window.location.origin is not supported in IE 10
		const origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
		const externalRedirect = /^https?/i.test(url) && ! new RegExp(`^${origin}`, 'i').test(url);
		if (force || externalRedirect) {
			this.locationAdapter.assign(url);

		} else {
			this.naja.makeRequest('GET', url);
		}
	}
}
