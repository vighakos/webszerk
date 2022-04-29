
if (!(loggeduser = JSON.parse(sessionStorage.getItem('access'))))
{
    document.location.href = 'login.html';
}
else
{
    document.getElementById('name').value = loggeduser.loggedUser;
    document.getElementById('email').value = loggeduser.loggedUserMail;
}


let logoutBtn = document.querySelector('#logoutBtn');

logoutBtn.addEventListener('click', ()=>{
    sessionStorage.removeItem('access');
    document.location.href = 'login.html';
});