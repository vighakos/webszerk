let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form'),
    lista = document.querySelector('#lista'),
    summ = document.querySelector('#summ'),
    kategoria = form.kategoria,
    gyarto = form.gyarto,
    tipus = form.tipus,
    evjarat = form.evjarat,
    szin = form.szin,
    uzemanyag = form.uzemanyag,
    allapot = form.allapot,
    leiras = form.leiras,
    extrak = [
        { 'extra': 'Automata váltó', 'ertek': form.automatavalto.checked },
        { 'extra': 'Elektromos ablak', 'ertek': form.elektromosablak.checked },
        { 'extra': 'Alufelni', 'ertek': form.alufelni.checked },
        { 'extra': 'Klíma', 'ertek': form.klima.checked },
        { 'extra': 'Tempomat', 'ertek': form.tempomat.checked },
        { 'extra': 'Vonóhorog', 'ertek': form.vonohorog.checked },
        { 'extra': 'GPS', 'ertek': form.gps.checked },
        { 'extra': 'CD Rádió', 'ertek': form.cdradio.checked },
        { 'extra': 'Napfénytető', 'ertek': form.napfenyteto.checked }
    ],
    ar = form.ar,
    kep = form.kep,
    gepjarmuvek = [];

if (adatok = localStorage.getItem('gepjarmuvek')) {
    gepjarmuvek = JSON.parse(adatok)
}

formReset()
loadTable()

felveszBtn.addEventListener('click', () => {
    if (kategoria.value == "" || 
        gyarto.value == "" || 
        tipus.value == "" || 
        evjarat.value == 0 || 
        uzemanyag.value == "" ||
        ar.value == 0) 
    {
        alert('Nem adtál meg minden adatot!')
    } else {
        gepjarmu = {
            'id': gepjarmuvek.length + 1,
            'kategoria': kategoria.value,
            'gyarto': gyarto.value,
            'tipus': tipus.value,
            'evjarat': evjarat.value,
            'szin': szin.value,
            'uzemanyag': uzemanyag.value,
            'allapot': allapot.value,
            'leiras': leiras.value,
            'extrak': [
                { 'extra': 'Automata váltó', 'ertek': form.automatavalto.checked },
                { 'extra': 'Elektromos ablak', 'ertek': form.elektromosablak.checked },
                { 'extra': 'Alufelni', 'ertek': form.alufelni.checked },
                { 'extra': 'Klíma', 'ertek': form.klima.checked },
                { 'extra': 'Tempomat', 'ertek': form.tempomat.checked },
                { 'extra': 'Vonóhorog', 'ertek': form.vonohorog.checked },
                { 'extra': 'GPS', 'ertek': form.gps.checked },
                { 'extra': 'CD Rádió', 'ertek': form.cdradio.checked },
                { 'extra': 'Napfénytető', 'ertek': form.napfenyteto.checked }
            ],
            'ar': ar.value,
            'kep': kep.value
        }
        gepjarmuvek.push(gepjarmu)
        localStorage.setItem('gepjarmuvek', JSON.stringify(gepjarmuvek))
        alert('Gépjármű felvéve!');
    }
});

function formReset() {
    kategoria.value = ''
    gyarto.value = ''
    tipus.value = ''
    evjarat.value = 0
    szin.value = ''
    uzemanyag.value = ''
    allapot.value = 'Normál'
    leiras.value = ''
    ar.value = 0
    form.automatavalto.checked = false
    form.elektromosablak.checked = false
    form.alufelni.checked = false
    form.klima.checked = false
    form.tempomat.checked = false
    form.vonohorog.checked = false
    form.gps.checked = false
    form.cdradio.checked = false
    form.napfenyteto.checked = false
}

function loadTable() {
    summ.innerText = gepjarmuvek.length
    let i = 1

    gepjarmuvek.forEach(gepjarmu => {
        let tr = document.createElement('tr')
        lista.appendChild(tr)

        let td1 = document.createElement('td')
        td1.innerHTML = i + "."
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = gepjarmu.kategoria
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = gepjarmu.gyarto
        tr.appendChild(td3)

        let td4 = document.createElement('td')
        td4.innerHTML = gepjarmu.tipus
        tr.appendChild(td4)

        let td5 = document.createElement('td')
        td5.innerHTML = gepjarmu.evjarat
        tr.appendChild(td5)

        let td6 = document.createElement('td')
        td6.innerHTML = gepjarmu.ar
        tr.appendChild(td6)

        let td7 = document.createElement('td')
        td7.innerHTML = '<a href="/info/'+gepjarmu.id+'">Részletek...</a>'
        tr.appendChild(td7)

        i++
    }) 
}

