let napok = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
let orak = [0,1,2,3,4,5,6,7,8];
let tantargyak = [
        {nev:'Hálózatok', terem: '103', tanar:'VJ', style: 'blue'},
        {nev:'Webprogramozás 1', terem: '311', tanar:'NSZ', style: 'red'},
        {nev:'Webprogramozás 2', terem: '206', tanar:'SD', style: 'green'},
        {nev:'Asztali alk.', terem: '205', tanar:'TP', style: 'brown'},
        {nev:'Szoftvertesztelés', terem: '100', tanar:'FZ', style: 'orange'},
        {nev:'Szakmai Angol', terem: '213', tanar:'RE', style: 'yellow'},
        {nev:'Adatbázis kezelés', terem: '206', tanar:'HR', style: 'silver'}
    ];

let osszoraszam = document.querySelector('#osszoraszam');
let orarend = JSON.parse(localStorage.getItem('timetable'));

if (orarend != null)
{
    orarend.forEach(ora =>{
        DrawSubject(ora.subjectIdx, ora.dayIdx, ora.hourIdx);
    });
}
else
{
    orarend = [];
}

osszoraszam.innerHTML = orarend.length;

let daySelect = document.querySelector('#days');
let hourSelect = document.querySelector('#hours');
let subjectSelect = document.querySelector('#subjects');
let addBtn = document.querySelector('#addBtn');
let dayIndex;
let hourIndex;
let subjectIndex;

addDays();
addHours();
addSubjects();

// hozzáadjuk a tantárgyat az órarendhez
addBtn.addEventListener('click', function(){
    if (dayIndex == null || hourIndex == null || subjectIndex == null)
    {
        window.alert('Előbb válaszd ki az adatokat!');
    }
    else
    {
        DrawSubject(subjectIndex, dayIndex, hourIndex);
        orarend.push({dayIdx: dayIndex , hourIdx: hourIndex, subjectIdx: subjectIndex});
        osszoraszam.innerHTML = orarend.length;
        localStorage.setItem('timetable', JSON.stringify(orarend));
        daySelect.value ="";
        hourSelect.value = "";
        subjectSelect.value = "";
        dayIndex = null;
        hourIndex = null;
        subjectIndex = null;
    }
});

// hozzáadjuk a napokat a select-hez
function addDays(){
    let i = 0;
    napok.forEach(nap => {
        let day = document.createElement('option');
        day.value = i;
        day.innerHTML = nap;
        daySelect.appendChild(day);
        i++;
    });
}
// hozzáadjuk az órákat a select-hez
function addHours(){
    orak.forEach(ora => {
        let hour = document.createElement('option');
        hour.value = ora;
        hour.innerHTML = ora;
        hourSelect.appendChild(hour);
    });
}

// hozzáadjuk a tantárgyakat a select-hez
function addSubjects(){
    let i = 0;
    tantargyak.forEach(tantargy => {
        let subject = document.createElement('option');
        subject.value = i;
        subject.innerHTML = tantargy.nev;
        subjectSelect.appendChild(subject);
        i++;
    });
}

// ha kiválasztjuk a napot
daySelect.addEventListener('change', function(){
    dayIndex = daySelect.value;
});

// ha kiválasztjuk az órát
hourSelect.addEventListener('change', function(){
    hourIndex = hourSelect.value;
});

// ha kiválasztjuk a tantárgyat
subjectSelect.addEventListener('change', function(){
    subjectIndex = subjectSelect.value;
});

//kirajzoljuk a tantárgyat
function DrawSubject(subjectIndex, dayIndex, hourIndex){
    let cella = document.querySelector('#cell_'+dayIndex+hourIndex);
    cella.innerHTML =
    tantargyak[subjectIndex].nev 
    + "<span class='x' onclick='deleteCell("+dayIndex+", "+hourIndex+", "+subjectIndex+")'>x</span>" 
    + "<span class='room'>" + tantargyak[subjectIndex].terem + "</span>"  
    + "<span class='teacher'>" + tantargyak[subjectIndex].tanar + "</span>";
    cella.classList.add(tantargyak[subjectIndex].style);
}

// cella törlése
function deleteCell(dayIdx, hourIdx, subjectIdx){
    if(window.confirm('Biztosan törlöd???'))
    {
        let cella = document.querySelector('#cell_'+dayIdx+hourIdx);
        cella.innerHTML = "";
        cella.classList.remove(tantargyak[subjectIdx].style)

        let index = orarend.findIndex(element => (element.dayIdx == dayIdx) && (element.hourIdx == hourIdx));

        orarend.splice(index, 1);

        localStorage.setItem('timetable', JSON.stringify(orarend));

        osszoraszam.innerHTML = orarend.length;
    }
}

