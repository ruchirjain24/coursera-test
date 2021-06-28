function reverseString(str) {
  var splitString = str.split(""); 
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join("");
  return joinArray; 
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let word = request.word;
  const translatedText=reverseString(word);
  console.log(translatedText);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {"message": "replace", "find": word, "replace": translatedText});
    });
 });

