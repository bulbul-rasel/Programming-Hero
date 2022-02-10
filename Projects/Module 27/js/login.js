document.getElementById('login-submit').addEventListener('click', function () {
    // for email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // for password 
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    // validation 
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';

    } else {
        alert('Please enter Valid Email and Password')
    }

});
