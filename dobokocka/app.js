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
console.log("8. feladat: A dobások " + szazalek().toFixed(2) + "%-a volt 2-es, 4-es, vagy 6-os")
console.log("9. feladat: " + keterteke() + " olyan dobás, ahol a legnagyobb számot mutató kocka a másik két kocka értékének összege.")
console.log("9. feladat: " + keterteke() + " olyan dobás, ahol a legnagyobb számot mutató kocka a másik két kocka értékének összege.")
console.log("10. feladat: Ezt a számot mutatták be legkevesebbszer: " + legkevesebb());
console.log("11. feladat: Ez az összeg többször is előfordult: " + osszeg_elofordul());

function osszeg_elofordul() {
    for(i = 0; i < a.length; i++){
        
    }
}

function legkevesebb() {
    let egy = 0;
    let ketto = 0;
    let harom = 0;
    let negy = 0;
    let ot = 0;
    let hat = 0;
    for(i = 0; i < a.length; i++){
        switch (a[i]) {
            case 1:
                egy++;
                break;
            
            case 2:
                ketto++;
                break;
            
            case 3:
                harom++;
                break;
            
            case 4:
                negy++;
                break;
            
            case 5:
                ot++;
                break;
            
            case 6:
                hat++;
                break;
            
            default:
                break;
        }
        switch (b[i]) {
            case 1:
                egy++;
                break;
            
            case 2:
                ketto++;
                break;
            
            case 3:
                harom++;
                break;
            
            case 4:
                negy++;
                break;
            
            case 5:
                ot++;
                break;
            
            case 6:
                hat++;
                break;
            
            default:
                break;
        }
        switch (c[i]) {
            case 1:
                egy++;
                break;
            
            case 2:
                ketto++;
                break;
            
            case 3:
                harom++;
                break;
            
            case 4:
                negy++;
                break;
            
            case 5:
                ot++;
                break;
            
            case 6:
                hat++;
                break;
            
            default:
                break;
        }
    }
    let tomb = [];
    tomb.push(egy, ketto, harom, negy, ot, hat)
    let min = a[0];
    for(i = 0; i < tomb.length; i++){
        if (min < tomb[i]) {
            min = i + 1
        }
    }
    return min;
}

function keterteke() {
    let van = false;
    for(i = 0; i < a.length; i++){
        if (a[i] > b[i] && a[i] > c[i]) {
            if (a[i] == b[i] + c[i]) {
                van = true;
                break;
            }
        }else if (b[i] > a[i] && b[i] > c[i]) {
            if (b[i] == a[i] + c[i]) {
                van = true;
                break;
            }
        }else if (c[i] > a[i] && c[i] > b[i]) {
            if (c[i] == a[i] + b[i]) {
                van = true;
                break;
            }
        }
    }
    return van ? "Volt" : "Nem volt";
}

function szazalek() {
    let szamlalo = 0;
    for(i = 0; i < a.length; i++){
        if (a[i] % 2 == 0) { 
            szamlalo++;
        }
        if (b[i] % 2 == 0) {
            szamlalo++;
        }
        if (c[i] % 2 == 0) {
            szamlalo++;
        }
    }
    return (szamlalo / 60) * 100;
}

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