
let regBtn = document.querySelector('#regBtn'),
    email = document.querySelector('#email'),
    pass = document.querySelector('#pass1');

let users = [];
if (users = localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
} else {
    users = [];
}

regBtn.addEventListener('click',()=>{
    let correct= false;
    let name ='';
    if (email.value!=""||pass.value!="") {
        users.forEach(user => {
            if (user.password==pass.value&&user.email==email.value){
                correct=true;
                name = user.name;
            }
        });
        if(correct){
            email.classList.remove('missing')
            pass.classList.remove('missing')
            let data = {
                'loggedIn': true,
                'loggedUser': name,
                'loggedUserMail': email.value
            }
            sessionStorage.setItem('access', JSON.stringify(data));
            document.location.href = 'content.html';
            //alert('Sikeres bejelnetkezés!')
        }
        else{
            alert('Hibás felhasználó név vagy jelszó')
            email.classList.add('missing')
            pass.classList.add('missing')
        }
    }
    else{
        if (email.value=="") {
            email.classList.add('missing')
        }
        if (pass.value=="") {
            pass.classList.add('missing')
        }
        alert('Nem töltöttél ki mindent!')
    }
})