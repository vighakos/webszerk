let jelentkezBtn = document.querySelector('#jelentkezBtn'),
    form = document.querySelector('form'),
    vizsgatargy = form.vizsgatargy,
    idopont = form.idopont,
    nev = form.nevinput,
    email = form.email,
    elfogad = form.elfogad,
    vizsgatargyak = [
        {
        "vizsgatargy" : "Adatbázis",
        "idopontok" : [
            "2022.06.10. 8:00",
            "2022.06.10. 10:00"
            ],
        "maxfo" : 10,
        "aktfo" : 0
        },
        {
        "vizsgatargy" : "Frontend-Backend",
        "idopontok" : [
            "2022.06.11. 8:00",
            "2022.06.11. 10:00"
            ],
        "maxfo" : 5,
        "aktfo" : 0
        },
        {
        "vizsgatargy" : "Asztali alk",
        "idopontok" : [
            "2022.06.12. 8:00",
            "2022.06.12. 10:00"
            ],
        "maxfo" : 6,
        "aktfo" : 0
        },
        {
        "vizsgatargy" : "Mobil alk",
        "idopontok" : [
            "2022.06.19. 8:00",
            "2022.06.20. 8:00"
            ],
        "maxfo" : 8,
        "aktfo" : 0}
    ];
    let vizsgazok = [
        {
        "vizsgatargy" : "Asztali alkalmazás fejlesztés",
        "idopont" : "2022.06.12. 10:00",
        "nev" : "Kis Béla",
        "email" : "kb@gmail.com"
        },
        {
        "vizsgatargy" : "Adatbázis-kezelés",
        "idopont" : "2022.06.15. 8:00",
        "nev" : "Nagy Péter",
        "email" : "np@gmail.com"
        }
    ];

if (adatok = localStorage.getItem('vizsgazok')) {
    vizsgazok = JSON.parse(adatok)
}

if (adatok2 = localStorage.getItem('vizsgatargyak')) {
    vizsgatargyak = JSON.parse(adatok2)
}

jelentkezBtn.addEventListener('click', () => {
    if (vizsgatargy.value == "" ||
    idopont.value == "" ||
    nev.value == "" ||
    email.value == "" ||
    elfogad.checked == false) 
    {
        alert("Nem adtál meg minden adatot!")    
    } else {
        vizsgazo = {
            'vizsgatargy' : vizsgatargy.value,
            'idopont' : idopont.value,
            'nev' : nev.value,
            'email' : email.value
        }
        item.aktfo++
        vizsgazok.push(vizsgazo)
        localStorage.setItem('vizsgazok', JSON.stringify(vizsgazok))
        localStorage.setItem('vizsgatargyak', JSON.stringify(vizsgatargyak))
        alert('Vizsgázó felvéve')
    }
})

vizsgatargy.addEventListener('change', () => {
    idopont.innerHTML = ""
    vizsgatargyak.forEach(item => {
        if (item.vizsgatargy == vizsgatargy.value) {
            let option1 = document.createElement('option')
            option1.value = item.idopontok[0]
            option1.innerText = item.idopontok[0]
            idopont.appendChild(option1)
            
            let option2 = document.createElement('option')
            option2.value = item.idopontok[1]
            option2.innerText = item.idopontok[1]
            idopont.appendChild(option2)
        }
    })
})