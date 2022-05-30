let jarmuvek = [],
    form = document.querySelector('form'),
    nev = form.nev,
    azon = form.azon,
    elvitel = form.elvitel,
    visszahoz = form.visszahoz

$(document).ready(function() {
    $("#kolszam").text(`Összes kölcsönzés: ${jarmuvek.length}`)
    $("#penz").text(`Bevétel: ${calculatePenz()}Ft`)
})

if (adatok = localStorage.getItem('jarmuvek')) {
    jarmuvek = JSON.parse(adatok)
}

$("#felveszBtn").on("click", () => {
    if (nev.value == "" ||
        azon.value == "" ||
        elvitel.value == "" ||
        visszahoz.value == "" || 
        !verifyDate(elvitel.value, visszahoz.value)) 
    {
        alert('Minden mező kitöltése kötelező!')
    } else {
        jarmu = {
            'nev': nev.value,
            'azon': azon.value,
            'elvitel': elvitel.value,
            'visszahoz': visszahoz.value
        }
        jarmuvek.push(jarmu)
        localStorage.setItem('jarmuvek', JSON.stringify(jarmuvek))
        alert('Kölcsönzés felvéve!')
    }
})

function verifyDate(el, vissza) {
    let el_ora = parseInt(el.split(":")[0]),
        el_perc = parseInt(el.split(":")[1])

    let vissza_ora = parseInt(vissza.split(":")[0]),
        vissza_perc = parseInt(vissza.split(":")[1])

    if ((el_ora >= 0 && el_ora < 24 && el_perc >= 0 && el_perc < 60) || 
        (vissza_ora >= 0 && vissza_ora < 24 && vissza_perc >= 0 && vissza_perc < 60))
    {
        return true
    } else return false
}

function calculatePenz() {
    let ossz = 0
    jarmuvek.forEach(jarmu => {
        let el_percben = parseInt(jarmu.elvitel.split(":")[0]) * 60 + parseInt(jarmu.elvitel.split(":")[1]),
            vissza_percben = parseInt(jarmu.visszahoz.split(":")[0]) * 60 + parseInt(jarmu.visszahoz.split(":")[1])
        
        ossz += Math.ceil((vissza_percben - el_percben) / 30) * 2400
    })
    return ossz
}