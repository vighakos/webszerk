let game = false,
    gamerName,
    difficulty,
    minutes,
    seconds,
    gameTime,
    tilesCount,
    tiles = [];

$(document).ready(() => {
    gamerName = $('#gamerName').val();
    difficulty = $('#gameType').val();
    minutes = 0;
    seconds = 0;
    clearInterval(gameTime);
});

$('#startBtn').on('click', () => {
    gamerName = $('#gamerName').val();
    difficulty = $('#gameType').val();
    if (gamerName == '') {
        alert('Add meg a neved!');
    } else {
        $('#gamerNameBox').html('Játékos: ' + gamerName);
        $('#difficultyBox').html('Fokozat: ' + difficulty);
        $('#startPanel').hide();
        $('#gameTable').show();

        switch (difficulty) {
            case 'Könnyű':
                { tilesCount = 18; break; }
            case 'Közepes':
                { tilesCount = 30; break; }
            case 'Nehéz':
                { tilesCount = 42; break; }
        }

        generateTable();

        timeStart();
        game = true;
    }
});

function timeStart() {
    $('#time').val(kiegeszit(minutes) + ':' + kiegeszit(seconds));
    gameTime = setInterval(timer, 1000);
}

function timer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    $('#time').val(kiegeszit(minutes) + ':' + kiegeszit(seconds));
}

function kiegeszit(mit) {
    if (mit < 10) {
        mit = '0' + mit;
    }
    return mit;
}

function generateTable() {

    for (let i = 0; i < tilesCount; i++) {
        $('#tilesArea').append('<div class ="tileBox col-2" onclick="rotate(' + i + ')" id="tile_' + i + '"><div class="tile"></div></div>');

        let tile = {
            'value': -1,
            'status': 0,
            'id': i
        }
        tiles.push(tile);
    }
    generateValues()
}

function generateValues() {
    let x, y
    for(i = 0; i < tilesCount / 2; i++){
        do {
            x = Math.round(Math.random() * (tilesCount - 1))
            y = Math.round(Math.random() * (tilesCount - 1))
        } while ((tiles[x].value != -1) || (tiles[y].value != -1) && (x != y) || (x == y));
    }
    tiles[x].value = i
    tiles[y].value = i
}

function rotate(id) {
    if (showTileCount == 2) {
        for(i = 0; i < tilesCount; i++){
            if (tiles[i].status == 1) {
                $('#tile_' + i).removeClass('tileRotate')
                $('#tile_' + i).Class('tileRotateInverse')
                $('#tile_' + i).html('<div class="tile"></div>')
                tiles[i].status = 0
            }
        }
        showTileCount = 0
        
    }
    $('#tile_' + id).addClass('tileRotate')
    $('#tile_' + id).html('<div class="tile">' + tiles[id].value + '</div>')
    tiles[id].status = 1
    showTileCount++
}