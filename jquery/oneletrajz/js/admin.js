let oneletrajzok = [],
    form = document.querySelector('form'),
    veznev = form.veznev,
    kernev = form.kernev,
    email = form.email,
    cim = form.cim,
    telszam = form.telszam,
    szulev = form.szulev,
    szulho = form.szulho,
    szulnap = form.szulnap,
    nyelv1 = form.nyelv1.value,
    nyelv2 = form.nyelv1.value,
    nyelv3 = form.nyelv1.value,
    hobbik = form.hobbik,
    egyeb = form.egyeb,
    felveszBtn = form.felveszBtn

if (adatok = localStorage.getItem('oneletrajzok')) {
    oneletrajzok = JSON.parse(adatok)
}

if (oneletrajzok.length != 0) {
    feltoltAdatok()
}

$("#szulho").on("change", () => {
    $("#szulnap").html(napFeltolt($("#szulho").val()))
})

$("#felveszBtn").on("click", () => {
    if (veznev.value == "" ||
        kernev.value == "" ||
        cim.value == "" ||
        szulev.value == "" ||
        szulho.value == "" ||
        szulnap.value == "") 
    {
        alert('A *-al jelölt mezők kitöltése kötelező!')
    } else {
        oneletrajz = {
            'id': oneletrajzok.length + 1,
            'veznev': veznev.value,
            'kernev': kernev.value,
            'email': email.value,
            'cim': cim.value,
            'telszam': telszam.value,
            'szulev': szulev.value,
            'szulho': szulho.value,
            'szulnap': szulnap.value,
            'nyelv1': form.nyelv1.value,
            'nyelv2': form.nyelv2.value,
            'nyelv3': form.nyelv3.value,
            'hobbik': hobbik.value,
            'egyeb': egyeb.value
        }
        oneletrajzok.push(oneletrajz)
        localStorage.setItem('oneletrajzok', JSON.stringify(oneletrajzok))
        alert('Önéletrajz felvéve!');
    }
})

function napFeltolt(napok) {
    let db = 0
    let str = ''
    switch (parseInt(napok)) {
        case 0: {db = 30; break;}
        case 1: {db = 31; break;}
        case 2: {db = 28; break;}
    }
    if ((szulev % 4 == 0) && (szulev % 100 != 0) || (szulev % 400 == 0) && napok == 2) {
        db = 29    
    }
    for(i = 0; i < db; i++){
        str += `<option value=${i+1}>${i+1}</option>`
    }
    return str
}

function feltoltAdatok() {
    oneletrajz = oneletrajzok[0]

    veznev.value = oneletrajz.veznev
    kernev.value = oneletrajz.kernev
    email.value = oneletrajz.email
    cim.value = oneletrajz.cim
    telszam.value = oneletrajz.telszam
    szulev.value = oneletrajz.szulev
    szulho.value = oneletrajz.szulho
    szulnap.value = oneletrajz.szulnap
    nyelv1.value = oneletrajz.nyelv1
    nyelv2.value = oneletrajz.nyelv2
    nyelv3.value = oneletrajz.nyelv3
    hobbik.value = oneletrajz.hobbik
    egyeb.value = oneletrajz.egyeb
}
