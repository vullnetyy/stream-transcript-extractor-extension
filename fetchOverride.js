(() => {
	const { fetch: originalFetch } = window;

	window.fetch = async (...args) => {
		let [resource, config] = args;
		const response = await originalFetch(resource, config);

		const clone = response.clone();

		if (resource.includes('streamContent')) {
			clone.json()
				.then((data) => {
					const hiddenDiv = document.createElement('div').style = "display: none";
					hiddenDiv.innerHTML = data.entries
						.map(x => x.text)
						.reduce((sum, x) => sum + x, "\n");

					//TODO: fix this error: TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
					window.document.body.appendChild(hiddenDiv);

					console.log(data.entries
						.map(x => x.text)
						.reduce((sum, x) => sum + x + " \n"))
					console.log(hiddenDiv.innerHTML)
				})
				.catch((err) => console.error(err));
		}

		return response;
	};
})();