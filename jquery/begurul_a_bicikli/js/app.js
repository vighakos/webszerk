let jarmuvek = [],
    form = document.querySelector('form'),
    nev = form.nev,
    azon = form.azon,
    elvitel = form.elvitel,
    visszahoz = form.visszahoz

if (adatok = localStorage.getItem('jarmuvek')) {
    jarmuvek = JSON.parse(adatok)
}

$("#felveszBtn").on("click", () => {
    if (nev.value == "" ||
        azon.value == "" ||
        elvitel.value == "" ||
        visszahoz.value == "" || 
        !verifyDate()) 
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

function verifyDate() {
    try {
        
    } catch (error) {
        
    }
}