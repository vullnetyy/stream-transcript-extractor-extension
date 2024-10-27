# stream-transcript-extractor-extension
Microsoft Stream one click transcript extractor. Copies it to your clipboard for easy summarization of meetings via AI (LLMs)

# Mission Failed
I have not found a way to intercept this request made by Microsoft Stream:

````
fetch("https://iweof-my.sharepoint.com/personal/magnus_hultberg_ingka_ikea_com/_api/v2.1/drives/b!rMoSkeVLX0av76u2acB72a43SBHRPRBAhivDtjcMkog_vSyLNP50SIQFR8QsFHFK/items/01MQHBDO6HSSDZPIBDVVD2BCSLP5EIO2TX/media/transcripts/7c0c0f3c-5fdf-4791-b1c6-ee840ec0cf71/streamContent?format=json&applymediaedits=false", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "application": "OnePlayer",
    "authorization": "Bearer v1.eyJzaXRlaWQiOiI5MTEyY2FhYy00YmU1LTQ2NWYtYWZlZi1hYmI2NjljMDdiZDkiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaXdlb2YtbXkuc2hhcmVwb2ludC5jb21ANzIwYjYzN2EtNjU1YS00MGNmLTgxNmEtZjIyZjQwNzU1YzJjIiwiZXhwIjoiMTczMDAwOTQ2MSJ9.CgoKBHNuaWQSAjUwEgsIgoXF87uJuz0QBRoNNzguODIuMTg4LjIwOCIUbWljcm9zb2Z0LnNoYXJlcG9pbnQqLDdtT3hJRW9HRHYzSnRoWGNaNm1zTEpMUVBiUG9GbjNiZE9hdUI3NXQ5WnM9MMQBOAFCEKFd18sNgACgXbnQEMtkhx9KEGhhc2hlZHByb29mdG9rZW5iBHRydWVqJGU5MDUxN2UxLTFkODYtNGU5Zi1hOGVlLTA3Mjg3MGUzZWU5Y3IpMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxMTEzYmU5MzVAbGl2ZS5jb216ATDCASswIy5mfG1lbWJlcnNoaXB8dnVsbG5ldC5keWxhQGluZ2thLmlrZWEuY29tyAEB.a_zR6J8qF5jiH02PJhq75PaA-F7Wq-5_kdcAHCkt1wY",
    "priority": "u=1, i",
    "scenario": "LoadPlayer",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "type": "AUO",
    "x-ms-client-request-id": "7662aa72-9336-4578-a316-0f3e83ad3b05"
  },
  "referrer": "https://iweof-my.sharepoint.com/personal/magnus_hultberg_ingka_ikea_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmagnus%5Fhultberg%5Fingka%5Fikea%5Fcom%2FDocuments%2FRecordings%2FSSPP%20Capability%5Fcapacity%20review%2D20241023%5F093549%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecbc53072%2D272d%2D4855%2D96fd%2D569749c0a2ab",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
````

I'm giving up.