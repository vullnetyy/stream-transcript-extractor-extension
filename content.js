var fetchOverride = document.createElement("script");
fetchOverride.src = chrome.runtime.getURL("fetchOverride.js");
fetchOverride.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(fetchOverride);

let wrapper = document.createElement('div');
let copyTranscriptButton = document.createElement('button');
let downloadTranscriptButton = document.createElement('button');
let closeButton = document.createElement('button');

wrapper.appendChild(copyTranscriptButton);
wrapper.appendChild(downloadTranscriptButton);
wrapper.appendChild(closeButton);
wrapper.style = "position: fixed; top: 20; right: 20; z-index: 9999;";

closeButton.innerHTML = "X";
copyTranscriptButton.innerHTML = "Copy Transcript";
downloadTranscriptButton.innerHTML = "Download Transcript";

closeButton.className = "transcript-extractor-button";
copyTranscriptButton.className = "transcript-extractor-button";
downloadTranscriptButton.className = "transcript-extractor-button";
wrapper.className = "transcript-extractor-wrapper";

document.querySelector("body").appendChild(wrapper);

//const copyTranscriptButton = document.querySelector('#copy-button-transcript-extractor-for-microsoft-stream');
copyTranscriptButton.addEventListener('click', async () => {
	const textToCopy = getTranscript();

	try {
		await navigator.clipboard.writeText(
			textToCopy
		);
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
});

downloadTranscriptButton.addEventListener('click', async () => {
	const textToDownload = getTranscript();

	download(textToDownload);
});

//const closeButton = document.querySelector('#close-button-transcript-extractor-for-microsoft-stream');
closeButton.addEventListener('click', () => {
	wrapper.remove();
});

function getTranscript() {
	return document.getElementById('transcript-extractor-for-microsoft-stream-hidden-div-with-transcript')
		.innerText;
}

function download(text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', getTranscriptFileName());

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

function getTranscriptFileName() {
	const videoTitle = document.querySelector('h1[class*="videoTitleViewModeHeading"] label')
		.innerText

	if (videoTitle === null || videoTitle === '' || videoTitle === undefined) {
		return 'transcript.txt';
	}

	return `transcript-${videoTitle}.txt`;
}