let fut_input = document.querySelector('#fut');
let foci_input = document.querySelector('#foci');
let bringa_input = document.querySelector('#bringa');
let hegy_input = document.querySelector('#hegy');
let lovag_input = document.querySelector('#lovag');
let tura_input = document.querySelector('#tura');
let kajak_input = document.querySelector('#kajak');
let suly_input = document.querySelector('#suly');
let ping_input = document.querySelector('#ping');
let kutya_input = document.querySelector('#kutya');

let fut_input_kal = document.querySelector('#fut_kal');
let foci_input_kal = document.querySelector('#foci_kal');
let bringa_input_kal = document.querySelector('#bringa_kal');
let hegy_input_kal = document.querySelector('#hegy_kal');
let lovag_input_kal = document.querySelector('#lovag_kal');
let tura_input_kal = document.querySelector('#tura_kal');
let kajak_input_kal = document.querySelector('#kajak_kal');
let suly_input_kal = document.querySelector('#suly_kal');
let ping_input_kal = document.querySelector('#ping_kal');
let kutya_input_kal = document.querySelector('#kutya_kal');

let sportok = [
    {nev:'fut', kcal: '680'},
    {nev:'foci', kcal: '550'},
    {nev:'bringa', kcal: '480'},
    {nev:'hegy', kcal: '420'},
    {nev:'lovag', kcal: '370'},
    {nev:'tura', kcal: '360'},
    {nev:'kajak', kcal: '340'},
    {nev:'suly', kcal: '320'},
    {nev:'ping', kcal: '270'},
    {nev:'kutya', kcal: '200'}
];
/*
document.querySelectorAll('.be').forEach(item => {
    item.addEventListener('change', function() {

        let item_kal = item.id + '_input_kal';

        console.log("item_kal.value: " + item_kal.value);

        let szam = Math.round((sportok[0].kcal/60) * item.value);
        console.log(szam);
        item_kal.value = szam;
        console.log(item_kal.value)
    })
});*/

fut_input.addEventListener('change', function(){
    fut_input_kal.value = Math.round((sportok[0].kcal/60) * fut_input.value);
});

foci_input.addEventListener('change', function(){
    foci_input_kal.value = Math.round((sportok[1].kcal/60) * foci_input.value);
});

bringa_input.addEventListener('change', function(){
    bringa_input_kal.value = Math.round((sportok[2].kcal/60) * bringa_input.value);
});

hegy_input.addEventListener('change', function(){
    hegy_input_kal.value = Math.round((sportok[3].kcal/60) * hegy_input.value);
});

lovag_input.addEventListener('change', function(){
    lovag_input_kal.value = Math.round((sportok[4].kcal/60) * lovag_input.value);
});

tura_input.addEventListener('change', function(){
    tura_input_kal.value = Math.round((sportok[5].kcal/60) * tura_input.value);
});

kajak_input.addEventListener('change', function(){
    kajak_input_kal.value = Math.round((sportok[6].kcal/60) * kajak_input.value);
});

suly_input.addEventListener('change', function(){
    suly_input_kal.value = Math.round((sportok[7].kcal/60) * suly_input.value);
});

ping_input.addEventListener('change', function(){
    ping_input_kal.value = Math.round((sportok[8].kcal/60) * ping_input.value);
});

kutya_input.addEventListener('change', function(){
    kutya_input_kal.value = Math.round((sportok[9].kcal/60) * kutya_input.value);
});
