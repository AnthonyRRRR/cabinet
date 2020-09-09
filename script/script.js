
let signUpSubmit = document.querySelector('#signup-submit');
let loginSubmit = document.querySelector('#login-submit');


function checkIn(event) {
    event.preventDefault();
    //event.stopPropagation();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    sex.forEach((gender) => {
        if (gender.checked) {
            sex = gender.value
        }
    })
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex
    }
    ajax('./core/signup.php', 'POST', signUp, data)
    function signUp(result) {
        console.log(result);
        if (result == 2) {
            alert('zapolnite polyana ')
        } else if (result == 1) {
            alert('вы зареганы')
        } else {
            alert('общибка!!!')
        }
    }
}

function checkLogin(event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;
    let data = {
        "pass": pass,
        "email": email
    }

    ajax('./core/login.php', 'POST', login, data);

    function login(result) {
        if (result == 2) {
            alert('Заполните поля');
        }
        else if (result == 0) {
            alert('Пользователь не найден!');
        }
        else {
            console.log(result);
            result = JSON.parse(result);
            var d = new Date();
            d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
            var expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }

}




loginSubmit.addEventListener('click', checkLogin);
signUpSubmit.addEventListener('click', checkIn);

