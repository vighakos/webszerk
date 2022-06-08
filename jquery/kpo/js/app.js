let ko_valaszt = document.querySelector('#ko'),
    papir_valaszt = document.querySelector('#papir'),
    ollo_valaszt = document.querySelector('#ollo'),
    player = document.querySelector('#player'),
    pc = document.querySelector('#pc'),
    acceptBtn = document.querySelector('#acceptBtn'),
    jatekosok = [],
    nev

if (adatok = localStorage.getItem('jatekosok')) {
    jatekosok = JSON.parse(adatok)
}

$('document').ready(function() {
    nevBe = getName()

    talalt = false
    jatekosok.forEach(jatekos => {
        if (jatekos.nev == nevBe) {
            nev = nevBe
            talalt = true
        }
    })

    if (!talalt) {
        nev = nevBe
        jatekos = {
            'nev': nevBe,
            'victories': 0,
            'defeats': 0,
            'draws': 0,
            'ratio': 0,
            'sum': 0
        }
        jatekosok.push(jatekos)
        localStorage.setItem('jatekosok', JSON.stringify(jatekosok))
    }

    $("#jatekosnev").text(nev)

    drawTable()
})

ko_valaszt.addEventListener('click', () => {
    player.classList.add(valaszt(ko_valaszt.id))
})
papir_valaszt.addEventListener('click', () => {
    player.classList.add(valaszt(papir_valaszt.id))
})
ollo_valaszt.addEventListener('click', () => {
    player.classList.add(valaszt(ollo_valaszt.id))
})

acceptBtn.addEventListener('click', () => {
    pcMove()
})

function getName() {
    let nevBe = prompt("Add meg a neved:")

    if (nevBe == "" || nevBe == null) return "unnamed"
    else return nevBe
}

function valaszt(val) {
    if (val == 'ko') {
        player.classList = ""
        player.classList.add('img')
        player.classList.add('ko')
    }
    if (val == 'papir') {
        player.classList = ""
        player.classList.add('img')
        player.classList.add('papir')
    }
    if (val == 'ollo') {
        player.classList = ""
        player.classList.add('img')
        player.classList.add('ollo')
    }
}

function pcMove() {
    let move = Math.floor(Math.random() * 4)

    switch (move) {
        case 1:
            pc.classList = ""
            pc.classList.add('img')
            pc.classList.add('ko')
            break;
    
        case 2:
            pc.classList = ""
            pc.classList.add('img')
            pc.classList.add('papir')
            break;
    
        case 3:
            pc.classList = ""
            pc.classList.add('img')
            pc.classList.add('ollo')
            break;
    }

    decideWinner(move)
}

function decideWinner(move) {
    if (move == 1 && player.classList.contains('ko')) {
        draw()
        return
    } else if (move == 2 && player.classList.contains('papir')) {
        draw()
        return
    } else if (move == 3 && player.classList.contains('ollo')) {
        draw()
        return
    }

    if (move == 1 && player.classList.contains('ollo')) {
        pcVictory()
        return
    } else if (move == 2 && player.classList.contains('ko')) {
        pcVictory()
        return
    } else if (move == 3 && player.classList.contains('papir')) {
        pcVictory()
        return
    } 

    if (move == 1 && player.classList.contains('papir')) {
        playerVictory()
        return
    } else if (move == 2 && player.classList.contains('ollo')) {
        playerVictory()
        return
    } else if (move == 3 && player.classList.contains('ko')) {
        playerVictory()
        return
    } 
}

function playerVictory() {
    player.classList.add('victory')
    pc.classList.add('defeat')
    updateStats('victory')
}

function pcVictory() {
    pc.classList.add('victory')
    player.classList.add('defeat')
    updateStats('defeat')
}

function draw() {
    player.classList.add('draw')
    pc.classList.add('draw')
    updateStats('draw')
}

function updateStats(result) {
    jatekosok.forEach(jatekos => {
        if (jatekos.nev == nev) {
            switch (result) {
                case "victory":
                    jatekos.victories++;
                    jatekos.sum++;
                    break;
            
                case "defeat":
                    jatekos.defeats++;
                    jatekos.sum++;
                    break;
            
                case "draw":
                    jatekos.draws++;
                    jatekos.sum++;
                    break;
            }
            jatekos.ratio = (jatekos.victories * 100 / jatekos.sum).toFixed(2)
        }
    })

    jatekosok = jatekosok.sort((a, b) => b.victories - a.victories)

    localStorage.setItem('jatekosok', JSON.stringify(jatekosok))
    drawTable()
}

function drawTable() {
    tbody = document.querySelector("#tbody")
    tbody.innerHTML = ""
    db = 1
    jatekosok.forEach(jatekos => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        
        td1.innerText = db
        td2.innerText = jatekos.nev
        td3.innerText = jatekos.victories
        td4.innerText = jatekos.defeats
        td5.innerText = jatekos.draws
        td6.innerText = jatekos.ratio + "%"
        td7.innerText = jatekos.sum

        tr.append(td1, td2, td3, td4, td5, td6, td7)
        tbody.appendChild(tr)
        db++
    })
}