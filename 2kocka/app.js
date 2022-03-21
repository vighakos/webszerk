let tarolo = document.querySelector('#tarolo')
let dobas = document.querySelector('#dobas')
let eredmeny = document.querySelector('#eredmeny')
let dobasok = document.querySelector('#dobasok')
let stat = document.querySelector('#stat')
let a = []
let b = []
let stat_tomb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stat_szazalek = []
let counter = 0

feltolt()
statisztika_feltolt()

dobas.addEventListener('click', function () {
    feltolt()
})

function statisztika() {
    let elozodobas = kiszamol()
    let max = 100
    let osszesdobas = a.length + b.length
    
    for(i = 0; i < stat_tomb.length; i++){
        if (stat_tomb[i] != 0) {
            stat_szazalek[i] = stat_tomb[i]
            console.log(stat_szazalek[i]);
        }
    }
}

function statisztika_feltolt() {
    for(i = 0; i < stat_tomb.length; i++){
        if (stat_tomb[i] != 0) {
            stat.innerHTML += `<p id='p_` + (i + 2) + `'>` + (i) +  `: ` + stat_szazalek[i] +`</p>`
        } else {
            stat.innerHTML += `<p id='p_` + (i + 2) + `'>` + (i) +  `: 0</p>`
        }
    }
    let p_2 = document.getElementById('p_2')
    let p_3 = document.getElementById('p_3')
    let p_4 = document.getElementById('p_4')
    let p_5 = document.getElementById('p_5')
    let p_6 = document.getElementById('p_6')
    let p_7 = document.getElementById('p_7')
    let p_8 = document.getElementById('p_8')
    let p_9 = document.getElementById('p_9')
    let p_10 = document.getElementById('p_10')
    let p_11 = document.getElementById('p_11')
    let p_12 = document.getElementById('p_12')
}

function kiszamol() {
    return a[a.length - 1] + b[b.length - 1]
}

function feltolt() {
    tarolo.innerHTML = ketdobas()
    eredmeny.innerHTML = kiszamol()
    counter++
    dobasok.innerHTML = "Dobások száma: " + counter
    statisztika()
    
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

    for(i = 0; i < stat_tomb.length; i++){
        if (kiszamol() == i + 2) {
            stat_tomb[i + 2] = kiszamol()
            console.log(stat_tomb[i + 2])
        }
    }
    return dobas
}