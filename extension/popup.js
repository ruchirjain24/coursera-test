document.addEventListener('DOMContentLoaded', function () {
  const translateBtn = document.getElementById('translate-btn');
  translateBtn.addEventListener('click', function () {
    // lets activate the content_script.js by sending a "message"
    var style = document.createElement('style');
    style.innerHTML = `
    @font-face {
			font-family: 'naYanakamikRegular';
			src: url("https://www.gnowledge.org/assets/fonts/naYanakamikRegular.otf") format("opentype");
		}`;
    document.head.appendChild(style);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // send message to current active tab
      chrome.tabs.sendMessage(tabs[0].id, { "message": "translate" });
    });
  });
});
