var fetchOverride = document.createElement("script");
fetchOverride.src = chrome.runtime.getURL("fetchOverride.js");
fetchOverride.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(fetchOverride);

// TODO: make this into HTML + css instead of js
let wrapper = document.createElement('div');
let copyTranscriptButton = document.createElement('button');
let closeButton = document.createElement('button');

wrapper.appendChild(copyTranscriptButton);
wrapper.appendChild(closeButton);
wrapper.style = "position: fixed; top: 20; right: 20; z-index: 9999;";

closeButton.innerHTML = "X";
copyTranscriptButton.innerHTML = "Copy Transcript";

document.querySelector("body").appendChild(wrapper);
// TODO: END

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