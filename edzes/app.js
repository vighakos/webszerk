let tablebody = document.querySelector('tbody');
let datum = new Date();
let edzes = ["---", "váll", "kar", "mell", "láb"];
for (i = 1; i < 31; i++) {
    let honap = datum.getMonth() + 1;
    let nap = datum.getDay() + i;
    tablebody.innerHTML += 
    "<tr> <td id=datum_" + i + ">" + 
    honap + ". " + nap + 
    ". </td> <td id=edzes_" + i + ">" + 
    edzes + "</td> </tr>";
    
}
 