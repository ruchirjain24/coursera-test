function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
  }
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "translate") {

    const nynfont = new FontFace('nayana', 'url(https://www.gnowledge.org/assets/fonts/naYanakamikRegular.otf)');
    nynfont.load();
    document.fonts.add(nynfont);

    var style = document.createElement('style');
    style.innerHTML = `
    @font-face {
			font-family: 'naYanakamikRegular';
			src: url("https://www.gnowledge.org/assets/fonts/naYanakamikRegular.otf") format("opentype");
		}`;
    document.head.appendChild(style);
    document.body.style.fontFamily='nayana';

    replaceText(document.body);
    console.log(document);
    // document.body.style.fontFamily='nayana !important';
    console.log(document.body.style);
    }

    else if (request.message === "error") {
        console.log("Sorry some error happened :(");
    }
});
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
    } else {
        if(element.textContent.length!==0){
            // element.textContent = reverseString(element.textContent);
        }
    }
}