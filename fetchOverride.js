(() => {
	const { fetch: originalFetch } = window;

	window.fetch = async (...args) => {
		let [resource, config] = args;
		const response = await originalFetch(resource, config);

		const clone = response.clone();

		if (resource.includes('streamContent')) {
			clone.json()
				.then((data) => {
					const hiddenDiv = document.createElement('div')
					hiddenDiv.style.display = 'none';
					hiddenDiv.id = 'transcript-extractor-for-microsoft-stream-hidden-div-with-transcript';
					hiddenDiv.innerHTML = data.entries
						.map(x => x.text)
						.reduce((sum, x) => sum + x, "\n");

					window.document.body.appendChild(hiddenDiv);
				})
				.catch((err) => console.error(err));
		}

		return response;
	};
})();