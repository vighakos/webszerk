let container = document.querySelector('#container');
let sizeBox = document.querySelector('#size');

feltolt(10)

let cellak = document.getElementsByTagName('td');

sizeBox.addEventListener('change', function() {
    let size = sizeBox.value
    feltolt(size)
})


function feltolt(size) {
    let str = "<table id='szorzotabla'>";

    for(i = 1; i <= size; i++){
        str += "<tr>";
        for(j = 1; j <= size; j++){
            if (i == 1 || j == 1) str += "<td width = '5%'>" + i * j + "</td>";
            else str += "<td title='" + i + "*" + j + "'>" + i * j + "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";
    container.innerHTML = str;
}

for(i = 0; i < cellak.length; i++){
    cellak[i].addEventListener('mouseover', function () {
        
    })
}

