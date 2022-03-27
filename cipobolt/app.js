let elsodiv = document.querySelector('#elso')
let masodikdiv = document.querySelector('#masodik')
let masodikdivFel = document.querySelector('#masodikFel')
let ffiList = document.querySelector('#ffi')
let noiList = document.querySelector('#noi')
let harmadikdiv = document.querySelector('#harmadik')
let negyedikdiv = document.querySelector('#negyedik')

const d = randomDate(new Date(2022, 1, 1), new Date()); 
let datumok_elso = []

elsoFeladat()
masodikFeladat()

function masodikFeladat() {
    let f = []
    let n = []
    let str = ""

    meretFeltolt(f, 38, 46)
    meretFeltolt(n, 35, 42)

    ffi.innerHTML = tombKiir(f)
    noi.innerHTML = tombKiir(n)

    str += `<p>Legnagyobb női cipő: ${Math.max(...n)}</p>`
    str += `<p>Átlag különbsége: ${atlagMeret(f, n).toFixed(2)}</p>`

    str += `<p>A női cipők ${_40Felett(n).toFixed(2)}%-a 40-es méret feletti</p>`

    str += `<p>Ebből a méretből fogyott a legtöbb: ${legtobb(f, n)}</p>`

    masodikdivFel.innerHTML = str
}

function _40Felett(n) {
    let db = 0

    for(i = 0; i < n.length; i++){
        if (n[i] >= 40) {
            db++
        }
    }

    return db / n.length * 100
}

function legtobb(f, n) {
    let meretek = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
    let adatok = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(i = 0; i < f.length; i++){
        for(j = 0; j < f.length; j++){
            if (f[i] == meretek[j] || n[i] == meretek[j]) {
                adatok[j] += 1
            }
        }
    }

    let max = 0
    let maxmeret = 0

    for(i = 0; i < adatok.length; i++){
        if (adatok[i] > max) {
            maxmeret = meretek[i]
            max = adatok[i]
        }
    }

    return maxmeret
}

function atlagMeret(f, n) {
    let ffiOsszeg = 0
    let noiOsszeg = 0
    for(i = 0; i < f.length; i++){
        ffiOsszeg += f[i]
        noiOsszeg += n[i]
    }

    return (ffiOsszeg / 12) - (noiOsszeg / 12)

}

function elsoFeladat() {
    tombFeltolt(datumok_elso, 6, new Date(2022, 1, 1), new Date())

    let str = ""

    for(i = 0; i < datumok_elso.length; i++){
       str += `<p>${kiir(datumok_elso[i].getMonth()+1)}. ${kiir(datumok_elso[i].getDate())}. </p>`
    }

    str += utolsoSzallitas()

    elsodiv.innerHTML = str
}

function utolsoSzallitas() {
    //console.log(new Date().getMonth());
    let utolso = 999
    let nap = new Date()
    let honap = false
    let sameDay = false
    let str = ""

    for(i = 0; i < datumok_elso.length; i++){
        if (new Date().getMonth() == datumok_elso[i].getMonth()) {
            honap = true
            if (Math.abs(new Date().getDate() - datumok_elso[i].getDate()) < utolso) {
                utolso = Math.abs(new Date().getDate() - datumok_elso[i].getDate())
                nap = datumok_elso[i]
            }
        }
    }

    if (!honap) {
        max = 0
        for(i = 0; i < datumok_elso.length; i++){
            if (max < datumok_elso[i].getDate()) {
                max = datumok_elso.getDate()
            }
        }

        for(i = 0; i < datumok_elso.length; i++){
            if (datumok_elso[i].getDate() == max && datumok_elso[i].getMonth() != new Date().getMonth()) {
                nap = datumok_elso[i]
            }
        }
    }

    for(i = 0; i < datumok_elso.length; i++){
        for(j = 0; j < datumok_elso.length; j++){
            if (datumok_elso[i].getMonth() == datumok_elso[j].getMonth() && datumok_elso[i].getDate() == datumok_elso[j].getDate()) {
                sameDay = true
            }
        }
    }

    str += `<p>Utolsó beszállítás: ${kiir(nap.getMonth() + 1)}. ${kiir(nap.getDate())}.</p>`
    str += honap ? `<p>Volt ebben a hónapban rendelés</p>` : `<p>Nem volt ebben a hónapban rendelés</p>`
    str += sameDay ? `<p>Lesz ugyanazon a napon beszállítás</p>` : `<p>Nem lesz ugyanazon a napon beszállítás</p>`
    return str
}

function utolsoBeszall() {
    let utolso = new Date() - datumok_elso[0]

    for(i = 0; i < datumok_elso.length; i++){
        if (new Date() - datumok_elso[i] < utolso) {
            utolso = new Date() - datumok_elso[i]
        }
    }
}

function meretFeltolt(tomb, min, max) {
    for(i = 0; i < 12; i++){
        tomb[i] = Math.round(Math.random() * (max - min) + min)
    }
}

function tombKiir(tomb) {
    str = ""
    for(i = 0; i < tomb.length; i++){
        str += `<li>${tomb[i]}</li>`
    }
    return str
}

function kiir(szam) {
    return szam > 9 ? szam : "0" + szam
}

function tombFeltolt (tomb, hossz, start, end) {
    for(i = 0; i < hossz; i++){
        tomb[i] = randomDate(start, end)
    }
}

function randomDate(start, end) { 
    //2022.01.01 és az aktuális nap közti random dátum:
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

