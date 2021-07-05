// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             "Access-Control-Allow-Origin" : "*", 
//             "Access-Control-Allow-Credentials" : true 
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
    
//     return response.json(); // parses JSON response into native JavaScript objects
// }


// document.addEventListener('DOMContentLoaded', () => {
//     postData('https://nayanapluginserver.pythonanywhere.com/naYana/IPA/getIpaDetect', { str: "this is a trial please try again!! hello" })
//                 .then(data => {
//                     console.log(data.json()); // JSON data parsed by `data.json()` call
//                 })
//                 .catch((error) => {                    
//                     console.log("empty response");
//                   });
// // let Http = new XMLHttpRequest();
// // const url='https://nayanapluginserver.pythonanywhere.com/naYana/IPA/getIpaDetect';
// // Http.open("POST", url);
// // Http.setRequestHeader('Content-Type', 'application/json');
// // // Http.setRequestHeader("Access-Control-Allow-Origin","*");
// // // Http.setRequestHeader("Access-Control-Allow-Credentials",'true');
// // // Http.setRequestHeader('Accept','*/*');
// // // Http.setRequestHeader('Connection','keep-alive');
// // // Http.setRequestHeader('Accept-Encoding','gzip, deflate, br');

// // let obj={ str: "This is the third line, with a comma." };
// // obj=JSON.stringify(obj);
// // Http.send(obj);

// // Http.onreadystatechange = (e) => {
// //   console.log(Http.responseText)
// // }
//     let btn = document.getElementById('btn');
//     btn.addEventListener('click', () => {
//         for (let i = 1; i < 7; i++) {
//             let para = document.getElementById("work" + i);
//             let str = para.innerText;
//             console.log(str);
//         }
//     });
// });

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    setTimeout(function(){
        console.log(response);
    },2000);
    return response.json(); // parses JSON response into native JavaScript objects
}


document.addEventListener('DOMContentLoaded', () => {
    // postData('https://nayanapluginserver.pythonanywhere.com/naYana/IPA/getIpaDetect', { 'str': "hello" })
    //             .then(data => {
    //                 console.log(data); // JSON data parsed by `data.json()` call
    //             });
const Http = new XMLHttpRequest();
const url='https://nayanapluginserver.pythonanywhere.com/naYana/IPA/getIpaDetect';
Http.open("POST", url);
let obj={ str: "hello there!!" };
obj=JSON.stringify(obj);
Http.send(obj);

Http.onreadystatechange = (e) => {
  console.log(Http.responseText.IPA);
//   let obj=JSON.parse(Http.responseText);
//   console.log(obj.IPA);
}
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        for (let i = 1; i < 7; i++) {
            let para = document.getElementById("work" + i);
            let str = para.innerText;
            console.log(str);
        }
    });
}); 