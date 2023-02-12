const browserInstances = [];

(() => {
	// eslint-disable-next-line no-restricted-globals
	self.onconnect = (e) => {

		const port = e.ports[0];

		browserInstances.push(port)

		console.log("[onconnect] number of browserInstances:", browserInstances.length)
		console.log("[onconnect] browserInstances:", browserInstances)

		// eslint-disable-next-line no-restricted-globals
		// port.addEventListener('message', (e) => {
		port.onmessage = function(e) {
			console.log("[onmessage] browserinstances:", browserInstances, browserInstances.length, e)
		    port.postMessage({num: browserInstances.length});
		}
		// });

		port.start();

	}


})()
