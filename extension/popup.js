document.addEventListener('DOMContentLoaded', function() {
  const translateBtn = document.getElementById('translate-btn');
  translateBtn.addEventListener('click', function() {
    // lets activate the content_script.js by sending a "message"
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // send message to current active tab
      chrome.tabs.sendMessage(tabs[0].id, {"message": "translate"});
    });
  });
});