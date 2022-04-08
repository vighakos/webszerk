let gameTable = document.querySelector('#gameTable'),
    newGameBtn = document.querySelector('#newGameBtn'),
    stepCountBox = document.querySelector('#stepCountBox'),
    timeBox = document.querySelector('#timeBox'),
    game = false,
    stepcount = 0,
    mperc = 0,
    perc = 0,
    ora = 0,
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    aktelem = 0;


drawTable();

newGameBtn.addEventListener('click', () => {
    game = true;
    stepcount = -1;
    mperc = 0;
    perc = 0;
    ora = 0;
    updateStepCount();
    timer = setInterval(() => { idomeres() }, 1000);
});

document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        // left
        case 37:
            { console.log('left'); break; }
            // up
        case 38:
            { console.log('up'); break; }
            // right
        case 39:
            { console.log('right'); break; }
            // down
        case 40:
            { console.log('down'); break; }
    }
    updateStepCount();
});

function idomeres() {
    mperc++;
    if (mperc == 60) {
        perc++;
        mperc = 0;
    }
    if (perc == 60) {
        perc = 0;
        ora++
    }
    timeBox.value = kieg(ora) + ':' + kieg(perc) + ':' + kieg(mperc);
}

function kieg(szam) {
    if (szam < 10) {
        szam = '0' + szam;
    }
    return szam;
}

function updateStepCount() {
    stepcount++;
    stepCountBox.value = stepcount;
}

function drawTable() {
    for (let i = 0; i < 9; i++) {
        picture = document.getElementById('pic_' + i);
        picture.classList.add('pic_' + elements[i]);
    }
}