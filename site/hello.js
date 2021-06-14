function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
  }
document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('hell');
    translateBtn.addEventListener('click', function() {
        replaceText(document.body);
        var ele=document.getElementById('trial');
        ele.innerHTML='<span style="color: blue;"> Hello </span>';
      });
  });
  function replaceText(element){
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
      } else {
        element.textContent = reverseString(element.textContent);
      }
  }
