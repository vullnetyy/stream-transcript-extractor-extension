(() => {
	console.log("self executing function ======================");

	const { fetch: originalFetch } = window;

	window.fetch = async (...args) => {
		let [resource, config] = args;
		const response = await originalFetch(resource, config);

		const clone = response.clone();

		console.log("yohooo a fetch was made =======================")
		
		const contentType = clone.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            clone.json()
			.then((data) => console.log("heeeeere's Johnny! ================", data))
			.catch((err) => console.error(err));
		}

		return response;
	};
})();