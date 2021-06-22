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

    if (!event.ctrlKey) {   //to allow ctrlC ctrlV and ctrlX ctrlV options
        if (!event.altKey) {
            if (key in dict) {
                event.preventDefault();
                let input = document.getElementById("abcd");
                let IPA = document.getElementById("IPA");
                let nYn = document.getElementById("nYn");
                console.log(key);
                console.log(dict[key]);
                input.value = input.value + key;
                IPA.textContent = IPA.textContent + dict[key];
                nYn.textContent = IPA.textContent;

                console.log(event);
            }
            if (key === 'H') {
                let input = document.getElementById("abcd");
                let IPA = document.getElementById("IPA");
                let nYn = document.getElementById("nYn");
                var str = IPA.textContent;
                var len = str.length;
                event.preventDefault();
                input.value += "H";
                if (len !== 0 && str.charAt(len - 1) in dict_h) { //short circuit
                    var ch = dict_h[str.charAt(len - 1)];
                    str = str.substring(0, str.length - 1);
                    IPA.textContent = str + ch;
                    nYn.textContent = IPA.textContent;
                }
                else {
                    IPA.textContent = IPA.textContent + 'ʰ';
                    nYn.textContent = IPA.textContent;
                }
            }
            // if (keycode == 8 || keycode == 46) { //To allow removal of characters using backspace in IPA and nYn column

            //     let input = document.getElementById("abcd");
            //     let IPA = document.getElementById("IPA");
            //     let nYn = document.getElementById("nYn");
            //     var str = input.value;
            //     var len = str.length;
            //     event.preventDefault();
            //     if (len != 0) {
            //         var last = str.charAt(len - 1);
            //         var second_last = str.charAt(len - 2);
            //         var third_last = str.charAt(len - 3);
            //         if (last === "H") {
            //             if (third_last === '↑') {
            //                 input.value = input.value.substring(0, input.value.length - 1);
            //                 IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 1);
            //                 nYn.textContent = IPA.textContent;
            //             }
            //         }
            //         else {
            //             IPA.textContent = IPA.textContent.substring(0, IPA.textContent.length - 1);
            //             nYn.textContent = IPA.textContent;
            //             input.value = input.value.substring(0, input.value.length - 1);
            //             if (second_last === '↑') {
            //                 input.value = input.value.substring(0, input.value.length - 1);
            //             }

            //         }
            //     }
            // }
            // if(keycode===13){
            //     let IPA = document.getElementById("IPA");
            //     let nYn = document.getElementById("nYn");

            // }
        }

        else {
            if (key in dict_alt) {
                event.preventDefault();

                let input = document.getElementById("abcd");
                let IPA = document.getElementById("IPA");
                let nYn = document.getElementById("nYn");

                console.log(key);
                console.log(dict_alt[key]);
                console.log(event);
                input.value = input.value + '↑' + key;
                IPA.textContent = IPA.textContent + dict_alt[key];
                nYn.textContent = IPA.textContent;
                console.log(IPA.innerHTML);

            }
        }
    }



}


var txt = document.getElementById("abcd");
txt.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13){
        event.preventDefault();
        let input = document.getElementById("abcd");
        let IPA = document.getElementById("IPA");
        let nYn = document.getElementById("nYn");
        let IPAlog = document.getElementById("IPAlog");
        let nYnlog = document.getElementById("nYnlog");

        var div = document.createElement("div");
        var str = IPA.textContent;
        div.textContent = str;
        console.log(str);
        IPAlog.appendChild(div);
        nYnlog.appendChild(div);
        input.value="";
        IPA.textContent="";
        nYn.textContent="";
    }
        
});