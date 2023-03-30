// fetch('headcontent.html')
//     .then(response => response.text())
//         .then(html => {
//             document.getElementById('head').innerHTML += html;
//         });
fetch('bodyheader.html')
    .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML += html;
        });