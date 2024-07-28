let passInput = document.getElementById('password');
let text = document.getElementById('text');
let passwordStr = document.querySelectorAll('.password-strength');

passInput.addEventListener('input', function(e) {
    let password = e.target.value;

    if (password === "") {
        passwordStr.forEach(passwordStrength => {
            passwordStrength.style.background = "";
        });
        text.textContent = "-";
        return;
    }

    let strength = Math.min(password.length, 12);
    let degree = strength * 30;

    let gradientColor = strength <= 4 ? '#ff2c1c' : (strength <= 8 ? '#ff9800' : "#12ff12");
    let strengthText = strength <= 4 ? 'Weak' : (strength <= 8 ? 'Medium' : "Strong");

    passwordStr.forEach(passwordStrength => {
        passwordStrength.style.background = `conic-gradient(${gradientColor} ${degree}deg, #1115 ${degree}deg)`;
    });
    text.textContent = strengthText;
});
