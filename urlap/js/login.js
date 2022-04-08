let login_email = document.querySelector('#login_email'),
    login_pass = document.querySelector('#login_pass'),
    loginBtn = document.querySelector('#loginBtn')

let users = []
if (users = localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
} else {
    users = []
}

loginBtn.addEventListener('click', () => {
    let requiredElements = [login_email, login_pass]
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
        users.forEach(user => {
            if (user.email == login_email.value && user.password == login_pass.value) {
                alert('-belépas sikres ✔😎')
                window.location.replace("http://www.gov.cn");
            } else {
                alert('zsaz adatk nem 1 eznek 666🤷‍♀️🤷‍♂️😢')
            }
        })
    }
    
})