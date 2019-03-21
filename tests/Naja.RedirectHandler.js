import mockNaja from './setup/mockNaja';
import fakeFetch from './setup/fakeFetch';
import {assert} from 'chai';
import sinon from 'sinon';

import RedirectHandler from '../src/core/RedirectHandler';


describe('RedirectHandler', function () {
	fakeFetch();

	it('constructor()', function () {
		const naja = mockNaja();
		const mock = sinon.mock(naja);
		mock.expects('addEventListener')
			.withExactArgs('success', sinon.match.instanceOf(Function))
			.once();

		new RedirectHandler(naja);
		mock.verify();
	});

	it('reads redirect from response', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(redirectHandler);
		mock.expects('makeRedirect')
			.withExactArgs('/RedirectHandler/redirect/redirectTo', true)
			.once();

		this.fetchMock.respond(200, {'Content-Type': 'application/json'}, {redirect: '/RedirectHandler/redirect/redirectTo', forceRedirect: true});
		return naja.makeRequest('GET', '/RedirectHandler/redirect').then(() => {
			mock.verify();
		});
	});

	it('reads forceRedirect from options', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(redirectHandler);
		mock.expects('makeRedirect')
			.withExactArgs('/RedirectHandler/redirect/redirectTo', true)
			.once();

		this.fetchMock.respond(200, {'Content-Type': 'application/json'}, {redirect: '/RedirectHandler/redirect/redirectTo', forceRedirect: false});
		return naja.makeRequest('GET', '/RedirectHandler/forceRedirect/options', null, {forceRedirect: true}).then(() => {
			mock.verify();
		});
	});

	it('stops event propagation', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(redirectHandler.locationAdapter);
		mock.expects('assign')
			.withExactArgs('/RedirectHandler/stopEventPropagation/redirectTo')
			.once();

		const nextListener = sinon.spy();
		naja.addEventListener('success', nextListener);

		this.fetchMock.respond(200, {'Content-Type': 'application/json'}, {redirect: '/RedirectHandler/stopEventPropagation/redirectTo', forceRedirect: true});
		return naja.makeRequest('GET', '/RedirectHandler/stopEventPropagation').then(() => {
			assert.isFalse(nextListener.called);
			mock.verify();
			mock.restore();
		});
	});

	it('makes request if forceRedirect is false', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(naja);
		mock.expects('makeRequest')
			.withExactArgs('GET', '/RedirectHandler/noForce')
			.once();

		redirectHandler.makeRedirect('/RedirectHandler/noForce', false);
		mock.verify();
	});

	it('redirects if forceRedirect is true', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(redirectHandler.locationAdapter);
		mock.expects('assign')
			.withExactArgs('/RedirectHandler/forceRedirect')
			.once();

		redirectHandler.makeRedirect('/RedirectHandler/forceRedirect', true);
		mock.verify();
		mock.restore();
	});

	it('makes request if url is local', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(naja);
		mock.expects('makeRequest')
			.withExactArgs('GET', 'http://localhost:9876/RedirectHandler/localUrl')
			.once();

		redirectHandler.makeRedirect('http://localhost:9876/RedirectHandler/localUrl', false);
		mock.verify();
	});

	it('redirects if url is external', function () {
		const naja = mockNaja();
		const redirectHandler = new RedirectHandler(naja);

		const mock = sinon.mock(redirectHandler.locationAdapter);
		mock.expects('assign')
			.withExactArgs('http://another-site.com/bar')
			.once();

		redirectHandler.makeRedirect('http://another-site.com/bar', false);
		mock.verify();
		mock.restore();
	});
});
