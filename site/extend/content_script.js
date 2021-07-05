function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
function legitOrNot(str) {
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i)==='\n')
            continue;
        if(str.charAt(i)==='\t')
            continue;
        if(str.charAt(i)===' ')
            continue;
        return 1;
    }
    return 0;
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
        // document.body.style.fontFamily = 'nayana';
        document.body.style.setProperty('font-family', 'nayana', 'important');

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
        if (element.textContent.length !== 0 && legitOrNot(element.textContent)) {
            element.textContent = "hi "+element.textContent + " bye";
            let str = element.textContent.split("");
            console.log(str);
        }
    }
}