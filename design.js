// Get elements
const loginBtn = document.getElementById('login-btn');
const getStartedBtn = document.querySelector('.nav-right a[href="#get-started"]'); // "Get Started" button
const loginForm = document.getElementById('login');
const getStartedForm = document.getElementById('get-started');
const closeLoginBtn = document.getElementById('close-login');
const closeGetStartedBtn = document.getElementById('close-getstarted');

// Show Login Form
loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block'; // Show login form
    getStartedForm.style.display = 'none'; // Hide get started form
});

// Show Get Started Form
getStartedBtn.addEventListener('click', () => {
    getStartedForm.style.display = 'block'; // Show get started form
    loginForm.style.display = 'none'; // Hide login form
});

// Close Login Form
closeLoginBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
});

// Close Get Started Form
closeGetStartedBtn.addEventListener('click', () => {
    getStartedForm.style.display = 'none';
});
