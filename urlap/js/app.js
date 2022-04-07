let regBtn = document.querySelector('#regBtn'),
    username = document.querySelector('#name'),
    address = document.querySelector('#address'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    pass1 = document.querySelector('#pass1'),
    pass2 = document.querySelector('#pass2')

regBtn.addEventListener('click', () => {
    let requiredElements = [username, email, pass1, pass2]
    let is_empty = false

    requiredElements.forEach(element => {
        if (element.value == '') 
        {
            element.classList.add('missing')
        }
    })
    
    if(is_empty) alert('A *-al jelölt mezők kitltése koöütrleődóó 😉')
})