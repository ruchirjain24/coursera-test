function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    alert(joinArray);
    return joinArray;
}
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("butt")
    btn.addEventListener("click", function () {
        var style = document.createElement('style');
        style.innerHTML = `
            @font-face {
			    font-family: 'naYanakamikRegular';
			    src: url("https://www.gnowledge.org/assets/fonts/naYanakamikRegular.otf") format("opentype");
		    }`;
        document.head.appendChild(style);
        replaceText(document.body);
    });
});
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
    }
    else {
        element.textContent = reverseString(element.textContent);
        console.log(element.textContent);
        element.style.fontFamily='Arial';
    }
}