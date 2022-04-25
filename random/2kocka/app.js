let tarolo = document.querySelector('#tarolo')
let dobas = document.querySelector('#dobas')
let eredmeny = document.querySelector('#eredmeny')
let dobasok = document.querySelector('#dobasok')
let stat = document.querySelector('#stat')
let a = []
let b = []
let counter = 0
let stat_szamok = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

feltolt()
stat_kiir()

dobas.addEventListener('click', function () {
    feltolt()
    stat_kiir()
})

function stat_kiir() {
    let szoveg = ""
    for(i = 0; i < stat_szamok.length; i++){
        szoveg += `<div class='szazalek' style='width: ` + szazalek(i).toFixed(0) + `%;'>` + (i+2) + `: ` + szazalek(i).toFixed(0) + `%</div>`
    }
    stat.innerHTML = szoveg
}

function szazalek(x) {
    let szam = 0;
    if (stat_szamok[x] != 0) szam = ((stat_szamok[x] / counter) * 100)
    return szam
}

function kiszamol() {
    return a[a.length - 1] + b[b.length - 1]
}

function feltolt() {
    tarolo.innerHTML = ketdobas()
    eredmeny.innerHTML = "Eredmény: " + kiszamol()
    dobasok.innerHTML = "Dobások száma: " + counter
}

function ketdobas() {
    let random
    let dobas = ""

    random = Math.round(Math.random() * 5) + 1
    dobas += (`<img src='img/` + random + `.PNG' class='kocka'></img>`)
    a.push(random)

    random = Math.round(Math.random() * 5) + 1
    dobas += (`<img src='img/` + random + `.PNG' class='kocka'></img>`)
    b.push(random)

    switch (kiszamol()) {
        case 2: {stat_szamok[0]++; break;}
        case 3: {stat_szamok[1]++; break;}
        case 4: {stat_szamok[2]++; break;}
        case 5: {stat_szamok[3]++; break;}
        case 6: {stat_szamok[4]++; break;}
        case 7: {stat_szamok[5]++; break;}
        case 8: {stat_szamok[6]++; break;}
        case 9: {stat_szamok[7]++; break;}
        case 10: {stat_szamok[8]++; break;}
        case 11: {stat_szamok[9]++; break;}
        case 12: {stat_szamok[10]++; break;}
    }

    counter++

    return dobas
}