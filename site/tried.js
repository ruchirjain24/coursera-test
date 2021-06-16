function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("butt")
    btn.addEventListener("click", function () {
        let font = new FontFace("naYanakamikRegular", 'url("https://www.gnowledge.org/assets/fonts/naYanakamikRegular.otf") format("opentype")');
        font.load().then(function (loadedFont) {
            document.fonts.add(loadedFont);
        }).catch(function (error) {
            alert("Font load error");
        });
        replaceText(document.body);
    });
});
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
    }
    else {
        var str=element.textContent;
        if(str.length === 0)
            return;
        element.textContent = reverseString(element.textContent);
        console.log(element.textContent);
    }
}