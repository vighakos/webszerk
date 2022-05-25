let oneletrajzok = []

if (adatok = localStorage.getItem('oneletrajzok')) {
    oneletrajzok = JSON.parse(adatok)
}

if (oneletrajzok.length == 0) {
    document.location.href = '/jquery/oneletrajz/admin.html'
}

$('document').ready(function () {
    $('#content').html(loadContent())
})

function loadContent() {
    let str = ''

    oneletrajzok.forEach(oneletrajz => {
        str += `<h1 class="text-center">${oneletrajz.veznev} ${oneletrajz.kernev}</h1>
        <p>Születési idő: ${oneletrajz.szulev}. ${oneletrajz.szulho}. ${oneletrajz.szulnap}.</p>

        <h3>Elérhetőségek</h3>
        <hr>

        <p class="mb-1" >Telefon: ${oneletrajz.telszam}</p>
        <p>E-mail: ${oneletrajz.email}</p>

        <h3>Tapasztalat</h3>
        <hr>

        <h5>Tanult nyelvek:</h5>
        <ul>
            <li>${oneletrajz.nyelv1}</li>
            <li>${oneletrajz.nyelv2}</li>
            <li>${oneletrajz.nyelv3}</li>
        </ul>

        <h3>Egyebek</h3>
        <hr>

        <h5>Hobbik:</h5>
        <p>${oneletrajz.hobbik}</p>

        <h5>Egyéb tudnivalók:</h5>
        <p>${oneletrajz.egyeb}</p>
        <hr>`
    })

    return str
}
