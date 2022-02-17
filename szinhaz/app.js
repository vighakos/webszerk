hely = new Array()
	for( i=1; i<=15; i++ )
	{
		if(i== 1)  document.write("<span class='helyar'>7500.- Ft</span>")
		if(i== 6)  document.write("<span class='helyar'>5900.- Ft</span>")
		if(i==11)  document.write("<span class='helyar'>4500.- Ft</span>")

		hely[i] = new Array()
		document.write("<span class='sorszam'>" + i + ".</span>")
		for( j=1; j<=24; j++ )
		{
			hely[i][j] = Math.floor( (1-Math.random()*Math.random())*2 )     
			if( hely[i][j]==1 )
			{
			    document.write("<span class='szek foglalt' title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
			}
			else
			{
			    document.write("<span class='szek szabad'  title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
			}
		}
		document.write("<br>")
		if(i%5==0) document.write("<hr size=1 color=#880000>")
	}

// 1. feladat: Hány szabad hely van még???????

let szabadhelyekszama = 0;
for (i = 1; i <= 15; i++) {
    for (j = 1; j <= 24; j++) {
        if (hely[i][j] == 0) {
            szabadhelyekszama++;
        }
    }
}

document.write(`1. feladat: A szabad helyek száma: ${szabadhelyekszama} <br>`);

//2. feladadat:? jegyk cmveoly::: :D

let szazalek = ((15*24) - szabadhelyekszama) / (15*24) * 100;
document.write(`2. feladat: Eladott jegyek százaléka: ${szazalek.toFixed(2)}% <br>`);

//3. flaedladt: öszsesíéts téttel

let bevetel = 0;
for (i = 1; i <= 15; i++) {
    for (j = 1; j <= 24; j++) {
        if (hely[i][j] == 1) {
            if (i < 6) {
                bevetel += 7500;
            }
            if (i >= 6 && i < 11) {
                bevetel += 5900;
            }
            if (i >= 11) {
                bevetel += 4500;
            }
        }
    }
}

document.write(`3. feladat: Bevétel: ${bevetel}Ft <br>`);

// 4. feladat: aanfasdj

let kat = [0,0,0];
for (i = 1; i <= 15; i++) {
    for (j = 1; j <= 24; j++) {
        if (hely[i][j] == 1) {
            if (i < 6) {
                kat[0]++;
            }
            if (i >= 6 && i < 11) {
                kat[1]++;
            }
            if (i >= 11) {
                kat[2]++;
            }
        }
    }
}

let maxindex = 0;

for(i=1; i<3; i++){
    if (kat[i] > kat[maxindex]) {
        maxindex = i;
    }
}

document.write(`4. feladat: A legtöbbet eladott jegy: ${maxindex+1} kategória <br>`);

// 5. felelada? lsdfjjj nincs hely???
// ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ

let van = false;

for(i = 1; i<= 15; i++){
    if (teleSor(i)) {
        van = true;
        console.log("A tele sor száma: ", i);
        break;
    }
}

document.writeln(`5. feladaT: ${van} olyan sor ahol inden jegy elkelt ::D`);

function teleSor(x) {
    let tele = true;
    for (i=1; i<=24; i++) {
        if (hely[x][j] == 0) {
            tele = false;
            break;
        }        
    }
    return tele;
}
