let hely = new Array();

kirajzol();
kiertekel();

function kirajzol() {
    for (i = 1; i <= 15; i++) {
        if (i == 1) document.write("<span class='helyar'>7500.- Ft</span>")
        if (i == 6) document.write("<span class='helyar'>5900.- Ft</span>")
        if (i == 11) document.write("<span class='helyar'>4500.- Ft</span>")

        hely[i] = new Array()
        document.write("<span class='sorszam'>" + i + ".</span>")
        for (j = 1; j <= 24; j++) {
            hely[i][j] = Math.floor((1 - Math.random() * Math.random()) * 2)
            if (hely[i][j] == 1) {
                document.write("<span class='szek foglalt' id='" + i + "|" + j + "' onclick='allapotvaltas(" + i + "," + j + ")' title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
            } else {
                document.write("<span class='szek szabad' id='" + i + "|" + j + "' onclick='allapotvaltas(" + i + "," + j + ")' title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
            }
        }
        document.write("<br>")
        if (i % 5 == 0) document.write("<hr size=1 color=#880000>")
    }

    console.table(hely);
}

function kiertekel() {
    let adatDoboz = document.querySelector('#adatok');

    // 1. feladat: Hány szabad hely van még?

    let szabadHelyekSzama = 0;

    for (i = 1; i <= 15; i++) {
        for (j = 1; j <= 24; j++) {
            if (hely[i][j] == 0) {
                szabadHelyekSzama++;
            }
        }
    }

    adatDoboz.innerHTML = `1. Feladat: A szabad helyek száma: ${szabadHelyekSzama}`;

    // 2. feladat: a jegyek hány százaléka kelt már el?

    let szazalek = ((15 * 24) - szabadHelyekSzama) / (15 * 24) * 100;
    adatDoboz.innerHTML += `<br>2. Feladat: eladott jegyek százaléka:  ${szazalek.toFixed(2)} %`;

    // 3. feladat: Mennyi az eddigi jegyárbevétel?

    let jegyarBevetel = 0;

    for (i = 1; i <= 15; i++) {
        for (j = 1; j <= 24; j++) {
            if (hely[i][j] == 1) {
                if (i < 6) {
                    jegyarBevetel += 7500;
                }
                if (i >= 6 && i < 11) {
                    jegyarBevetel += 5900;
                }
                if (i >= 11) {
                    jegyarBevetel += 4500;
                }
            }
        }
    }

    adatDoboz.innerHTML += `<br>3. Feladat: Az eddigi jegyárbevétel: ${jegyarBevetel} Ft`;

    // 4. feladat: melyik érkategóriából adták el a legtöbb jegyet?

    let kat = [0, 0, 0];

    for (i = 1; i <= 15; i++) {
        for (j = 1; j <= 24; j++) {
            if (hely[i][j] == 1) {
                if (i < 6) {
                    kat[0]++;
                }
                if (i >= 6 && i < 11) {
                    kat[1]++;
                }
                if (i >= 11) {
                    kat[2]++;
                }
            }
        }
    }

    let maxindex = 0;
    for (i = 1; i < 3; i++) {
        if (kat[i] > kat[maxindex]) {
            maxindex = i;
        }
    }

    console.table(kat);
    adatDoboz.innerHTML += `<br>4. Feladat: A legtöbb eladott jegy: ${maxindex+1} kategória`;

    // 5. feladat: van-e olyan sor, ahol egyetlen szabad hely sincs?

    let van = false;

    for (i = 1; i <= 15; i++) {
        if (teleSor(i) == true) {
            van = true;
            console.log('A tele sor száma: ', i);
            break;
        }
    }

    adatDoboz.innerHTML += `<br>5. Feladat: ${ van ? 'Van': 'Nincs' } olyan sor, ahol minden jegy elkelt.`;


    // 6 .feladat: van-e még valahol négy szabad hely egymás mellett?

    van = false;

    for (i = 1; i <= 15; i++) {
        if (negySzabadHely(i)) {
            van = true;
            console.log(`Négy szabad hely a ${i}. sorban.`);
            break;
        }
    }

    adatDoboz.innerHTML += `<br>6. Feladat: ${ van ? 'Van': 'Nincs' } négy szabad hely egymás mellett.`;

    // 7. feladat: hány párnak tudunk helyet adni?

    van = false;
    parosHelyekSzama = 0;

    for (i = 1; i <= 15; i++) {
        ketSzabadHely(i);
    }

    adatDoboz.innerHTML += `<br>7. Feladat: ${parosHelyekSzama} párnak tudunk még helyetz biztosítani.`;

    // 8. feladat: a sorok szélén a legolcsóbb, de azon blül a legelőrébb lévő hely megkeresése

    let talalat = {
        sor: 0,
        szek: 0
    }

    van = false;

    for (i = 11; i <= 15; i++) {
        if (checkPlace1(i)) { break; }
        if (checkPlace24(i)) { break; }
    }

    if (van == false) {
        for (i = 6; i <= 10; i++) {
            if (checkPlace1(i)) { break; }
            if (checkPlace24(i)) { break; }
        }
    }

    if (van == false) {
        for (i = 1; i <= 5; i++) {
            if (checkPlace1(i)) { break; }
            if (checkPlace24(i)) { break; }
        }
    }

    adatDoboz.innerHTML += `<br>8. Feladat: A keresett hely: ${talalat.sor}. sor ${talalat.szek}. szék.`;

}

function teleSor(x) {
    let tele = true;
    for (j = 1; j <= 24; j++) {
        if (hely[x][j] == 0) {
            tele = false;
            break;
        }
    }
    return tele;
}

function negySzabadHely(x) {
    let van4 = false;
    let db = 0;
    for (j = 1; j <= 24; j++) {
        if (hely[x][j] == 0) {
            db++;
            if (db == 4) {
                van4 = true;
                break;
            }
        } else {
            db = 0;
        }
    }
    return van4;
}

function ketSzabadHely(x) {
    let db = 0;
    for (j = 1; j <= 24; j++) {
        if (hely[x][j] == 0) {
            db++;
            if (db == 2) {
                parosHelyekSzama++;
                db = 0;
            }
        } else {
            db = 0;
        }
    }
}

function checkPlace1(x) {
    van = false;
    if (hely[x][1] == 0) {
        van = true;
        talalat.sor = x;
        talalat.szek = 1;
    }
    return van;
}

function checkPlace24(x) {
    van = false;
    if (hely[x][24] == 0) {
        van = true;
        talalat.sor = x;
        talalat.szek = 24;
    }
    return van;
}

function allapotvaltas(x, y) {
    let aktszek = document.getElementById(x + '|' + y);
    if (hely[x][y] == 0) {
        aktszek.classList.remove('szabad');
        aktszek.classList.add('foglalt');
        hely[x][y] = 1;

    } else {
        aktszek.classList.remove('foglalt');
        aktszek.classList.add('szabad');
        hely[x][y] = 0;
    }

    kiertekel();
}