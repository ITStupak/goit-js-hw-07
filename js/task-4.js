const userForm = document.querySelector('.login-form');

const callback = (event) => {
    event.preventDefault();    
    const form = event.target;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
        return alert('All form fields must be filled in!');
    };
    
    const formData = {
        email: email,
        password: password,
    };
    console.log(formData);
    emailInput.value = '';
    passwordInput.value = '';
};

userForm.addEventListener('submit', callback);