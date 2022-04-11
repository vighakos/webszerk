let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form'),
    kategoria = form.kategoria,
    gyarto = form.gyarto,
    tipus = form.tipus,
    evjarat = form.evjarat,
    szin = form.szin,
    uzemanyag = form.uzemanyag,
    allapot = form.allapot,
    leiras = form.leiras,
    extrak = [
        { 'extra': 'Automata váltó', 'ertek' : form.automatavalto.value },
        { 'extra': 'Elektromos ablak', 'ertek' : form.elektromosablak.value },
        { 'extra': 'Alufelni', 'ertek' : form.alufelni.value },
        { 'extra': 'Klíma', 'ertek' : form.klima.value },
        { 'extra': 'Tempomat', 'ertek' : form.tempomat.value },
        { 'extra': 'Vonóhorog', 'ertek' : form.vonohorog.value },
        { 'extra': 'GPS', 'ertek' : form.gps.value },
        { 'extra': 'Napfénytető', 'ertek' : form.napfenyteto.value }
    ],
    ar = form.ar,
    kep = form.kep

felveszBtn.addEventListener('click', () => {
    alert('gépájátműs🚗🚓🚕🚛 felvévácve :)👳🏿‍♀️👨🏿')
})