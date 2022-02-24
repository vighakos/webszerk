let a = [];
let b = [];
let c = [];
feltolt();

console.log("1. feladat: Dobások összegének átlaga: " + osszeg_atlag().toFixed(2));
console.log("2. feladat: Dobások összegének maximuma: " + osszeg_max())
console.log("3. feladat: Ennyi dobásban fordult elő legalább egy hatos: " + hatos_elofordul())
console.log("4. feladat: Ennyiszer volt hatos dobás: " + hatos_ossz())
console.log("5. feladat: " + harom_hatos() + " három hatos dobás")
console.log("6. feladat: " + azonos_szam())
console.log("7. feladat: " + kulonbozo_szamok())

function kulonbozo_szamok() {
    tomb = [];
    let valasz = "";
    for(i = 0; i < a.length; i++){
        if (a[i] != b[i] && a[i] != c[i] && b[i] != c[i]) {
            tomb.push(i + 1);
        }
    }
    if (tomb.length > 0) {
        for(i = 0; i < tomb.length; i++){
            if (i != tomb.length - 1) {
                valasz += tomb[i] + ", ";
            } else {
                valasz += tomb[i];
            }
        }
        return valasz + ". dobás eredményezett 3 különböző számot";
    }
    return "Nem volt 3 különböző szám a dobások között";
}

function azonos_szam() {
    let szamlalo = 0;
    for(i = 0; i < a.length; i++){
        if (a[i] == b[i] && b[i] == c[i]) {
            szamlalo++;
        }
    }
    return szamlalo > 0 ? szamlalo + "x dobtunk mindhárom kockával azonos számot" : "Nem dobtunk mindhárom kockával azonos számot";
}

function harom_hatos() {
    let volt = false;
    for(i = 0; i < a.length; i++){
        if (a[i] == 6 && b[i] == 6 && c[i] == 6 ) {
            volt = true;
            break;
        }
    }
    return volt ? "Volt" : "Nem volt";
}

function hatos_ossz() {
    let szamlalo = 0;
    for(i = 0; i < a.length; i++){
        if (a[i] == 6) {
            szamlalo++;
        }
        if (b[i] == 6) {
            szamlalo++;
        }
        if (c[i] == 6) {
            szamlalo++;
        }
    }
    return szamlalo;
}

function hatos_elofordul() {
    let szamlalo = 0;
    for(i = 0; i < a.length; i++){
        if (a[i] == 6 || b[i] == 6 || c[i] == 6 ) {
            szamlalo++;
        }
    }
    return szamlalo;
}

function osszeg_max() {
    let max = 0;
    for(i = 0; i < a.length; i++){
        if (a[i] + b[i] + c[i] > max) {
            max = a[i] + b[i] + c[i];
        }
    }
    return max;
}

function osszeg_atlag() {
    let ossz = 0;
    for(i = 0; i < a.length; i++){
        ossz += a[i] + b[i] + c[i];
    }
    return ossz / a.length;
}

function feltolt() {
    document.write(`<div class='tarolo'>`)
    for(i = 0; i < 5; i++){
        document.write(`<div class='sor'>`)
        for(j = 0; j < 4; j++){
            haromdobas();
        }
        document.write(`</div>`)
    }
    document.write(`</div>`)
}

function haromdobas() {
    let random;

    document.write(`<div class='haromdobas'>`)

    random = Math.round(Math.random() * 5) + 1;
    document.write(`<img src='` + random + `.PNG' class='kocka'></img>`);
    a.push(random);

    random = Math.round(Math.random() * 5) + 1;
    document.write(`<img src='` + random + `.PNG' class='kocka'></img>`);
    b.push(random);

    random = Math.round(Math.random() * 5) + 1;
    document.write(`<img src='` + random + `.PNG' class='kocka'></img>`);
    c.push(random);

    document.write(`</div>`)
}