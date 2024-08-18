fetch('bodyheader.html')
    .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML += html;
        });