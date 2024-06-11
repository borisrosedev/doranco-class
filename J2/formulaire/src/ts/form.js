const form = document.getElementById("login-form");
function submitHandler(e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (!email.value || !password.value) {
        return;
    }
    else {
        const credentials = [email.value, password.value];
        credentials.forEach((credential, index) => {
            console.log('credential', credential, index);
        });
    }
}
form.addEventListener('submit', (e) => submitHandler(e));
//# sourceMappingURL=form.js.map