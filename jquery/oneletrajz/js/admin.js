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
    nyelvek = [
        {'nyelv1': form.nyelv1.value},
        {'nyelv2': form.nyelv2.value},
        {'nyelv3': form.nyelv3.value}
    ],
    hobbik = form.hobbik,
    egyeb = form.egyeb,
    felveszBtn = form.felveszBtn


if (adatok = localStorage.getItem('oneletrajzok')) {
    oneletrajzok = JSON.parse(adatok)
}

veznev.value = oneletrajzok[0].veznev
kernev.value = oneletrajzok[0].kernev
email.value = oneletrajzok[0].email
cim.value = oneletrajzok[0].cim
telszam.value = oneletrajzok[0].telszam
telszam.value = oneletrajzok[0].telszam
hobbik.value = oneletrajzok[0].hobbik
egyeb.value = oneletrajzok[0].egyeb

/*
oneletrajzok[0] = {
    'id': 0,
    'veznev': "Vigh",
    'kernev': "Ákos",
    'email': "akos1569@gmail.com",
    'cim': "6521 Vaskút, Damjanich u. 66/A",
    'telszam': "06709679323",
    'szulev': 2001,
    'szulho': "December",
    'szulnap': 15,
    'nyelvek': [
        {'nyelv1': "Angol"},
        {'nyelv2': "Német"},
        {'nyelv3': "Nincs"}
    ],
    'hobbik': "nincs :)",
    'egyeb': ""
}
localStorage.setItem('oneletrajzok', JSON.stringify(oneletrajzok))
*/
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
            'nyelvek': [
                {'nyelv1': form.nyelv1.value},
                {'nyelv2': form.nyelv2.value},
                {'nyelv3': form.nyelv3.value}
            ],
            'hobbik': hobbik.value,
            'egyeb': egyeb.value
        }
        oneletrajzok[0] = oneletrajz
        localStorage.setItem('oneletrajzok', JSON.stringify(oneletrajzok))
        alert('Önéletrajz frissítve!');
        location.href = "/jquery/oneletrajz/index.html"
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
