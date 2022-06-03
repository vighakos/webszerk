let ko_valaszt = document.querySelector('#ko'),
    papir_valaszt = document.querySelector('#papir'),
    ollo_valaszt = document.querySelector('#ollo'),
    player = document.querySelector('#player'),
    pc = document.querySelector('#pc'),
    acceptBtn = document.querySelector('#acceptBtn')


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
}