let ko_valaszt = document.querySelector('#ko'),
    papir_valaszt = document.querySelector('#papir'),
    ollo_valaszt = document.querySelector('#ollo'),
    player = document.querySelector('#player'),
    pc = document.querySelector('#pc'),
    acceptBtn = document.querySelector('#acceptBtn'),
    jatekosok = []

if (adatok = localStorage.getItem('jatekosok')) {
    jatekosok = JSON.parse(adatok)
}

getName()
updateStats()

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
    let nev = prompt("Add meg a neved:")
    jatekosok.forEach(jatekos => {
        if (jatekosok.nev == nev) {

        }
    })

    if (nev == "" || nev == null) nev = "unnamed"

    jatekos = {
        'id': jatekosok.length + 1,
        'nev': nev,
        'nyert': 0,
        'vesztett': 0,
        'osszes': 0
    }
    jatekosok.push(jatekos)
    localStorage.setItem('jatekosok', JSON.stringify(jatekosok))
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
    updateStats(player)
}

function pcVictory() {
    pc.classList.add('victory')
    player.classList.add('defeat')
    updateStats(pc)
}

function draw() {
    player.classList.add('draw')
    pc.classList.add('draw')
    updateStats(player)
    updateStats(pc)
}

function updateStats(winner) {
    tbody = document.querySelector("#tbody")
    tbody.innerHTML = ""
    jatekosok.forEach(jatekos => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        
        td1.innerText = jatekos.id
        td2.innerText = jatekos.nev
        td3.innerText = jatekos.nyert
        td4.innerText = jatekos.vesztett
        td5.innerText = jatekos.osszes

        tr.append(td1, td2, td3, td4, td5)
        tbody.appendChild(tr)
    })
}