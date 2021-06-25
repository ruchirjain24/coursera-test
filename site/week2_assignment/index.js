// function uniKeyCode(event) {
//     let dict = {
//         "1": "1",
//         "2": "2",
//         "3": "3",
//         "4": "4",
//         "5": "5",
//         "6": "6",
//         "7": "7",
//         "8": "8",
//         "9": "9",
//         "0": "0",

//         ".": ".",
//         " ": " ",
//         "*": "*",
//         "।": "।",
//         ",": ",",

//         'a': 'a',
//         'b': 'b',
//         'c': 'ʧ',
//         'd': 'ð',
//         'e': 'ɛ',
//         'f': 'f',
//         'g': 'ɡ',
//         'i': 'ɪ',
//         'j': 'ʤ',
//         'k': 'k',
//         "l": "l",
//         "m": "m",
//         "n": "n",
//         "o": "o",
//         "p": "p",
//         'q': 'q',
//         'r': ':',
//         's': 's',
//         't': 'ʈ',
//         'u': 'ʊ',
//         'v': 'v',
//         'w': 'w',
//         'z': 'z',

//         'A': 'æ',
//         'D': 'd',
//         'E': 'e',
//         // 'H': 'ʰ',
//         'N': 'ɳ',
//         'R': 'r',
//         'S': 'ʃ',
//         'T': 't',
//         'Y': 'j',
//         'O': 'ɔ'
//     };
//     let dict_h = {
//         'ɽ': 'ɽ̥',   //"D"+"H"
//         'z': 'ʒ',   //"z"+"H"
//         't': 'θ',   //"T"+"H"
//         'ʃ': 'ʂ'    //"S"+"H"
//     };
//     let dict_alt = {    //_ is altKey here
//         'n': 'ŋ',    //"n_"
//         'g': 'ɲ',    //"g_"
//         'r': 'r̩',    //"r_"
//         'd': 'ɽ'     //"d_"
//     };
//     var key = event.key;
//     var keycode = event.which;

//     if (!event.ctrlKey) {   //to allow ctrlC ctrlV and ctrlX ctrlV options
//         if (!event.altKey) {
//             if (key in dict) {
//                 event.preventDefault();
//                 let input = document.getElementById("abcd");
//                 let IPA = document.getElementById("IPA");
//                 let nYn = document.getElementById("nYn");
//                 console.log(key);
//                 console.log(dict[key]);
//                 input.value = input.value + key;
//                 IPA.textContent = IPA.textContent + dict[key];
//                 nYn.textContent = IPA.textContent;

//                 console.log(event);
//             }
//             if (key === 'H') {
//                 let input = document.getElementById("abcd");
//                 let IPA = document.getElementById("IPA");
//                 let nYn = document.getElementById("nYn");
//                 var str = IPA.textContent;
//                 var len = str.length;
//                 event.preventDefault();
//                 input.value += "H";
//                 if (len !== 0 && str.charAt(len - 1) in dict_h) { //short circuit
//                     var ch = dict_h[str.charAt(len - 1)];
//                     str = str.substring(0, str.length - 1);
//                     IPA.textContent = str + ch;
//                     nYn.textContent = IPA.textContent;
//                 }
//                 else {
//                     IPA.textContent = IPA.textContent + 'ʰ';
//                     nYn.textContent = IPA.textContent;
//                 }
//             }
//             // if (keycode == 8 || keycode == 46) { //To allow removal of characters using backspace in IPA and nYn column

//             //     let input = document.getElementById("abcd");
//             //     let IPA = document.getElementById("IPA");
//             //     let nYn = document.getElementById("nYn");
//             //     var str = input.value;
//             //     var len = str.length;
//             //     event.preventDefault();
//             //     if (len != 0) {
//             //         var last = str.charAt(len - 1);
//             //         var second_last = str.charAt(len - 2);
//             //         var third_last = str.charAt(len - 3);
//             //         if (last === "H") {
//             //             if (third_last === '↑') {
//             //                 input.value = input.value.substring(0, input.value.length - 1);
//             //                 IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 1);
//             //                 nYn.textContent = IPA.textContent;
//             //             }
//             //         }
//             //         else {
//             //             IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 1);
//             //             nYn.textContent = IPA.textContent;
//             //             input.value = input.value.substring(0, input.value.length - 1);
//             //             if (second_last === '↑') {
//             //                 input.value = input.value.substring(0, input.value.length - 1);
//             //             }

//             //         }
//             //     }
//             // }
//             // if(keycode===13){
//             //     let IPA = document.getElementById("IPA");
//             //     let nYn = document.getElementById("nYn");

//             // }
//         }

//         else {
//             if (key in dict_alt) {
//                 event.preventDefault();

//                 let input = document.getElementById("abcd");
//                 let IPA = document.getElementById("IPA");
//                 let nYn = document.getElementById("nYn");

//                 console.log(key);
//                 console.log(dict_alt[key]);
//                 console.log(event);
//                 input.value = input.value + '↑' + key;
//                 IPA.textContent = IPA.textContent + dict_alt[key];
//                 nYn.textContent = IPA.textContent;
//                 console.log(IPA.innerHTML);

//             }
//         }
//     }



// }


// var txt = document.getElementById("abcd");
// txt.addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13){
//         event.preventDefault();
//         let input = document.getElementById("abcd");
//         let IPA = document.getElementById("IPA");
//         let nYn = document.getElementById("nYn");
//         let IPAlog = document.getElementById("IPAlog");
//         let nYnlog = document.getElementById("nYnlog");

//         var div = document.createElement("div");
//         var str = IPA.textContent;
//         div.textContent = str;
//         console.log(str);
//         IPAlog.appendChild(div);
//         nYnlog.appendChild(div);
//         input.value="";
//         IPA.textContent="";
//         nYn.textContent="";
//     }
        
// });


function preventEntry() {//editing IPA and naYana parts not allowed
    event.preventDefault();
}

function clearElement(id) {//clears the text Content of an element with input id
    ele = document.getElementById(id);
    try {
        ele.textContent = "";
        ele.value = ""
    }
    catch(err) { }
}
function logIntoElement(id_from, id_to) {//logs the textContent from one element to another and clears the from element
    ele_from = document.getElementById(id_from);
    ele_to = document.getElementById(id_to);
    ele_to.textContent = ele_from.textContent || ele_from.value;
    ele_to.value = ele_from.textContent || ele_from.value;
    clearElement(id_from);
}
function copyToClipboard(id) {//copy textContent of an element to clipboard        
    var ele = document.getElementById(id)
    console.log(ele);
    ele.select();
    ele.setSelectionRange(0, 99999);
    document.execCommand('copy');
    return;
}
function uniKeyCode(event) {
    let dict = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",

        ".": ".",
        " ": " ",
        "*": "*",
        "।": "।",
        ",": ",",

        'a': 'a',
        'b': 'b',
        'c': 'ʧ',
        'd': 'ð',
        'e': 'ɛ',
        'f': 'f',
        'g': 'ɡ',
        'h': 'h',
        'i': 'ɪ',
        'j': 'ʤ',
        'k': 'k',
        "l": "l",
        "m": "m",
        "n": "n",
        "o": "o",
        "p": "p",
        'q': 'q',
        'r': ':',
        's': 's',
        't': 'ʈ',
        'u': 'ʊ',
        'v': 'v',
        'w': 'w',
        'z': 'z',

        'A': 'æ',
        'D': 'd',
        'E': 'e',
        // 'H': 'ʰ',
        'N': 'ɳ',
        'R': 'r',
        'S': 'ʃ',
        'T': 't',
        'Y': 'j',
        'O': 'ɔ'
    };
    let dict_h = {
        'ɽ': 'ɽ̥',   //"D"+"H"
        'z': 'ʒ',   //"z"+"H"
        't': 'θ',   //"T"+"H"
        'ʃ': 'ʂ'    //"S"+"H"
    };
    let dict_alt = {    //_ is altKey here
        'n': 'ŋ',    //"n_"
        'g': 'ɲ',    //"g_"
        'r': 'r̩',    //"r_"
        'd': 'ɽ'     //"d_"
    };
    var key = event.key;
    var keycode = event.which;
    let input = document.getElementById("inp");
    let IPA = document.getElementById("IPA");
    let nYn = document.getElementById("nYn");
    event.preventDefault();

    if (!event.altKey) {
        if (key in dict) {
            if (input.selectionStart === input.value.length) {//ensure caret is at end of input string
                input.value = input.value + key;
                IPA.textContent += dict[key];
                nYn.textContent = IPA.textContent;
            }
        }
        if (key === 'H') {
            let str_IPA = IPA.textContent;
            let len_IPA = str_IPA.length;

            if (input.selectionStart === input.value.length) {//ensure caret is at end of input string
                input.value += "H";
                if (len_IPA !== 0 && str_IPA.charAt(len_IPA - 1) in dict_h) { //short circuit
                    let last_char = dict_h[str_IPA.charAt(len_IPA - 1)];
                    str_IPA = str_IPA.substring(0, len_IPA - 1);
                    IPA.textContent = str_IPA + last_char;
                    nYn.textContent = IPA.textContent;
                }
                else {
                    IPA.textContent = IPA.textContent + 'ʰ';
                    nYn.textContent = IPA.textContent;
                }
            }
        }
        if (keycode == 8) { //To allow removal of characters using backspace in IPA and nYn column
            let str_input = input.value;
            let len_input = str_input.length;
            if (input.selectionStart === input.value.length) {
                if (len_input != 0) {
                    let last = str_input.charAt(len_input - 1);
                    let second_last = str_input.charAt(len_input - 2);
                    let third_last = str_input.charAt(len_input - 3);
                    input.value = str_input.substring(0, input.value.length - 1);
                    if (last === 'H') {
                        if (dict[second_last] in dict_h || (dict_alt[second_last] in dict_h) && third_last === '↑') {
                            if (dict_alt[second_last] in dict_h) {
                                IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - dict_h[dict_alt[second_last]].length);
                                IPA.textContent += dict_alt[second_last];
                                nYn.textContent = IPA.textContent;
                            }
                            else {
                                IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - dict_h[dict[second_last]].length);
                                console.log(IPA.textContent);
                                IPA.textContent += dict[second_last];
                                nYn.textContent = IPA.textContent;
                            }
                        }
                        else {
                            IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 1);
                            nYn.textContent = IPA.textContent;
                        }
                    }
                    else if (second_last === '↑') {
                        input.value = str_input.substring(0, input.value.length - 1);
                        IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - dict_alt[last].length);
                        nYn.textContent = IPA.textContent;
                    }
                    else if (last === '\n') {
                        IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 2);
                    }
                    else {
                        IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 1);
                        nYn.textContent = IPA.textContent;
                    }

                }

            }
        }
        if (keycode === 13) {
            input.value += "\n";
            IPA.textContent += "\r\n";
        }
    }

    else {
        if (key in dict_alt) {
            if (input.selectionStart === input.value.length) {
                input.value = input.value + '↑' + key;
                IPA.textContent += dict_alt[key];
                nYn.textContent = IPA.textContent;
            }
        }
    }
}