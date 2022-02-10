let gomb = document.querySelector('#gomb');
let a, b, c, d, e, h;

gomb.addEventListener('click', function(){
    let evszam = document.querySelector('#bevitel').value;
    a = evszam % 19;
    b = evszam % 4;
    c = evszam % 7;
    d = (19 * a + 24) % 30;
    e = (2 * b + 4 * c + 6 * d + 5) % 7;
    h = 22 + d + e;

    if (e == 6 && d == 29) {
        h = 50;
    }
    else
    {
        if (e == 6 && d == 28 && a > 10) {
            h = 49
        }
    }

    let punkosd = 49;

    if (h <= 31) {
        console.log("Húsvét vasárnap: március " + h);
    }
    else
    {
        console.log("Húsvét vasárnap: április " + (h - 31));
    }

});