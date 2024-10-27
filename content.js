(() => {
	const { fetch: originalFetch } = window;

	window.fetch = async (...args) => {
		let [resource, config] = args;
		const response = await originalFetch(resource, config);

		const clone = response.clone();

		console.log("yohooo a fetch was made =======================")
		clone.json()
			.then((data) => console.log("heeeeere's Johnny! ================", data))
			.catch((err) => console.error(err));

		return response;
	};


})();


let wrapper = document.createElement('div');
let copyTranscriptButton = document.createElement('button');
let closeButton = document.createElement('button');

wrapper.appendChild(copyTranscriptButton);
wrapper.appendChild(closeButton);
wrapper.style = "position: fixed; top: 20; right: 20; z-index: 9999;";

closeButton.innerHTML = "X";
copyTranscriptButton.innerHTML = "Copy Transcript";

copyTranscriptButton.addEventListener('click', async () => {
	const textToCopy = getTranscript();

	try {
		await navigator.clipboard.writeText(
			textToCopy
		);
	} catch (err) {
		console.error("Failed to copy: ", err);
	}

	function getTranscript() {
		return "asdftw " + Math.floor((Math.random() * 1000));
	}
});

closeButton.addEventListener('click', () => {
	wrapper.remove();
});

document.querySelector("body").appendChild(wrapper);

fetch("https://catfact.ninja/fact").then((res) => {
	console.log("cat facts ===========================", res.json());
});
