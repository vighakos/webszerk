let p_ido = document.querySelector('#datum');

p_ido.innerText = Date().toString();

let divek = document.querySelectorAll('div');
//console.log(divek);

divek[0].innerText = "Első";
divek[1].innerText = "1";
divek[2].innerText = "Harmadik";
divek[3].innerText = "3";
divek[divek.length - 1].innerText = "Utolsó";

var lista = document.getElementById('lista');

var listaElem = lista.children[0].innerText;
lista.children[0].innerText = lista.children[1].innerText;
lista.children[1].innerText = listaElem;

let divText = document.getElementById('output');
let valaszto = document.getElementById('valaszto');

valaszto.addEventListener('change', function() {
    divText.innerHTML = 'text: ' + valaszto.options[valaszto.selectedIndex].text + ', value: ' + valaszto.value;
});

let textInput = document.getElementById('textInput');
let textOutput = document.getElementById('textOutput');

textInput.addEventListener('change', function () {
    textOutput.innerText = textInput.value;
});

let napInput = document.getElementById('napInput');
let napId = document.getElementById('napId');
let napText = document.getElementById('napText');
let napBtn = document.getElementById('ok');

 napBtn.addEventListener('click', function () {
     switch (napInput.value) {
         case '1':
             napId.innerText = '1';
             napText.innerText = 'Hétfő';
             break;
     
         case '2':
             napId.innerText = '2';
             napText.innerText = 'Kedd';
             break;
     
         case '3':
             napId.innerText = '3';
             napText.innerText = 'Szerda';
             break;
     
         case '4':
             napId.innerText = '4';
             napText.innerText = 'Csütörtök';
             break;
     
         case '5':
             napId.innerText = '5';
             napText.innerText = 'Péntek';
             break;
     
         case '6':
             napId.innerText = '6';
             napText.innerText = 'Szombat';
             break;
     
         case '7':
             napId.innerText = '7';
             napText.innerText = 'Vasárnap';
             break;

         default:
            napId.innerText = 'Hibás adat!';
             break;
     }
 });