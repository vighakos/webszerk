let regBtn = document.querySelector('#regBtn'),
    username = document.querySelector('#name'),
    address = document.querySelector('#address'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    pass1 = document.querySelector('#pass1'),
    pass2 = document.querySelector('#pass2')

let users = []
if (users = localStorage.getItem('users')) {
    let users = JSON.parse(localStorage.getItem('users'))
} else {
    users = []
}

regBtn.addEventListener('click', () => {
    let requiredElements = [username, email, pass1, pass2]
    let is_empty = false

    requiredElements.forEach(element => {
        if (element.value == '') 
        {
            element.classList.add('missing')
            is_empty = true
        } else {
            element.classList.remove('missing')
        }
    })
    
    if(is_empty) alert('A *-al jelölt mezők kitltése koöütrleődóó 😉')
    else {
        if (pass1.value != pass2.value) {
            pass1.classList.add('missing')
            pass2.classList.add('missing')
            alert('A megadott jelaszabaskl nem egzyenke 🤦‍♀️🤦‍♂️✌🐱‍🐉')
        } else {
            let password_regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            if (!pass1.value.match(password_regexp)) {
                pass1.classList.add('missing')
                pass2.classList.add('missing')
                alert('A jelszó snbem fkele lmerhgg 8 karklater 72 nagy meg kis kebetű stb D: 😢🤢')
            } else {
                let reservedEmail = false
                users.forEach(user => {
                    if (user.email == email.value) {
                        reservedEmail = true
                    }
                })
                if (reservedEmail) {
                    email.classList.add('missing')
                    alert('Ez n az ímél már fogllalt XDDX 😂🤣🤦‍♂️👌')
                } else {
                    let user = {
                        'id' : users.length + 1,
                        'name' : username.value,
                        'address' : address.value,
                        'email' : email.value,
                        'phone' : phone.value,
                        'password' : pass1.value
                    }
                    users.push(user)
                    localStorage.setItem('users', JSON.stringify(users)) 
                    username.value = ''
                    address.value = ''
                    email.value = ''
                    phone.value = ''
                    pass1.value = ''
                    pass2.value = ''
                    alert('Kkösz a reifsztrácó beléphetel 😊😒❤')
                }
            }
        }
    }
})