let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form'),
    lista = document.querySelector('#lista'),
    summ = document.querySelector('#summ'),
    kiuritBtn = document.querySelector('#kiuritBtn'),
    resetBtn = document.querySelector('#resetBtn'),
    gyarto = form.gyarto,
    model = form.model,
    memoria = form.memoria,
    kamera = form.kamera,
    os = form.os,
    szolg = form.szolg,
    ar = form.ar,
    leiras = form.leiras,
    telefonok = [];

if (adatok = localStorage.getItem('telefonok')) {
    telefonok = JSON.parse(adatok)
}

resetForm()
loadTable()

kiuritBtn.addEventListener('click', resetStorage)

resetBtn.addEventListener('click', resetForm)

felveszBtn.addEventListener('click', () => {
    if (gyarto.value == '' ||
        model.value == '' ||
        memoria.value == 0 ||
        os.value == '' ||
        szolg.value == '' ||
        ar.value == 0) 
    {
        alert('Nem adtál meg minden adatot!')
    } else {
        telefon = {
            'id': telefonok.length + 1,
            'gyarto': gyarto.value,
            'model': model.value,
            'memoria': memoria.value,
            'kamera': kamera.value,
            'os': os.value,
            'szolg': szolg.value,
            'ar': ar.value,
            'leiras': leiras.value == '' ? '-' : leiras.value
        }

        telefonok.push(telefon)
        localStorage.setItem('telefonok', JSON.stringify(telefonok))
        alert('Telefon felvéve!')
    }
})

function resetStorage() {
    if (confirm('Biztosan ki akarja üríteni a tábla tartalmát?')) {
        localStorage.clear()
        lista.innerHTML = ''
        telefonok = []
        loadTable()
    }
}

function loadTable() {
    summ.innerHTML = telefonok.length
    let i = 1

    telefonok.forEach(telefon => {
        let tr = document.createElement('tr')
        lista.appendChild(tr)

        let td1 = document.createElement('td')
        td1.innerHTML = `${i}.`
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = telefon.gyarto
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = telefon.model
        tr.appendChild(td3)

        let td4 = document.createElement('td')
        td4.innerHTML = telefon.memoria
        tr.appendChild(td4)

        let td5 = document.createElement('td')
        td5.innerHTML = telefon.kamera
        tr.appendChild(td5)

        let td6 = document.createElement('td')
        td6.innerHTML = telefon.os
        tr.appendChild(td6)

        let td7 = document.createElement('td')
        td7.innerHTML = telefon.szolg
        tr.appendChild(td7)

        let td8 = document.createElement('td')
        td8.innerHTML = telefon.ar
        tr.appendChild(td8)

        let td9 = document.createElement('td')
        td9.innerHTML = telefon.leiras
        tr.appendChild(td9)

        i++
    })
}

function resetForm() {
    gyarto.value = ''
    model.value = ''
    memoria.value = 0
    kamera.value = 0
    os.value = ''
    szolg.value = ''
    ar.value = 0
    leiras.value = ''
}