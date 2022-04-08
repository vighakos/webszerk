let edzesek = ['váll és hát', 'kar', 'mell', 'láb'];
let pihenonap = '---';
let aktedzes = 3;
let ma = new Date();
let aktev = ma.getFullYear();
let napszamok = [31, 28+szokoev(aktev), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let aktho = ma.getUTCMonth();
let aktnap = ma.getUTCDay();
let table = document.querySelector('#edzesnaptar');

let k = aktnap;
for(i = 0; i < 30; i++){
    if (i % 4 == 0) {
        naptarhoz_ad(aktho, k, pihenonap);
    } else {
        naptarhoz_ad(aktho, k, edzesek[aktedzes]);
        aktedzes++;
    }
    if (aktedzes > 3) {
        aktedzes = 0;
    }
    k++;
    if (k > napszamok[aktho]) {
        aktho++;
        k = 1;
    }
}

// egy sort készít a táblázatban
function naptarhoz_ad(aktho, nap, edzes){
    //document.writeln(kiir(aktho + 1) + '.' + kiir(k) + '<br>');
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td1 = document.createElement('td');
    td1.classList.add('cella');
    td1.innerHTML = kiir(aktho + 1) + '.' + kiir(nap);
    let td2 = document.createElement('td');
    td2.classList.add('cella');
    td2.innerHTML = edzes;

    let aktnap = new Date(aktev + "-" + (aktho+1) + "-" + nap);
    let napszam = aktnap.getUTCDay();
    if (napszam == 6) {
        td1.classList.add('szombat')
        td2.classList.add('szombat')
    }
    if (napszam == 0) {
        td1.classList.add('vasarnap')
        td2.classList.add('vasarnap')
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
}

// 1 helyiértékű számokat 2 helyiértékre
function kiir(szam) {
    if (szam < 10) {
        szam = '0' + szam;
    }
    return szam;
}

// szökőév számítása
function szokoev(ev){
    let nap = 0;
    if ((ev % 4 == 0) && (ev % 100 != 0) || (ev % 400 == 0)) {
        nap = 1
    }
    return nap;
}