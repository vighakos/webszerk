let elsodiv = document.querySelector('#elso')
let masodikdiv = document.querySelector('#masodik')
let harmadikdiv = document.querySelector('#harmadik')
let negyedikdiv = document.querySelector('#negyedik')

const d = randomDate(new Date(2022, 1, 1), new Date()); 
let datumok_elso = []

elsoFeladat()








function elsoFeladat() {
    tombFeltolt(datumok_elso, 6, new Date(2022, 1, 1), new Date())

    let str = ""

    for(i = 0; i < datumok_elso.length; i++){
       str += `<p>` + kiir(datumok_elso[i].getMonth()+1) + `. ` + kiir(datumok_elso[i].getUTCDate()) + `. </p>`
    }

    str += utolsoBeszall()

    elsodiv.innerHTML = str



}

function utolsoBeszall() {
    let utolso = new Date() - datumok_elso[0]

    for(i = 0; i < datumok_elso.length; i++){
        if (new Date() - datumok_elso[i] < utolso) {
            utolso = new Date() - datumok_elso[i]
        }
    }

    return kiir(utolso.getMonth) + ". " 
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

