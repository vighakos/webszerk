let box1 = document.getElementById('box1');
let boxes = document.getElementsByClassName('box');
let boxType = document.getElementsByName('doboz');

box1.innerHTML += '<p class="bekezdes">Ez egy bekezdés<p>';

box1.style.border = '5px solid white';

boxType.forEach(box => {
    box.style.border = '5px solid white';
});

let dobozok = document.querySelector('.box');

box1.style.left = '100px';

box1.addEventListener('mouseenter', function(){
    box1.style.backgroundColor = 'lightblue';
});

box1.addEventListener('mouseleave', function(){
    box1.style.backgroundColor = 'slateblue';
});

box1.addEventListener('click', function(){
    let screenX = window.innerWidth - 310;
    let screenY = window.innerHeight - 60;

    let x = Math.round(Math.random() * screenX);
    let y = Math.round(Math.random() * screenY);

    console.log(x, y);

    box1.style.top = x+'px';
    box1.style.bottom = y+'px';
});