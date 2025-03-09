function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthText = document.getElementById('strengthText');
    const alertBox = document.getElementById('alert');
    let strength = "Weak";
    let color = "red";

    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = "Strong";
        color = "green";
        alertBox.style.display = "none"; // Hide alert
    } else if (password.length >= 6 && (/[A-Z]/.test(password) || /[0-9]/.test(password))) {
        strength = "Medium";
        color = "orange";
        alertBox.style.display = "none"; // Hide alert
    } else {
        alertBox.style.display = "block"; // Show alert
    }

    strengthText.textContent = `Strength: ${strength}`;
    strengthText.style.color = color;
}
