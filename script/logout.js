let logoutBtn = document.querySelector('#logout');

function logout(event) {
    var cookie = document.cookie;
    document.cookie = `${cookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC;  path=/;`;
    location.reload(); 

}

logoutBtn.addEventListener('click', logout)