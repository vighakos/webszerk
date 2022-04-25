document.writeln('<h3>1. feladat</h3>');

ElemSzam = 6;
x = new Array();

most = new Date();
aho = most.getMonth() + 1; // aktuális hónap

if (aho > 1) eho = aho - 1; // előző hónap
else eho = 12;

for (i = 0; i < ElemSzam; i++) {
    h = Math.floor(Math.random() * 2) ? aho : eho;
    n = Math.floor(Math.random() * 28) + 1;

    h = kiegeszit(h);
    n = kiegeszit(n);

    x[i] = `${h}.${n}`
    document.write(`<span class='cipoadat'>${x[i]}</span>`);
}

function kiegeszit(x) {
    if (x < 10) x = "0" + x
    return x
}
// 1.a feladat: mikor volt az eddigi ut. beszáll.?
document.writeln('<br><br>');
let maidatum = `${kiegeszit(most.getMonth() + 1)}.${kiegeszit(most.getDate())}`

let maxindex = 0;

for (let i = 1; i < ElemSzam; i++) {
    if (x[i] > x[maxindex]) {
        if (x[i] < maidatum) {
            maxindex = i;
        }
    }
}

document.writeln(`1.a: Az eddigi utolsó beszállítás: ${x[maxindex]}`)

// 1.b volt-e már beszállítás ebben a hónapban?

let volt = false;
aho = kiegeszit(aho);
for (let i = 0; i < ElemSzam; i++) {
    ho = x[i].split('.');
    if (aho == ho[0]) {
        volt = true;
        break;
    }
}

document.writeln(`<br>1.b: Volt-e beszállítás ebben a hónapban? ${((volt) ? "Volt" : "Nem volt")}`)

// 1.c hány beszállítás van még előre jelezve?

let db = 0;

for (let i = 0; i < ElemSzam; i++) {
    if (x[i] > maidatum) {
        db++;
    }
}

document.writeln(`<br>1.c: Előrejelzett beszállítások száma ${db}`)

// 1.d volt-e, vagy lesz-e több beszállítás egyazon napon?

let vane = false;

for (let i = 0; i < ElemSzam - 1; i++) {
    for (let j = i + 1; j < ElemSzam; j++) {
        if (x[i] == x[j]) {
            vane = true;
            break;
        }
    }
}

document.writeln(`<br>1.d: Volt-e, vagy lesz-e több beszállítás egyazon napon? ${((vane) ? "Igen" : "Nem")}`);

document.writeln('<br><br><h3>2. feladat</h3>');

let F = new Array(12);
let N = new Array(12);

for (let i = 0; i < 12; i++) {
    F[i] = Math.round(Math.random() * 8 + 38); // 38-46
    N[i] = Math.round(Math.random() * 7 + 35); // 35-42
}

for (let i = 0; i < 12; i++) {
    document.write(`<span class='FcipoMeret'>${F[i]}</span>`);
}

document.writeln('<br><br><br>');

for (let i = 0; i < 12; i++) {
    document.write(`<span class='NcipoMeret'>${N[i]}</span>`);
}

// 2.a A legnagyobb női cipő

maxindex = 0;

for (let i = 0; i < 12; i++) {
    if (N[i] > N[maxindex]) {
        maxindex = i;
    }
}

document.writeln(`<br><br>2.a: A legnagyobb női cipőméret: ${N[maxindex]}`);

// 2.b cipőméret átlagok különbsége

let AvgN = 0;
let AvgF = 0;
let SumN = 0;
let SumF = 0;

for (let i = 0; i < 12; i++) {
    SumF += F[i];
    SumN += N[i];
}

AvgN = SumN / 12;
AvgF = SumF / 12;

document.writeln(`<br><br>2.b: A cipőméret átlagok különbsége: ${(AvgF - AvgN).toFixed(2)}`);

// 2.c A női cipők hány százaléka 40-es méret feletti?

db = 0;
for (let i = 0; i < 12; i++) {
    if (N[i] > 40) {
        db++;
    }
}

document.writeln(`<br><br>2.c: A női cipők ${(db * 100 / 12).toFixed(2)}%-a 40-es méret feletti? `);

// 2.d Mindkét nemet összesítve melyik cipőméretből fogyott a legtöbb?

let cipomeretek = [
    { meret: 35, db: 0 },
    { meret: 36, db: 0 },
    { meret: 37, db: 0 },
    { meret: 38, db: 0 },
    { meret: 39, db: 0 },
    { meret: 40, db: 0 },
    { meret: 41, db: 0 },
    { meret: 42, db: 0 },
    { meret: 43, db: 0 },
    { meret: 44, db: 0 },
    { meret: 45, db: 0 },
    { meret: 46, db: 0 }
];

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (cipomeretek[i].meret == N[j]) {
            cipomeretek[i].db++;
        }
        if (cipomeretek[i].meret == F[j]) {
            cipomeretek[i].db++;
        }
    }
}

maxindex = 0;
for (let i = 1; i < 12; i++) {
    if (cipomeretek[i].db > cipomeretek[maxindex].db) {
        maxindex = i;
    }
}

document.writeln(`<br><br>2.d: A legtöbb eladott cipőméret: ${cipomeretek[maxindex].meret} méret`);

// 3. feladat
document.writeln('<br><br><h3>3. feladat</h3>');

let idopontok = new Array();
let kezdo = 0,
    osszido = 0;
for (let i = 0; i < 12; i++) {
    do {
        ido = Math.round(Math.random() * 179 + 1);
    } while ((osszido + ido) > 1440);
    osszido += ido;
    kezdo += ido;
    idopontok[i] = atvalt(kezdo);
}

for (let i = 0; i < 12; i++) {
    document.write(`<span class='cipoadat'>${idopontok[i]}</span>`);
}

function atvalt(atvaltando) {
    let ora;
    let perc;
    ora = kiegeszit(Math.floor(atvaltando / 60));
    perc = kiegeszit(atvaltando % 60);
    return (ora + ':' + perc);
}

// 3.a hányszor vásároltak dél és este 8 között?

db = 0;
for (let i = 0; i < 12; i++) {
    if (idopontok[i] > "12:00" && idopontok[i] < "20:00") {
        db++;
    }
}

document.writeln(`<br><br>3.a: Hányszor vásároltak dél és este 8 között? ${db}`);

// 3.b Adtak-e le rendelést hajnali 3 és 4 között?
let adtakle = false;

for (let i = 0; i < 12; i++) {
    if (idopontok[i] > "03:00" && idopontok[i] < "04:00") {
        adtakle = true;
        break;
    }
}
document.writeln(`<br><br>3.b: Adtak-e le rendelést hajnali 3 és 4 óra között? ${(adtakle ? "Igen" : "Nem")}`);

// 3.c Mikor volt az első dél utáni vásárlás?
let index = 0;
for (let i = 0; i < 12; i++) {

    ora = idopontok[i].split(':');

    if ((ora[0] == "12" && ora[1] > "00") || ora[0] > "12") {
        index = i;
        break;
    }
}

document.writeln(`<br><br>3.c: Mikor volt az első dél utáni vásárlás? ${idopontok[index]}`);

// 3.d Átlagosan hány percenként érkezett rendelés?

let kulonbsegekOsszege = 0;

for (let i = 1; i < 12; i++) {

    let perc1 = visszavalt(idopontok[i]);
    let perc2 = visszavalt(idopontok[i - 1]);
    kulonbsegekOsszege += (perc1 - perc2);
}

document.writeln(`<br><br>3.d: Átlagosan hány percenként érkezett rendelés? ${(kulonbsegekOsszege / 11).toFixed(2)}`);

function visszavalt(ido) {
    let perc = 0;
    ora = ido.split(':');
    perc = (Number)(ora[0]) * 60 + (Number)(ora[1]); // vagy parseInt()
    return perc;
}

// 4. feladat

let tobbcipo = 0

let vasarlasok = new Array();
vasarlasokFeltolt()

document.writeln(`<h3>4. feladat</h3>`)

for(i = 0; i < vasarlasok.length; i++){
    document.write(`<span class='vasarlasadat'>${vasarlasok[i]}.-</span>`)
}

// 4.a átlag

let vasarAtl = vasarlasok.reduce((a, b) => a + b, 0) / vasarlasok.length
document.writeln(`<br><br>4.a: A vásárlások átlaga: ${vasarAtl.toFixed(2)}`)

//4.b hányszorosa

let vasarMax = Math.max(...vasarlasok)
document.writeln(`<br><br>4.b: Hányszorosa volt a max az átlagnak? ${(vasarMax / vasarAtl).toFixed(2)}`)

// 4.c Volt-e 50k felett

let voltevasar = Math.max(...vasarlasok) > 50000 ? "Volt" : "Nem volt"
document.writeln(`<br><br>4.c: ${voltevasar} 50.000 Ft feletti rendelés`)

//4.d több cipő

let tobbcipoSzaz = tobbcipo * 100 / vasarlasok.length

document.writeln(`<br><br>4.d: A vásárlások ${tobbcipoSzaz.toFixed(2)}%-ában vásároltak több cipőt is`)

function vasarlasokFeltolt() {
    for(i = 0; i < 12; i++){
        vasarlasok[i] = randomAr()
        if (Math.random() > 0.5) {
            tobbcipo++
            vasarlasok[i] += randomAr()
            if (Math.random() > 0.5) {
                vasarlasok[i] += randomAr()
                if (Math.random() > 0.5) {
                    vasarlasok[i] += randomAr()
                }
            }
        }
    }
}

function randomAr() {
    return Math.round(Math.random() * (24 - 5) + 5) * 1000 + 990
}