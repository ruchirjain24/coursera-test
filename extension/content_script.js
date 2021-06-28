// some global variables
let find = "";
let replace = "";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "translate") {
    const word = window.getSelection().toString();
    if (word.length > 0) {
      chrome.runtime.sendMessage({ "word": word });
    }
  } else if (request.message === "replace") {
    find = request.find;
    replace = request.replace;
    replaceText(document.body);
  }
});
function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else {
    if (element.textContent.length !== 0) {
      console.log(element);
      const re = new RegExp(find, "gi");
      // then replace the word
      var replaced = '<span style="font-family: naYanakamikRegular;">' + replace + '</span>';
      var str = element.textContent.replace(re, replaced);
      element.textContent = str;
      console.log(element.textContent);
      element.innerHTML = element.textContent;
    }
  }
}